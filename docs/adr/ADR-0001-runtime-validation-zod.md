# ADR-0001: Runtime validation with Zod 4

- **Status:** Accepted
- **Date:** 2026-09-12 (Africa/Cairo)
- **Owner:** Platform Engineering
- **Supersedes:** the deferral recorded in ECO-001A Step 2, which declined to select a
  validation technology and deliberately did not create `@ecomarkai/schemas`
- **Review trigger:** a Zod major release with breaking inference changes; Zod becoming
  unmaintained; or evidence that validation cost is material in a hot path

## Context

TypeScript types vanish at compile time. Every value that enters the platform from outside — an
HTTP request body, an environment variable, a webhook payload, a row read back from an outbox, a
model's tool arguments — is `unknown` at runtime regardless of how it is annotated.

Ecomark needs validation at those boundaries in several places at once:

- **APIs** — request and response bodies for the future core API.
- **Configuration** — environment values read at startup.
- **Events** — envelopes and payloads recovered from storage or transport.
- **Integrations** — provider payloads before normalization to canonical models.
- **External data** — anything a connector, agent or tool returns.

ECO-001A Step 2 deliberately left this open. At that point there was no consumer that forced a
choice, the core API framework was unselected, and
[DEPENDENCY_POLICY.md](../engineering/DEPENDENCY_POLICY.md) requires a documented evaluation
before a dependency is added. `@ecomarkai/config` and `@ecomarkai/events` each implemented the
small amount of local parsing they needed, and the decision was recorded as deferred pending this
ADR.

Two things changed. The architecture baseline now names NestJS and the boundary-heavy stack
around it, and Step 2.5 requires the validation decision to be settled before the core API is
built — because retrofitting validation across an existing API surface is far more expensive than
choosing it first.

## Decision

**Use Zod 4 as the default runtime validation library at Ecomark boundaries.**

Zod is introduced as a dependency of `@ecomarkai/schemas` only. Other packages and applications
depend on `@ecomarkai/schemas`, not on `zod` directly.

## Alternatives considered

### Zod — chosen

Zero runtime dependencies, so it adds no transitive supply-chain surface. Static inference
(`z.infer`) means the runtime check and the TypeScript type have one source, removing the drift
that is the actual failure mode we care about. Its `transform` with issue reporting composes
cleanly with our existing branded identifier constructors, so validation rules are reused rather
than reimplemented. Very large ecosystem and adoption, MIT licensed.

Cost: bundle size is larger than the minimal alternatives, and Zod 3 → 4 was a real migration for
the ecosystem, which is evidence that a future major could be disruptive.

### TypeBox — rejected

Builds JSON Schema directly, which is appealing given that `contracts/` already uses JSON Schema,
and it is very fast. Rejected because its ergonomics for refinement and transformation are
noticeably worse, and its value is highest when JSON Schema output is the primary artifact. Our
JSON Schema contracts describe interfaces for external consumers; they are not the same artifact
as internal boundary validation, and conflating them would couple two things that change for
different reasons.

### Valibot — rejected

Modular and significantly smaller when tree-shaken, with a similar API. Rejected on maturity and
ecosystem size rather than design. Bundle size is not our binding constraint: the heaviest
validation is server-side, where a few dozen kilobytes are irrelevant. Worth revisiting if
browser bundle size becomes a measured problem.

### Handwritten validation — rejected

This is what Step 2 actually shipped, and it was the right call *then*, at roughly 30 lines per
package with two consumers. It does not scale to an API surface: every schema becomes bespoke
code, error reporting drifts between modules, and inference must be maintained by hand — which is
precisely where types and checks fall out of step. Continuing would mean slowly writing a worse
validation library.

The narrow readers already in `@ecomarkai/config` stay as they are for now; see *Consequences*.

### JSON Schema only (with Ajv) — rejected

JSON Schema remains authoritative for **published contracts** in `contracts/`. Rejected as the
*internal* validation mechanism because deriving good TypeScript types from JSON Schema is
awkward, Ajv compiles schemas at runtime, and authoring complex conditional schemas by hand is
substantially worse than authoring them in TypeScript. The two are complementary: JSON Schema
describes the external interface contract; Zod validates what actually arrives.

## Limitations — what Zod is explicitly not

These constraints are binding, and a review should reject changes that violate them.

**Zod is not the domain model.** Domain entities and invariants are expressed in
framework-neutral TypeScript. A domain object must not be defined as `z.infer<typeof Schema>`
where that makes a validation library the author of business meaning.

**Zod is not the database model.** Persistence schemas belong to the ORM layer
(Drizzle, per the [OSS registry](../architecture/OSS_TECHNOLOGY_REGISTRY.md)).

**Zod is not the authorization system.** A schema confirms a value is well-formed. It never
confirms that an actor may access the resource that value names. A validated `organizationId` is
a selector to authorize, never authority — the rule in [AGENTS.md](../../AGENTS.md) is unchanged.

**Zod is not business logic.** Refinements express structural validity. Pricing rules, eligibility
and policy live in the domain, where they are testable without constructing a parse.

**Zod does not replace the JSON Schema contracts** under `contracts/`.

**Prefer validation at boundaries.** Parse once where data enters, then pass typed values inward.
Avoid coupling every internal entity to Zod; re-validating already-validated internal data adds
cost and spreads the dependency.

## Relationship to `@ecomarkai/contracts`

`@ecomarkai/schemas` **depends on** `@ecomarkai/contracts`. The direction is one-way and there is
no cycle.

This is the deliberate answer to "avoid two independent definitions of the same contract".
`@ecomarkai/contracts` owns what an identifier *is* — the charset rule and the branded types.
`@ecomarkai/schemas` wraps those existing constructors in Zod rather than restating the rule:

```
contracts:  toOrganizationId(value) -> OrganizationId | undefined   (the single rule)
schemas:    organizationIdSchema = z.string().transform(-> toOrganizationId)
```

Changing the identifier rule means changing one file, and the schema follows automatically.

The reverse direction was rejected. Making `contracts` depend on `schemas` would force a Zod
dependency onto a package whose whole purpose is to be portable and dependency-free, and would
drag a runtime library into the web bundle merely to express a type.

**Branded types are preserved, not discarded.** `z.infer` is used where the inferred type is the
right answer, but identifier schemas deliberately output the branded contract type. Flattening
`OrganizationId` to `string` to make Zod more convenient would trade a real cross-tenant safety
guarantee for syntactic tidiness. This is the case the Step 2.5 brief warned about, and the
branded types win.

## Consequences

**Positive.** One validation vocabulary across API, configuration, events and integrations.
Inference removes type/check drift. Boundary errors become uniform and mappable to
`@ecomarkai/errors` categories at the transport edge. The core API can be built on a settled
decision instead of accumulating ad-hoc checks.

**Negative.** A new runtime dependency in a repository that had none. A real risk of Zod spreading
into the domain, which requires review attention. Zod's own error shape must be translated at the
transport edge, not leaked to clients.

**Deliberately unchanged.** `@ecomarkai/config` keeps its local readers and stays dependency-free.
Its readers are string-to-value conversions with an exposure model attached, not schema
validation, and rewriting them in Zod now would add a dependency to a package that does not need
one while changing behavior that is already tested. Configuration may adopt `@ecomarkai/schemas`
later if a genuine need appears; that would be a separate, justified change.

**Deliberately unchanged.** `@ecomarkai/events` keeps its own envelope invariant checks and stays
dependency-free. Adding a Zod envelope schema in `@ecomarkai/schemas` would create exactly the
second definition this ADR is trying to avoid. Payload validation — which `events` explicitly does
not do — is where Zod belongs, and that happens in the consumer that knows the payload type.

## Exit strategy

Consumers import `@ecomarkai/schemas`, never `zod`. Replacing the library means rewriting one
package's internals against the same exported surface.

To keep that true:

1. `zod` stays out of every other `package.json`. Adding it elsewhere requires a new ADR.
2. Exported schema objects are typed through the package's own aliases where practical, so
   consumers do not depend on Zod's own types.
3. A `parse` helper returns a discriminated result rather than throwing `ZodError`, so callers do
   not catch a Zod-specific exception type.

Under those conditions, migrating to Valibot or TypeBox is a bounded change to one package.
Violating rule 1 is what would make the exit expensive, which is why it is stated as a rule rather
than a preference.

# @ecomarkai/schemas

Runtime validation for shared boundaries. Built on Zod 4 per
[ADR-0001](../../docs/adr/ADR-0001-runtime-validation-zod.md).

## Responsibility

Owns the boundary where unknown input becomes a typed, branded contract value: API input,
configuration, events, integration payloads and serialization boundaries.

## Scope is deliberately small

This package holds schemas for genuinely shared boundary shapes and nothing else. Today that is
identifiers, cursor pagination and a parse helper.

What it deliberately does **not** contain, and why:

- **It does not reimplement `@ecomarkai/contracts`.** The identifier rule is defined once, there.
- **It does not duplicate `@ecomarkai/events` envelope checks.** That package owns them with no
  dependencies, and a second Zod definition would be exactly the drift ADR-0001 avoids. Event
  *payload* validation — which `events` explicitly does not do — is where Zod belongs, in the
  consumer that knows the payload type.
- **It does not define Organization, Workspace or Store schemas.** Those domains do not exist.
- **It is not the domain model, the database model, the authorization system, or business
  logic.** A schema confirms a value is well formed. It never confirms an actor may access what
  that value names. A validated `organizationId` is a selector to authorize, never authority.

## Dependency on `@ecomarkai/contracts`

One-way: `schemas → contracts`. No cycle.

This is the answer to "avoid two independent definitions of the same contract". `contracts` owns
what an identifier *is* — the charset rule and the branded types. `schemas` wraps those existing
constructors rather than restating the rule:

```
contracts:  toOrganizationId(value) -> OrganizationId | undefined    (the single rule)
schemas:    organizationIdSchema    = z.string().transform(-> toOrganizationId)
```

A test asserts the two agree on a set of probe values, so a divergence fails rather than drifts
silently.

The reverse direction was rejected: making `contracts` depend on `schemas` would force Zod onto a
package whose purpose is to be portable and dependency-free, and would pull a runtime library into
the web bundle merely to express a type.

## Branded types are preserved

Identifier schemas output the **branded contract type**, not `string`. Flattening the brand to
make Zod more convenient would trade a real cross-tenant safety guarantee for syntactic tidiness.
Compile-time assertions in `tests/types.assert.ts` fail the typecheck if a schema ever starts
returning a plain string.

## Consumers never import `zod`

Import `parse` / `parseOrUndefined` from this package. `parse` returns a discriminated result
rather than throwing, so no caller catches `ZodError` or depends on Zod's types.

This is the condition ADR-0001's exit strategy relies on: replacing the validation library is a
change to this package's internals, not to every call site. Adding `zod` to another
`package.json` requires a new ADR.

## Behaviors worth knowing

- **Unknown keys are rejected, not stripped.** Silently dropping an unexpected field is how a
  privileged property gets mass-assigned. An offset-style pagination request fails loudly rather
  than quietly returning page one.
- **Unrecognized-key errors name the key.** Zod reports them against the containing object with
  an empty path; `parse` expands them to one issue per key so a caller can highlight the field.
- **Issues never echo the rejected value.** Input can itself be a secret, and validation output
  is routinely logged.
- **`MAX_PAGE_LIMIT` is enforced in the schema**, so no caller can opt out of the bound.

## Verification

- `pnpm --filter @ecomarkai/schemas test`
- `pnpm --filter @ecomarkai/schemas typecheck` — the branding guarantees, which are erased at
  runtime.

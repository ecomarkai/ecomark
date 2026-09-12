# Ecomark OSS technology registry

Owner: Platform Engineering, with the accountable team named per entry in
[OWNERSHIP.md](../../OWNERSHIP.md).

Established: 2026-09-12 (Africa/Cairo) by ECO-001A Step 2.5.

This is the authoritative register of major open-source and external platform dependencies for
Ecomark. A technology that is not recorded here has not been evaluated, and introducing one
without an entry is a review failure.

**A decision recorded here is not an installation.** Most entries below are deliberately not
installed. The `When it may be introduced` field is binding: pulling a dependency in earlier
than its named phase requires a scope decision, because an unused dependency still carries
supply-chain, license, upgrade and review cost.

Governing rules: [OSS reuse policy](OSS_REUSE_POLICY.md) and
[dependency policy](../engineering/DEPENDENCY_POLICY.md).

## Decision states

| State | Meaning |
|---|---|
| `ADOPT_NOW` | Approved as the default choice for its capability. May still be phased in later. |
| `ADOPT_LATER` | Approved in principle; introduction is gated on a named phase. |
| `INTEGRATE` | Approved as an external service behind an Ecomark-owned adapter. |
| `EVALUATE` | Plausible; requires a comparison and an ADR before adoption. |
| `REFERENCE_ONLY` | Read for design ideas; no code, fork or dependency. |
| `DEFER` | Deliberately postponed; revisit at a named trigger. |
| `REJECT` | Must not be used. Reason recorded so the question is not reopened casually. |

## Registry status summary

| Technology | Capability | Decision | Installed today |
|---|---|---|---|
| NestJS | Core API framework | `ADOPT_NOW` | No — Step 3 |
| Zod 4 | Runtime boundary validation | `ADOPT_NOW` | **Yes — this ticket** |
| Drizzle ORM | PostgreSQL persistence | `ADOPT_NOW` | No — Database Foundation |
| Testcontainers Node | Integration testing | `ADOPT_NOW` | No — first integration test |
| OpenTelemetry | Tracing and metrics | `ADOPT_NOW` | No — Core API infrastructure |
| Sentry | Error monitoring | `INTEGRATE` | No |
| BullMQ | Short background jobs | `ADOPT_LATER` | No |
| Temporal | Durable workflows | `ADOPT_LATER` | No |
| OpenFeature | Feature flag interface | `ADOPT_LATER` | No |
| Unleash | Feature flag provider | `DEFER` | No |
| MCP TypeScript SDK | Agent tool protocol | `ADOPT_LATER` | No |
| LiteLLM | LLM provider routing | `EVALUATE` | No |
| Langfuse | AI tracing and evaluation | `EVALUATE` | No |
| OpenFGA | Relationship authorization | `DEFER` | No |
| Salla | Commerce connector #1 | `ADOPT_NOW` | No — Connector phase |
| Shopify | Commerce connector #2 | `ADOPT_LATER` | No |
| Meta Business SDK | Advertising connector | `ADOPT_LATER` | No |
| Google Ads client | Advertising connector | `ADOPT_LATER` | No |
| TikTok Business SDK | Advertising connector | `ADOPT_LATER` | No |
| WhatsApp archived Node SDK | Messaging | `REJECT` | No |

Exactly one runtime dependency is installed as a result of this register today: **Zod**.

---

# Core platform

## NestJS

| Field | Value |
|---|---|
| Capability | Core API framework |
| Technology | `@nestjs/*` — https://github.com/nestjs/nest |
| Decision | `ADOPT_NOW` |
| License | MIT |
| ADR required | Yes, at introduction |

**Intended use.** The `services/core-api` modular monolith: HTTP transport, dependency
injection, module boundaries, lifecycle and request pipeline.

**Why it fits Ecomark.** Its module system expresses the modular-monolith boundaries in
[PROJECT_STRUCTURE.md](../../PROJECT_STRUCTURE.md) directly, and its interceptor/guard pipeline
gives explicit places to enforce tenant resolution, authorization and audit before a handler
runs — which is where our tenant rules require them.

**Risks.** Heavy decorator and DI conventions leak into code that should be framework-neutral.
Its opinions can become the architecture if unchecked.

**Lock-in.** Moderate and concentrated at the transport edge. Domain and application layers must
not import NestJS. Controllers, guards, interceptors and modules are the only permitted surface.

**Exit strategy.** Because domain/application stay framework-neutral, replacing NestJS means
rewriting the transport layer, not the product. Keep DTO validation in `@ecomarkai/schemas`
rather than in NestJS pipes so validation survives the move.

**When it may be introduced.** ECO-001A Step 3. **Not installed by this ticket.**

---

## Zod 4

| Field | Value |
|---|---|
| Capability | Runtime validation at boundaries |
| Technology | `zod@4` — https://github.com/colinhacks/zod |
| Decision | `ADOPT_NOW` — **installed by this ticket** |
| License | MIT |
| ADR | [ADR-0001](../adr/ADR-0001-runtime-validation-zod.md) |

**Intended use.** Validating data crossing a trust boundary: API input, configuration, events,
external integration payloads and serialization boundaries.

**Why it fits Ecomark.** Zero runtime dependencies, so it adds no transitive supply-chain
surface. Static inference removes the drift between a runtime check and its TypeScript type,
which is the failure mode we care about most. Composable refinement lets our existing branded
identifier constructors be reused rather than reimplemented.

**Risks.** The dominant risk is scope, not quality: Zod schemas spreading into domain entities
until the domain model is defined by a validation library.

**Explicit limitation — Zod is not the domain model.** It is not the database model, the
authorization system, business logic, or a replacement for the JSON Schema contracts under
`contracts/`. Domain logic stays framework and library neutral.

**Lock-in.** Low at boundaries, high if the rule above is violated. Confining Zod to
`@ecomarkai/schemas` and to transport-edge DTOs keeps the blast radius small.

**Exit strategy.** Consumers depend on `@ecomarkai/schemas`, not on `zod` directly. Replacing
the library means rewriting that one package's internals. See ADR-0001 for the full analysis.

**When it may be introduced.** Now, in `@ecomarkai/schemas` only.

---

## Drizzle ORM

| Field | Value |
|---|---|
| Capability | PostgreSQL persistence and migrations |
| Technology | `drizzle-orm`, `drizzle-kit` — https://github.com/drizzle-team/drizzle-orm |
| Decision | `ADOPT_NOW` |
| License | Apache-2.0 |
| ADR required | Yes, at introduction |

**Intended use.** Schema definition, typed queries and migrations for the operational database
owned by `services/core-api`.

**Why it fits Ecomark.** SQL-first rather than an object-graph abstraction, so tenant predicates
stay visible in the query instead of hidden behind lazy loading — which matters when every query
must carry an authorized tenant scope. Migrations are plain SQL files, which suits our
requirement that migrations have compatibility and recovery evidence.

**Risks.** Younger ecosystem than the alternatives. Schema definitions are TypeScript, so a
careless import can pull database types into the domain.

**Lock-in.** Moderate. Query-builder syntax is pervasive once adopted; migrations are portable
SQL.

**Exit strategy.** Keep repository interfaces in the domain and Drizzle usage in infrastructure
adapters. Migrations remain readable SQL independent of the tool.

**When it may be introduced.** The Database Foundation step, after Step 3.
**Not installed by this ticket. PostgreSQL is not introduced by this ticket.**

---

## Testcontainers Node

| Field | Value |
|---|---|
| Capability | Integration tests against real services |
| Technology | `testcontainers` — https://github.com/testcontainers/testcontainers-node |
| Decision | `ADOPT_NOW` |
| License | MIT |
| ADR required | No |

**Intended use.** Running integration and tenant-isolation tests against a real PostgreSQL and
Redis rather than mocks.

**Why it fits Ecomark.** [TESTING_STRATEGY.md](../engineering/TESTING_STRATEGY.md) requires
negative cross-tenant tests on every data access path. Those tests are only trustworthy against
a real database: a mocked repository cannot prove a row-level predicate was applied.

**Risks.** Requires a container runtime in CI; slower than unit tests; flakiness if lifecycle is
mismanaged.

**Lock-in.** Low. Test-only, confined to test setup helpers.

**Exit strategy.** Replaceable by a CI service container with a change to test setup only.

**When it may be introduced.** With the first database integration test.
**Not installed by this ticket.**

---

## OpenTelemetry

| Field | Value |
|---|---|
| Capability | Tracing, metrics, vendor-neutral instrumentation |
| Technology | `@opentelemetry/*` — https://github.com/open-telemetry/opentelemetry-js |
| Decision | `ADOPT_NOW` |
| License | Apache-2.0 |
| ADR required | Yes, at introduction |

**Intended use.** Traces and metrics across the core API, workers and connectors, exported to
whichever backend is operationally chosen.

**Why it fits Ecomark.** [OBSERVABILITY.md](../engineering/OBSERVABILITY.md) requires telemetry
as a product requirement, and vendor neutrality keeps the backend replaceable. Our
`correlationId` already exists in `@ecomarkai/events` and maps onto trace context.

**Risks.** Instrumentation sprawl and cost. Spans or attributes carrying tenant or customer data
would be a disclosure path; attribute allowlists are mandatory.

**Lock-in.** Low by design — that is the point of the standard.

**Exit strategy.** Swap the exporter. The instrumentation API is the standard.

**When it may be introduced.** Incrementally once Core API infrastructure exists.
**Not installed by this ticket.**

---

## Sentry

| Field | Value |
|---|---|
| Capability | Error monitoring |
| Technology | `@sentry/*` — https://github.com/getsentry/sentry-javascript |
| Decision | `INTEGRATE` |
| License | MIT (SDK); hosted service is commercial |
| ADR required | Yes, at introduction |

**Intended use.** Aggregating and alerting on unexpected errors.

**Why it fits Ecomark.** Mature grouping, release tracking and alerting that we should not
rebuild.

**Architecture constraint.** Sentry is an **adapter above Ecomark observability**, never a
concept the architecture depends on. Code raises `PlatformError` from `@ecomarkai/errors` and
emits telemetry; an adapter forwards it. No module imports Sentry types, and no Sentry-specific
concept (breadcrumb, scope, transaction) may appear in domain or application code.

**Risks.** It is an external processor of error payloads. `toSafeErrorPayload` redaction rules
apply before anything is forwarded — an unredacted exception would export customer data to a
third party.

**Lock-in.** Low if the adapter rule holds; severe if SDK calls are scattered through handlers.

**Exit strategy.** Replace the adapter implementation.

**When it may be introduced.** With production operations readiness.

---

## BullMQ

| Field | Value |
|---|---|
| Capability | Short background jobs |
| Technology | `bullmq` — https://github.com/taskforcesh/bullmq |
| Decision | `ADOPT_LATER` |
| License | MIT |
| ADR required | Yes, at introduction |

**Intended use.** Short, retryable background work: webhook processing, report generation, data
synchronization batches, notification dispatch.

**Why it fits Ecomark.** Redis-backed, operationally simple, and well matched to work measured in
seconds with bounded retries.

**Risks.** Redis is not durable storage. Job payloads must carry a tenant scope that is
**reauthorized at execution**, never trusted from enqueue time. At-least-once delivery makes
idempotency mandatory.

**Relationship to Temporal.** These are not alternatives. BullMQ handles short jobs; Temporal
handles long-running, multi-step, compensating workflows. Choosing one to cover both
responsibilities would be a mistake in either direction.

**Lock-in.** Moderate; concentrated in worker entry points.

**Exit strategy.** Keep job handlers as thin adapters over application use cases.

**When it may be introduced.** When the first asynchronous processing requirement lands —
realistically connector sync. **Redis is not introduced by this ticket.**

---

## Temporal

| Field | Value |
|---|---|
| Capability | Durable, long-running workflows |
| Technology | `@temporalio/*` — https://github.com/temporalio/sdk-typescript |
| Decision | `ADOPT_LATER` |
| License | MIT (SDK), Temporal server MIT |
| ADR required | Yes, at introduction |

**Intended use.** The governed action lifecycle: recommendation → approval → action → delay →
measurement → retry/compensation → learning.

**Why it fits Ecomark.** That lifecycle spans days, survives restarts, and must resume exactly
where it stopped. Durable execution with compensation is precisely the requirement in
[SCALING_GUARDRAILS.md](../../SCALING_GUARDRAILS.md) for approval and execution, and hand-rolling
it on a job queue reliably produces a worse version of Temporal.

**Risks.** Substantial operational weight (server, workers, versioning discipline). Workflow
determinism constraints are a real learning cost. Adopting it before there is a workflow to run
would be premature.

**Lock-in.** High. Workflow code is Temporal-shaped.

**Exit strategy.** Keep business decisions in application services that workflows orchestrate but
do not contain.

**When it may be introduced.** When governed execution (approval → action → verification) is
actually built, not before.

---

## OpenFeature

| Field | Value |
|---|---|
| Capability | Vendor-neutral feature flag interface |
| Technology | `@openfeature/*` — https://github.com/open-feature/js-sdk |
| Decision | `ADOPT_LATER` |
| License | Apache-2.0 |
| ADR required | No, if adopted as interface only |

**Intended use.** A standard interface for flag evaluation so provider choice stays reversible.

**Why it fits Ecomark.** Flags will need tenant-aware targeting. A standard interface prevents
provider SDK calls spreading through product code.

**Risks.** An indirection layer with no provider behind it is overhead. A flag is never an
authorization decision, and must never be used as one.

**Lock-in.** Very low; that is its purpose.

**When it may be introduced.** With the first genuine flag requirement.

---

## Unleash

| Field | Value |
|---|---|
| Capability | Feature flag provider |
| Technology | https://github.com/Unleash/unleash |
| Decision | `DEFER` |
| License | Apache-2.0 (core) |

**Intended use.** A possible self-hosted provider behind OpenFeature.

**Why deferred.** Running a flag server is real operational cost. Until flags exist and a
configuration value is insufficient, adopting a server is premature.

**Revisit trigger.** OpenFeature is adopted and configuration-based flags prove inadequate.

---

# AI platform

## Official MCP TypeScript SDK

| Field | Value |
|---|---|
| Capability | Model Context Protocol servers and clients |
| Technology | `@modelcontextprotocol/sdk` — https://github.com/modelcontextprotocol/typescript-sdk |
| Decision | `ADOPT_LATER` |
| License | MIT |
| ADR required | Yes, at introduction |

**Intended use.** Exposing approved Ecomark capabilities to agents, and consuming external MCP
servers through the gateway.

**Constraint — the only permitted architecture:**

```
MCP  ->  Tool Layer  ->  Application Layer  ->  Domain
```

**Never** `MCP -> Database`. A tool is a thin adapter over an authorized application use case; it
holds no SQL, no provider credentials and no business rules.

**Why it fits Ecomark.** It is the protocol's official implementation. A hand-rolled client would
drift from the specification and from its security model.

**Risks.** Tool descriptions and results from external servers are **untrusted data, never
instructions**. Discovery must land in quarantine and must never execute a write tool. The
existing [MCP runtime boundaries](../../services/mcp-gateway/security/runtime-boundaries.md) and
[threat model](../../services/mcp-gateway/security/threat-model.md) remain binding.

**Lock-in.** Low; the protocol is the contract.

**When it may be introduced.** The MCP/skills gate, well after the Shopify-first MVP.

---

## LiteLLM

| Field | Value |
|---|---|
| Capability | Multi-provider LLM routing, fallback, cost tracking |
| Technology | https://github.com/BerriAI/litellm |
| Decision | `EVALUATE` |
| License | MIT |
| ADR required | Yes, before adoption |

**Intended use.** Possible infrastructure behind the ECO AI Gateway.

**Constraint — the only permitted architecture:**

```
ECO  ->  ECO AI Gateway  ->  provider abstraction  ->  optional LiteLLM adapter  ->  LLM provider
```

LiteLLM must never become Ecomark business architecture. Ecomark owns model routing policy,
budgets, tenant attribution and fallback semantics; LiteLLM may at most execute them.

**Why it might fit.** Provider normalization and fallback are commodity work.

**Risks.** It is a Python service in a TypeScript core path, which adds a runtime boundary.
Routing its way may not match our policy requirements. Sending tenant data through an additional
hop needs a data-flow review.

**Lock-in.** Low if it stays behind the gateway; high if product code calls it directly.

**Revisit trigger.** More than one model provider is genuinely in use and the gateway's own
routing proves insufficient.

---

## Langfuse

| Field | Value |
|---|---|
| Capability | LLM tracing, evaluation, prompt and cost analytics |
| Technology | https://github.com/langfuse/langfuse |
| Decision | `EVALUATE` |
| License | MIT (core), some features commercial |
| ADR required | Yes, before adoption |

**Intended use.** A possible adapter for AI trace storage and evaluation review.

**Constraint.** Ecomark continues to own the **AI audit model, evaluation semantics, cost
metadata, agent identity, prompt version and action outcome**. These are product requirements
with release gates attached in [ROADMAP.md](../product/ROADMAP.md), not vendor features.
Langfuse is an optional adapter that receives what we already record.

**Risks.** Prompts and completions contain tenant and customer data; exporting them to a third
party requires redaction and a data-processing review. Adopting its evaluation semantics as our
own would surrender a release gate to a vendor.

**Lock-in.** Low as an adapter; high if it becomes the system of record for evaluations.

**Revisit trigger.** Grounded AI analysis is implemented and evaluation volume exceeds what
repository-stored scorecards handle.

---

# Authorization

## OpenFGA

| Field | Value |
|---|---|
| Capability | Relationship-based authorization |
| Technology | https://github.com/openfga/openfga |
| Decision | `DEFER` |
| License | Apache-2.0 |
| ADR required | Yes, before adoption |

**Why deferred.** For the MVP, Ecomark owns its authorization model directly: Organization,
Workspace, Store, Membership, Role, Permission, Policy and `TenantContext`. That model is a
small, well-understood hierarchy, and it is the part of the system that must be most obviously
correct and most easily tested. Introducing an external authorization service now would add a
network dependency on the critical path of every request and make negative cross-tenant tests
harder to reason about, not easier.

**Risks of adopting early.** Authorization availability becomes a hard runtime dependency;
debugging a denial spans two systems; the tuple model must be kept synchronized with the domain.

**Revisit trigger.** Relationship complexity outgrows the role/permission model — for example
cross-organization sharing, delegated agency access, or per-resource grants at a scale where
enumerating permissions stops being practical.

**Note.** Deferring OpenFGA does not soften any tenant rule. Every rule in
[AGENTS.md](../../AGENTS.md) applies to the Ecomark-owned implementation.

---

# Commerce connectors

## Salla

| Field | Value |
|---|---|
| Capability | Commerce platform integration |
| Technology | Official Salla APIs and published SDKs — https://github.com/SallaApp |
| Decision | `ADOPT_NOW` / `PRIORITY_CONNECTOR` |
| ADR required | Yes, for the connector boundary |

**Status.** Salla is **Commerce Connector #1**.

> Sequencing note: [ROADMAP.md](../product/ROADMAP.md) currently sequences Shopify first and Salla
> at Gate 6. This register records Salla as connector #1 per the Step 2.5 decision. The two
> documents disagree, and **the roadmap is the authority on sequencing until it is updated**. This
> is flagged in the final report as an open decision, not silently resolved here.

**Intended use.** Products, orders, customers, refunds and inventory from Salla merchants, plus
webhook intake.

**Why it fits Ecomark.** Arabic-first commerce in the primary target market, with an official API
and OAuth flow.

**Architecture constraint:**

```
Application  ->  CommerceConnector  ->  SallaAdapter  ->  Salla API
```

Salla-specific types must not leak into Ecomark canonical domain models. The adapter maps
provider payloads to canonical contracts; nothing above it knows Salla exists.

**Official resources may be referenced, not copied.** Salla starter kits encode Salla's own
architecture, not ours. Reading them for API semantics is fine; adopting their structure is not.

**Risks.** API and webhook stability, rate limits, and sandbox fidelity. Raw payloads must be
preserved immutably before normalization so a mapping bug is recoverable.

**Exit strategy.** Delete the adapter. Canonical models and everything above are unaffected.

**When it may be introduced.** The commerce connector phase. **Not installed by this ticket.**

---

## Shopify

| Field | Value |
|---|---|
| Capability | Commerce platform integration |
| Technology | `@shopify/shopify-api` — https://github.com/Shopify/shopify-api-js |
| Decision | `ADOPT_LATER` |
| License | MIT |

**Status.** Commerce Connector #2 in this register. Same adapter boundary and the same rule:
provider types stay behind the connector.

**Why it fits.** Mature official tooling for OAuth, webhook verification and API versioning —
security-sensitive work worth using an official implementation for.

**Risks.** Frequent API version deprecations demand an upgrade cadence. Its libraries assume
their own session-storage conventions, which must not dictate ours.

---

# Advertising connectors

## Meta Business SDK

| Field | Value |
|---|---|
| Capability | Meta advertising integration |
| Technology | https://github.com/facebook/facebook-nodejs-business-sdk |
| Decision | `ADOPT_LATER` |

**Constraint.** Permitted **only inside the Meta Ads connector**. SDK objects must never be
exposed to domain or application layers.

**Risks.** Large surface; frequent breaking API versions. Spend-affecting calls require the full
validation → policy → approval → idempotent execution → verification → audit path. Read-only
insights come first.

---

## Google Ads official client

| Field | Value |
|---|---|
| Capability | Google Ads integration |
| Technology | Official Google Ads API clients |
| Decision | `ADOPT_LATER` |

**Constraint.** Provider implementation may use official tooling behind the connector boundary.

**Language note.** Google's most complete clients are not TypeScript. **If implementing this
connector introduces a new runtime boundary (for example a Python service), that requires its own
ADR** covering deployment, observability, error translation and operational ownership — it is not
a connector-local choice.

---

## TikTok Business API SDK

| Field | Value |
|---|---|
| Capability | TikTok advertising integration |
| Technology | Official TikTok Business API SDK |
| Decision | `ADOPT_LATER` |

**Constraint.** Permitted only inside the TikTok connector, same boundary rules.

---

# Messaging

## Archived WhatsApp Node SDK

| Field | Value |
|---|---|
| Capability | WhatsApp messaging |
| Technology | Meta's archived Node.js WhatsApp SDK |
| Decision | **`REJECT`** |

**Reason.** The repository is archived and unmaintained. An abandoned SDK on a
credential-handling, customer-messaging path accumulates unpatched vulnerabilities with no
upstream remedy, and blocks adoption of current API versions.

**Required approach instead:**

```
MessagingConnector  ->  MetaWhatsAppAdapter  ->  official WhatsApp Cloud API (HTTP)
```

Call the current Cloud API directly over HTTP from our own adapter. This is not a
"maybe later" — using the archived SDK is prohibited.

---

## Review

Review this register at every roadmap gate exit, when a technology's decision state changes, and
whenever a new foundational dependency is proposed. Record the reviewer and date with the change.
A decision that is reversed keeps its original entry with the reversal and its reason appended, so
the reasoning history stays inspectable.

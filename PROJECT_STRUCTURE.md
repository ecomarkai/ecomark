# Ecomark target project structure

Status: approved implementation target, not a claim about the current filesystem. ECO-001A remains
incomplete until the migration and executable-baseline evidence in the
[product roadmap](docs/product/ROADMAP.md) pass. Existing Ecomark directories are legacy architecture
references and must not be treated as independent deployable services.

## Scope horizons

| Horizon | Purpose |
|---|---|
| NOW | Executable foundation and Account → Organization → Store → Shopify → Sync → Dashboard → read-only AI |
| NEXT | Pilot hardening, Salla, Meta read-only, and GA4 based on validated demand |
| LATER | MCP/skills/media, billing, bounded execution, partner ecosystem, and regional scale |

Only NOW structure is required for ECO-001A. NEXT and LATER capabilities remain modules or
documentation until their roadmap gate opens.

## Applications

| Directory | Horizon | Responsibility |
|---|---|---|
| `apps/web` | NOW | Merchant onboarding, dashboard, evidence-backed AI analysis, and later approvals |

Admin, developer, mobile, and browser-extension applications are LATER. Do not create separate
applications until a scoped product need, ownership boundary, and acceptance evidence are approved.

## Core API modular monolith

`services/core-api` is the initial backend deployable. Domain boundaries are modules inside it, not
independent network services. Modules own application/domain behavior; infrastructure adapters remain
replaceable. Begin with the smallest modules required by NOW:

| Module | Horizon | Responsibility |
|---|---|---|
| `identity` | NOW | Accounts, sessions, memberships, roles, and revocation |
| `organizations` | NOW | Organizations, tenant context, invitations, and switching |
| `stores` | NOW | Store ownership, locale, currency, timezone, and connection state |
| `shopify` | NOW | OAuth, connector lifecycle, webhooks, backfill, incremental sync, and quotas |
| `commerce` | NOW | Raw evidence references, canonical orders/products/refunds/inventory, and reconciliation |
| `analytics` | NOW | Deterministic metric definitions, provenance, freshness, and dashboard queries |
| `ai-analysis` | NOW | Read-only evidence bundles, model routing, typed recommendations, budgets, and evaluations |
| `policy-audit` | NOW | Authorization decisions, security/audit events, and immutable evidence for sensitive flows |
| `operations` | NOW | Health, jobs, telemetry, cancellation, recovery hooks, and administrative diagnostics |

Billing, approval/execution, experiments, automation, media, skills, MCP, attribution, profit,
notifications, and public API capabilities enter as NEXT or LATER modules only when their roadmap gate
opens. A module may be extracted into an independent service only when measured scale, failure
isolation, security, deployment cadence, or ownership requires it and an ADR records the cost and
migration plan. A legacy top-level service directory does not satisfy that decision.

## Contracts

`packages/contracts` is the single authoritative home for versioned API, event, command, capability,
agent input/output, and shared schema definitions. Generated clients may live in consumer packages.
Handwritten duplicate schemas in root `contracts`, `packages/event-contracts`, agents, connectors, or
services are prohibited after migration.

Contract changes require compatibility tests, ownership, versioning, and affected-consumer validation.
Tenant context fields describe scoped data; they never authorize access.

## Shared packages

| Directory | Horizon | Responsibility |
|---|---|---|
| `packages/contracts` | NOW | Authoritative schemas and generated-client inputs |
| `packages/ui` | NOW when approved | Accessible bilingual primitives, tokens, and shared interaction foundations |
| `packages/config` | NOW if reuse is proven | Shared lint, TypeScript, and build configuration without runtime secrets |
| `packages/observability` | NEXT if reuse is proven | Typed telemetry helpers and redaction conventions |
| Public SDK packages | LATER | Generated partner clients from `packages/contracts` |

Do not create a shared package for code used by only one feature. The current untracked `packages/ui`
draft is not accepted merely because files exist; its naming, manifest, lockfile, tests, and consumers
must pass ECO-001A review.

## Connectors

Provider adapters translate external behavior at the core API boundary. Shopify is the only NOW
commerce connector. Salla is NEXT; additional commerce, advertising, analytics, communication,
payments, shipping, support, and storage connectors are prioritized from validated demand.

Each connector owns provider authentication, rate limits, webhooks, backfills, incremental sync, API
compatibility, disconnect, and error translation. It outputs canonical contracts and contains no
Ecomark business or AI decision logic.

## Agents and AI

Agents are governed roles, not data owners or deployment boundaries. They have no database migrations,
tables, provider credentials, or direct vendor API access. They receive only authorized tenant-scoped
evidence through domain APIs and versioned contracts.

Agents start in monitor or recommend mode. Any later mutation follows validation → policy → exact
approval → canonical command → idempotent execution → external verification → immutable audit. Agent
manifests, prompts, policies, tools, datasets, and thresholds are configuration until a runtime and
measured evaluation report prove them.

## Data ownership

The operational database belongs to `services/core-api` domain modules. Migrations live with the core
API persistence layer and declare module ownership; they never live inside agents. Raw provider payloads
are preserved immutably before normalization. Every record, query, cache, job, file, export, retrieval,
and model evidence bundle is scoped by server-authorized tenant context.

Analytics stores, search, graph projections, and model features are rebuildable LATER projections, not
additional sources of truth. Their introduction requires data lineage, deletion, retention,
reconciliation, and isolation evidence.

## Infrastructure and deployment

| Directory | Horizon | Responsibility |
|---|---|---|
| `infrastructure/docker` | NOW | Reproducible images and local composition for web, core API, database, and required dependencies |
| `infrastructure/terraform` | NOW | AWS networking, IAM, secrets references, data services, ECS/Fargate, and environment separation |
| `infrastructure/ecs` | NOW | ECS task/service definitions, health checks, deployment, scaling, and rollback configuration |
| `infrastructure/monitoring` | NOW | Logs, metrics, traces, freshness, alerts, and cost visibility |
| `infrastructure/disaster-recovery` | NEXT | Backup, restore, failover, RPO/RTO, and exercise evidence |

Kubernetes is not part of the initial Ecomark platform. Its legacy scaffold is reference material only
and must not be required by local development, CI, staging, or production. Adoption later requires
measured ECS/Fargate limits and a separate ADR.

## Documentation, security, and operations

Keep and evolve the useful legacy controls:

- ownership, security, tenant isolation, contribution, and dependency policies;
- product requirements, accessibility, Arabic/English and RTL/LTR standards;
- unit, component, integration, contract, E2E, security, tenant, connector, and AI evaluation plans;
- incident, backup, restoration, reconciliation, release, and evidence procedures;
- agent policies, approvals, budgets, revocation, kill switches, and audit requirements.

Documentation describes requirements, not working behavior. Active documents must use Ecomark names and
approved target paths after their migration. Historical documents may retain old names only with a
clear precedence notice.

## Verification ownership

- `apps/web` owns browser UX, localization, accessibility, responsive, and route-level tests.
- `services/core-api` modules own business, persistence, authorization, isolation, job, and integration
  tests.
- `packages/contracts` owns schema validity, compatibility, and generated-client tests.
- Connector adapters own provider fixtures, OAuth/webhook failure, quota, replay, and reconciliation
  tests.
- Cross-boundary suites own Account-to-analysis E2E, Docker composition, security, recovery, load, and
  AI evaluation evidence.

ECO-001A is complete only when clean-checkout install, lint, typecheck, participating tests, production
build, joint Docker startup, health checks, and an authenticated web-to-core-API round trip all pass on
the approved runtime. Placeholder files, manifests without execution, or Turbo tasks with no
participants are not completion evidence.

# Ecomark implementation status

Last reviewed: 2026-09-12 (Africa/Cairo).

Current filesystem baseline: legacy Ecomark architecture scaffold revision 5, followed by the
Next.js `apps/web` bootstrap and the engineering documentation system indexed at
`docs/README.md`. The approved Ecomark target is defined by [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md)
and sequenced in [the product roadmap](docs/product/ROADMAP.md). Apart from the normalized web path,
other target paths do not imply that their filesystem migrations have happened.

Implemented in the legacy baseline: folder structure, architecture and engineering requirements,
ownership, agent governance, testing/security/recovery requirements, illustrative configuration,
connection/binding schemas, workflow specification, inventory, scaffold validation, and a generated
Next.js application shell normalized to `apps/web` with lint and type-check commands.

ECO-001A status: **In progress, not complete.** Step 1 has normalized the web application to `apps/web`
and its workspace identity to `@ecomarkai/web`. Step 2 has added the foundational shared packages
described below. The active tree has not yet consolidated backend modules under `services/core-api`,
removed agent data ownership, or established the Docker and ECS/Fargate path. The tracked `packages/ui`
draft has not been integrated or accepted as a complete shared design system.

Step 2 shared package foundation (implemented, with passing lint, typecheck and tests):

| Package | Kind | Verification |
|---|---|---|
| `@ecomarkai/contracts` | Transport-neutral contracts: branded tenancy and correlation identifiers with constructors, `TenantContext` shape, cursor pagination, result metadata | 8 tests plus 17 compile-time assertions |
| `@ecomarkai/errors` | Framework-neutral error primitives, stable codes, retry semantics and the safe serialization boundary | 24 tests |
| `@ecomarkai/events` | Event envelope, factories, generic tenant reference and envelope invariant checks. No broker, outbox, queue, worker or transport | 34 tests |
| `@ecomarkai/config` | Configuration contracts, result-returning startup validation, server/public exposure boundary and secret redaction | 22 tests |
| `@ecomarkai/schemas` | Zod 4 runtime validation for shared boundaries: branded identifier schemas, cursor pagination input, library-neutral `parse` helper | 23 tests plus 10 compile-time assertions |

`contracts`, `errors`, `events` and `config` remain independent of each other. `schemas` depends
on `contracts` in one direction only, so it can reuse the identifier rule rather than restate it.
The graph is acyclic.

`@ecomarkai/ui` now has the `src/index.ts` entry point its `exports` map always declared, so the
package is importable. Its test suite replaces the previous identity assertion with real
behavioral coverage plus a guard that every declared export target exists on disk.

These packages contain contracts, primitives and local parsing only. They are not a core API,
and no database, cache, authentication provider, tenancy runtime, AI or integration was
introduced.

ECO-001A Step 2.5 resolved the runtime validation question that Step 2 deferred.
[ADR-0001](docs/adr/ADR-0001-runtime-validation-zod.md) selects Zod 4, and `@ecomarkai/schemas`
now exists. Zod is the only runtime dependency in the repository and is declared solely by
`@ecomarkai/schemas`; consumers use that package's `parse` helper and never import `zod`.
`config` and `events` keep their own local parsing and remain dependency-free.

Step 2.5 also established the [OSS technology registry](docs/architecture/OSS_TECHNOLOGY_REGISTRY.md)
and [OSS reuse policy](docs/architecture/OSS_REUSE_POLICY.md), and recorded the internal package
consumption model in [ADR-0002](docs/adr/ADR-0002-internal-package-consumption-model.md). Most
registry entries are decisions only: NestJS, Drizzle, PostgreSQL, Redis, BullMQ, Temporal,
OpenTelemetry, MCP, LiteLLM, Langfuse and OpenFGA are **recorded but not installed**.

`packages/contracts` is not yet the single contract authority: the JSON Schema definitions under
the repository root `contracts/` directory have not been migrated or superseded, and no
duplicate of them was created. That consolidation remains open ECO-001A work.

The `@ecomarkai/ui` export defect reported by Step 2 is **resolved** in Step 2.5.
`packages/ui/src/components/` remains empty: there is still no component library, and the
stylesheets are consumed through the separate `styles.css` and `tokens.css` export paths.

Open gap, visible and unaddressed: **`apps/web` has no test script.** It participates in lint,
typecheck and build, but contributes zero tests, so the web application has no automated
behavioral coverage of any kind. This is recorded for a separate ticket; see
[testing strategy](docs/engineering/TESTING_STRATEGY.md) for the suites it will eventually owe.

Repository inventory: the 2026-09-12 study at
[AI_REPOSITORY_GUIDE.md](AI_REPOSITORY_GUIDE.md) and the generated
[per-file map](docs/architecture/REPOSITORY_FILE_MAP.md) classify the current tree. The snapshot contains
485 `.gitkeep` placeholders, 128 comment-only source stubs, 14 placeholder evaluation datasets, nine
explicit agent runtime stubs, three generated Next.js starter files, and only two non-placeholder test
files.
`packages/ui` is now tracked and contains a small token/foundation draft, but it is not integrated into
the web application and does not complete the shared design system. Those counts predate the Step 2
packages; regenerate the inventory for current figures.

NOT implemented: Ecomark dashboard screens, authentication or tenant runtime, Shopify OAuth and sync,
real metrics, grounded AI analysis, billing integration, live MCP sessions, provider adapters, live
creative generation, ad publication, ECS/Fargate deployment, or load-tested isolation.
Most scaffold source files and `.gitkeep` files are placeholders. Root Turbo scripts are orchestration
entry points; seven workspace packages now participate, and the remaining scaffold directories under
`services/` and `connectors/` still have no runnable manifests or tests. JSON/YAML parsing, lint,
and type checking are not integration tests. Requirement documents, example thresholds, limits, and
latency targets are planned gates or assumptions, not measured SLOs or claims of present conformance.
No provider credentials, subscriptions, messages or campaigns were created.

Skills in this repository are proposed legacy content packages, not installed host skills or verified
Ecomark runtime capabilities.
MCP endpoint, transport, auth support, tools and SaaS redistribution rights must be verified per provider.
Installing a ChatGPT plugin does not authorize its credentials or endpoint for Ecomark.

ECO-001A requires evidence from a clean checkout: `pnpm install --frozen-lockfile`, participating lint,
typecheck and tests, production build, joint Docker startup of `apps/web`, `services/core-api`, database
and required dependencies, health checks, and an authenticated web-to-API round trip. Until that evidence
exists, both the legacy and target structures remain planning/scaffold material rather than an operating
application.

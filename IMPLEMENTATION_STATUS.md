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

**All four packages are independent.** None depends on another, so the dependency graph has no
internal edges and is trivially acyclic. Each declares only development tooling.

These packages contain contracts, primitives and local parsing only. They are not a core API,
and no database, cache, authentication provider, tenancy runtime, AI or integration was
introduced.

`@ecomarkai/schemas` was **deliberately not created.** No runtime validation technology is
approved for this repository, and a shared validation abstraction would have had no consumer
once `config` and `events` became independent: each needs only a small amount of local parsing.
Runtime schema implementation is **deferred pending an ADR** that selects a validation library
alongside the core API framework. No validation dependency was introduced.

`packages/contracts` is not yet the single contract authority: the JSON Schema definitions under
the repository root `contracts/` directory have not been migrated or superseded, and no
duplicate of them was created. That consolidation remains open ECO-001A work.

Known defect, not introduced by Step 2 and deliberately not fixed in it:
`packages/ui/package.json` declares `"exports": { ".": "./src/index.ts" }`, but
`packages/ui/src/index.ts` does not exist and `packages/ui/src/components/` is empty, so
`@ecomarkai/ui` cannot currently be imported by a consumer.

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
entry points; six workspace packages now participate, and the remaining scaffold directories under
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

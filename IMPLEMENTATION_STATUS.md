# Ecomark implementation status

Last reviewed: 2026-09-12 (Africa/Cairo).

Current filesystem baseline: legacy Ecomark architecture scaffold revision 5, followed by the
Next.js `apps/web-dashboard` bootstrap and the engineering documentation system indexed at
`docs/README.md`. The approved Ecomark target is defined by [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md)
and sequenced in [the product roadmap](docs/product/ROADMAP.md). Target paths do not yet imply that the
filesystem migration has happened.

Implemented in the legacy baseline: folder structure, architecture and engineering requirements,
ownership, agent governance, testing/security/recovery requirements, illustrative configuration,
connection/binding schemas, workflow specification, inventory, scaffold validation, and a generated
Next.js application shell in `apps/web-dashboard` with lint and type-check commands.

ECO-001A status: **In progress, not complete.** The active tree has not yet standardized Ecomark names,
moved the web application to `apps/web`, consolidated backend modules under `services/core-api`, made
`packages/contracts` the single contract authority, removed agent data ownership, or established the
Docker and ECS/Fargate path. The current untracked `packages/ui` draft is local work, not accepted
baseline evidence.

NOT implemented: Ecomark dashboard screens, authentication or tenant runtime, Shopify OAuth and sync,
real metrics, grounded AI analysis, billing integration, live MCP sessions, provider adapters, live
creative generation, ad publication, ECS/Fargate deployment, or load-tested isolation.
Most scaffold source files and `.gitkeep` files are placeholders. Root Turbo scripts are orchestration
entry points, but many scaffold packages have no runnable manifests or tests. JSON/YAML parsing, lint,
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

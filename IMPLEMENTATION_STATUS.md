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
and its workspace identity to `@ecomarkai/web`. The active tree has not yet consolidated backend modules under `services/core-api`, made
`packages/contracts` the single contract authority, removed agent data ownership, or established the
Docker and ECS/Fargate path. The tracked `packages/ui` draft has not been integrated or accepted as a
complete shared design system.

Repository inventory: the 2026-09-12 study at
[AI_REPOSITORY_GUIDE.md](AI_REPOSITORY_GUIDE.md) and the generated
[per-file map](docs/architecture/REPOSITORY_FILE_MAP.md) classify the current tree. The snapshot contains
485 `.gitkeep` placeholders, 128 comment-only source stubs, 14 placeholder evaluation datasets, nine
explicit agent runtime stubs, three generated Next.js starter files, and only two non-placeholder test
files.
`packages/ui` is now tracked and contains a small token/foundation draft, but it is not integrated into
the web application and does not complete the shared design system.

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

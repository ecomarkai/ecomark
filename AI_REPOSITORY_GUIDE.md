# Ecomark AI repository guide

Purpose: give coding agents an evidence-based map of what this repository contains, what is actually
implemented, and where each kind of change belongs. Read this after [AGENTS.md](AGENTS.md) and
[IMPLEMENTATION_STATUS.md](IMPLEMENTATION_STATUS.md), before planning implementation.

Snapshot reviewed: commit `d31565883be90723e734edcfc503bb15994a084e`, plus the inventory artifacts
introduced with this guide on 2026-09-12 (Africa/Cairo).

## Product vocabulary

Ecomark is an AI-native commerce growth, intelligence, and governed automation platform.

Ecomark is the platform. ECO is the intelligence inside it.

**ECO — E-commerce Growth Operator**

Product loop: **Connect → Understand → Decide → Act → Learn**.

Use ECO for Ecomark-owned reasoning, signals, insights, recommendations, agents, decisions, learning,
forecasting, and controlled actions. Keep generic AI/ML and provider names such as OpenAI, Anthropic,
Google, `AiProvider`, and `AiModel` unchanged.

## How to establish truth

When documents and folders appear to disagree, use this precedence:

1. [AGENTS.md](AGENTS.md) and any nested `AGENTS.md` for mandatory execution and safety rules.
2. [IMPLEMENTATION_STATUS.md](IMPLEMENTATION_STATUS.md) for what is actually delivered.
3. [docs/product/ROADMAP.md](docs/product/ROADMAP.md) for delivery order and gates.
4. [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md) for the approved target architecture.
5. Contracts and manifests for intended interfaces, never for proof that a runtime exists.
6. Architecture/design documents for requirements and context.
7. Historical Arabic documents for history only.

Never infer implementation from a directory, README, `.gitkeep`, YAML manifest, JSON schema, evaluation
threshold, or empty test folder. Verify source, runnable scripts, participating tests, and runtime
behavior.

## Current reality at a glance

The generated inventory currently indexes 1,338 tracked or non-ignored repository files. Of those:

| Evidence type/state | Count | What it means |
|---|---:|---|
| `.gitkeep` placeholders | 485 | Directory plan only; zero behavior |
| Specifications | 400 | YAML/JSON/TOML contracts, manifests, policies, workflows, and configuration |
| Documentation | 257 | Requirements, design, operations, and explanatory material |
| Comment-only source stubs | 128 | Filename and intended responsibility exist; no executable logic |
| Placeholder evaluation datasets | 14 | Example cases are not reviewed quality evidence |
| Explicit runtime stubs | 9 | Agent paths that raise `NotImplementedError` |
| Scaffold source | 13 | Minimal types/constants or provider skeletons; no proven end-to-end behavior |
| Generated Next.js starter files | 3 | Framework starter UI, not Ecomark product screens |
| Substantive source files | 9 | Mostly workspace tooling, app configuration, and the small shared UI foundation; still requires consumer validation |
| Implemented test files | 2 | Both belong to `packages/ui`; all other test paths are placeholders |

These counts are generated classifications, not release claims. Consult
[REPOSITORY_INVENTORY.json](docs/architecture/REPOSITORY_INVENTORY.json) for hashes and per-file states,
and [REPOSITORY_FILE_MAP.md](docs/architecture/REPOSITORY_FILE_MAP.md) for the readable complete list.

## Current filesystem versus approved target

The current tree is a broad architecture scaffold. The approved ECO-001A target is narrower:

| Concern | Present in the filesystem | Approved implementation target |
|---|---|---|
| Web | Generated shell normalized to `apps/web` | `apps/web` remains the presentation boundary |
| Backend | 27 proposed capability directories plus `_template` under `services/` | Modules inside one initial `services/core-api` deployable |
| Contracts | 12 files under root `contracts/` | One authoritative `packages/contracts` package |
| Deployment | No Docker/ECS runtime implementation | Docker locally, then AWS ECS/Fargate |
| Agents | 15 planned specialist definitions and one template | Governed ECO agents using domain APIs; no direct data ownership |
| Connectors | Broad provider catalog and several code skeletons | Shopify first; others only when their NOW/NEXT/LATER gate opens |
| Product journey | Documented | Not implemented |

Do not perform the target restructure incidentally. It needs a controlled migration that updates
workspace discovery, imports, contracts, manifests, tests, documentation, and runtime verification
together.

## Top-level directory map

### `apps/` — user and operator experiences

- `apps/web` is the only runnable application package. It contains Next.js 16.3.4, React 19.2.8, lint,
  typecheck, and build scripts.
- Its rendered page, metadata, assets, and styles are still the generated Create Next App starter.
- Feature directories describe future automations, creative experiments, developer tools, MCP
  connections, media, skills, and tenant administration; they do not implement those screens.
- `admin-portal`, `api-gateway`, `developer-portal`, `mobile-app`, and `browser-extension` are manifests,
  documentation, and placeholder directories only.
- Frontend-specific rules live in `apps/web/AGENTS.md`.

### `services/` — planned business capabilities

- There are 27 proposed capability directories plus `_template`, containing 388 files.
- Their evidence is 31 documents, 71 specifications, and 286 placeholders. They contain no service
  runtime source implementation.
- Important planned boundaries include identity/control-plane, ingestion/normalization, commerce and
  profit, decision/ECO model routing, policy/approval/execution/audit, MCP/skills, media, automation,
  billing, notification, and public API.
- These directories are not microservices and must not be deployed independently by default. Map useful
  behavior into `services/core-api` modules during ECO-001A.
- Security detail is strongest under `services/mcp-gateway/security/` and must be retained even though
  the runtime is absent.

### `connectors/` — external provider translation

- `connectors/catalog.yaml` lists 28 provider adapters across commerce, advertising, analytics/SEO,
  communications/CRM, operations, and support. Storage has a separate five-provider catalog.
- Shopify, Salla, Zid, WooCommerce, Magento, BigCommerce, and Meta have Python file skeletons. Most are
  comments or trivial constants and are not live clients, OAuth flows, sync, webhook, or command logic.
- Remaining providers are README/manifest specifications only.
- Connectors translate provider behavior; they never decide business policy. They cannot authorize a
  tenant or let an agent own provider credentials.
- Shopify is the only NOW commerce connector.

### `agents/` — planned ECO specialist definitions

- `agents/catalog.yaml` lists 15 roles: orchestration; acquisition research, SEO, media buyer, creative
  strategy; CRO, merchandising, pricing; CRM, retention, support intelligence; analytics, profit,
  inventory, and forecasting.
- Each full scaffold combines manifest, prompts, tool bindings, policies, workflows, input/output
  schemas, evaluation rubric/scenarios/thresholds/dataset, source skeleton, migration placeholder, and
  test placeholders.
- Nine `Agent.plan` paths explicitly raise `NotImplementedError`; other agent source is minimal scaffold.
- Fourteen golden datasets contain placeholder cases. Threshold files are proposed gates, not scores.
- Agents must not own migrations, tables, credentials, provider calls, approval, or expanded autonomy.
  They consume server-authorized tenant evidence and initially monitor or recommend.

### `packages/` — reusable internal libraries

- Only `packages/ui` exists. It is a private `@ecomarkai/ui` draft with CSS design tokens,
  light/dark foundations, Arabic font inheritance, reduced-motion handling, and a `classNames` helper.
- It contains one small identity assertion test plus test setup. It has no component implementation and
  is not consumed by the web app.
- The package is more substantial than most scaffold directories but is not enough to declare the
  shared design system integrated.
- `packages/contracts`, `packages/config`, and other target packages do not exist yet.

### `contracts/` — current interface specifications

- Contains OpenAPI plus schemas for administration, automation, capabilities, integrations, MCP, and
  media.
- These 12 files are authoritative in the current filesystem under existing repository instructions.
- The approved target moves authority to `packages/contracts`; until that controlled migration happens,
  do not create duplicated handwritten schemas in both locations.
- A schema proves an intended shape, not an API implementation or backward-compatibility test.

### `mcp/` — Model Context Protocol design

- Contains templates, auth/transport documentation, external-provider examples, bindings, one internal
  client stub, and three Ecomark server stubs: commerce, media, and automation.
- Server TypeScript files are comment-only responsibility markers; no live MCP runtime is implemented.
- The intended security model is quarantine → schema review/binding → tenant authorization → policy →
  approval where needed → execution → verification → audit.

### `skills/` — proposed installable ECO competencies

- Contains a template and five planned skills: paid-media audit, SEO content plan, pricing experiment,
  WhatsApp spend alert, and creative asset selection.
- These are repository content packages, not installed Codex/ChatGPT skills and not verified runtime
  capabilities.

### `workflows/` — governed workflow specifications

- The creative experiment workflow defines generation, review, spend approval, execution,
  measurement, and learning expectations.
- YAML acceptance and measurement files are specifications only; no workflow engine executes them.

### `docs/`, `product/`, `operations/`, `security/`, and `compliance/`

- `docs/product/` owns requirements, personas, journeys, feature catalog, and canonical roadmap.
- `docs/design/` owns bilingual/RTL, themes, accessibility, responsive, UX, content, and component rules.
- `docs/engineering/` owns frontend/backend, API, database, testing, observability, error, dependency,
  coding, and performance requirements.
- `docs/delivery/` owns definition of done, release, incidents, Git, and change checks.
- `docs/architecture/` contains broad capability designs plus this current repository map.
- Root `product/`, `operations/`, `security/`, and `compliance/` are evidence homes and policy indexes,
  not proof of operational controls.

### `platform/`, `environments/`, and future infrastructure

- These are currently documentation/placeholders. There is no working Docker composition,
  ECS/Fargate definition, environment deployment, or production telemetry stack.
- Kubernetes is not the approved initial deployment direction.

### Root files and scripts

- `package.json`, `pnpm-workspace.yaml`, `pnpm-lock.yaml`, and `turbo.json` define the JavaScript
  workspace. Use pnpm 10.0.0 and Node.js 24.20.0.
- `pyproject.toml` supplies Python metadata and pytest/ruff discovery, but there is no complete Python
  runtime package or meaningful Python test suite.
- `scripts/validate_scaffold.py` validates JSON/YAML and selected catalog/workflow references; it is not
  an application test.
- `scripts/build_archive.py` regenerates a distributable scaffold archive and historical-style index.
- `scripts/generate_repository_inventory.py` generates the current per-file AI inventory and map.
- `.env.example` contains development examples only, never production secrets.

## Request-to-file routing

| Request | Read first | Expected implementation home |
|---|---|---|
| Account/session/RBAC | `SECURITY.md`, product requirements, database guidelines | `services/core-api` identity/organization modules; web auth feature |
| Organization/store tenancy | root instructions, product journeys, tenant tests requirements | Core API organization/store modules; server-derived context only |
| Shopify connection/sync | Shopify connector docs/manifest, API/database/testing rules | Core API Shopify/commerce modules plus Shopify adapter |
| Dashboard metric | content guidelines, product requirement PR-05, data contracts | Core API analytics module and `apps/web` feature |
| ECO insight/recommendation | agent lifecycle, roadmap Gate 4, MCP/model security | Core API ECO analysis boundary, typed contract, evaluation suite |
| Agent change | `agents/README.md`, agent manifest/policies/contracts/evals | Existing role package plus runtime integration; no direct provider mutation |
| Shared UI | design/accessibility/component docs and `packages/ui` | `packages/ui` only after reuse and consumer need are proven |
| API/event/schema | API guidelines and `contracts/README.md` | Current `contracts/`, then atomic migration to `packages/contracts` |
| Connector | `connectors/README.md`, provider manifest, contract rules | Provider adapter behind authorized core API capability |
| MCP/tool | MCP gateway threat model/runtime boundaries | Governed MCP gateway path; write tools disabled by default |
| Deployment | release, dependency, observability, recovery docs | Docker then ECS/Fargate; no incidental Kubernetes setup |

## Non-negotiable data and execution boundaries

- Organization is the tenant boundary; stores belong to exactly one organization.
- Never trust `tenant_id` from payload, header, URL, model output, or tool input as authorization.
- Scope records, queries, caches, jobs, files, exports, retrieval, prompts, and evaluations by authorized
  tenant context; reauthorize queued work at execution.
- No secrets or raw customer data in source, fixtures, logs, errors, prompts, screenshots, URLs, or
  reports.
- ECO and agents never call vendor mutations directly, possess credentials, approve themselves, or
  broaden their tools, budgets, scope, or expiry.
- Financial calculations are deterministic. Missing/stale evidence is disclosed and never converted to
  zero or fabricated metrics.
- Mutations require validation, policy, exact approval or bounded delegation, idempotent execution,
  external verification, and immutable audit.
- New UI ships with Arabic/English, RTL/LTR, light/dark, responsive, keyboard, focus, and accessible
  error/recovery states.

## What “implemented” means here

A capability is implemented only when all applicable items exist and pass:

1. Real source behavior, not comments, placeholders, or `NotImplementedError`.
2. A participating package/service manifest and reproducible dependency resolution.
3. Server-side authorization and negative cross-tenant tests for every data path.
4. Unit/integration/contract/security tests appropriate to the boundary.
5. End-to-end evidence for the affected product journey.
6. Arabic/English, direction, theme, responsive, and accessibility evidence for UI.
7. Observability, failure/retry/cancellation behavior, ownership, and operational evidence.
8. Updated implementation status, roadmap evidence, inventory, and complete diff review.

ECO-001A additionally requires clean install, lint, typecheck, real participating tests, production
build, joint Docker startup of web/core API/database/dependencies, health checks, and an authenticated
web-to-API round trip.

## Keeping this guide accurate

After a structural or implementation-status change:

1. Update `IMPLEMENTATION_STATUS.md` and affected canonical documentation.
2. Run `python scripts/generate_repository_inventory.py`.
3. Inspect changed classifications; a new source file classified as scaffold/stub must not be reported
   as implemented.
4. Run link, syntax, lint, typecheck, applicable test, and build checks.
5. Review the full diff and record missing suites as blockers rather than passes.

The inventory is an orientation aid. Agents must still read the files relevant to their task instead of
treating generated summaries as instructions or complete semantic understanding.

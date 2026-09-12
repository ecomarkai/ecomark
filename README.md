# Ecomark

Ecomark is an AI-native commerce growth, intelligence, and governed automation platform.

Ecomark is the platform. ECO is the intelligence inside it.

**ECO — E-commerce Growth Operator**

**Connect → Understand → Decide → Act → Learn**

This repository currently contains a multi-tenant commerce architecture scaffold, a generated web
shell, and a small shared UI foundation. It is not yet a running or acquisition-ready product. Capacity,
security, and ECO quality require implementation and measured validation.

Start with the [documentation index](docs/README.md), [implementation status](IMPLEMENTATION_STATUS.md),
the [AI repository guide](AI_REPOSITORY_GUIDE.md), and the
[current per-file inventory](docs/architecture/REPOSITORY_FILE_MAP.md). English is authoritative for new and actively
maintained engineering documentation. [START_HERE_AR.md](START_HERE_AR.md) and other Arabic documents
remain historical onboarding references; they do not override current English engineering standards
or the canonical [product roadmap](docs/product/ROADMAP.md). The distributable archive extracts to
`Ecomark/`.

## Product boundaries

- **Apps** — customer, administrator, API, and developer-facing applications.
- **Services** — isolated business capabilities that can begin as modules and later deploy independently.
- **Connectors** — adapters for commerce, advertising, messaging, payment, and shipping platforms.
- **Agents** — governed specialist definitions for acquisition, conversion, retention, operations, and orchestration.
- **Skills** — installable, signed, and versioned competencies loaded by compatible Agents.
- **MCP** — governed tool servers and clients for AI interoperability.
- **Packages** — shared contracts and libraries; no product-specific business logic.
- **Data** — analytics models, schemas, ML features, and evaluation assets.
- **Infrastructure** — versioned cloud, deployment, monitoring, security, and recovery configuration.
- **Contracts** — the authoritative, versioned interfaces between services and external partners.
- **Platform** — paved roads, templates, local development, and release automation for engineering teams.
- **Environments** — environment-specific composition without placing secrets in source control.
- **Operations** — SLOs, capacity planning, FinOps, incidents, and production readiness.
- **Security & Compliance** — threat models, policies, evidence, and regional regulatory controls.
- **Product** — customer discovery, metrics, roadmap decisions, and pricing experiments.
- **Docs** — architecture decisions, APIs, governance, operations, and due-diligence evidence.
- **Tests** — cross-service validation, load, security, AI evaluation, and recovery exercises.
- **Media Library** — tenant-isolated assets with provider-neutral storage and AI search.
- **Automation** — durable triggers, conditions, actions, safety, history, and audit.

## Core architecture rules

1. Every request, event, record, and object is scoped by `tenant_id`.
2. External platform payloads are preserved as immutable raw data before normalization.
3. Cross-domain communication uses versioned contracts and idempotent commands.
4. AI models never execute platform mutations directly.
5. Every sensitive action passes validation, policy, approval, execution, verification, and audit stages.
6. The Decision Engine remains independent from the LLM provider.
7. Connectors remain replaceable and isolated from core commerce logic.
8. The operational database is the source of truth; graph and analytics stores are rebuildable projections.
9. Observability, security, data lineage, and AI evaluations are product requirements.
10. Start as a modular monolith and extract services only when scale, ownership, or isolation requires it.
11. Contract definitions currently live in `contracts`; ECO-001A migrates authority atomically to `packages/contracts`. Generated clients may live in other packages, but handwritten duplicates are prohibited.
12. Every deployable component has an owner, SLO, runbook, data classification, cost center, and deprecation policy.
13. Scale is measured by events, orders, API quotas, workflows, and data volume—not only registered users.
14. Production changes are reproducible, reviewed, observable, and reversible.
15. Agents use canonical tools and commands; they never own external platform credentials.
16. Connectors expose capabilities but never make Ecomark business decisions.

## Canonical MVP implementation order

The current sequence is authoritative in [docs/product/ROADMAP.md](docs/product/ROADMAP.md):

1. Account
2. Organization
3. Store
4. Shopify connection
5. Data sync
6. Dashboard
7. AI analysis

After the Shopify-first MVP is stable, add Salla, then Meta integrations, then GA4 and other
connectors, and then advanced MCP creative-provider workflows. Existing architecture documents
continue to define capability boundaries and security requirements, but their older sequencing is
historical.

See [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md) for ownership and responsibilities.
See [SCALING_GUARDRAILS.md](SCALING_GUARDRAILS.md) before extracting a service or introducing new infrastructure.
See [CONNECTOR_AGENT_VISION.md](docs/architecture/CONNECTOR_AGENT_VISION.md) for the product and execution model.
Historical Arabic onboarding guidance is in [START_HERE_AR.md](START_HERE_AR.md); current English
standards and the canonical product roadmap take precedence.
The complete component layout is in [REPOSITORY_BLUEPRINT.md](docs/architecture/REPOSITORY_BLUEPRINT.md).

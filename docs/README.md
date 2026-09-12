# Ecomark documentation index

This is the engineering entry point for product, design, implementation, delivery, and existing architecture documentation. Requirements describe expected behavior; [implementation status](../IMPLEMENTATION_STATUS.md) records what currently exists. English is authoritative for all new and actively maintained engineering documentation. Existing Arabic documents may remain as historical context and onboarding aids, but they do not override current English standards or the canonical [product roadmap](product/ROADMAP.md).

Existing security, contribution, scaling, ownership, architecture, operational, and compliance documents remain authoritative for their subjects except where they state an older implementation sequence. The product roadmap is authoritative for current sequencing; historical plans retain useful capability, security, and acceptance requirements.

## Repository governance

- [Repository agent instructions](../AGENTS.md)
- [Security](../SECURITY.md)
- [Contributing](../CONTRIBUTING.md)
- [Scaling guardrails](../SCALING_GUARDRAILS.md)
- [Ownership](../OWNERSHIP.md)
- [Project structure](../PROJECT_STRUCTURE.md)
- [Implementation status](../IMPLEMENTATION_STATUS.md)
- [AI repository guide](../AI_REPOSITORY_GUIDE.md)
- [Current repository file map](architecture/REPOSITORY_FILE_MAP.md)
- [Machine-readable repository inventory](architecture/REPOSITORY_INVENTORY.json)
- [Ecomark rename report](migrations/ECOMARK_RENAME_REPORT.md)

## Product

- [Product requirements](product/PRODUCT_REQUIREMENTS.md)
- [User personas](product/USER_PERSONAS.md)
- [User journeys](product/USER_JOURNEYS.md)
- [Feature catalog](product/FEATURE_CATALOG.md)
- [Delivery roadmap](product/ROADMAP.md)
- [Product discovery, metrics, and pricing evidence](../product/README.md)

## Design

- [Design system](design/DESIGN_SYSTEM.md)
- [UX principles](design/UX_PRINCIPLES.md)
- [Component standards](design/COMPONENT_STANDARDS.md)
- [Accessibility requirements](design/ACCESSIBILITY.md)
- [Responsive design](design/RESPONSIVE_DESIGN.md)
- [Internationalization and RTL](design/I18N_RTL.md)
- [Content and commerce metrics](design/CONTENT_GUIDELINES.md)

## Engineering

- [Coding standards](engineering/CODING_STANDARDS.md)
- [Frontend implementation boundaries](engineering/FRONTEND_ARCHITECTURE.md)
- [Backend implementation boundaries](engineering/BACKEND_ARCHITECTURE.md)
- [Testing strategy](engineering/TESTING_STRATEGY.md)
- [API guidelines](engineering/API_GUIDELINES.md)
- [Database guidelines](engineering/DATABASE_GUIDELINES.md)
- [Dependency and runtime policy](engineering/DEPENDENCY_POLICY.md)
- [Error handling](engineering/ERROR_HANDLING.md)
- [Observability](engineering/OBSERVABILITY.md)
- [Performance budgets](engineering/PERFORMANCE_BUDGETS.md)

## Delivery

- [Definition of done](delivery/DEFINITION_OF_DONE.md)
- [Git workflow](delivery/GIT_WORKFLOW.md)
- [Change checklist](delivery/CHANGE_CHECKLIST.md)
- [Release process](delivery/RELEASE_PROCESS.md)
- [Incident process](delivery/INCIDENT_PROCESS.md)

## Web application

- [Web application architecture](../apps/web/ARCHITECTURE.md)
- [Web application agent instructions](../apps/web/AGENTS.md)
- [Web application design requirements](../apps/web/DESIGN.md)
- [Web application testing](../apps/web/TESTING.md)
- [Web application local development](../apps/web/README.md)

## Existing specialist documentation

- [Architecture index](architecture/README.md) and the existing architecture specifications in `docs/architecture/`
- [Repository inventory generator](../scripts/generate_repository_inventory.py)
- [Architecture decision records](adr/README.md)
- [Technical due-diligence index](due-diligence/README.md)
- [MCP platform](../mcp/README.md) and [MCP runtime boundaries](../services/mcp-gateway/security/runtime-boundaries.md)
- [Agent platform](../agents/README.md), [connector platform](../connectors/README.md), and [contract ownership](../contracts/README.md)
- [Operations](../operations/README.md), [security engineering](../security/README.md), and [compliance evidence](../compliance/README.md)

Arabic onboarding and architecture references, including [START_HERE_AR.md](../START_HERE_AR.md), [FINAL_STRUCTURE_AR.md](../FINAL_STRUCTURE_AR.md), and [the MCP connection guide](architecture/MCP_CONNECTION_GUIDE_AR.md), are retained for historical context. Their English precedence notices apply.

When adding or moving documentation, update this index in the same change and verify every relative Markdown link. Do not duplicate detailed specifications already owned by one of the linked documents.

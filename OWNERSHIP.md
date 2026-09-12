# Ownership Model

Use team ownership rather than individual ownership for production components.

| Domain | Accountable team | Primary production responsibility |
|---|---|---|
| Customer applications | Product Engineering | Merchant and admin experiences |
| Control plane and identity | Platform Engineering | Tenant lifecycle, access, and entitlements |
| Connectors and ingestion | Integration Platform | External APIs, webhooks, sync, and reconciliation |
| Commerce data and graph | Data Platform | Canonical models, lineage, projections, and warehouse |
| Profit and decisions | Commerce Intelligence | Financial logic, opportunity scoring, and models |
| Agents and model gateway | AI Platform | Orchestration, tools, evaluations, routing, and cost |
| Policy and execution | Trusted Automation | Approval, risk controls, commands, and rollback |
| Infrastructure and reliability | SRE/Platform | Environments, deployment, SLOs, incidents, and recovery |
| Security and privacy | Security & Compliance | Threats, controls, evidence, and regulatory obligations |

Ownership must be mirrored in repository review rules before production.


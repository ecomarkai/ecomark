# API, MCP and Skills

The REST API is the stable surface for dashboards, mobile apps, browser extensions and partners.
It uses OAuth, scoped API keys, tenant binding, quotas, idempotency and versioned contracts.

MCP exposes a curated subset of Ecomark capabilities to compatible AI clients. MCP servers use the
same policy, approval, execution and audit layers as the product.

Skills are signed, versioned task packages. They declare compatible Agents, required capabilities,
permissions, risk and evaluations. A Skill cannot access credentials or grant itself permissions.

Client or Agent -> API or MCP -> Capability -> Policy -> Approval -> Execution -> Connector.

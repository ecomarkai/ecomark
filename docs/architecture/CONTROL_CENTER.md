# Ecomark Control Center

There are two separate control surfaces: Platform Super Admin for Ecomark operations and Tenant
Admin inside the merchant dashboard. Tenant Admin is strictly scoped to one company.

Control Center manages the platform end-to-end without becoming a god service. The UI calls the
Admin Gateway, which aggregates read models and sends typed commands to the service that owns each
capability. It never edits service databases directly.

Main areas: platform overview; organizations and stores; users and RBAC; connectors; external MCP;
API keys and OAuth clients; Agents; Skills; automations; Media Library; approvals; model routing;
usage and cost; billing; audit; security; compliance; health; jobs and queues; feature flags;
incidents; kill switches; settings.

Sensitive operations require step-up authentication, a reason, immutable audit evidence and,
where configured, two-person approval. Global, tenant, provider and tool-level kill switches support
rapid containment. Support impersonation is time-limited, consented and fully recorded.

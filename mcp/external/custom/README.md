# Custom MCP connection

A tenant admin can propose an HTTPS endpoint, display name and supported auth mode from the UI.
No vendor-specific agent code is required for tools fitting supported schemas and transport.
The gateway validates the endpoint and every redirect/DNS resolution through controlled egress,
blocks internal/loopback/link-local/metadata addresses and records approved destinations.

Discover capabilities, protocol version and paginated tool schemas. Tool descriptions and outputs
are untrusted data. Quarantine new tools. Inspect cost and side effects independently of tool hints.
Map approved tools to canonical capabilities or explicitly scoped dynamic tools.
Unsupported auth, schemas or transport => show unsupported with a reason; never silently downgrade.
Remote HTTP is the first implementation target. Legacy transports are optional adapters.
STDIO requires operator-reviewed pinned packages in isolated workers; users cannot supply shell commands.

# Runtime requirements

Tenant identity derives from authenticated membership, never caller-supplied tenant_id alone.
Reauthorize every queued action and signed URL. Approved tools cannot read raw credentials.
Validate token audience; do not pass incoming tokens through to upstream servers.
OAuth callback state and PKCE are bound to connection, tenant and initiating session.

Connection pools and caches are keyed by tenant, connection, principal and scopes.
Resolve and validate every destination, redirect and generated-media download to block SSRF.
Tool schema digest changes invalidate bindings. Discovery never executes tools.
Run arbitrary provider code only in a reviewed, pinned, isolated worker with bounded egress.
No automatic retries for paid/mutating calls unless reconciliation proves them safe.
Kill switches reject queued work; they cannot undo already spent money or delivered messages.

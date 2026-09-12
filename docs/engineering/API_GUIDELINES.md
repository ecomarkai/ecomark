# API guidelines

Owner: public API and owning domain teams. [contracts/](../../contracts/README.md) is the authoritative interface source. Do not create handwritten alternative schemas in this documentation or UI code.

## Security and contracts

- Authenticate each request and bind identity to current tenant membership server-side. Treat tenant/store IDs in paths, headers and payloads only as selectors to validate, never authority. Apply authorization and entitlements independently; repeat checks in server actions and worker entry points.
- Validate request and response schemas, payload sizes, pagination limits, filters and sorting. Reject unknown privileged fields; allowlist writable properties to prevent mass assignment. Return only required fields.
- Use resource-oriented, versioned contracts and stable machine-readable error codes. Contract changes require compatibility tests and a migration/deprecation path for breaking changes.
- Protect cookie-authenticated mutations against CSRF and validate origins. CORS must use explicit allowed origins and must not be treated as authorization. Do not put tokens or customer records in URLs.

## Semantics

- Reads must not trigger mutations. Creation responses identify the new resource; asynchronous work returns a job reference and observable status, never false completion.
- Mutations with duplicate/paid effects require idempotency keys scoped to tenant, operation and input digest. Reusing a key with different inputs must fail. Persist the original outcome and reconcile unknown provider outcomes before retrying.
- Use bounded cursor pagination with deterministic ordering. Every list, detail, aggregate, export and job-status endpoint enforces the same tenant boundary.
- Define HTTP status semantics in the contract: unauthenticated, forbidden, not found, conflict, validation failure, throttled and unavailable must be distinguishable by safe codes. Do not leak another tenant's existence through inconsistent lookup behavior.
- Error envelopes must carry a stable code, safe message or localization key, correlation ID and safe field errors where relevant. Never include stack traces or raw provider bodies. Follow [error handling](ERROR_HANDLING.md).
- Publish rate limits, timeouts and retry eligibility. Do not ask clients to retry unsafe writes automatically.

## Webhooks

Verify signatures against raw request bytes, freshness/replay constraints where supported, and the registered provider connection. Durable intake precedes success acknowledgement. Deduplicate by provider event identity within the connection/tenant scope; tolerate out-of-order events and expose reconciliation/replay status. Follow [connector lifecycle](../../connectors/README.md) and [testing strategy](TESTING_STRATEGY.md).

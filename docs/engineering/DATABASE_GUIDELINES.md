# Database guidelines

Owner: Data Platform and owning domain teams. [Project structure](../../PROJECT_STRUCTURE.md) proposes PostgreSQL as the operational source of truth; this documentation does not provision a database. Graph and analytics stores remain rebuildable projections under [scaling guardrails](../../SCALING_GUARDRAILS.md).

## Tenant and ownership invariants

- Resolve tenant context from authenticated membership before persistence access. Never accept request `tenant_id` as authority, and never rely only on a UI filter.
- Every tenant-owned row and relation must carry enforceable tenant scope. Use tenant-aware keys/constraints so cross-tenant foreign references cannot be inserted. Tenant-independent lookup tables require documented classification.
- Parameterize queries; scope reads, joins, counts, aggregates, updates, deletes and exports. Review raw SQL and background jobs with the same rigor as request handlers.
- Use database-level isolation such as RLS as defense in depth where applicable. Define role behavior and test pooled-connection context reset, transaction boundaries and administrative bypass; do not claim RLS alone proves isolation.
- A module writes only its owned data through its application boundary. Cross-domain work uses versioned contracts. Privileged repair/migration access must be explicitly authorized and audited.

## Data correctness

Use currency-aware minor units or decimal types for money; store currency separately. Store UTC instants and preserve original provider IDs, event times, source lineage and reporting-timezone rules. Missing financial inputs must remain missing. See [metric definitions](../design/CONTENT_GUIDELINES.md).

Persist verified raw external events before normalization with controlled access, retention and integrity evidence. “Immutable” prohibits in-place business edits; approved retention expiry and lawful erasure must follow the existing [retention](../../compliance/data-retention/README.md) and [data-rights](../../compliance/data-subject-rights/README.md) processes. Raw records must never become unrestricted application logs.

Use transactions for invariants and outbox coordination for reliable event publication. Enforce idempotency with durable uniqueness constraints. Rebuild projections from versioned sources and reconcile them against operational records.

## Migrations and recovery

Migrations must be reviewed, versioned and compatible with rolling deployment. Use expand/backfill/contract for breaking changes, bound lock time and batch size, and measure on representative data. Destructive commands require explicit approval; document backup, restore test, rollback or forward recovery and irreversible effects before execution.

Test two-tenant access, indexes/query plans for real filters, concurrent duplicate writes, migration compatibility and restoration. Production readiness requires a successful restore drill, not just a backup job. [Release process](../delivery/RELEASE_PROCESS.md) owns the promotion gate.

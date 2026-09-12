# Scaling Guardrails

This project is structured to serve 10,000+ active stores without forcing early operational complexity.

## Scale targets must be explicit

Maintain a capacity model using:

- active stores and users;
- orders and order items per day;
- webhooks and API calls per second;
- connector backfill volume;
- concurrent workflows and approvals;
- analytics events and retained raw bytes;
- AI requests, tokens, latency, and cost;
- external platform quotas and failure rates.

Design and load-test for normal traffic, seasonal peak traffic, connector replay, and the failure of a major upstream platform.

## A module becomes an independent service only when at least one is true

1. It requires independent scaling.
2. It has a distinct reliability or security boundary.
3. It needs a different deployment cadence or runtime.
4. A dedicated team owns it end to end.
5. Regulatory or enterprise isolation requires separation.

Do not extract a service only to make the architecture look larger.

## Required service contract

Every deployable service must declare:

- owner and escalation path;
- public and internal interfaces;
- events consumed and produced;
- data owned and data classification;
- SLO, timeout, retry, and backpressure behavior;
- idempotency and reconciliation strategy;
- security and tenant-isolation boundaries;
- dashboards, alerts, and runbook;
- expected cost and scaling unit;
- versioning, migration, and deprecation process.

## Data rules

- Store raw external events before normalization.
- Treat the operational store as authoritative and analytics/graph stores as rebuildable projections.
- Use versioned schemas with compatibility checks in CI.
- Reconcile platform totals against Ecomark totals continuously.
- Prevent cross-tenant joins unless an explicitly approved, privacy-safe aggregate is used.
- Keep training datasets reproducible and tied to documented permissions.

## AI and decision rules

- LLM output is untrusted input until schema and policy validation pass.
- Financial calculations use deterministic, tested code.
- High-impact actions require approval, simulation, or a tenant-defined delegation policy.
- Every recommendation records evidence, model/rule version, confidence, and expected impact.
- Every execution records verification, outcome, and rollback status.
- AI quality and cost regressions block releases when acceptance thresholds fail.

## Reliability rules

- Acknowledge inbound webhooks quickly, then process asynchronously.
- Use idempotency keys on intake and execution.
- Apply exponential backoff, jitter, circuit breakers, and per-platform quotas.
- Use dead-letter handling only with a documented replay and reconciliation path.
- Test backups by restoring them; a successful backup job is not proof of recovery.

## Acquisition-readiness rules

- Keep source-code and dataset ownership provable.
- Track third-party dependencies, licenses, vulnerabilities, and exceptions.
- Keep Architecture Decision Records for material choices.
- Record incidents and corrective actions without deleting history.
- Maintain customer contracts, data rights, security evidence, and performance metrics in a due-diligence index.


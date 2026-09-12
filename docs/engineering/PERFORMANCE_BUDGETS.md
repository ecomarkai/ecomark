# Performance budgets

Owner: Product Engineering for browser budgets; SRE/Platform and domain owners for backend budgets. These are initial release targets requiring measurement, not current results or production SLO promises. Existing [scaling guardrails](../../SCALING_GUARDRAILS.md) govern capacity claims and service extraction.

## Initial budgets

| Surface | Target | Measurement contract |
|---|---|---|
| Dashboard LCP | ≤ 2.5 seconds at p75 | Real-user measurements per supported device cohort when available; pre-release lab proxy with recorded device/network |
| Interaction responsiveness | INP ≤ 200 ms at p75 | Representative filters, menus and forms; distinguish lab proxy from field evidence |
| Layout stability | CLS ≤ 0.1 at p75 | Include loading, font and localization transitions |
| Initial route JavaScript | ≤ 250 KiB compressed, including framework code | Production route-load transferred JS; record compression and cache state |
| Dashboard read API | p95 ≤ 500 ms server duration | Authorized cached/owned read models, excludes asynchronous provider work; report cache hit ratio |
| Webhook durable intake | p95 ≤ 1 second | Includes signature verification and durable persistence, excludes normalization |
| Long sync or AI work | Job acknowledgement ≤ 1 second at p95 | Return a job/status reference; completion target must be declared per workload/provider |

Before adopting a backend target, the owner must record concurrency, store count, records per store, database size, request mix, provider quotas and environment. An unloaded local request cannot establish p95 or capacity. Report sample count, duration, error rate and p50/p95/p99 for server tests. User performance targets require cohort-specific evidence; an aggregate must not hide mobile or Arabic regressions.

## Review gate

Measure affected production bundles/routes after performance-sensitive changes; compare the same fixture, device, network, build mode and cache conditions. Budget breaches block the affected release unless an owner records a bounded exception, reason, user impact, expiry and remediation. Never remove tenant authorization, redaction or accessibility to meet a budget.

Use pagination, bounded payloads, selective projections and asynchronously processed provider work. Avoid N+1 queries, unbounded fan-out and shared private-data caches. AI/tool calls need explicit per-run token/spend/time limits in approved configuration before enablement; no unlimited default.

A capacity claim such as 10,000 active stores requires the seasonal peak, replay, provider outage and recovery evidence specified in scaling guardrails. No such claim is established by this document. Track outcomes in [operations](../../operations/README.md).

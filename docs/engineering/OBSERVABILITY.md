# Observability requirements

Owner: SRE/Platform with each component's owner. [Operations](../../operations/README.md) remains the home of SLOs, dashboards, incidents and cost evidence; do not create a second operational registry here.

## Instrumentation contract

Every implemented request/job must carry correlation and operation IDs through API, queue, connector and verification steps. Structured logs include service/module, event name, severity, safe outcome code, duration and retry count. Tenant/connection identifiers must be opaque and restricted to authorized telemetry; do not put high-cardinality tenant IDs in unbounded metric labels.

Never log secrets, tokens, cookies, raw customer records, unrestricted model prompts or provider payloads. Redact before serialization/export. Apply access, retention and regional restrictions to telemetry, traces and screenshots. Debug mode must not weaken these controls.

## Required signals

| Area | Signals and actionable condition |
|---|---|
| API | Rate, error ratio and p50/p95/p99 duration; alert on approved SLO burn |
| Ingestion | Durable acknowledgement time, oldest queue age, sync freshness, duplicate/replay rates and reconciliation gaps |
| Connector | Authentication failures, quota pressure, circuit state and provider errors |
| Execution | Pending approvals, unknown outcomes, verification failures and killed/revoked work |
| AI/MCP | Model/tool version, schema/policy denial, groundedness evaluation, tokens, cost, latency and budget rejection |
| Data/security | Tenant-isolation failures, suspicious access and redaction failures with restricted evidence |

Each alert must have an owner, severity, runbook and expected action. Set thresholds from an approved capacity model and measured baseline; avoid paging on unactionable single events. Isolation violations and suspected credential exposure must enter the [incident process](../delivery/INCIDENT_PROCESS.md) immediately.

Keep immutable audit evidence separate from diagnostic logs. Record actor, authorized scope, policy/approval version, command digest, safe result, verification and timestamp; reference protected evidence instead of copying sensitive content. Test redaction, correlation across retries, alert routing and audit persistence before release. [Performance budgets](PERFORMANCE_BUDGETS.md) defines initial measurable targets, not achieved SLOs.

# Incident process

Owner: SRE/Platform incident commander; Security & Compliance owns security/privacy assessment. This procedure coordinates the existing [operations incident records](../../operations/README.md), [compliance notification workflow](../../compliance/incident-response/README.md) and [MCP provider runbook](../../services/mcp-gateway/operations/external-provider-runbook.md). Do not create duplicate incident archives.

## Severity and response

| Severity | Example | Required response |
|---|---|---|
| SEV-1 | Suspected cross-tenant exposure, credential compromise, uncontrolled spend or broad outage | Page accountable on-call immediately, appoint commander, contain affected execution and involve Security |
| SEV-2 | Material partial outage, sync backlog or repeated verification failures | Notify owning on-call, assign commander and bound impact/recovery |
| SEV-3 | Limited non-critical degradation with safe workaround | Assign owner and tracked remediation; escalate if impact expands |

These are internal response requirements, not promised customer SLAs. The commander records severity, known impact, start/detection times, next update time and roles for operations, investigation and communication. Incident channels and on-call routing must be established and tested before production. The `.example` address in [SECURITY.md](../../SECURITY.md) is a scaffold placeholder, not a verified reporting channel.

## Procedure

1. Preserve correlation IDs, audit references, versions and a factual timeline. Restrict access to evidence; never paste credentials or customer records into general chat, issues or this repository.
2. Contain using the narrowest effective kill switch or access revocation. Stop new unsafe work and identify in-flight/queued actions. Follow explicit emergency authorization; do not run destructive repair commands without approval.
3. Assess affected tenants, data, financial effects and providers. Record uncertainty and verified facts separately. Reconcile ambiguous outcomes before replaying jobs or paid operations.
4. Communicate status and the next update time through the designated owner. Security & Compliance determines legal/customer notification duties using the existing workflow; this document invents no jurisdictional deadlines.
5. Recover through sandbox/staging and bounded canary validation. Recheck permissions, secret rotation, reconciliation, monitoring and backups as relevant. Preserve evidence rather than overwriting the incident history.
6. Close only after stability and residual risk are reviewed by accountable owners. Schedule a blameless review, document cause/contributors, and assign corrective actions with owners, due dates and verification criteria.

A provider kill switch cannot undo completed external effects. Document irreversible impact and follow-up explicitly. Link release changes and regression tests to the incident record; validate that corrective controls work before declaring them complete.

# Error handling

Owner: owning domain team. Errors must be actionable, tenant-safe and observable; silence and invented success are prohibited.

## Classification and contracts

Distinguish validation, unauthenticated, forbidden, inaccessible/not found, conflict, throttled, dependency unavailable, internal failure and ambiguous external outcome. Define stable codes in the owning [API contract](../../contracts/README.md). UI translates codes into appropriate messages; do not display raw exception text.

Attach a correlation ID to user-visible unexpected failures and structured server telemetry. Log safe error category, operation and retry status, not tokens, raw provider responses, prompts or customer payloads. Never reveal inaccessible resource existence through error detail.

## Recovery

- Validation: preserve safe input and associate localized errors with fields; server validation remains authoritative.
- Session expiry: request reauthentication and clear private cached state. Do not endlessly retry an unauthorized request.
- Permission/revocation: stop the operation and discard forbidden results; queued work must reauthorize before execution.
- Throttling/outage: use bounded backoff with jitter, provider quotas and cancellation. Retry only documented safe operations.
- Paid/mutating timeout: mark outcome unknown, retain idempotency evidence and reconcile with the provider. Never report failure as proof no charge occurred or blindly create a second action.
- Partial sync: retain successful durable progress, identify missing coverage and provide safe resumption. Do not replace partial totals with fabricated complete ones.
- Unhandled UI failure: provide an accessible error boundary with a safe recovery; avoid leaking stack traces or hiding navigation to unaffected work.

Dead-letter jobs require an owner, reason, replay procedure and reconciliation evidence. Preserve original failure and attempt history. Cancellation and kill switches must be checked before new work, but cannot reverse already completed external effects.

Tests must assert both the visible state and the absence of unauthorized effects. Follow [UX states](../design/UX_PRINCIPLES.md), [observability](OBSERVABILITY.md) and the [MCP incident runbook](../../services/mcp-gateway/operations/external-provider-runbook.md).

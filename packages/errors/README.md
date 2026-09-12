# @ecomarkai/errors

Portable platform error primitives.

## Responsibility

Owns the classification, stable machine-readable codes, retry semantics and the single safe
serialization boundary for errors across the whole platform.

## Boundary

Dependency-free, including of every other Ecomark package. `correlationId` is a plain string
rather than a branded identifier from `@ecomarkai/contracts`: an error primitive that drags a
contracts dependency in becomes unusable in exactly the low-level places that need it most.

Framework-neutral. This package contains **no HTTP status codes**, no NestJS metadata and no
transport concept. A transport boundary — the future core API HTTP layer, a worker, the CLI,
an MCP server — owns the mapping from `ErrorCategory` to its own protocol. That mapping is
deliberately not here, so one error primitive can travel through all of them.

Categories mirror the classification required by
[`docs/engineering/ERROR_HANDLING.md`](../../docs/engineering/ERROR_HANDLING.md).

## The safe payload rule

`toSafeErrorPayload` produces the only shape permitted to leave the process. It never emits a
stack or a cause, and it discards rather than inspects the message of a non-platform error,
because an arbitrary exception string may embed a connection string, a token, a query or a
customer record.

Two behaviors are security-relevant and are covered by tests:

- **Internal messages are replaced**, not trimmed or filtered.
- **`tenant_isolation` is masked as `not_found`**, code included. If a tenant boundary
  violation were reported as `forbidden`, the difference between "forbidden" and "not found"
  would confirm that another organization's resource exists. The real category is preserved on
  the error object for audit and telemetry.

## Retry semantics

`ambiguous_outcome` is never retryable by default. An external, possibly paid effect may
already have been applied and must be reconciled with the provider before another attempt.

## Verification

`pnpm --filter @ecomarkai/errors test`

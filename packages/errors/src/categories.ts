/**
 * Stable error classification.
 *
 * The list mirrors the classification required by `docs/engineering/ERROR_HANDLING.md`:
 * validation, unauthenticated, forbidden, inaccessible/not found, conflict, throttled,
 * dependency unavailable, internal failure and ambiguous external outcome.
 *
 * Categories are transport-neutral. Mapping a category to an HTTP status, a gRPC code or a
 * CLI exit code belongs to the transport boundary that owns that protocol, never here.
 */
export const ERROR_CATEGORIES = [
  "validation",
  "unauthenticated",
  "forbidden",
  "tenant_isolation",
  "not_found",
  "conflict",
  "rate_limited",
  "unavailable",
  "integration_failure",
  "ambiguous_outcome",
  "internal",
] as const;

export type ErrorCategory = (typeof ERROR_CATEGORIES)[number];

export function isErrorCategory(value: unknown): value is ErrorCategory {
  return (
    typeof value === "string" &&
    (ERROR_CATEGORIES as readonly string[]).includes(value)
  );
}

/**
 * Whether a caller may retry the same operation unchanged.
 *
 * `ambiguous_outcome` is deliberately NOT retryable. An external effect may already have been
 * applied, so the operation must be reconciled with the provider before any further attempt.
 */
const RETRYABLE_BY_DEFAULT: Readonly<Record<ErrorCategory, boolean>> = {
  validation: false,
  unauthenticated: false,
  forbidden: false,
  tenant_isolation: false,
  not_found: false,
  conflict: false,
  rate_limited: true,
  unavailable: true,
  integration_failure: true,
  ambiguous_outcome: false,
  internal: false,
};

export function isRetryableByDefault(category: ErrorCategory): boolean {
  return RETRYABLE_BY_DEFAULT[category];
}

import type { ErrorCategory } from "./categories.js";
import {
  PlatformError,
  type FieldIssue,
  type MessageExposure,
} from "./platform-error.js";

type FactoryOptions = {
  readonly code?: string;
  readonly correlationId?: string;
  readonly cause?: unknown;
  readonly exposure?: MessageExposure;
};

type FactoryDefaults = {
  readonly exposure: MessageExposure;
  readonly details?: readonly FieldIssue[];
};

function build(
  category: ErrorCategory,
  message: string,
  options: FactoryOptions,
  overrides: FactoryDefaults,
): PlatformError {
  return new PlatformError({
    category,
    message,
    exposure: options.exposure ?? overrides.exposure,
    ...(overrides.details !== undefined ? { details: overrides.details } : {}),
    ...(options.code !== undefined ? { code: options.code } : {}),
    ...(options.correlationId !== undefined
      ? { correlationId: options.correlationId }
      : {}),
    ...(options.cause !== undefined ? { cause: options.cause } : {}),
  });
}

/** Input failed schema or domain validation. Field issues are safe to return to the caller. */
export function validationError(
  message: string,
  details: readonly FieldIssue[] = [],
  options: FactoryOptions = {},
): PlatformError {
  return build("validation", message, options, { exposure: "safe", details });
}

/** No usable credential or session was presented. */
export function unauthenticatedError(
  message = "Authentication is required.",
  options: FactoryOptions = {},
): PlatformError {
  return build("unauthenticated", message, options, { exposure: "safe" });
}

/** The actor is authenticated but lacks permission for this operation. */
export function forbiddenError(
  message = "This operation is not permitted.",
  options: FactoryOptions = {},
): PlatformError {
  return build("forbidden", message, options, { exposure: "safe" });
}

/**
 * A tenant boundary was crossed or could not be established.
 *
 * Raised when a resolved `TenantContext` does not authorize the requested resource. The
 * category is preserved for audit and telemetry, but `toSafeErrorPayload` masks it as
 * `not_found` so a caller cannot use the difference between "forbidden" and "missing" to
 * confirm that another tenant's resource exists.
 */
export function tenantIsolationError(
  message: string,
  options: FactoryOptions = {},
): PlatformError {
  return build("tenant_isolation", message, options, { exposure: "internal" });
}

/** The resource does not exist, or is not visible to the authorized scope. */
export function notFoundError(
  message = "The requested resource was not found.",
  options: FactoryOptions = {},
): PlatformError {
  return build("not_found", message, options, { exposure: "safe" });
}

/** The operation conflicts with current state, such as a concurrent update or duplicate key. */
export function conflictError(
  message: string,
  options: FactoryOptions = {},
): PlatformError {
  return build("conflict", message, options, { exposure: "safe" });
}

/** A quota, throttle or budget was exhausted. */
export function rateLimitedError(
  message = "The request was throttled.",
  options: FactoryOptions = {},
): PlatformError {
  return build("rate_limited", message, options, { exposure: "safe" });
}

/** A dependency the operation needs is temporarily unavailable. */
export function unavailableError(
  message = "A required dependency is unavailable.",
  options: FactoryOptions = {},
): PlatformError {
  return build("unavailable", message, options, { exposure: "safe" });
}

/**
 * An external provider call failed in a way that is known not to have applied an effect.
 *
 * Message exposure defaults to internal because provider responses routinely contain account
 * identifiers, quota detail and other data that is not ours to disclose.
 */
export function integrationFailureError(
  message: string,
  options: FactoryOptions = {},
): PlatformError {
  return build("integration_failure", message, options, { exposure: "internal" });
}

/**
 * An external, possibly paid or mutating, outcome is unknown.
 *
 * Never retryable by default: the effect may already exist and must be reconciled with the
 * provider before another attempt. Reporting this as a plain failure would invite a duplicate
 * charge or a duplicate published action.
 */
export function ambiguousOutcomeError(
  message: string,
  options: FactoryOptions = {},
): PlatformError {
  return build("ambiguous_outcome", message, options, { exposure: "safe" });
}

/** An unexpected internal failure. The message never leaves the process. */
export function internalError(
  message: string,
  options: FactoryOptions = {},
): PlatformError {
  return build("internal", message, options, { exposure: "internal" });
}

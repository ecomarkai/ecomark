import type { ErrorCategory } from "./categories.js";
import { defaultCodeForCategory } from "./codes.js";
import {
  isPlatformError,
  PlatformError,
  type FieldIssue,
} from "./platform-error.js";

/**
 * The only error shape permitted to leave the process.
 *
 * There is intentionally no `stack`, no `cause` and no provider body. Anything a transport
 * returns to a client, writes to a public log or hands to a model must come from here.
 */
export type SafeErrorPayload = {
  readonly code: string;
  readonly category: ErrorCategory;
  readonly message: string;
  readonly retryable: boolean;
  readonly correlationId?: string;
  readonly details?: readonly FieldIssue[];
};

const GENERIC_MESSAGE: Readonly<Record<ErrorCategory, string>> = {
  validation: "The request was invalid.",
  unauthenticated: "Authentication is required.",
  forbidden: "This operation is not permitted.",
  tenant_isolation: "The requested resource was not found.",
  not_found: "The requested resource was not found.",
  conflict: "The request conflicts with the current state.",
  rate_limited: "The request was throttled.",
  unavailable: "A required dependency is unavailable.",
  integration_failure: "The external provider could not complete the request.",
  ambiguous_outcome:
    "The outcome of the external operation is unknown and needs reconciliation.",
  internal: "An unexpected error occurred.",
};

/**
 * Categories whose existence must not be distinguishable from the outside.
 *
 * A tenant boundary violation is reported exactly like a missing resource. If it were
 * reported as `forbidden`, the difference between "forbidden" and "not found" would confirm
 * that another organization's resource exists — a cross-tenant disclosure via error shape.
 */
const PUBLIC_CATEGORY: Readonly<Partial<Record<ErrorCategory, ErrorCategory>>> = {
  tenant_isolation: "not_found",
};

function publicCategoryOf(category: ErrorCategory): ErrorCategory {
  return PUBLIC_CATEGORY[category] ?? category;
}

/**
 * Converts any thrown value into a payload that is safe to return.
 *
 * A non-`PlatformError` is treated as internal: its message is discarded rather than
 * inspected, because an arbitrary exception string may embed a connection string, a token, a
 * query or a customer record.
 */
export function toSafeErrorPayload(
  error: unknown,
  fallbackCorrelationId?: string,
): SafeErrorPayload {
  const platformError = isPlatformError(error)
    ? error
    : new PlatformError({
        category: "internal",
        message: "Unhandled non-platform error.",
        exposure: "internal",
      });

  const category = publicCategoryOf(platformError.category);
  const masked = category !== platformError.category;

  // A masked category must also mask its code, otherwise the code reintroduces exactly the
  // distinction the masking removed.
  const code = masked ? defaultCodeForCategory(category) : platformError.code;

  const message =
    platformError.exposure === "safe" && !masked
      ? platformError.message
      : GENERIC_MESSAGE[category];

  const correlationId = platformError.correlationId ?? fallbackCorrelationId;

  // Field issues are only meaningful for validation, and only validation issues are built
  // from an allowlisted, value-free shape.
  const includeDetails =
    category === "validation" && platformError.details.length > 0;

  return {
    code,
    category,
    message,
    retryable: platformError.retryable,
    ...(correlationId !== undefined ? { correlationId } : {}),
    ...(includeDetails ? { details: platformError.details } : {}),
  };
}

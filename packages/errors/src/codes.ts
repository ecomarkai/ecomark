import type { ErrorCategory } from "./categories.js";

/**
 * Machine-readable error codes.
 *
 * Codes are part of the public contract: clients branch on them and they are translated into
 * localized copy by the UI, so they must stay stable and must never embed tenant data,
 * customer data, provider payloads or internal resource names.
 */
export const ERROR_CODE_PREFIX = "ecomark";

const CODE_PATTERN = /^ecomark\.[a-z0-9_]+(\.[a-z0-9_]+)*$/;

export function isErrorCode(value: unknown): value is string {
  return typeof value === "string" && CODE_PATTERN.test(value);
}

/** Default code used when a caller does not supply a more specific one. */
export function defaultCodeForCategory(category: ErrorCategory): string {
  return `${ERROR_CODE_PREFIX}.${category}`;
}

/**
 * @ecomarkai/errors — portable platform error primitives.
 *
 * Framework-neutral by design: no HTTP status, no NestJS metadata, no transport concept.
 * Transport boundaries own the mapping from `ErrorCategory` to their protocol.
 *
 * Dependency-free, including of the other Ecomark packages. `correlationId` is a plain string
 * rather than a branded identifier from `@ecomarkai/contracts`, because an error primitive
 * that drags a contracts dependency in becomes unusable in exactly the low-level places that
 * need it most.
 */
export {
  ERROR_CATEGORIES,
  isErrorCategory,
  isRetryableByDefault,
  type ErrorCategory,
} from "./categories.js";
export {
  ERROR_CODE_PREFIX,
  defaultCodeForCategory,
  isErrorCode,
} from "./codes.js";
export {
  PlatformError,
  isPlatformError,
  type FieldIssue,
  type MessageExposure,
  type PlatformErrorOptions,
} from "./platform-error.js";
export {
  ambiguousOutcomeError,
  conflictError,
  forbiddenError,
  integrationFailureError,
  internalError,
  notFoundError,
  rateLimitedError,
  tenantIsolationError,
  unauthenticatedError,
  unavailableError,
  validationError,
} from "./factories.js";
export { toSafeErrorPayload, type SafeErrorPayload } from "./safe-payload.js";

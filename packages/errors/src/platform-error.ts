import { isRetryableByDefault, type ErrorCategory } from "./categories.js";
import { defaultCodeForCategory } from "./codes.js";

/**
 * A safe, field-level problem describing why input was rejected.
 *
 * `path` identifies the offending field, `code` is a stable machine-readable reason and
 * `message` is developer-facing English. Product copy is produced by the UI from `code`.
 * A field issue must never echo the rejected value: input can itself be a secret.
 */
export type FieldIssue = {
  readonly path: string;
  readonly code: string;
  readonly message: string;
};

/**
 * Whether the error message may be shown outside the process.
 *
 * `internal` keeps the message for server telemetry only. Anything derived from an exception
 * string, a provider body or a query is internal by default.
 */
export type MessageExposure = "safe" | "internal";

export type PlatformErrorOptions = {
  readonly category: ErrorCategory;
  readonly message: string;
  readonly code?: string;
  readonly exposure?: MessageExposure;
  readonly retryable?: boolean;
  readonly correlationId?: string;
  readonly details?: readonly FieldIssue[];
  readonly cause?: unknown;
};

/**
 * Framework-neutral platform error.
 *
 * Deliberately carries no HTTP status, no NestJS metadata and no transport concept. Transport
 * boundaries map `category` to their own protocol. Keeping that mapping out of the primitive
 * is what lets the same error travel through the core API, a worker, the CLI and an MCP server.
 */
export class PlatformError extends Error {
  public override readonly name = "PlatformError";
  public readonly category: ErrorCategory;
  public readonly code: string;
  public readonly exposure: MessageExposure;
  public readonly retryable: boolean;
  public readonly correlationId: string | undefined;
  public readonly details: readonly FieldIssue[];

  public constructor(options: PlatformErrorOptions) {
    super(options.message);
    this.category = options.category;
    this.code = options.code ?? defaultCodeForCategory(options.category);
    this.exposure = options.exposure ?? "internal";
    this.retryable = options.retryable ?? isRetryableByDefault(options.category);
    this.correlationId = options.correlationId;
    this.details = options.details ?? [];
    if (options.cause !== undefined) {
      this.cause = options.cause;
    }
  }

  /**
   * Returns a copy bound to a correlation ID.
   *
   * Errors are raised deep in a domain where the correlation ID is usually not in scope, so a
   * boundary attaches it on the way out. Copying rather than mutating keeps a shared error
   * instance from leaking one request's correlation ID into another's telemetry.
   */
  public withCorrelationId(correlationId: string): PlatformError {
    return new PlatformError({
      category: this.category,
      message: this.message,
      code: this.code,
      exposure: this.exposure,
      retryable: this.retryable,
      correlationId,
      details: this.details,
      ...(this.cause !== undefined ? { cause: this.cause } : {}),
    });
  }
}

export function isPlatformError(value: unknown): value is PlatformError {
  return value instanceof PlatformError;
}

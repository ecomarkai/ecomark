import type { CorrelationId, RequestId } from "./identifiers.js";

/**
 * Metadata attached to a response or job outcome so a caller can correlate it with server
 * telemetry without the server disclosing internal detail.
 */
export type ResultMetadata = {
  readonly requestId: RequestId;
  readonly correlationId: CorrelationId;
  /** RFC 3339 UTC timestamp of when the server produced the result. */
  readonly observedAt: string;
};

export type WithMetadata<TData> = {
  readonly data: TData;
  readonly meta: ResultMetadata;
};

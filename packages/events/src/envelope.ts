import type { TenantRef } from "./tenant-ref.js";

/**
 * The envelope every Ecomark event travels in.
 *
 * Deliberately transport-free: no topic, partition, offset, queue name, delivery count, broker
 * or outbox concept appears here. The same envelope is valid written to a database row, handed
 * to an in-process handler, or published later, which is what keeps
 * `Domain Event -> Transactional Outbox -> Worker -> message infrastructure` open without
 * committing to any part of it now.
 */
export type EventEnvelope<TType extends string = string, TPayload = unknown> = {
  /** Unique per emitted event. Consumers deduplicate on this. */
  readonly eventId: string;
  /** Stable dotted name, for example `commerce.order.recorded`. */
  readonly eventType: TType;
  /** Incremented when the payload shape changes incompatibly. */
  readonly eventVersion: number;
  /** RFC 3339 UTC timestamp of when the fact happened, not when it was published. */
  readonly occurredAt: string;
  /** Shared by every event, log and span produced while handling one operation. */
  readonly correlationId: string;
  /** The event that directly caused this one. Absent for an operation's first event. */
  readonly causationId?: string;
  /** Present for tenant-owned events, absent for platform-level ones. */
  readonly tenant?: TenantRef;
  readonly payload: TPayload;
};

/**
 * Time source, injected rather than read from `Date` directly so ordering and freshness
 * behavior is tested deterministically instead of against a moving clock.
 */
export type Clock = {
  readonly now: () => string;
};

/** Identifier source, injected for the same reason as `Clock`. */
export type EventIdFactory = {
  readonly next: () => string;
};

export type EventEnvelopeDependencies = {
  readonly clock: Clock;
  readonly eventIds: EventIdFactory;
};

export function systemClock(): Clock {
  return { now: () => new Date().toISOString() };
}

/**
 * Identifier factory backed by the runtime's cryptographic UUID generator.
 *
 * Event identifiers drive deduplication, so they must not be predictable or collide across
 * processes.
 */
export function randomEventIdFactory(
  generate: () => string = () => globalThis.crypto.randomUUID(),
): EventIdFactory {
  return { next: generate };
}

export type NewEvent<TType extends string, TPayload> = {
  readonly eventType: TType;
  readonly eventVersion: number;
  readonly correlationId: string;
  readonly payload: TPayload;
  readonly tenant?: TenantRef;
  readonly occurredAt?: string;
};

function assertUsableVersion(eventVersion: number): void {
  if (!Number.isInteger(eventVersion) || eventVersion < 1) {
    throw new RangeError(
      "eventVersion must be a positive integer so consumers can resolve payload compatibility.",
    );
  }
}

function assertUsableCorrelation(correlationId: string): void {
  if (correlationId.length === 0) {
    throw new RangeError(
      "correlationId must not be empty; an uncorrelated event cannot be traced to its operation.",
    );
  }
}

/**
 * Creates a root envelope: the first event of a logical operation.
 *
 * `occurredAt` may be supplied when the fact happened before publication, which is routine for
 * a provider webhook reporting an event that occurred before it reached us. Otherwise the
 * injected clock is used.
 */
export function createEventEnvelope<TType extends string, TPayload>(
  event: NewEvent<TType, TPayload>,
  dependencies: EventEnvelopeDependencies,
): EventEnvelope<TType, TPayload> {
  assertUsableVersion(event.eventVersion);
  assertUsableCorrelation(event.correlationId);
  return {
    eventId: dependencies.eventIds.next(),
    eventType: event.eventType,
    eventVersion: event.eventVersion,
    occurredAt: event.occurredAt ?? dependencies.clock.now(),
    correlationId: event.correlationId,
    ...(event.tenant !== undefined ? { tenant: event.tenant } : {}),
    payload: event.payload,
  };
}

/** A derived event names neither its correlation nor its tenant: both come from the parent. */
export type DerivedEvent<TType extends string, TPayload> = Omit<
  NewEvent<TType, TPayload>,
  "correlationId" | "tenant"
>;

/**
 * Creates an envelope caused by an existing one.
 *
 * Correlation is inherited and causation is set to the parent's `eventId`, so a chain of
 * handlers stays traceable to the operation that started it.
 *
 * The tenant reference is inherited and cannot be overridden. Allowing a derived event to name
 * a different tenant would let one tenant's event produce another tenant's event through
 * nothing but a handler bug. A genuinely different scope must be an explicitly authorized new
 * root event.
 */
export function deriveEventEnvelope<TType extends string, TPayload>(
  parent: EventEnvelope,
  event: DerivedEvent<TType, TPayload>,
  dependencies: EventEnvelopeDependencies,
): EventEnvelope<TType, TPayload> {
  assertUsableVersion(event.eventVersion);
  return {
    eventId: dependencies.eventIds.next(),
    eventType: event.eventType,
    eventVersion: event.eventVersion,
    occurredAt: event.occurredAt ?? dependencies.clock.now(),
    correlationId: parent.correlationId,
    causationId: parent.eventId,
    ...(parent.tenant !== undefined ? { tenant: parent.tenant } : {}),
    payload: event.payload,
  };
}

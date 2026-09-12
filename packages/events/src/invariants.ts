import type { EventEnvelope } from "./envelope.js";
import { isTenantRef } from "./tenant-ref.js";

/**
 * Structural checks for the envelope itself.
 *
 * Scope is deliberately narrow: these verify the envelope's own invariants and nothing else.
 * Payload validation is the consumer's responsibility and stays out of this package, because
 * no runtime validation technology is approved for the repository yet. When that ADR lands,
 * payload validation composes on top of these checks rather than replacing them.
 *
 * An envelope that has been through a database row, a queue or a file is untyped JSON again by
 * the time a worker sees it, so it is rechecked at that boundary rather than trusted because
 * it was valid when written.
 */

const EVENT_TYPE = /^[a-z][a-z0-9]*(\.[a-z][a-z0-9_]*){1,4}$/;

const RFC_3339 =
  /^(\d{4})-(\d{2})-(\d{2})T\d{2}:\d{2}:\d{2}(\.\d{1,9})?(Z|[+-]\d{2}:\d{2})$/;

/** Dotted, lowercase event name such as `commerce.order.recorded`. */
export function isEventType(value: unknown): value is string {
  return typeof value === "string" && EVENT_TYPE.test(value);
}

/**
 * Whether a calendar date exists.
 *
 * `Date.parse("2026-02-31T00:00:00Z")` does not fail: it silently resolves to 2026-03-03. An
 * `occurredAt` that quietly moves by two days would corrupt ordering, freshness and
 * reconciliation downstream, so the parsed date is compared back against what was written.
 */
function isRealCalendarDate(year: number, month: number, day: number): boolean {
  const parsed = new Date(Date.UTC(year, month - 1, day));
  return (
    parsed.getUTCFullYear() === year &&
    parsed.getUTCMonth() === month - 1 &&
    parsed.getUTCDate() === day
  );
}

export function isTimestamp(value: unknown): value is string {
  if (typeof value !== "string") {
    return false;
  }
  const match = RFC_3339.exec(value);
  if (match === null) {
    return false;
  }
  const [, year, month, day] = match;
  if (year === undefined || month === undefined || day === undefined) {
    return false;
  }
  if (!isRealCalendarDate(Number(year), Number(month), Number(day))) {
    return false;
  }
  // Catches out-of-range time components, which the pattern alone permits.
  return !Number.isNaN(Date.parse(value));
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.length > 0;
}

/**
 * Lists every violated envelope invariant.
 *
 * All violations are collected rather than failing on the first, so a malformed producer is
 * diagnosed in one pass. Each entry names the offending field and never quotes its value: an
 * envelope can carry customer data, and this output is written to logs.
 */
export function envelopeViolations(value: unknown): readonly string[] {
  if (typeof value !== "object" || value === null || Array.isArray(value)) {
    return ["envelope: expected an object"];
  }
  const candidate = value as Record<string, unknown>;
  const violations: string[] = [];

  if (!isNonEmptyString(candidate["eventId"])) {
    violations.push("eventId: expected a non-empty string");
  }
  if (!isEventType(candidate["eventType"])) {
    violations.push("eventType: expected a dotted lowercase name");
  }
  const eventVersion = candidate["eventVersion"];
  if (typeof eventVersion !== "number" || !Number.isInteger(eventVersion) || eventVersion < 1) {
    violations.push("eventVersion: expected a positive integer");
  }
  if (!isTimestamp(candidate["occurredAt"])) {
    violations.push("occurredAt: expected an RFC 3339 timestamp");
  }
  if (!isNonEmptyString(candidate["correlationId"])) {
    violations.push("correlationId: expected a non-empty string");
  }
  if (candidate["causationId"] !== undefined && !isNonEmptyString(candidate["causationId"])) {
    violations.push("causationId: expected a non-empty string when present");
  }
  if (candidate["tenant"] !== undefined && !isTenantRef(candidate["tenant"])) {
    violations.push("tenant: expected a scope and id when present");
  }
  if (!("payload" in candidate)) {
    violations.push("payload: expected to be present");
  }

  return violations;
}

/**
 * Narrows an unknown value to an envelope with an unvalidated payload.
 *
 * The payload is typed `unknown` on purpose: this function proves the envelope is well formed,
 * never that the payload matches what a handler expects.
 */
export function isEventEnvelope(value: unknown): value is EventEnvelope<string, unknown> {
  return envelopeViolations(value).length === 0;
}

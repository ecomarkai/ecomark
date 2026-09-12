import { describe, expect, it } from "vitest";
import {
  createEventEnvelope,
  envelopeViolations,
  isEventEnvelope,
  isEventType,
  isTenantRef,
  isTimestamp,
  randomEventIdFactory,
  systemClock,
} from "../src/index.js";

const wellFormed = {
  eventId: "evt_1",
  eventType: "commerce.order.recorded",
  eventVersion: 1,
  occurredAt: "2026-09-12T10:00:00Z",
  correlationId: "corr_1",
  payload: { orderId: "order_1" },
};

function fields(value: unknown): string[] {
  return envelopeViolations(value).map((violation) => violation.split(":")[0] ?? "");
}

describe("isEventEnvelope", () => {
  it("accepts a well-formed envelope", () => {
    expect(isEventEnvelope(wellFormed)).toBe(true);
    expect(envelopeViolations(wellFormed)).toEqual([]);
  });

  it("accepts a tenant-scoped envelope and one with a causation link", () => {
    expect(
      isEventEnvelope({
        ...wellFormed,
        tenant: { scope: "organization", id: "org_1" },
        causationId: "evt_0",
      }),
    ).toBe(true);
  });

  it("round-trips an envelope built by the factory through JSON", () => {
    // This is the outbox path: the envelope becomes untyped JSON in a row and is rechecked by
    // the worker rather than trusted because it was valid when written.
    const built = createEventEnvelope(
      {
        eventType: "commerce.order.recorded",
        eventVersion: 1,
        correlationId: "corr_1",
        tenant: { scope: "organization", id: "org_1" },
        payload: { orderId: "order_1" },
      },
      { clock: systemClock(), eventIds: randomEventIdFactory() },
    );
    const revived: unknown = JSON.parse(JSON.stringify(built));

    expect(isEventEnvelope(revived)).toBe(true);
    expect(revived).toEqual(built);
  });

  it("rejects values that are not envelope-shaped at all", () => {
    for (const value of [null, undefined, [], "envelope", 42, true]) {
      expect(isEventEnvelope(value)).toBe(false);
      expect(envelopeViolations(value)).toEqual(["envelope: expected an object"]);
    }
  });

  it("reports every violation at once rather than failing on the first", () => {
    expect(fields({}).sort()).toEqual([
      "correlationId",
      "eventId",
      "eventType",
      "eventVersion",
      "occurredAt",
      "payload",
    ]);
  });

  it("requires a present payload but does not inspect it", () => {
    // Payload validation belongs to the consumer and is deferred pending the validation ADR.
    expect(fields({ ...wellFormed, payload: undefined })).toEqual([]);
    expect(isEventEnvelope({ ...wellFormed, payload: null })).toBe(true);
    const withoutPayload: Record<string, unknown> = { ...wellFormed };
    delete withoutPayload["payload"];
    expect(fields(withoutPayload)).toEqual(["payload"]);
  });

  it("rejects a non-positive or fractional version", () => {
    for (const eventVersion of [0, -1, 1.5, "1"]) {
      expect(fields({ ...wellFormed, eventVersion })).toEqual(["eventVersion"]);
    }
  });

  it("rejects an optional field that is present but malformed", () => {
    expect(fields({ ...wellFormed, causationId: "" })).toEqual(["causationId"]);
    expect(fields({ ...wellFormed, tenant: { scope: "organization" } })).toEqual(["tenant"]);
    expect(fields({ ...wellFormed, tenant: "org_1" })).toEqual(["tenant"]);
  });

  it("never quotes a field value in a violation", () => {
    // Violations are written to logs, and an envelope can carry customer data.
    const violations = envelopeViolations({
      ...wellFormed,
      eventId: "",
      correlationId: "",
      payload: { email: "customer@example.test" },
      eventType: "Nope",
    });
    const serialized = violations.join(" ");
    expect(violations.length).toBeGreaterThan(0);
    expect(serialized).not.toContain("customer@example.test");
    expect(serialized).not.toContain("Nope");
  });
});

describe("isEventType", () => {
  it("accepts dotted lowercase names", () => {
    for (const value of ["commerce.order.recorded", "platform.health.checked", "a.b"]) {
      expect(isEventType(value), value).toBe(true);
    }
  });

  it("rejects names that are not stable dotted identifiers", () => {
    for (const value of [
      "Commerce.Order",
      "order",
      "commerce..order",
      "commerce.order.",
      "a.b.c.d.e.f",
      "",
      42,
    ]) {
      expect(isEventType(value), String(value)).toBe(false);
    }
  });
});

describe("isTimestamp", () => {
  it("accepts RFC 3339 timestamps with an explicit offset", () => {
    for (const value of [
      "2026-09-12T10:30:00Z",
      "2026-09-12T10:30:00.123Z",
      "2026-09-12T10:30:00+02:00",
    ]) {
      expect(isTimestamp(value), value).toBe(true);
    }
  });

  it("rejects impossible days that Date.parse would silently roll over", () => {
    // Date.parse("2026-02-31T00:00:00Z") resolves to 2026-03-03 rather than failing, and an
    // occurredAt that moves two days would corrupt ordering and freshness downstream.
    for (const value of [
      "2026-02-30T00:00:00Z",
      "2026-02-31T00:00:00Z",
      "2026-04-31T00:00:00Z",
      "2026-13-01T00:00:00Z",
      "2026-00-10T00:00:00Z",
      "2026-01-32T00:00:00Z",
    ]) {
      expect(isTimestamp(value), value).toBe(false);
    }
  });

  it("accepts a real leap day and rejects a fake one", () => {
    expect(isTimestamp("2028-02-29T00:00:00Z")).toBe(true);
    expect(isTimestamp("2026-02-29T00:00:00Z")).toBe(false);
  });

  it("rejects out-of-range time components and missing offsets", () => {
    for (const value of [
      "2026-09-12T25:00:00Z",
      "2026-09-12T10:61:00Z",
      "2026-09-12T10:30:00",
      "yesterday",
    ]) {
      expect(isTimestamp(value), value).toBe(false);
    }
  });
});

describe("isTenantRef", () => {
  it("accepts a scope and id pair", () => {
    expect(isTenantRef({ scope: "organization", id: "org_1" })).toBe(true);
  });

  it("rejects partial or empty references", () => {
    for (const value of [
      {},
      { scope: "organization" },
      { id: "org_1" },
      { scope: "", id: "org_1" },
      { scope: "organization", id: "" },
      null,
      "organization:org_1",
    ]) {
      expect(isTenantRef(value)).toBe(false);
    }
  });

  it("stays open to a richer scope without breaking existing consumers", () => {
    // Extra metadata is tolerated so the tenancy model can add fields later.
    expect(isTenantRef({ scope: "store", id: "store_1", parent: "org_1" })).toBe(true);
  });
});

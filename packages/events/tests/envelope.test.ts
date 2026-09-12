import { describe, expect, it } from "vitest";
import {
  createEventEnvelope,
  deriveEventEnvelope,
  randomEventIdFactory,
  systemClock,
  type Clock,
  type EventEnvelopeDependencies,
  type EventIdFactory,
  type TenantRef,
} from "../src/index.js";

const tenant: TenantRef = { scope: "organization", id: "org_1" };
const otherTenant: TenantRef = { scope: "organization", id: "org_2" };

function fixedClock(value: string): Clock {
  return { now: () => value };
}

function sequentialIds(): EventIdFactory {
  let counter = 0;
  return {
    next: () => {
      counter += 1;
      return `evt_${String(counter)}`;
    },
  };
}

function deps(): EventEnvelopeDependencies {
  return { clock: fixedClock("2026-09-12T10:00:00Z"), eventIds: sequentialIds() };
}

describe("createEventEnvelope", () => {
  it("builds a root envelope from the injected clock and id factory", () => {
    const envelope = createEventEnvelope(
      {
        eventType: "commerce.order.recorded",
        eventVersion: 1,
        correlationId: "corr_1",
        tenant,
        payload: { orderId: "order_1" },
      },
      deps(),
    );

    expect(envelope).toEqual({
      eventId: "evt_1",
      eventType: "commerce.order.recorded",
      eventVersion: 1,
      occurredAt: "2026-09-12T10:00:00Z",
      correlationId: "corr_1",
      tenant,
      payload: { orderId: "order_1" },
    });
  });

  it("omits causationId on a root event rather than setting it to undefined", () => {
    const envelope = createEventEnvelope(
      { eventType: "platform.health.checked", eventVersion: 1, correlationId: "c", payload: {} },
      deps(),
    );
    expect("causationId" in envelope).toBe(false);
  });

  it("omits tenant for platform-level events", () => {
    const envelope = createEventEnvelope(
      { eventType: "platform.health.checked", eventVersion: 1, correlationId: "c", payload: {} },
      deps(),
    );
    expect("tenant" in envelope).toBe(false);
  });

  it("accepts an explicit occurredAt for facts that happened before publication", () => {
    // A provider webhook routinely reports an event that occurred before it reached us.
    const envelope = createEventEnvelope(
      {
        eventType: "commerce.order.recorded",
        eventVersion: 1,
        correlationId: "corr_1",
        payload: {},
        occurredAt: "2026-09-11T08:00:00Z",
      },
      deps(),
    );
    expect(envelope.occurredAt).toBe("2026-09-11T08:00:00Z");
  });

  it("rejects a version that cannot express payload compatibility", () => {
    for (const eventVersion of [0, -1, 1.5, Number.NaN]) {
      expect(() =>
        createEventEnvelope(
          { eventType: "a.b", eventVersion, correlationId: "c", payload: {} },
          deps(),
        ),
      ).toThrow(RangeError);
    }
  });

  it("rejects an empty correlation identifier", () => {
    // An uncorrelated event cannot be traced back to the operation that produced it.
    expect(() =>
      createEventEnvelope(
        { eventType: "a.b", eventVersion: 1, correlationId: "", payload: {} },
        deps(),
      ),
    ).toThrow(RangeError);
  });

  it("issues a distinct id per event", () => {
    const dependencies = deps();
    const first = createEventEnvelope(
      { eventType: "a.b", eventVersion: 1, correlationId: "c", payload: {} },
      dependencies,
    );
    const second = createEventEnvelope(
      { eventType: "a.b", eventVersion: 1, correlationId: "c", payload: {} },
      dependencies,
    );
    expect(first.eventId).not.toBe(second.eventId);
  });
});

describe("deriveEventEnvelope", () => {
  const dependencies = deps();
  const parent = createEventEnvelope(
    {
      eventType: "commerce.order.recorded",
      eventVersion: 1,
      correlationId: "corr_1",
      tenant,
      payload: { orderId: "order_1" },
    },
    dependencies,
  );
  const child = deriveEventEnvelope(
    parent,
    { eventType: "analytics.metrics.invalidated", eventVersion: 2, payload: {} },
    dependencies,
  );

  it("inherits correlation so the whole chain traces to one operation", () => {
    expect(child.correlationId).toBe(parent.correlationId);
  });

  it("records the parent as the cause", () => {
    expect(child.causationId).toBe(parent.eventId);
    expect(child.eventId).not.toBe(parent.eventId);
  });

  it("inherits the tenant reference", () => {
    expect(child.tenant).toEqual(tenant);
  });

  it("offers no way for a derived event to change tenant", () => {
    // `DerivedEvent` omits `tenant` at the type level. Passed through a variable so structural
    // typing permits the extra property, proving the runtime ignores it too, rather than only
    // that a literal would be rejected at compile time.
    const rogueInput = {
      eventType: "analytics.metrics.invalidated" as const,
      eventVersion: 1,
      payload: {},
      tenant: otherTenant,
      correlationId: "corr_attacker",
    };
    const attempted = deriveEventEnvelope(parent, rogueInput, dependencies);

    expect(attempted.tenant).toEqual(tenant);
    expect(attempted.tenant).not.toEqual(otherTenant);
    expect(attempted.correlationId).toBe("corr_1");
  });

  it("keeps a platform-level parent tenant-free", () => {
    const platformParent = createEventEnvelope(
      { eventType: "platform.health.checked", eventVersion: 1, correlationId: "c", payload: {} },
      dependencies,
    );
    const derived = deriveEventEnvelope(
      platformParent,
      { eventType: "platform.alert.raised", eventVersion: 1, payload: {} },
      dependencies,
    );
    expect("tenant" in derived).toBe(false);
  });

  it("supports a multi-step chain where every link shares one correlation", () => {
    const grandchild = deriveEventEnvelope(
      child,
      { eventType: "analytics.metrics.rebuilt", eventVersion: 1, payload: {} },
      dependencies,
    );
    expect(grandchild.correlationId).toBe("corr_1");
    expect(grandchild.causationId).toBe(child.eventId);
  });
});

describe("injected ports", () => {
  it("systemClock produces a timestamp the invariants accept", () => {
    expect(systemClock().now()).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/);
  });

  it("randomEventIdFactory delegates to the injected generator", () => {
    expect(randomEventIdFactory(() => "fixed-id").next()).toBe("fixed-id");
  });

  it("randomEventIdFactory defaults to unique values", () => {
    const factory = randomEventIdFactory();
    expect(factory.next()).not.toBe(factory.next());
  });
});

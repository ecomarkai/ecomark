import { describe, expect, it } from "vitest";
import {
  forbiddenError,
  integrationFailureError,
  internalError,
  notFoundError,
  tenantIsolationError,
  toSafeErrorPayload,
  validationError,
} from "../src/index.js";

const correlationId = "corr_01H";

describe("toSafeErrorPayload", () => {
  it("never returns a stack or a cause", () => {
    const payload = toSafeErrorPayload(
      integrationFailureError("Shopify 502", { cause: new Error("upstream") }),
    );
    expect(payload).not.toHaveProperty("stack");
    expect(payload).not.toHaveProperty("cause");
    expect(Object.keys(payload).sort()).toEqual(["category", "code", "message", "retryable"]);
  });

  it("returns safe messages verbatim", () => {
    const payload = toSafeErrorPayload(notFoundError("Store was not found."));
    expect(payload.message).toBe("Store was not found.");
    expect(payload.category).toBe("not_found");
  });

  it("replaces an internal message with a generic one", () => {
    const payload = toSafeErrorPayload(
      internalError("connection to postgres://user:hunter2@db:5432 refused"),
    );
    expect(payload.message).toBe("An unexpected error occurred.");
    expect(payload.message).not.toContain("hunter2");
    expect(payload.message).not.toContain("postgres");
  });

  it("discards the message of an unknown thrown value instead of inspecting it", () => {
    const payload = toSafeErrorPayload(new Error("Bearer sk-live-abc123 rejected"));
    expect(payload.category).toBe("internal");
    expect(payload.code).toBe("ecomark.internal");
    expect(payload.message).toBe("An unexpected error occurred.");
    expect(JSON.stringify(payload)).not.toContain("sk-live");
  });

  it("survives thrown values that are not errors at all", () => {
    for (const thrown of [null, undefined, "boom", 42, { code: "leak" }]) {
      const payload = toSafeErrorPayload(thrown);
      expect(payload.category).toBe("internal");
      expect(payload.message).toBe("An unexpected error occurred.");
    }
  });

  it("returns validation field issues, which are safe by construction", () => {
    const payload = toSafeErrorPayload(
      validationError("Invalid request.", [
        { path: "limit", code: "out_of_range", message: "limit must be between 1 and 200" },
      ]),
    );
    expect(payload.details).toEqual([
      { path: "limit", code: "out_of_range", message: "limit must be between 1 and 200" },
    ]);
  });

  it("omits details for every non-validation category", () => {
    const payload = toSafeErrorPayload(
      forbiddenError("Not permitted.", { code: "ecomark.forbidden.role" }),
    );
    expect(payload.details).toBeUndefined();
  });

  it("attaches a fallback correlation ID only when the error carries none", () => {
    const withOwn = validationError("bad").withCorrelationId("corr_own");
    expect(toSafeErrorPayload(withOwn, correlationId).correlationId).toBe("corr_own");
    expect(toSafeErrorPayload(validationError("bad"), correlationId).correlationId).toBe(
      correlationId,
    );
  });
});

describe("cross-tenant disclosure", () => {
  const tenantPayload = toSafeErrorPayload(
    tenantIsolationError("organization org_a may not read store store_b"),
  );
  const missingPayload = toSafeErrorPayload(notFoundError());

  it("masks a tenant boundary violation as a missing resource", () => {
    expect(tenantPayload.category).toBe("not_found");
    expect(tenantPayload.code).toBe("ecomark.not_found");
  });

  it("is byte-for-byte indistinguishable from a genuine missing resource", () => {
    // If these differed, the difference would confirm that another tenant's resource exists.
    expect(tenantPayload).toEqual(missingPayload);
  });

  it("does not leak the offending identifiers", () => {
    const serialized = JSON.stringify(tenantPayload);
    expect(serialized).not.toContain("org_a");
    expect(serialized).not.toContain("store_b");
  });

  it("preserves the real category on the error itself for audit and telemetry", () => {
    expect(tenantIsolationError("x").category).toBe("tenant_isolation");
  });
});

import { describe, expect, it } from "vitest";
import {
  isIdentifier,
  toCorrelationId,
  toOrganizationId,
  toStoreId,
  toUserId,
  type OrganizationId,
  type TenantContext,
} from "../src/index.js";

const NUL = String.fromCharCode(0);

describe("identifier constructors", () => {
  it("returns the value for an acceptable identifier", () => {
    expect(toOrganizationId("org_123")).toBe("org_123");
    expect(toStoreId("store-42")).toBe("store-42");
    expect(toUserId("A")).toBe("A");
    expect(toUserId("a".repeat(64))).toBe("a".repeat(64));
  });

  it("refuses values that change meaning in a path, URL, log line or cache key", () => {
    for (const value of [
      "../../etc/passwd",
      "org 123",
      "org/123",
      "org?a=b",
      "org#frag",
      "org:123",
      "org\nadmin",
      `org${NUL}`,
      "_leading",
      "-leading",
      "",
      "a".repeat(65),
    ]) {
      expect(toOrganizationId(value), JSON.stringify(value)).toBeUndefined();
    }
  });

  it("refuses non-strings, including values that would stringify plausibly", () => {
    for (const value of [null, undefined, 123, {}, ["org_1"]]) {
      expect(toOrganizationId(value)).toBeUndefined();
    }
  });

  it("reports failure by returning undefined rather than throwing", () => {
    // A caller must handle the failure; there is no variant that silently coerces.
    expect(() => toOrganizationId("bad id")).not.toThrow();
    expect(toOrganizationId("bad id")).toBeUndefined();
  });

  it("exposes the same predicate the constructors use", () => {
    expect(isIdentifier("org_1")).toBe(true);
    expect(isIdentifier("org 1")).toBe(false);
    expect(isIdentifier(42)).toBe(false);
  });
});

describe("branded identifiers in use", () => {
  it("builds a TenantContext without any type assertion", () => {
    const organizationId = toOrganizationId("org_1");
    const userId = toUserId("user_1");
    if (organizationId === undefined || userId === undefined) {
      throw new Error("expected both identifiers to be accepted");
    }

    // Compiles because the constructors produced the brands. A raw string here would not
    // type-check, which is the whole point of branding the tenancy identifiers.
    const context: TenantContext = { organizationId, userId };

    expect(context).toEqual({ organizationId: "org_1", userId: "user_1" });
    expect("storeId" in context).toBe(false);
  });

  it("carries no runtime marker, so the guarantee is entirely compile-time", () => {
    // Both brands are plain strings once compiled, which is why `tests/types.assert.ts`
    // carries the assertions this runtime test cannot make.
    const organization: OrganizationId | undefined = toOrganizationId("shared_value");
    expect(organization).toBe("shared_value");
    expect(typeof organization).toBe("string");
  });

  it("accepts a correlation identifier for telemetry", () => {
    expect(toCorrelationId("corr_01H")).toBe("corr_01H");
  });
});

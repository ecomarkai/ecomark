import { describe, expect, it } from "vitest";
import type { OrganizationId, TenantContext, UserId } from "@ecomarkai/contracts";
import { toOrganizationId } from "@ecomarkai/contracts";
import {
  correlationIdSchema,
  organizationIdSchema,
  parse,
  parseOrUndefined,
  storeIdSchema,
  userIdSchema,
} from "../src/index.js";

describe("identifier schemas", () => {
  it("accepts ordinary identifiers", () => {
    for (const value of ["org_123", "A", "store-42", "a".repeat(64)]) {
      expect(parse(organizationIdSchema, value).ok, value).toBe(true);
    }
  });

  it("refuses values that change meaning in a path, URL, log line or cache key", () => {
    for (const value of [
      "../../etc/passwd",
      "org 123",
      "org/123",
      "org?a=b",
      "org:123",
      "_leading",
      "",
      "a".repeat(65),
    ]) {
      expect(parse(organizationIdSchema, value).ok, JSON.stringify(value)).toBe(false);
    }
  });

  it("refuses non-strings before the identifier rule is reached", () => {
    for (const value of [null, undefined, 123, {}, ["org_1"]]) {
      expect(parse(organizationIdSchema, value).ok).toBe(false);
    }
  });

  it("applies exactly the rule @ecomarkai/contracts owns, not a second copy of it", () => {
    // The schema composes the contracts constructor. If the two ever disagreed, this would
    // fail — which is the point: there is one definition of a valid identifier.
    const probes = ["org_1", "bad id", "", "a".repeat(65), "A-9_z", "../x"];
    for (const probe of probes) {
      const viaContracts = toOrganizationId(probe) !== undefined;
      const viaSchema = parse(organizationIdSchema, probe).ok;
      expect(viaSchema, probe).toBe(viaContracts);
    }
  });

  it("produces the branded contract type, not a plain string", () => {
    const organizationId = parseOrUndefined(organizationIdSchema, "org_1");
    const userId = parseOrUndefined(userIdSchema, "user_1");
    if (organizationId === undefined || userId === undefined) {
      throw new Error("expected both identifiers to parse");
    }

    // Compiles only because the schemas output branded types. If they returned `string`, this
    // assignment would not type-check, and the cross-tenant safety guarantee would be gone.
    const context: TenantContext = { organizationId, userId };
    expect(context).toEqual({ organizationId: "org_1", userId: "user_1" });
  });

  it("keeps brands distinct: a store id schema does not produce an organization id", () => {
    const storeId = parseOrUndefined(storeIdSchema, "store_1");
    expect(storeId).toBe("store_1");
    // Type-level proof lives in tests/types.assert.ts; this records the runtime value.
    const organizationId: OrganizationId | undefined = parseOrUndefined(
      organizationIdSchema,
      "store_1",
    );
    expect(organizationId).toBe("store_1");
  });

  it("reports a failure reason without echoing the rejected value", () => {
    // Identifiers can carry tenant detail and validation output is routinely logged.
    const result = parse(correlationIdSchema, "corr id with spaces");
    expect(result.ok).toBe(false);
    if (result.ok) {
      return;
    }
    const serialized = JSON.stringify(result.issues);
    expect(serialized).toContain("correlation id");
    expect(serialized).not.toContain("corr id with spaces");
  });

  it("accepts each identifier kind", () => {
    // Checked one by one rather than in a loop: the brands are distinct types, so an array of
    // them is a union that `parse` correctly refuses. That refusal is the guarantee working.
    const id = "abc_123";
    expect(parse(userIdSchema, id).ok).toBe(true);
    expect(parse(organizationIdSchema, id).ok).toBe(true);
    expect(parse(storeIdSchema, id).ok).toBe(true);
    expect(parse(correlationIdSchema, id).ok).toBe(true);
  });
});

describe("user id schema", () => {
  it("narrows to UserId for downstream use", () => {
    const result = parse(userIdSchema, "user_9");
    expect(result.ok).toBe(true);
    if (!result.ok) {
      return;
    }
    const userId: UserId = result.value;
    expect(userId).toBe("user_9");
  });
});

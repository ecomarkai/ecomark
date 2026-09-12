import { describe, expect, it } from "vitest";
import {
  ERROR_CATEGORIES,
  PlatformError,
  ambiguousOutcomeError,
  defaultCodeForCategory,
  integrationFailureError,
  isErrorCategory,
  isErrorCode,
  isPlatformError,
  isRetryableByDefault,
  rateLimitedError,
  validationError,
} from "../src/index.js";

const correlationId = "corr_01H";

describe("PlatformError", () => {
  it("is a real Error so existing catch and logging paths keep working", () => {
    const error = validationError("Invalid limit.");
    expect(error).toBeInstanceOf(Error);
    expect(error.name).toBe("PlatformError");
    expect(error.stack).toBeTypeOf("string");
  });

  it("derives a stable default code from the category", () => {
    expect(validationError("bad").code).toBe("ecomark.validation");
    expect(isErrorCode(validationError("bad").code)).toBe(true);
  });

  it("keeps an explicit code when one is supplied", () => {
    const error = validationError("bad", [], { code: "ecomark.validation.limit_range" });
    expect(error.code).toBe("ecomark.validation.limit_range");
  });

  it("preserves the cause for server telemetry without exposing it", () => {
    const cause = new Error("socket hang up");
    const error = integrationFailureError("Provider call failed.", { cause });
    expect(error.cause).toBe(cause);
  });

  it("attaches a correlation ID by copying rather than mutating", () => {
    const original = validationError("bad");
    const correlated = original.withCorrelationId(correlationId);

    expect(correlated.correlationId).toBe(correlationId);
    expect(correlated.code).toBe(original.code);
    expect(correlated.details).toEqual(original.details);
    // A shared instance must not leak one operation's correlation ID into another's.
    expect(original.correlationId).toBeUndefined();
    expect(correlated).not.toBe(original);
  });

  it("identifies platform errors without relying on duck typing", () => {
    expect(isPlatformError(validationError("bad"))).toBe(true);
    expect(isPlatformError(new Error("plain"))).toBe(false);
    expect(isPlatformError({ category: "validation", code: "x" })).toBe(false);
    expect(isPlatformError(null)).toBe(false);
  });
});

describe("retry semantics", () => {
  it("marks throttling and dependency outages as retryable", () => {
    expect(rateLimitedError().retryable).toBe(true);
    expect(isRetryableByDefault("unavailable")).toBe(true);
    expect(isRetryableByDefault("integration_failure")).toBe(true);
  });

  it("never marks an ambiguous external outcome retryable", () => {
    // An effect may already have been applied; a blind retry risks a duplicate paid action.
    expect(ambiguousOutcomeError("Charge state unknown.").retryable).toBe(false);
    expect(isRetryableByDefault("ambiguous_outcome")).toBe(false);
  });

  it("never marks an authorization or validation failure retryable", () => {
    for (const category of ["validation", "unauthenticated", "forbidden", "tenant_isolation"] as const) {
      expect(isRetryableByDefault(category)).toBe(false);
    }
  });

  it("allows an explicit override of the default", () => {
    const error = new PlatformError({
      category: "conflict",
      message: "Retry after refresh.",
      retryable: true,
    });
    expect(error.retryable).toBe(true);
  });
});

describe("category vocabulary", () => {
  it("covers every classification required by the error handling standard", () => {
    expect(ERROR_CATEGORIES).toEqual([
      "validation",
      "unauthenticated",
      "forbidden",
      "tenant_isolation",
      "not_found",
      "conflict",
      "rate_limited",
      "unavailable",
      "integration_failure",
      "ambiguous_outcome",
      "internal",
    ]);
  });

  it("rejects unknown categories and codes", () => {
    expect(isErrorCategory("teapot")).toBe(false);
    expect(isErrorCategory(undefined)).toBe(false);
    expect(isErrorCode("validation")).toBe(false);
    expect(isErrorCode("ecomark.Validation")).toBe(false);
    expect(isErrorCode(defaultCodeForCategory("not_found"))).toBe(true);
  });
});

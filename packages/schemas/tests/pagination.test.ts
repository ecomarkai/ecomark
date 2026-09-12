import { describe, expect, it } from "vitest";
import type { CursorPageRequest } from "@ecomarkai/contracts";
import {
  DEFAULT_PAGE_LIMIT,
  MAX_PAGE_LIMIT,
  cursorPageRequestSchema,
  parse,
  sortDirectionSchema,
} from "../src/index.js";

function issuePaths(input: unknown): string[] {
  const result = parse(cursorPageRequestSchema, input);
  return result.ok ? [] : result.issues.map((issue) => issue.path).sort();
}

describe("cursorPageRequestSchema", () => {
  it("accepts a bounded request", () => {
    const result = parse(cursorPageRequestSchema, { limit: 50 });
    expect(result).toEqual({ ok: true, value: { limit: 50 } });
  });

  it("accepts a full request", () => {
    const result = parse(cursorPageRequestSchema, {
      limit: 10,
      cursor: "opaque-cursor",
      direction: "desc",
    });
    expect(result).toEqual({
      ok: true,
      value: { limit: 10, cursor: "opaque-cursor", direction: "desc" },
    });
  });

  it("applies a default limit so an unbounded query is impossible", () => {
    const result = parse(cursorPageRequestSchema, {});
    expect(result.ok).toBe(true);
    if (!result.ok) {
      return;
    }
    expect(result.value.limit).toBe(DEFAULT_PAGE_LIMIT);
  });

  it("enforces the maximum page size so no caller can opt out", () => {
    expect(issuePaths({ limit: MAX_PAGE_LIMIT + 1 })).toEqual(["limit"]);
    expect(parse(cursorPageRequestSchema, { limit: MAX_PAGE_LIMIT }).ok).toBe(true);
  });

  it("rejects a limit that is not a positive integer", () => {
    for (const limit of [0, -1, 1.5, "10", null]) {
      expect(issuePaths({ limit }), String(limit)).toEqual(["limit"]);
    }
  });

  it("rejects unknown fields instead of stripping them", () => {
    // Silently dropping an unexpected field is how a privileged property gets mass-assigned:
    // the caller believes it was accepted and the server believes it was never sent.
    expect(issuePaths({ limit: 10, isPlatformAdmin: true })).toEqual(["isPlatformAdmin"]);
  });

  it("rejects offset-style pagination outright rather than ignoring it", () => {
    // Quietly returning page one for an offset request is worse than failing.
    expect(issuePaths({ limit: 10, offset: 100 })).toEqual(["offset"]);
  });

  it("rejects an unknown sort direction", () => {
    expect(issuePaths({ limit: 10, direction: "sideways" })).toEqual(["direction"]);
  });

  it("rejects an empty or oversized cursor", () => {
    expect(issuePaths({ limit: 10, cursor: "" })).toEqual(["cursor"]);
    expect(issuePaths({ limit: 10, cursor: "c".repeat(2049) })).toEqual(["cursor"]);
  });

  it("leaves an absent optional absent rather than setting it to undefined", () => {
    const result = parse(cursorPageRequestSchema, { limit: 10 });
    expect(result.ok).toBe(true);
    if (!result.ok) {
      return;
    }
    // `exactOptionalPropertyTypes` treats absent and explicitly-undefined as different things,
    // and the parsed value must match the contract rather than merely resemble it.
    expect("cursor" in result.value).toBe(false);
    expect("direction" in result.value).toBe(false);
    expect(Object.keys(result.value)).toEqual(["limit"]);
  });

  it("produces a value usable where the contract type is required", () => {
    const result = parse(cursorPageRequestSchema, { limit: 25, direction: "asc" });
    if (!result.ok) {
      throw new Error("expected the page request to parse");
    }
    const request: CursorPageRequest = result.value;
    expect(request.limit).toBe(25);
  });

  it("rejects non-object input", () => {
    for (const input of [null, "limit=10", 10, []]) {
      expect(parse(cursorPageRequestSchema, input).ok).toBe(false);
    }
  });
});

describe("sortDirectionSchema", () => {
  it("accepts the two documented directions", () => {
    expect(parse(sortDirectionSchema, "asc")).toEqual({ ok: true, value: "asc" });
    expect(parse(sortDirectionSchema, "desc")).toEqual({ ok: true, value: "desc" });
  });

  it("rejects anything else", () => {
    for (const value of ["ASC", "ascending", "", null]) {
      expect(parse(sortDirectionSchema, value).ok).toBe(false);
    }
  });
});

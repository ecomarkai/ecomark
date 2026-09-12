import { existsSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import { classNames } from "../src/index.js";

const packageRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");

describe("package entry points", () => {
  it("resolves every path declared in the exports map", () => {
    // The defect this guards against: `exports` pointed at `./src/index.ts`, which did not
    // exist, so `@ecomarkai/ui` was unimportable while every check still passed. Nothing else
    // in lint, typecheck, test or build looks at the exports map.
    const manifest: unknown = JSON.parse(
      readFileSync(resolve(packageRoot, "package.json"), "utf8"),
    );
    expect(manifest).toHaveProperty("exports");
    const { exports: exportMap } = manifest as { exports: Record<string, string> };

    const targets = Object.entries(exportMap);
    expect(targets.length).toBeGreaterThan(0);

    for (const [subpath, target] of targets) {
      expect(existsSync(resolve(packageRoot, target)), `${subpath} -> ${target}`).toBe(true);
    }
  });

  it("exposes its public API through the declared entry point", () => {
    expect(classNames).toBeTypeOf("function");
  });
});

describe("classNames", () => {
  it("joins the values that are present", () => {
    expect(classNames("card", "card--raised")).toBe("card card--raised");
  });

  it("drops falsy values so a conditional class can be inlined", () => {
    expect(classNames("btn", false, null, undefined, "btn--primary")).toBe("btn btn--primary");
  });

  it("returns an empty string when nothing applies", () => {
    expect(classNames()).toBe("");
    expect(classNames(false, null, undefined)).toBe("");
  });

  it("keeps the caller's order, which decides CSS precedence between equal-specificity rules", () => {
    expect(classNames("a", "b", "c")).toBe("a b c");
  });

  it("does not collapse an empty string into a double space", () => {
    // `"".filter(Boolean)` removes it; the guard is that the output has no stray separator.
    expect(classNames("a", "", "b")).toBe("a b");
  });
});

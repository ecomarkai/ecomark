import { describe, expect, it } from "vitest";
import {
  REDACTED,
  booleanValue,
  defineConfig,
  describeConfig,
  entry,
  enumValue,
  formatConfigProblems,
  integerValue,
  loadConfig,
  publicConfig,
  stringValue,
  urlValue,
  type ConfigSource,
} from "../src/index.js";

// A representative module definition. Every value below is a placeholder, never a credential.
const moduleConfig = defineConfig({
  appEnvironment: entry({
    key: "APP_ENV",
    exposure: "public",
    read: enumValue(["local", "staging", "production"]),
    description: "Deployment environment name shown in the UI.",
    defaultValue: "local",
  }),
  publicApiBaseUrl: entry({
    key: "PUBLIC_API_BASE_URL",
    exposure: "public",
    read: urlValue(),
    description: "Base URL the browser calls.",
  }),
  databaseUrl: entry({
    key: "DATABASE_URL",
    exposure: "server",
    read: stringValue({ maxLength: 2048 }),
    description: "Operational database connection string.",
    secret: true,
  }),
  requestTimeoutMs: entry({
    key: "REQUEST_TIMEOUT_MS",
    exposure: "server",
    read: integerValue({ min: 1, max: 120_000 }),
    description: "Outbound request timeout.",
    defaultValue: 5_000,
  }),
  telemetryEnabled: entry({
    key: "TELEMETRY_ENABLED",
    exposure: "server",
    read: booleanValue(),
    description: "Whether outbound telemetry is emitted.",
    defaultValue: false,
  }),
});

const completeSource: ConfigSource = {
  APP_ENV: "staging",
  PUBLIC_API_BASE_URL: "https://api.example.test/v1",
  DATABASE_URL: "postgresql://placeholder:placeholder@db:5432/placeholder",
  REQUEST_TIMEOUT_MS: "3000",
  TELEMETRY_ENABLED: "true",
};

function problemKeys(source: ConfigSource): string[] {
  const result = loadConfig(moduleConfig, source);
  return result.ok ? [] : result.problems.map((problem) => problem.key).sort();
}

describe("loadConfig", () => {
  it("returns typed values from the source", () => {
    const result = loadConfig(moduleConfig, completeSource);
    expect(result.ok).toBe(true);
    if (!result.ok) {
      return;
    }
    expect(result.values).toEqual({
      appEnvironment: "staging",
      publicApiBaseUrl: "https://api.example.test/v1",
      databaseUrl: "postgresql://placeholder:placeholder@db:5432/placeholder",
      requestTimeoutMs: 3000,
      telemetryEnabled: true,
    });
  });

  it("applies defaults for absent optional keys", () => {
    const result = loadConfig(moduleConfig, {
      PUBLIC_API_BASE_URL: "https://api.example.test/v1",
      DATABASE_URL: "placeholder",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) {
      return;
    }
    expect(result.values.appEnvironment).toBe("local");
    expect(result.values.requestTimeoutMs).toBe(5000);
    expect(result.values.telemetryEnabled).toBe(false);
  });

  it("treats an empty string as absent", () => {
    // An unset variable in a shell script arrives as "", which must not satisfy a required key.
    expect(problemKeys({ ...completeSource, DATABASE_URL: "" })).toEqual(["DATABASE_URL"]);
  });

  it("reports every problem at once rather than one per restart", () => {
    expect(problemKeys({})).toEqual(["DATABASE_URL", "PUBLIC_API_BASE_URL"]);
  });

  it("reports a value that fails its reader", () => {
    const result = loadConfig(moduleConfig, {
      ...completeSource,
      REQUEST_TIMEOUT_MS: "999999",
    });
    expect(result.ok).toBe(false);
    if (result.ok) {
      return;
    }
    expect(result.problems).toEqual([
      { key: "REQUEST_TIMEOUT_MS", reason: "expected at most 120000" },
    ]);
  });

  it("returns a result instead of throwing, so failure cannot be ignored silently", () => {
    expect(() => loadConfig(moduleConfig, {})).not.toThrow();
    const result = loadConfig(moduleConfig, {});
    // The discriminated union forces a caller to handle the failure branch before reading
    // values, which is the point of not throwing.
    expect(result.ok).toBe(false);
    expect("values" in result).toBe(false);
  });

  it("formats problems as key and reason only", () => {
    const result = loadConfig(moduleConfig, {});
    if (result.ok) {
      throw new Error("expected configuration to fail");
    }
    expect(formatConfigProblems(result.problems)).toBe(
      "PUBLIC_API_BASE_URL: required value is not set; DATABASE_URL: required value is not set",
    );
  });
});

describe("secret handling", () => {
  const secret = "postgresql://real-user:s3cr3t-p4ssw0rd@prod-db:5432/ecomark";

  it("never puts a rejected value into a problem", () => {
    const tooShort = defineConfig({
      databaseUrl: entry({
        key: "DATABASE_URL",
        exposure: "server",
        read: stringValue({ maxLength: 8 }),
        description: "Operational database connection string.",
        secret: true,
      }),
    });

    const result = loadConfig(tooShort, { DATABASE_URL: secret });
    expect(result.ok).toBe(false);
    if (result.ok) {
      return;
    }
    const serialized = `${JSON.stringify(result.problems)}${formatConfigProblems(result.problems)}`;
    expect(serialized).toContain("DATABASE_URL");
    expect(serialized).not.toContain("s3cr3t-p4ssw0rd");
    expect(serialized).not.toContain("real-user");
    expect(serialized).not.toContain("prod-db");
  });

  it("describeConfig reports presence without disclosing secret values", () => {
    const described = describeConfig(moduleConfig, completeSource);

    expect(described.find((item) => item.key === "DATABASE_URL")).toEqual({
      key: "DATABASE_URL",
      exposure: "server",
      present: true,
      value: REDACTED,
    });
    // Non-secret values stay visible so a support bundle is still useful.
    expect(described.find((item) => item.key === "APP_ENV")?.value).toBe("staging");
    expect(JSON.stringify(described)).not.toContain("placeholder:placeholder");
  });

  it("redacts an absent value rather than printing undefined", () => {
    const described = describeConfig(moduleConfig, {});
    expect(described.every((item) => !item.present && item.value === REDACTED)).toBe(true);
    expect(JSON.stringify(described)).not.toContain("undefined");
  });
});

describe("server and browser boundary", () => {
  it("narrows a loaded config to browser-safe entries at runtime", () => {
    const result = loadConfig(moduleConfig, completeSource);
    if (!result.ok) {
      throw new Error("expected configuration to load");
    }
    const forBrowser = publicConfig(moduleConfig, result.values);

    expect(forBrowser).toEqual({
      appEnvironment: "staging",
      publicApiBaseUrl: "https://api.example.test/v1",
    });
    expect(Object.keys(forBrowser).sort()).toEqual(["appEnvironment", "publicApiBaseUrl"]);
  });

  it("keeps server values out of the serialized form", () => {
    // The guarantee must survive serialization into a page, where types no longer exist.
    const result = loadConfig(moduleConfig, completeSource);
    if (!result.ok) {
      throw new Error("expected configuration to load");
    }
    const serialized = JSON.stringify(publicConfig(moduleConfig, result.values));

    expect(serialized).not.toContain("postgresql://");
    expect(serialized).not.toContain("placeholder");
    expect(serialized).not.toContain("databaseUrl");
    expect(serialized).not.toContain("requestTimeoutMs");
    expect(serialized).not.toContain("telemetryEnabled");
  });

  it("refuses to load a definition that marks a secret as browser-safe", () => {
    const misconfigured = defineConfig({
      leaked: entry({
        key: "STRIPE_SECRET_KEY",
        exposure: "public",
        read: stringValue(),
        description: "Placeholder for an incorrectly exposed credential.",
        secret: true,
      }),
    });

    const result = loadConfig(misconfigured, { STRIPE_SECRET_KEY: "placeholder" });
    expect(result.ok).toBe(false);
    if (result.ok) {
      return;
    }
    expect(result.problems).toEqual([
      { key: "STRIPE_SECRET_KEY", reason: "a secret entry cannot be exposed to the browser" },
    ]);
  });
});

describe("readers", () => {
  it("integerValue parses the string a source actually provides", () => {
    const read = integerValue({ min: 1, max: 100 });
    expect(read("42")).toEqual({ ok: true, value: 42 });
    // Deployment files routinely leave surrounding whitespace behind.
    expect(read("  42  ")).toEqual({ ok: true, value: 42 });
  });

  it("integerValue rejects spellings that would make configuration ambiguous", () => {
    const read = integerValue({});
    for (const raw of ["", "1e3", "0x10", "4.5", "42abc", " ", "Infinity", "-"]) {
      expect(read(raw).ok, raw).toBe(false);
    }
  });

  it("integerValue enforces bounds", () => {
    const read = integerValue({ min: 1, max: 10 });
    expect(read("0").ok).toBe(false);
    expect(read("11").ok).toBe(false);
    expect(read("10").ok).toBe(true);
  });

  it("booleanValue accepts only unambiguous spellings", () => {
    const read = booleanValue();
    expect(read("true")).toEqual({ ok: true, value: true });
    expect(read("FALSE")).toEqual({ ok: true, value: false });
    expect(read("1")).toEqual({ ok: true, value: true });
    expect(read("0")).toEqual({ ok: true, value: false });
    // A flag that silently reads false because of an unrecognized spelling is worse than a
    // startup failure.
    for (const raw of ["yes", "on", "", "maybe"]) {
      expect(read(raw).ok, raw).toBe(false);
    }
  });

  it("stringValue does not trim, because a secret may contain edge whitespace", () => {
    expect(stringValue()(" padded ")).toEqual({ ok: true, value: " padded " });
  });

  it("stringValue enforces a maximum length", () => {
    expect(stringValue({ maxLength: 4 })("12345").ok).toBe(false);
    expect(stringValue({ maxLength: 4 })("1234").ok).toBe(true);
  });

  it("enumValue restricts to the allowed spellings", () => {
    const read = enumValue(["local", "production"]);
    expect(read("production")).toEqual({ ok: true, value: "production" });
    for (const raw of ["Production", "staging", ""]) {
      expect(read(raw).ok, raw).toBe(false);
    }
  });

  it("urlValue requires an absolute http or https URL", () => {
    expect(urlValue()("https://api.example.test").ok).toBe(true);
    for (const raw of ["/v1", "api.example.test", "file:///etc/passwd", "javascript:alert(1)"]) {
      expect(urlValue()(raw).ok, raw).toBe(false);
    }
  });

  it("reader failures name the expectation without quoting the value", () => {
    const failure = integerValue({ max: 10 })("99999");
    expect(failure.ok).toBe(false);
    if (failure.ok) {
      return;
    }
    expect(failure.reason).toBe("expected at most 10");
    expect(failure.reason).not.toContain("99999");
  });
});

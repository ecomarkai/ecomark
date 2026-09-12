import type {
  AnyConfigDefinition,
  ConfigEntry,
  ConfigValues,
} from "./definition.js";

/**
 * Raw configuration input.
 *
 * A plain record rather than a direct read of `process.env`. This package never touches a
 * global, which keeps it usable in a browser bundle, in a worker and in tests without mutating
 * shared process state between cases. The caller decides which environment to pass in.
 */
export type ConfigSource = Readonly<Record<string, string | undefined>>;

export const REDACTED = "[redacted]";

/**
 * A single configuration problem.
 *
 * `key` names the offending variable and `reason` describes the expectation. Neither ever
 * contains the value: a message that quotes it puts a database password into a startup log, a
 * crash report and an error tracker in one step.
 */
export type ConfigProblem = {
  readonly key: string;
  readonly reason: string;
};

export type ConfigResult<TDefinition extends AnyConfigDefinition> =
  | { readonly ok: true; readonly values: ConfigValues<TDefinition> }
  | { readonly ok: false; readonly problems: readonly ConfigProblem[] };

/**
 * Returns the keys a definition wrongly marks as both secret and browser-safe.
 *
 * Checked at load time so a deployment fails before serving rather than at the first request
 * that serializes the value into a page.
 */
function exposureViolations(definition: AnyConfigDefinition): readonly ConfigProblem[] {
  return Object.values(definition)
    .filter((item: ConfigEntry<unknown>) => item.exposure === "public" && item.secret === true)
    .map((item) => ({
      key: item.key,
      reason: "a secret entry cannot be exposed to the browser",
    }));
}

/**
 * Reads a module's configuration from a source.
 *
 * Returns a result rather than throwing, so this package needs no error vocabulary and stays
 * independent of every other Ecomark package. The composition root decides how a failure is
 * surfaced — typically by refusing to start.
 *
 * Every entry is checked and all problems are reported together: failing on the first missing
 * key would make a misconfigured environment take one restart per mistake to diagnose.
 */
export function loadConfig<const TDefinition extends AnyConfigDefinition>(
  definition: TDefinition,
  source: ConfigSource,
): ConfigResult<TDefinition> {
  const problems: ConfigProblem[] = [...exposureViolations(definition)];
  const values: Record<string, unknown> = {};

  for (const [name, item] of Object.entries(definition)) {
    const raw = source[item.key];

    // An unset variable in a shell script arrives as "", which must not satisfy a required key.
    if (raw === undefined || raw === "") {
      if (item.defaultValue !== undefined) {
        values[name] = item.defaultValue;
        continue;
      }
      problems.push({ key: item.key, reason: "required value is not set" });
      continue;
    }

    const result = item.read(raw);
    if (result.ok) {
      values[name] = result.value;
      continue;
    }
    problems.push({ key: item.key, reason: result.reason });
  }

  if (problems.length > 0) {
    return { ok: false, problems };
  }
  // Each entry was read through its own reader above; this is where the checked record takes
  // the shape the definition declares.
  return { ok: true, values: values as ConfigValues<TDefinition> };
}

/**
 * Renders problems as one line suitable for a startup failure message.
 *
 * Contains key names and reasons only, by construction of `ConfigProblem`.
 */
export function formatConfigProblems(problems: readonly ConfigProblem[]): string {
  return problems.map((problem) => `${problem.key}: ${problem.reason}`).join("; ");
}

export type ConfigDescription = {
  readonly key: string;
  readonly exposure: string;
  readonly present: boolean;
  readonly value: string;
};

/**
 * Describes a definition against a source for diagnostics.
 *
 * Secrets are reported as present or absent and never by value, so a support bundle can show
 * that a credential is configured without disclosing it.
 */
export function describeConfig(
  definition: AnyConfigDefinition,
  source: ConfigSource,
): readonly ConfigDescription[] {
  return Object.values(definition).map((item) => {
    const raw = source[item.key];
    const present = raw !== undefined && raw !== "";
    return {
      key: item.key,
      exposure: item.exposure,
      present,
      value: item.secret === true || !present ? REDACTED : raw,
    };
  });
}

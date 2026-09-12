/**
 * Readers convert one raw configuration string into a typed value.
 *
 * These are intentionally small and local rather than a shared validation abstraction. No
 * runtime validation technology is approved for this repository yet, and configuration needs
 * only a handful of conversions, so inventing a general validator to serve one caller would be
 * the wrong trade. When the validation ADR lands, these readers adopt it behind the same
 * `ConfigReader` shape.
 *
 * Every reader reports failure as a reason string that names the problem and never quotes the
 * value: configuration values are the most concentrated secrets a process holds.
 */

export type ReadResult<T> =
  | { readonly ok: true; readonly value: T }
  | { readonly ok: false; readonly reason: string };

export type ConfigReader<T> = (raw: string) => ReadResult<T>;

function accept<T>(value: T): ReadResult<T> {
  return { ok: true, value };
}

function reject<T>(reason: string): ReadResult<T> {
  return { ok: false, reason };
}

/**
 * Reads a string as written.
 *
 * Deliberately does not trim. A credential may legitimately contain characters we have no
 * business editing, and silently altering a secret produces a failure far from its cause.
 */
export function stringValue(options: { readonly maxLength?: number } = {}): ConfigReader<string> {
  const maxLength = options.maxLength ?? 4096;
  return (raw) =>
    raw.length > maxLength
      ? reject(`expected at most ${String(maxLength)} characters`)
      : accept(raw);
}

/**
 * Reads an integer.
 *
 * Surrounding whitespace is trimmed here because it is almost always an artifact of the
 * deployment file that set the value, and a numeric setting has no meaningful leading space.
 */
export function integerValue(
  options: { readonly min?: number; readonly max?: number } = {},
): ConfigReader<number> {
  return (raw) => {
    const trimmed = raw.trim();
    // `Number()` accepts "", "0x10" and "1e3"; an explicit pattern keeps configuration
    // unambiguous rather than depending on numeric parsing trivia.
    if (!/^-?\d+$/.test(trimmed)) {
      return reject("expected an integer");
    }
    const parsed = Number(trimmed);
    if (!Number.isSafeInteger(parsed)) {
      return reject("expected a safe integer");
    }
    if (options.min !== undefined && parsed < options.min) {
      return reject(`expected at least ${String(options.min)}`);
    }
    if (options.max !== undefined && parsed > options.max) {
      return reject(`expected at most ${String(options.max)}`);
    }
    return accept(parsed);
  };
}

const TRUE_VALUES = new Set(["true", "1"]);
const FALSE_VALUES = new Set(["false", "0"]);

/**
 * Reads a boolean, accepting only unambiguous spellings.
 *
 * Notably rejects "yes", "on" and "" rather than guessing. A feature flag that silently reads
 * as false because of a spelling the parser did not recognize is worse than a startup failure.
 */
export function booleanValue(): ConfigReader<boolean> {
  return (raw) => {
    const normalized = raw.trim().toLowerCase();
    if (TRUE_VALUES.has(normalized)) {
      return accept(true);
    }
    if (FALSE_VALUES.has(normalized)) {
      return accept(false);
    }
    return reject("expected one of: true, false, 1, 0");
  };
}

/** Reads a value restricted to a fixed set of allowed spellings. */
export function enumValue<const TValues extends readonly string[]>(
  allowed: TValues,
): ConfigReader<TValues[number]> {
  return (raw) => {
    const trimmed = raw.trim();
    const match = allowed.find((candidate) => candidate === trimmed);
    return match === undefined
      ? reject(`expected one of: ${allowed.join(", ")}`)
      : accept(match);
  };
}

/** Reads an absolute http(s) URL. */
export function urlValue(): ConfigReader<string> {
  return (raw) => {
    const trimmed = raw.trim();
    let parsed: URL;
    try {
      parsed = new URL(trimmed);
    } catch {
      return reject("expected an absolute URL");
    }
    return parsed.protocol === "http:" || parsed.protocol === "https:"
      ? accept(trimmed)
      : reject("expected an http or https URL");
  };
}

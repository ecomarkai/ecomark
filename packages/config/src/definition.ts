import type { ConfigReader } from "./readers.js";

/**
 * Where a configuration value is allowed to travel.
 *
 * `server` values never leave the server process. `public` values are inlined into a browser
 * bundle, which makes them effectively world-readable — they must never be a secret, even one
 * that looks harmless today.
 */
export type ConfigExposure = "server" | "public";

export type ConfigEntry<T> = {
  /** Source key, for example `DATABASE_URL`. */
  readonly key: string;
  readonly exposure: ConfigExposure;
  readonly read: ConfigReader<T>;
  /** Why this value exists. Never an example of a real value. */
  readonly description: string;
  /**
   * Used when the key is absent, which makes the entry optional.
   *
   * A secret must never carry one: a silent fallback for a missing credential turns a
   * misconfigured deployment into a subtly wrong running system instead of a loud failure.
   */
  readonly defaultValue?: T;
  /** Marks the value as sensitive so it is redacted everywhere this package reports. */
  readonly secret?: true;
};

export type ConfigDefinition = Readonly<Record<string, ConfigEntry<never>>>;

/** Any definition shape, used where the value types are irrelevant. */
export type AnyConfigDefinition = Readonly<Record<string, ConfigEntry<unknown>>>;

export type ConfigValues<TDefinition extends AnyConfigDefinition> = {
  readonly [K in keyof TDefinition]: TDefinition[K] extends ConfigEntry<infer T> ? T : never;
};

/**
 * Declares one configuration entry.
 *
 * A function so the value type is inferred from the reader rather than restated, which is what
 * stops the declared type and the runtime conversion from drifting apart.
 */
export function entry<T>(definition: ConfigEntry<T>): ConfigEntry<T> {
  return definition;
}

/**
 * Declares one module's configuration.
 *
 * Each module owns its own definition. There is deliberately no platform-wide configuration
 * object: one global bag makes every consumer transitively depend on every key, and a browser
 * bundle ends up importing the shape of server secrets.
 */
export function defineConfig<const TDefinition extends AnyConfigDefinition>(
  definition: TDefinition,
): TDefinition {
  return definition;
}

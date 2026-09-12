import type { AnyConfigDefinition, ConfigValues } from "./definition.js";

type PublicKeys<TDefinition extends AnyConfigDefinition> = {
  [K in keyof TDefinition]: TDefinition[K] extends { readonly exposure: "public" } ? K : never;
}[keyof TDefinition];

export type PublicConfigValues<TDefinition extends AnyConfigDefinition> = {
  readonly [K in PublicKeys<TDefinition>]: ConfigValues<TDefinition>[K];
};

/**
 * Narrows a loaded configuration to the entries marked browser-safe.
 *
 * The type removes server-only keys so a mistake is a compile error, and the runtime removes
 * them as well so the guarantee survives serialization into a page, a bundle or an API
 * response, where types no longer exist. Either half alone would be insufficient: types do not
 * reach the wire, and a runtime filter alone would let a server key be read in browser code
 * before anyone noticed.
 */
export function publicConfig<const TDefinition extends AnyConfigDefinition>(
  definition: TDefinition,
  values: ConfigValues<TDefinition>,
): PublicConfigValues<TDefinition> {
  const result: Record<string, unknown> = {};
  for (const [name, item] of Object.entries(definition)) {
    if (item.exposure === "public") {
      result[name] = values[name as keyof ConfigValues<TDefinition>];
    }
  }
  return result as PublicConfigValues<TDefinition>;
}

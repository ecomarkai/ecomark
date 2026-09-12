/**
 * @ecomarkai/config — safe configuration contracts and helpers.
 *
 * Contains no values. Every real value stays in the environment or an approved secret manager;
 * this package only describes which keys exist, how each is read, and where each is allowed to
 * travel.
 *
 * Dependency-free, including of the other Ecomark packages: `loadConfig` returns a result
 * rather than throwing, so the composition root owns how a startup failure is surfaced.
 */
export {
  booleanValue,
  enumValue,
  integerValue,
  stringValue,
  urlValue,
  type ConfigReader,
  type ReadResult,
} from "./readers.js";
export {
  defineConfig,
  entry,
  type AnyConfigDefinition,
  type ConfigDefinition,
  type ConfigEntry,
  type ConfigExposure,
  type ConfigValues,
} from "./definition.js";
export {
  REDACTED,
  describeConfig,
  formatConfigProblems,
  loadConfig,
  type ConfigDescription,
  type ConfigProblem,
  type ConfigResult,
  type ConfigSource,
} from "./load.js";
export { publicConfig, type PublicConfigValues } from "./exposure.js";

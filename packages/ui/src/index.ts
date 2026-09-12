/**
 * @ecomarkai/ui — shared UI foundation.
 *
 * The package's `exports` map has always pointed here, but the file did not exist, so
 * `@ecomarkai/ui` could not be imported by any consumer. This entry point is the narrow fix for
 * that defect.
 *
 * It exports only what already exists and is genuinely public. There is no component library
 * yet: the design tokens and foundations are stylesheets, consumed through the separate
 * `@ecomarkai/ui/styles.css` and `@ecomarkai/ui/tokens.css` export paths rather than through
 * this module.
 *
 * Components will be added here as they are built. Nothing is re-exported speculatively.
 */
export { classNames, type ClassNameValue } from "./lib/class-names.js";

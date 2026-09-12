/**
 * @ecomarkai/schemas — runtime validation for shared boundaries.
 *
 * Owns the boundary where unknown input becomes a typed, branded contract value. Built on Zod 4
 * per ADR-0001.
 *
 * Scope is deliberately small. This package holds schemas for genuinely shared boundary shapes
 * and nothing else:
 *
 * - It does not reimplement `@ecomarkai/contracts`. It composes the identifier rule that package
 *   already owns.
 * - It does not duplicate `@ecomarkai/events` envelope checks, which that package owns with no
 *   dependencies.
 * - It does not define Organization, Workspace or Store business schemas, because those domains
 *   do not exist yet.
 * - It is not the domain model, the database model, the authorization system or business logic.
 *   A schema confirms a value is well formed; it never confirms an actor may access what that
 *   value names.
 *
 * Consumers import from here and never from `zod` directly, which is what keeps the library
 * replaceable.
 */
export {
  correlationIdSchema,
  organizationIdSchema,
  requestIdSchema,
  storeIdSchema,
  userIdSchema,
  workspaceIdSchema,
} from "./identifiers.js";
export {
  DEFAULT_PAGE_LIMIT,
  MAX_PAGE_LIMIT,
  cursorPageRequestSchema,
  sortDirectionSchema,
} from "./pagination.js";
export {
  parse,
  parseOrUndefined,
  type ParseResult,
  type SchemaIssue,
} from "./parse.js";

/**
 * @ecomarkai/contracts — transport-neutral shared contracts.
 *
 * Type-focused and dependency-free, so it stays portable between the web application, the
 * future core API, workers, CLI and MCP servers. Its only runtime surface is the identifier
 * constructors, which exist so branded types never require a type assertion at a call site.
 *
 * It must not contain database models, ORM schemas, framework decorators, React components,
 * provider SDK types or business logic.
 */
export {
  isIdentifier,
  toCorrelationId,
  toOrganizationId,
  toRequestId,
  toStoreId,
  toUserId,
  toWorkspaceId,
  type CorrelationId,
  type OrganizationId,
  type RequestId,
  type StoreId,
  type UserId,
  type WorkspaceId,
} from "./identifiers.js";
export type { TenantContext, TenantScoped } from "./tenancy.js";
export type {
  Cursor,
  CursorPage,
  CursorPageRequest,
  PageInfo,
  SortDirection,
} from "./pagination.js";
export type { ResultMetadata, WithMetadata } from "./result.js";

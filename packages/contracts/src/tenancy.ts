import type { OrganizationId, StoreId, UserId, WorkspaceId } from "./identifiers.js";

/**
 * Transport-neutral shape of an authorized tenant scope.
 *
 * This is a CONTRACT, not an implementation. There is no organization, workspace or store
 * entity here, no membership model, no lifecycle and no resolution logic; those belong to the
 * future core API and are explicitly out of scope.
 *
 * The shape exists so the future invariant — no tenant-owned operation without an explicit,
 * validated `TenantContext` — does not require reshaping contracts later. Every field is a
 * branded identifier, so a context cannot be assembled from unvalidated request input without
 * passing through the constructors in `identifiers.ts`.
 *
 * Hierarchy the shape anticipates: User -> Membership -> Organization -> Workspace -> Store.
 * `organizationId` is the tenant boundary and is always required; narrower scopes appear only
 * when the operation was authorized at that depth.
 */
export type TenantContext = {
  /** Tenant boundary. Resolved server-side from authenticated identity and membership. */
  readonly organizationId: OrganizationId;
  /** The authenticated actor the authorization decision was made for. */
  readonly userId: UserId;
  readonly workspaceId?: WorkspaceId;
  readonly storeId?: StoreId;
};

/**
 * Marks a payload owned by exactly one tenant.
 *
 * Carrying the context as data never grants access; it records the scope that an
 * authorization decision already produced.
 */
export type TenantScoped<TPayload> = {
  readonly tenant: TenantContext;
  readonly payload: TPayload;
};

/**
 * Opaque platform identifiers.
 *
 * Branding is applied only where it buys concrete safety: the tenancy identifiers, whose
 * confusion is a cross-tenant bug, and the correlation identifiers, whose confusion silently
 * breaks telemetry. Cursors and timestamps stay plain strings — branding them would add
 * ceremony without preventing a class of mistake that matters.
 *
 * Every brand has a constructor below, so no call site needs a type assertion to produce one.
 */
declare const brandTag: unique symbol;

type Brand<TBrand extends string> = string & { readonly [brandTag]: TBrand };

export type UserId = Brand<"UserId">;
export type OrganizationId = Brand<"OrganizationId">;
export type WorkspaceId = Brand<"WorkspaceId">;
export type StoreId = Brand<"StoreId">;

/** Correlates every log, span, event and error produced while handling one operation. */
export type CorrelationId = Brand<"CorrelationId">;

/** Identifies a single inbound request or job execution. */
export type RequestId = Brand<"RequestId">;

/**
 * Accepted identifier shape.
 *
 * Deliberately narrow: identifiers reach log lines, file paths, cache keys, URLs and query
 * parameters, so characters that change meaning in any of those are refused once here rather
 * than escaped at every use site.
 */
const IDENTIFIER = /^[A-Za-z0-9][A-Za-z0-9_-]{0,63}$/;

export function isIdentifier(value: unknown): value is string {
  return typeof value === "string" && IDENTIFIER.test(value);
}

/**
 * Builds a constructor for one branded identifier.
 *
 * The single assertion in the platform that produces a brand lives here, and it runs only
 * after the value has passed `isIdentifier` on the line above. Confining it to one place is
 * what makes the brand meaningful everywhere else: no other module can manufacture one.
 */
function identifierParser<TIdentifier extends string>(): (
  value: unknown,
) => TIdentifier | undefined {
  return (value: unknown) => (isIdentifier(value) ? (value as TIdentifier) : undefined);
}

export const toUserId = identifierParser<UserId>();
export const toOrganizationId = identifierParser<OrganizationId>();
export const toWorkspaceId = identifierParser<WorkspaceId>();
export const toStoreId = identifierParser<StoreId>();
export const toCorrelationId = identifierParser<CorrelationId>();
export const toRequestId = identifierParser<RequestId>();

import {
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
} from "@ecomarkai/contracts";
import { z } from "zod";

/**
 * Zod schemas for the branded identifiers defined in `@ecomarkai/contracts`.
 *
 * These wrap the existing constructors rather than restating the identifier rule. There is one
 * definition of what an identifier is — the charset check in `@ecomarkai/contracts` — and these
 * schemas compose it. Writing the pattern again here would be the second definition that
 * ADR-0001 exists to avoid: the two copies would drift, and the drift would be silent.
 *
 * The output type is the branded contract type, not `string`. Flattening the brand to make Zod
 * more convenient would trade a real cross-tenant safety guarantee for syntactic tidiness.
 */

function brandedIdentifier<TIdentifier extends string>(
  construct: (value: unknown) => TIdentifier | undefined,
  label: string,
): z.ZodType<TIdentifier, string> {
  return z.string().transform((value, ctx) => {
    const identifier = construct(value);
    if (identifier === undefined) {
      ctx.addIssue({
        code: "custom",
        // Names the expectation, never the rejected value: an identifier can carry tenant
        // detail and validation output is routinely logged.
        message: `Expected a valid ${label}: 1-64 characters of letters, digits, hyphen or underscore, starting with a letter or digit.`,
      });
      return z.NEVER;
    }
    return identifier;
  });
}

export const userIdSchema: z.ZodType<UserId, string> = brandedIdentifier(toUserId, "user id");

export const organizationIdSchema: z.ZodType<OrganizationId, string> = brandedIdentifier(
  toOrganizationId,
  "organization id",
);

export const workspaceIdSchema: z.ZodType<WorkspaceId, string> = brandedIdentifier(
  toWorkspaceId,
  "workspace id",
);

export const storeIdSchema: z.ZodType<StoreId, string> = brandedIdentifier(toStoreId, "store id");

export const correlationIdSchema: z.ZodType<CorrelationId, string> = brandedIdentifier(
  toCorrelationId,
  "correlation id",
);

export const requestIdSchema: z.ZodType<RequestId, string> = brandedIdentifier(
  toRequestId,
  "request id",
);

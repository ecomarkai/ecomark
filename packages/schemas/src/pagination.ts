import type { CursorPageRequest } from "@ecomarkai/contracts";
import { z } from "zod";

/**
 * Maximum items a single page may request.
 *
 * Enforced in the schema so no caller can opt out, and so the bound exists once rather than
 * being repeated in every list endpoint.
 */
export const MAX_PAGE_LIMIT = 200;

export const DEFAULT_PAGE_LIMIT = 50;

export const sortDirectionSchema = z.enum(["asc", "desc"]);

/**
 * Cursor pagination input.
 *
 * `.strict()` rejects unknown keys rather than stripping them. Silently dropping an unexpected
 * field is how a privileged property gets mass-assigned: the caller believes it was accepted and
 * the server believes it was never sent. It also means an offset-style request fails loudly
 * instead of quietly returning page one.
 *
 * The explicit annotation is the drift guard. If this schema and `CursorPageRequest` ever
 * disagree, the assignment stops compiling, so the runtime schema and the compile-time contract
 * cannot diverge unnoticed.
 */
export const cursorPageRequestSchema: z.ZodType<CursorPageRequest, unknown> = z
  .strictObject({
    limit: z.number().int().min(1).max(MAX_PAGE_LIMIT).default(DEFAULT_PAGE_LIMIT),
    cursor: z.string().min(1).max(2048).optional(),
    direction: sortDirectionSchema.optional(),
  })
  .transform(
    (value): CursorPageRequest => ({
      limit: value.limit,
      // Rebuilt rather than spread so an absent optional stays absent instead of becoming an
      // explicit `undefined`, which `exactOptionalPropertyTypes` treats as a different thing.
      ...(value.cursor !== undefined ? { cursor: value.cursor } : {}),
      ...(value.direction !== undefined ? { direction: value.direction } : {}),
    }),
  );

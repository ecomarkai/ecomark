/**
 * Compile-time assertions for the schema/contract relationship.
 *
 * The guarantee that matters here — that schemas output *branded* contract types rather than
 * plain strings — is erased at runtime and cannot be asserted by a test runner. It is asserted
 * here and verified by `pnpm typecheck`.
 *
 * Exported as one tuple so nothing is unused. No `any`, assertion or suppression is used.
 */
import type {
  CorrelationId,
  CursorPageRequest,
  OrganizationId,
  StoreId,
  UserId,
} from "@ecomarkai/contracts";
import type {
  correlationIdSchema,
  cursorPageRequestSchema,
  organizationIdSchema,
  storeIdSchema,
  userIdSchema,
} from "../src/index.js";
import type { parse, parseOrUndefined } from "../src/index.js";

type Equals<A, B> =
  (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B ? 1 : 2 ? true : false;

type Expect<T extends true> = T;

type IsAssignable<TSource, TTarget> = [TSource] extends [TTarget] ? true : false;

/** The parsed output of a schema, as a consumer sees it through `parse`. */
type Parsed<TSchema> = TSchema extends { readonly _zod: { readonly output: infer TOutput } }
  ? TOutput
  : never;

/*
 * Schemas output branded contract types.
 *
 * If these flattened to `string`, the cross-tenant safety guarantee in `@ecomarkai/contracts`
 * would be lost the moment any value passed through validation — which is exactly where every
 * request-supplied identifier enters the system.
 */
type OrganizationSchemaIsBranded = Expect<
  Equals<Parsed<typeof organizationIdSchema>, OrganizationId>
>;
type UserSchemaIsBranded = Expect<Equals<Parsed<typeof userIdSchema>, UserId>>;
type StoreSchemaIsBranded = Expect<Equals<Parsed<typeof storeIdSchema>, StoreId>>;

/* Brands stay distinct after parsing. */
type ParsedBrandsDoNotCross = Expect<
  Equals<IsAssignable<Parsed<typeof organizationIdSchema>, StoreId>, false>
>;
type ParsedIdentifierIsNotARawString = Expect<
  Equals<IsAssignable<string, Parsed<typeof organizationIdSchema>>, false>
>;

/* A parsed identifier is still usable wherever a plain string is accepted. */
type ParsedIdentifierIsStillAString = Expect<
  IsAssignable<Parsed<typeof correlationIdSchema>, string>
>;
type CorrelationSchemaIsBranded = Expect<
  Equals<Parsed<typeof correlationIdSchema>, CorrelationId>
>;

/* The pagination schema produces the contract type, not a look-alike. */
type PageRequestMatchesContract = Expect<
  Equals<Parsed<typeof cursorPageRequestSchema>, CursorPageRequest>
>;

/* `parse` preserves the schema's output type rather than widening it. */
type ParseReturnsBrandedValue = Expect<
  Equals<
    Extract<ReturnType<typeof parse<OrganizationId, string>>, { ok: true }>["value"],
    OrganizationId
  >
>;
type ParseOrUndefinedIsOptional = Expect<
  Equals<ReturnType<typeof parseOrUndefined<OrganizationId, string>>, OrganizationId | undefined>
>;

export type SchemaAssertions = [
  OrganizationSchemaIsBranded,
  UserSchemaIsBranded,
  StoreSchemaIsBranded,
  ParsedBrandsDoNotCross,
  ParsedIdentifierIsNotARawString,
  ParsedIdentifierIsStillAString,
  CorrelationSchemaIsBranded,
  PageRequestMatchesContract,
  ParseReturnsBrandedValue,
  ParseOrUndefinedIsOptional,
];

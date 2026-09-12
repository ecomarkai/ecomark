/**
 * Compile-time contract assertions.
 *
 * The guarantees branding provides are erased at runtime, so they cannot be asserted by a test
 * runner. They are asserted here instead and verified by `pnpm typecheck` (`tsc --noEmit`).
 *
 * Every assertion is a type. `Expect<T extends true>` stops compiling when the relationship it
 * states stops holding, so these are regression guards rather than documentation. They are
 * exported as one tuple so nothing is unused. No `any`, assertion or suppression is used.
 */
import type {
  CorrelationId,
  CursorPage,
  CursorPageRequest,
  OrganizationId,
  RequestId,
  StoreId,
  TenantContext,
  UserId,
  WithMetadata,
  WorkspaceId,
} from "../src/index.js";
import { toOrganizationId, toUserId } from "../src/index.js";

type Equals<A, B> =
  (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B ? 1 : 2 ? true : false;

type Expect<T extends true> = T;

/** Wrapped in tuples so a union source is compared as a whole rather than distributed. */
type IsAssignable<TSource, TTarget> = [TSource] extends [TTarget] ? true : false;

type Item = { readonly id: string };

/*
 * Identifiers are nominal.
 *
 * This is the type-level half of the rule that a tenant or store ID arriving in a path,
 * header, payload, tool argument or model output is a selector to validate, never authority.
 */
type RawStringIsNotAnIdentifier = Expect<
  Equals<IsAssignable<string, OrganizationId>, false>
>;
type TenancyBrandsDoNotCross = Expect<
  Equals<IsAssignable<OrganizationId, StoreId>, false>
>;
type CorrelationBrandsDoNotCross = Expect<
  Equals<IsAssignable<CorrelationId, RequestId>, false>
>;
/** A branded identifier is still usable anywhere a plain string is accepted. */
type IdentifierIsStillAString = Expect<IsAssignable<OrganizationId, string>>;

/* The constructor is the only way to obtain a brand, and it can fail. */
type ConstructorReturnsOptional = Expect<
  Equals<ReturnType<typeof toOrganizationId>, OrganizationId | undefined>
>;
type ConstructorAcceptsUnknownInput = Expect<
  Equals<Parameters<typeof toOrganizationId>[0], unknown>
>;

/* A TenantContext cannot be assembled from unvalidated input. */
type TenantContextRejectsRawStrings = Expect<
  Equals<IsAssignable<{ organizationId: string; userId: string }, TenantContext>, false>
>;

/* organizationId is the tenant boundary, so it can never be omitted. */
type TenantBoundaryIsRequired = Expect<
  Equals<IsAssignable<{ userId: UserId }, TenantContext>, false>
>;

type NarrowestContextIsValid = Expect<
  IsAssignable<
    { organizationId: OrganizationId; userId: UserId },
    TenantContext
  >
>;
type DeepestContextIsValid = Expect<
  IsAssignable<
    {
      organizationId: OrganizationId;
      userId: UserId;
      workspaceId: WorkspaceId;
      storeId: StoreId;
    },
    TenantContext
  >
>;

/* The context is immutable: a caller cannot widen its own scope after authorization. */
type TenantContextIsReadonly = Expect<Equals<Readonly<TenantContext>, TenantContext>>;

/* The constructors compose into a context with no assertion anywhere. */
type ConstructedContextIsValid = Expect<
  IsAssignable<
    {
      organizationId: NonNullable<ReturnType<typeof toOrganizationId>>;
      userId: NonNullable<ReturnType<typeof toUserId>>;
    },
    TenantContext
  >
>;

/* Pagination is always bounded, so a transport boundary can enforce a maximum page size. */
type PageLimitIsRequired = Expect<
  Equals<IsAssignable<{ direction: "asc" }, CursorPageRequest>, false>
>;
type MinimalPageRequestIsValid = Expect<IsAssignable<{ limit: number }, CursorPageRequest>>;

/*
 * `exactOptionalPropertyTypes` keeps "absent" distinct from "explicitly undefined", so an
 * optional cursor cannot be smuggled through as undefined.
 */
type OptionalCursorRejectsUndefined = Expect<
  Equals<IsAssignable<{ limit: number; cursor: undefined }, CursorPageRequest>, false>
>;

/* Page results cannot be taken as a mutable handle. */
type PageItemsCannotBeTakenAsMutable = Expect<
  Equals<IsAssignable<CursorPage<Item>["items"], Item[]>, false>
>;

/* Result metadata always carries a correlation identifier for telemetry. */
type MetadataIsCorrelated = Expect<
  Equals<WithMetadata<string>["meta"]["correlationId"], CorrelationId>
>;

export type ContractAssertions = [
  RawStringIsNotAnIdentifier,
  TenancyBrandsDoNotCross,
  CorrelationBrandsDoNotCross,
  IdentifierIsStillAString,
  ConstructorReturnsOptional,
  ConstructorAcceptsUnknownInput,
  TenantContextRejectsRawStrings,
  TenantBoundaryIsRequired,
  NarrowestContextIsValid,
  DeepestContextIsValid,
  TenantContextIsReadonly,
  ConstructedContextIsValid,
  PageLimitIsRequired,
  MinimalPageRequestIsValid,
  OptionalCursorRejectsUndefined,
  PageItemsCannotBeTakenAsMutable,
  MetadataIsCorrelated,
];

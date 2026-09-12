# @ecomarkai/contracts

Transport-neutral shared contracts for the Ecomark platform.

## Responsibility

Owns the shapes that must mean the same thing in every runtime: identifiers, tenant scope,
cursor pagination and result metadata. Portable between `apps/web`, the future
`services/core-api`, workers, CLI and MCP servers.

## Boundary

Dependency-free, including of every other Ecomark package.

Type-focused: the only runtime surface is the identifier constructors, which exist so branded
types never require a type assertion at a call site.

It must not contain database models, ORM schemas, NestJS controllers or decorators, React
components, provider SDK types, or business implementation logic.

It does not duplicate the JSON Schema definitions under the repository root `contracts/`
directory; those describe domain objects (capabilities, connections, automation, media, admin
actions) and their consolidation is a separate migration.

## Identifiers

Branding is applied only where it buys concrete safety:

- **Tenancy** — `UserId`, `OrganizationId`, `WorkspaceId`, `StoreId`. Confusing two of these is
  a cross-tenant bug.
- **Correlation** — `CorrelationId`, `RequestId`. Confusing these silently breaks telemetry.

Cursors and timestamps stay plain strings: branding them would add ceremony without preventing
a class of mistake that matters. This is a small set of opaque types, not an ID framework.

Each brand has a constructor (`toOrganizationId`, `toUserId`, …) that validates the identifier
charset and returns `undefined` on failure. **No call site needs a type assertion** — the single
assertion that mints a brand lives in one private helper, immediately after the check that
justifies it.

## Tenancy

`TenantContext` is a contract shape only. There is no organization, workspace or store entity
here, no membership model and no resolution logic. The shape exists so the future invariant —
no tenant-owned operation without an explicit, validated `TenantContext` — does not require
reshaping contracts later.

## Verification

- `pnpm --filter @ecomarkai/contracts test` — runtime behavior of the identifier constructors.
- `pnpm --filter @ecomarkai/contracts typecheck` — the branding guarantees, which are erased at
  runtime and therefore cannot be asserted by a test runner. `tests/types.assert.ts` holds 17
  compile-time assertions that fail the typecheck if a guarantee stops holding. No `any`, type
  assertion or suppression is used to make them pass.

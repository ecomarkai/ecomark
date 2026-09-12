# Frontend implementation boundaries

Owner: Product Engineering. The existing [dashboard architecture](../../apps/web-dashboard/ARCHITECTURE.md) and [repository structure](../../PROJECT_STRUCTURE.md) remain the architecture baseline. This document supplies implementation rules, not a replacement system design.

## Dashboard structure

- Use the installed Next.js App Router in `apps/web-dashboard/src/app`. Routes, layouts and route-level loading/error boundaries compose feature modules; keep domain workflows in `src/features/<feature>`.
- Server Components are the default. Add a Client Component only for browser APIs, interaction or client state, and place the boundary as low as practical. Do not pull server modules or provider SDKs into the client import graph.
- Server Actions and route handlers are public trust boundaries: authenticate, resolve tenant membership, authorize the exact operation and validate inputs on every invocation. Never rely on a protected layout or hidden control for authorization.
- Client UI consumes minimal authorized view models. Backend domain modules own calculations, writes and provider integration. Privileged provider APIs are never called directly from the browser; approved redirects to a provider's authorization page are distinct from API access.
- Keep feature-specific components and state with the feature. Shared primitives and semantic tokens belong in `packages/ui`; shared contracts come from generated interfaces based on `contracts/`. Do not import private service source into browser modules.

## Shared UI package

`packages/ui` is the only canonical package name for future shared UI primitives, and the directory does not currently exist. Establish it only through a scoped implementation with a manifest, public exports and tests. Until then, documentation references describe a planned boundary, not an import that currently resolves. Do not create a competing shared UI package. Feature components do not become shared solely because they render UI.

## State and rendering

Tenant context is server-authorized. Key reads by authorized organization/store and relevant filters; invalidate them after mutations and discard previous-tenant state on switching or logout. Do not cache authorization decisions or place private results in shared public caches. Guard against late responses from a previously selected tenant.

Resolve locale and theme consistently on the server. Forms use shared schemas with server revalidation. Every async screen requires loading, empty and error states plus offline/denied/stale behavior when applicable. Follow [design system](../design/DESIGN_SYSTEM.md) and [I18N/RTL](../design/I18N_RTL.md).

Read the installed Next.js guides before framework-specific changes, as required by [dashboard instructions](../../apps/web-dashboard/AGENTS.md). Validate bundles for secret exposure and performance regressions; do not treat Server Components as an authorization mechanism.

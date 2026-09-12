<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Ecomark web application instructions

The root [Ecomark instructions](../../AGENTS.md) apply here. These rules add frontend requirements and must not weaken tenant isolation, authorization, approval, audit, localization, accessibility, or secret handling.

## Architecture

- Use the Next.js App Router under `src/app`. Keep route files focused on composition, metadata, and route-level boundaries; feature behavior belongs in `src/features/<feature>`.
- TypeScript strict mode is required. Validate unknown data at trust boundaries and do not silence type failures with `any`, unchecked casts, blanket suppressions, or non-null assertions without a tested invariant.
- Use Server Components by default. Add a Client Component only for browser APIs, interaction, or client state, and keep the client boundary as small as possible.
- Inspect the installed Next.js documentation in `node_modules/next/dist/docs/` before framework-specific changes. This repository uses Next.js 16, whose behavior may differ from older examples.
- Shared UI primitives and design tokens belong in the planned `packages/ui` package. Feature-specific components stay with their feature until reuse is demonstrated. Do not create a competing primitive or token system. See [frontend architecture](../../docs/engineering/FRONTEND_ARCHITECTURE.md).

## Security and data

- Every server entry point must authenticate and authorize the exact organization, store, resource, and action. Never trust `tenant_id` from browser input or treat a protected layout as authorization.
- Never put secrets, provider tokens, private endpoints, or privileged configuration in `NEXT_PUBLIC_*` variables. Assume every `NEXT_PUBLIC_*` value is visible to users and browser extensions.
- Never call privileged Shopify, advertising, MCP, storage, billing, or other provider APIs directly from the browser. Route approved operations through the authorized Ecomark server boundary. A browser redirect to an approved OAuth authorization endpoint is not a provider API call.
- Send the browser only the minimum authorized view model. Clear tenant-specific client state on organization switch or logout, and prevent late responses from a previous tenant from rendering.
- Do not fabricate dashboard values, trends, AI results, connection health, or success states in production. Demo fixtures must use an isolated path and a visible demo label.

## UI implementation

- Do not hard-code colors, spacing, radii, shadows, breakpoints, or other visual constants in feature components. Use semantic design tokens from the approved design system.
- Do not hard-code authored user-facing strings. Use namespaced translation keys with Arabic and English parity, including validation, accessibility labels, charts, errors, empty states, and notifications.
- Every screen must support Arabic/RTL and English/LTR with equivalent function and content. Use logical CSS properties and locale-aware number, currency, and date formatting.
- Forms must use a shared schema for client feedback and authoritative server validation. Provide visible labels, accessible errors, pending protection, and preserved safe input.
- Every asynchronous screen must implement loading, empty, and error states. Add offline, permission-denied, stale, partial, and cancellation states where the workflow can produce them.
- Meet the [dashboard design requirements](DESIGN.md) and repository [accessibility standard](../../docs/design/ACCESSIBILITY.md). Keyboard, screen-reader, touch, narrow-layout, theme, and direction support are release requirements.

## Verification

Run commands from the repository root with pnpm 10.0.0 only. Every implementation requires:

```bash
pnpm --filter @ecomarkai/web lint
pnpm --filter @ecomarkai/web typecheck
```

Also run the relevant suites in [dashboard testing](TESTING.md) and the repository [testing strategy](../../docs/engineering/TESTING_STRATEGY.md). The dashboard currently has no application test script; do not report missing tests as passed. Report changed files, commands and outcomes, skipped checks, and remaining risks. Do not commit unless explicitly requested, and show the complete diff first.

# Web dashboard testing

Owner: Product Engineering. This specializes the repository [testing strategy](../../docs/engineering/TESTING_STRATEGY.md). It records required coverage, not suites that already exist.

## Current executable checks

Run from the repository root with pnpm 10.0.0:

```bash
pnpm --filter @ecomarkai/web lint
pnpm --filter @ecomarkai/web typecheck
```

The dashboard currently has no `test` script or configured component, end-to-end, accessibility, or visual-regression runner. A Turbo test command with no participating dashboard task is not a pass. Establish runners and deterministic sanitized fixtures in an explicitly scoped implementation before claiming the affected journey release-ready.

## Required coverage

- Unit tests cover formatting, metric view models, permission helpers, schema rules, direction behavior, and pure state transitions.
- Component tests cover forms, tables, dialogs, charts, keyboard use, focus, duplicate submission, and loading, empty, error, offline, stale, partial, and permission-denied states.
- Integration tests cover Server Components, route handlers or Server Actions through authenticated tenant authorization, schema validation, minimal view models, cache isolation, and error translation.
- End-to-end tests cover Account → Organization → Store → Shopify connection → Data sync → Dashboard → AI analysis, including resume, revoked membership, denied OAuth, interrupted sync, tenant switch, stale data, and insufficient AI evidence.
- Accessibility tests combine automated scanning with manual keyboard, focus, screen-reader, zoom, reflow, and touch checks under the [accessibility requirements](../../docs/design/ACCESSIBILITY.md).
- Visual regression tests cover Arabic/RTL and English/LTR, light and dark themes, the required responsive viewports, long labels, large/negative amounts, and all data states. A baseline update requires human review.
- Security and isolation tests use at least two tenants and prove guessed identifiers, forged `tenant_id`, stale client responses, shared caches, exports, files, and direct API calls do not disclose or mutate forbidden data.

Connector, webhook, MCP-policy, and agent-evaluation behavior is tested in the owning backend boundaries, with dashboard integration cases verifying truthful status and safe denial. Browser tests must not use production credentials, customer records, live spending, or publication.

## Evidence

For each change, report exact command, environment/runtime, case count, result, skipped or flaky checks, and remaining release impact. A missing or skipped suite is not passed. Documentation-only edits require internal-link, index, consistency, and diff validation; application checks are not required when no application/configuration file changed.

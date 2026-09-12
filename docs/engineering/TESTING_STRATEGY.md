# Testing strategy

Owner: each changed domain; Product Engineering coordinates journey evidence. This is the required coverage model, not a claim that runners exist. Currently the dashboard exposes lint and typecheck scripts; no runnable application test script or complete CI gate exists. Empty scaffold folders and a successful Turbo run with no test tasks do not count as tests.

## Required suites

| Suite | Required cases | Intended home / trigger |
|---|---|---|
| Unit | Money/rounding, permissions, transformations, clock boundaries and decision rules | Owning module tests; each logic change |
| Component | Forms, keyboard interactions, loading/empty/error/denied/offline states | Feature or shared UI tests; each interactive change |
| Integration | Authenticated API → owned persistence, transactions, jobs and cache invalidation | Module integration tests; boundary/data changes |
| Contract | API/event/command schemas, compatibility and generated clients | Existing contract ownership; cross-module/interface changes |
| End-to-end | Entire account-to-analysis journey, resume, tenant switch and safe failures | Dashboard journey tests; every affected journey before release |
| Accessibility | Automated scan plus keyboard, screen reader, zoom and focus | Changed screens; [accessibility standard](../design/ACCESSIBILITY.md) |
| Security | Authentication, authorization, injection, secret redaction, SSRF and abuse limits | Security tests; trust-boundary changes |
| Tenant isolation | Two tenants, guessed IDs, forged tenant fields, caches, exports, jobs, files and retrieval | Every access path and release |
| Visual regression | Both locales/directions/themes; responsive and failure-state baselines | UI changes; inspect differences before accepting baselines |
| Connector/webhook | Signature failure, replay, duplicates, ordering, quota, token expiry, disconnect and reconciliation | Connector fixtures/integration; adapter changes |
| MCP policy | Quarantine, schema drift, approval expiry, changed inputs, scope, SSRF, kill switches and no unauthorized call | Gateway tests; tool/binding/policy changes |
| Agent evaluation | Groundedness, schema adherence, prompt injection, tool selection, cost, uncertainty and refusal to mutate without approval | Versioned evaluation datasets; agent/model/prompt/skill changes |

Cross-service `tests/` directories and `packages/ui` are planned homes and currently absent. Put tests with implemented modules and establish cross-service runners in an explicit implementation task; do not claim a command exists before verifying its manifest.

## Execution gates

1. Run affected lint and typecheck after every implementation. For the current web application use root commands `pnpm --filter @ecomarkai/web lint` and `pnpm --filter @ecomarkai/web typecheck`.
2. Run all suites in the matrix that match changed behavior. Unit tests cannot replace tenant-isolation, E2E or provider contract tests. Changes to shared code require checks of affected consumers through Turbo.
3. Before release run the complete implemented initial journey in both locales and directions, both themes and [responsive viewports](../design/RESPONSIVE_DESIGN.md). Include permission denial, sync interruption and insufficient analysis evidence.
4. Use sanitized deterministic fixtures for repeatable checks; provider sandbox tests are separate, credential-controlled and must not spend or publish without explicit authorization. Never use production customer data in snapshots.
5. Every security/isolation negative case must deny access and prove no forbidden data or external action escaped. Financial fixtures must reconcile exactly under their documented rounding policy. Agent evaluation thresholds must be versioned and approved before comparing a candidate, never lowered after a failure to make it pass.
6. Record command, environment/runtime, revision or worktree state, suite/case count, outcome and evidence location. A skipped, flaky or missing suite is not passed; assign an owner and block affected release claims until resolved.

For documentation-only work, validate local links, index coverage, requirement consistency and complete diff; no application rerun is required when code/configuration is untouched. Scaffold syntax validation proves only syntax/references, not product correctness. [Web application testing](../../apps/web/TESTING.md) applies these rules locally.

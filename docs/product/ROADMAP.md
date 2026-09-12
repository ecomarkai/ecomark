# Ecomark delivery roadmap

Owner: Product Engineering, with accountable engineering teams in
[OWNERSHIP.md](../../OWNERSHIP.md). This is the canonical, dependency-ordered project plan. It does
not promise calendar dates. Estimates and product decisions belong in the existing
[product evidence system](../../product/README.md).

Last reviewed: 2026-09-12 (Africa/Cairo)

Repository baseline reviewed: `b311954b23099e102a476523d6ab691cc11921a1`

Next review: after any gate exit, scope decision, or material implementation-status change; otherwise
weekly while delivery is active.

## Executive assessment

**Overall verdict: useful architecture reference, but not an implementation-ready Ecomark baseline.**
The repository has a strong tenant-security model, ownership documentation, agent governance, testing
requirements, recovery planning, and a generated Next.js shell whose current lint and typecheck pass.
However, its 27 proposed service
directories, split contract locations, Kubernetes-first infrastructure shape, agent migration folders,
and extensive future scope do not match the approved Ecomark starting architecture. It does not yet
provide the Account → Organization → Store → Shopify connection → Data sync → Dashboard → AI analysis
journey.

**AI verdict: well-specified, not yet proven good.** Agent manifests, schemas, policies, scenarios,
golden-case placeholders, and target thresholds exist. The sampled agent runtime still raises
`NotImplementedError`; there is no verified evaluation runner, measured scorecard, live model-gateway
path, grounded commerce context, or end-to-end evidence. Configuration and proposed thresholds are
not quality results.

The 27 service directories are not evidence of deployed microservices; most are placeholders. The risk
is organizational direction: treating them as deployable boundaries would encourage premature service
separation. They remain reference material until useful behavior is consolidated into the Ecomark
modular monolith.

Untracked working-tree content, including the current `packages/ui` draft, is active local work and is
not counted as delivered baseline until it is reviewed, renamed where required, integrated, and passes
its applicable gates. See [implementation status](../../IMPLEMENTATION_STATUS.md) for the current
delivery boundary.

## Status language

Use only these states in delivery reviews:

| State | Meaning |
|---|---|
| Not started | No reviewed implementation evidence exists |
| In progress | Implementation exists, but one or more required checks are missing or failing |
| Evidence review | Implementation and required checks exist; accountable review is pending |
| Complete | Exit evidence is approved and linked; directories, screens, or configuration alone do not qualify |
| Blocked | A named dependency or decision prevents safe progress and has an owner |

## Current portfolio scorecard

| Area | Current state | Assessment | Next proof required |
|---|---|---|---|
| Product definition | In progress | MVP journey, requirements, feature catalog, and sequencing are clear | Approved success baselines and delivery estimates |
| Repository/tooling | In progress | Legacy workspace and dashboard lint/typecheck work on the validated runtime; ECO-001A is incomplete | Approved Ecomark paths, reproducible install, lint, typecheck, build, and joint service startup |
| Web experience | In progress | Generated shell is normalized to `apps/web`; product screens are not implemented | First bilingual, accessible onboarding slice with component tests |
| Identity and tenancy | Not started | Security rules are documented | Runtime auth, memberships, server-derived tenant context, negative isolation tests |
| Shopify and ingestion | Not started | Connector boundaries are documented | OAuth, durable sync, replay, reconciliation, and webhook evidence |
| Metrics/dashboard | Not started | Metric requirements and truthful-state rules are documented | Canonical data, provenance, freshness, exact fixture reconciliation |
| AI analysis | Not started | Useful governance and evaluation assets are scaffolded under legacy naming | Ecomark-owned read-only runtime and approved measured evaluation report |
| Policy/approval/audit | Not started | Required execution path is specified | Enforced runtime path and immutable audit evidence |
| MCP/skills/media | Not started | Schemas and provider examples are scaffolded | Quarantine, binding, sandbox, rights, revocation, and integration tests |
| Billing/commercial | Not started | Capability boundaries exist | Entitlements, verified callbacks, metering, cancellation, and finance reconciliation |
| Operations/compliance | Not started | Documentation structure exists | Deployed telemetry, runbooks, recovery exercises, and collected evidence |

The scorecard is a repository evidence assessment, not a production audit or percentage-complete
claim.

## Approved target architecture

The new structure is also a plan until ECO-001A exit evidence passes. These decisions define the
implementation target; they do not claim that the current folders have already moved.

| Concern | Current legacy shape | Ecomark target |
|---|---|---|
| Product identity | `ecomark`, Ecomark, and ECO names | `ecomark` package/runtime names and Ecomark product language |
| Customer web app | `apps/web-dashboard` | `apps/web` |
| Backend capabilities | 27 proposed top-level service directories | Modules inside `services/core-api`; extract a service only after measured operational need and an ADR |
| Contracts | Definitions split across `contracts` and `packages/event-contracts` | One authoritative `packages/contracts`; generated clients may live elsewhere, handwritten duplicates may not |
| Agent data access | Migration/data folders can imply agent ownership | Agents own no migrations or tables; they use authorized domain APIs and tenant-scoped evidence contracts |
| Local runtime | Partial workspace shell | Docker-based local composition for `apps/web`, `services/core-api`, database, and required dependencies |
| Initial deployment | Kubernetes scaffold exists | Docker images deployed to AWS ECS/Fargate; no Kubernetes dependency in the initial path |
| Scope control | Many future capabilities visible together | NOW / NEXT / LATER; only NOW work may block ECO-001A or the Shopify-first MVP |

The legacy structure remains useful for ownership, agent governance, testing, security, compliance, and
recovery requirements. Migration must preserve those controls while simplifying deployable boundaries.

## Delivery horizons

| Horizon | Included gates | Rule |
|---|---|---|
| NOW | ECO-001A and Gates 1–4 | Build and prove the Shopify-first read-only Ecomark journey |
| NEXT | Gates 5–7 | Pilot hardening, then Salla, Meta read-only, and GA4 from validated demand |
| LATER | Gates 8–10 | MCP/skills/media, billing and governed execution, then ecosystem scale |

LATER directories, navigation items, or provider examples must not be represented as working features
and must not add runtime dependencies to NOW without an approved scope decision.

## Delivery sequence

### ECO-001A / Gate 0 — Ecomark executable baseline

Goal: convert the useful legacy scaffold into the smallest repeatable Ecomark modular-monolith
foundation. ECO-001A is currently **In progress**, not complete.

Deliver:

- Approve a bounded migration map from legacy paths and names; preserve history and do not regenerate
  the repository.
- Standardize active product, package, owner, runtime, and documentation names on Ecomark/`ecomark`.
- Move the customer app boundary to `apps/web` and consolidate backend modules under
  `services/core-api`.
- Consolidate authoritative API, event, command, and shared schemas in `packages/contracts`; remove or
  redirect duplicate handwritten definitions only after consumer validation.
- Remove database migrations and direct data ownership from agents. Agents may use only authorized
  domain APIs and versioned, tenant-scoped evidence contracts.
- Reconcile the current working tree and review the `packages/ui` draft as a separate scoped change,
  including its package name and lockfile impact.
- Pin and verify Node.js 24.20.0 consistently in local, CI, and deployment configuration.
- Establish CI for participating lint, typecheck, unit, contract, security, and test tasks; zero-task
  Turbo runs must fail or remain visibly incomplete.
- Implement the initial modular-monolith runtime in `services/core-api`; legacy service directories are
  design references, not independent deployments.
- Define Docker images and local composition first, then an ECS/Fargate deployment path. Kubernetes is
  outside the initial architecture and must not be required by NOW work.
- Establish local/staging configuration, migrations, sanitized fixtures, secret references,
  observability conventions, and evidence storage.
- Convert the Account-to-analysis journey into owned work items mapped to PR-01 through PR-07 and
  F-01 through F-08.

Exit evidence:

- Clean, reviewed diff with no unrelated user work overwritten.
- From a clean checkout, `pnpm install --frozen-lockfile`, root lint, typecheck, tests that actually
  participate, and production build all pass on Node.js 24.20.0 with pnpm 10.0.0.
- Docker composition starts `apps/web`, `services/core-api`, the database, and required dependencies
  together; health checks and one authenticated API round trip pass without secrets in source.
- The ECS/Fargate build/deployment definition is validated for the intended environment; no
  Kubernetes resource is needed for this gate.
- Active imports, manifests, workspace discovery, generated clients, environment examples, and
  documentation use the approved Ecomark paths and names. Placeholder source is not counted as proof.
- CI reports the exact participating packages and preserves missing suites as failures or blockers.
- Threat model, data classification, ownership, ADRs, and initial release checklist are approved.
- Shared UI, if accepted, proves Arabic/English, RTL/LTR, light/dark, keyboard, and automated
  accessibility foundations without product-specific business logic.

### Gate 1 — Secure account, organization, and store onboarding

Goal: establish Organization as the enforced tenant boundary and persist resumable onboarding.

Deliver:

- Account registration/sign-in, secure sessions, logout, recovery, and invitation flows.
- Organization ownership, memberships, roles, revocation, and safe organization switching.
- Store creation with validated locale, currency, and IANA timezone.
- Server-derived tenant context; never accept request-provided tenant or store ownership as authority.
- Bilingual responsive onboarding and truthful loading, empty, error, denied, and interrupted states.

Exit evidence:

- PR-01, PR-02, PR-07 and relevant F-01, F-02, F-07, F-08 criteria pass.
- Negative two-tenant tests cover guessed IDs, forged fields, membership revocation, caches, jobs,
  files, and client-state clearing after organization switch.
- Keyboard, screen-reader, zoom, responsive, RTL/LTR, and both-theme checks are recorded.

### Gate 2 — Shopify connection and trustworthy data sync

Goal: connect one owned Shopify store read-only and build a durable, reconcilable commerce data path.

Deliver:

- Minimum-scope, server-side Shopify OAuth with organization/store/session-bound state.
- Encrypted token storage through secret references, safe reconnect/disconnect, and token revocation.
- Verified webhook intake, immutable raw payload preservation, deduplication, and canonical
  normalization.
- Backfill and incremental sync with progress, cancellation, resumption, retries, quota handling,
  last success, freshness, and reconciliation status.
- Contract fixtures for products, customers, orders, refunds, discounts, inventory, and currency/time
  boundaries required by the first dashboard.

Exit evidence:

- PR-03, PR-04 and F-03, F-04 criteria pass in provider sandbox and deterministic fixtures.
- Signature failure, OAuth cancellation/replay, duplicates, out-of-order events, interrupted jobs,
  expired tokens, rate limits, and disconnect are tested.
- Provider totals reconcile under documented exclusions; no duplicate orders or cross-tenant data are
  observed after replay.

### Gate 3 — Verified commerce dashboard

Goal: provide the first trustworthy customer value before asking AI to interpret it.

Deliver:

- Versioned metric definitions and deterministic calculations for the smallest useful dashboard.
- Date range, store timezone, locale-aware currency, comparison period, freshness, exclusions, and
  source lineage on every metric.
- Responsive Arabic/English dashboard with accessible tables/charts and explicit unavailable, zero,
  stale, partial, loading, error, and denied states.
- Activation and time-to-first-verified-value events without raw customer data or credentials.

Exit evidence:

- PR-05 and F-05 criteria pass with exact, independently checked fixture reconciliation.
- Tenant-switch, stale-data, partial-sync, refund, timezone, and multi-currency cases pass.
- An authorized user can resume onboarding and reach the first reconciled dashboard end to end.

### Gate 4 — Grounded read-only AI analysis

Goal: determine with measured evidence whether Ecomark AI is good enough to recommend, while keeping
all provider mutations disabled.

Deliver:

- Implement the analytics/research runtime behind the model gateway using typed inputs and outputs.
- Build a tenant-scoped evidence bundle from canonical metrics with source IDs, periods, freshness,
  limitations, and version metadata.
- Add prompt-injection resistance, redaction, provider allowlists, cost/token/time limits, cancellation,
  fallbacks, and telemetry without customer data leakage.
- Implement a reproducible evaluation runner and versioned datasets containing normal, stale,
  missing, conflicting, adversarial, policy-conflict, and tool-failure cases.
- Produce an inspectable scorecard by model/prompt/dataset version; require human review for subjective
  business usefulness.
- Expose recommendations with citations, confidence/limitations, feedback, and a clear statement that
  no external action was executed.

AI release decision:

| Dimension | Required evidence to call it good |
|---|---|
| Tenant safety | 100% isolation and authorization cases pass; no cross-tenant retrieval or cache leakage |
| Policy adherence | 100% prohibited-mutation and approval-boundary cases pass |
| Schema reliability | 100% accepted outputs validate; invalid outputs fail closed and are observable |
| Groundedness | At least the approved threshold (currently proposed as 95%) on a versioned, reviewed dataset, with every material claim traceable to supplied evidence |
| Tool selection | At least the approved threshold (currently proposed as 95%) and zero unapproved tool calls |
| Data honesty | Stale, missing, conflicting, or insufficient evidence is disclosed; unavailable is never represented as zero |
| Business usefulness | Blind human review against a documented rubric meets the approved bar and records disagreement |
| Robustness | Prompt injection, malformed input, timeout, provider outage, cancellation, and fallback cases pass |
| Cost and latency | Measured against approved budgets on representative workloads; targets are not invented after results |
| Reproducibility | Model, prompt, tool/schema, dataset, code revision, seed where supported, and environment are recorded |

The AI verdict is **Good** only when every safety-critical row passes and all other rows meet their
pre-approved thresholds on held-out cases. It is **Conditionally good** when safety passes but a named
non-safety target misses and the limitation is visible. It is **Not good / blocked** if isolation,
authorization, policy, grounding integrity, or mutation controls fail. Thresholds must not be lowered
after seeing a failure merely to approve a candidate.

Exit evidence:

- PR-06 and F-06 criteria pass, plus the complete AI scorecard above.
- The full Account → Organization → Store → Shopify → Sync → Dashboard → AI journey passes end to end
  in both locales/directions and themes at required responsive sizes.
- Independent review confirms cited evidence supports the recommendations and no mutation path exists.

### Gate 5 — Pilot and production hardening

Goal: operate the read-only Shopify journey safely for a bounded pilot before expanding scope.

Deliver:

- Staging and production promotion, migration, rollback, backup/restore, incident, support, and data
  deletion procedures.
- SLOs based on measured behavior, dashboards/alerts, connector freshness monitoring, audit retention,
  kill switches, quotas, cost controls, and capacity tests.
- Consent, retention, residency, subprocessor, access-review, vulnerability, and release evidence
  appropriate to the pilot regions.
- Pilot feedback and product metrics with explicit cohort definitions and no fabricated targets.

Exit evidence:

- Security review, recovery exercise, load/capacity evidence, operational ownership, and release
  checklist are approved.
- Pilot organizations complete the verified journey; defects, abandonment, AI limitations, cost, and
  support load are measured and reviewed.

### Gate 6 — Salla commerce expansion

Goal: add Salla without changing the canonical commerce model or weakening Shopify behavior.

Deliver and prove minimum-scope Salla OAuth, backfill, webhooks, quotas, disconnect, reconciliation,
tenant isolation, Arabic-first UX, and connector contract compatibility. Re-run shared dashboard and AI
evaluations against both provider fixtures. Exit only when provider-specific behavior remains inside the
connector boundary and the canonical journey passes for both platforms.

### Gate 7 — Governed Meta and analytics expansion

Goal: add evidence sources before enabling external actions.

Deliver Meta read-only insights first, then GA4, using minimum scopes, attribution/confidence metadata,
freshness, quotas, disconnect, and reconciliation. Prioritize further connectors from validated customer
demand, integration cost, legal rights, and data quality—not directory availability. Each connector must
pass contracts, isolation, failure, and cost evidence before entering AI context.

### Gate 8 — MCP, skills, and media platform

Goal: expose approved capabilities to agents without giving them provider credentials or unrestricted
tools.

Deliver tool discovery into quarantine, reviewed schema/version bindings, OAuth and tenant binding,
policy and approval checks, SSRF/egress controls, revocation, budgets, kill switches, immutable audit,
and safe ambiguity handling. Add signed/versioned skills and tenant-isolated media only with sandbox,
rights, malware scanning, lineage, retention, and evaluation evidence. Connecting or installing a
provider never grants blanket authorization.

### Gate 9 — Billing, experiments, and bounded execution

Goal: commercialize the product and graduate selected recommendations to tightly governed actions.

Deliver subscriptions, entitlements, verified callbacks, idempotent metering, cancellation, and finance
reconciliation. Then add experiments and advertising execution through validation → policy → exact human
approval → idempotent command → connector execution → external verification → immutable audit.
Generation and publication/spend require separate approvals. No agent may approve its own proposal or
expand its tools, budget, tenant, or expiry.

### Gate 10 — Scale and ecosystem

Goal: expand only when observed load, ownership, isolation, or regional requirements justify it.

Deliver public APIs/SDKs and partner onboarding from authoritative contracts, regional data controls,
fair quotas, disaster recovery, cost attribution, seasonal load tests, and service extraction supported
by measured bottlenecks. Marketplace distribution and every new provider require security, license,
redistribution, data-rights, and operational review.

## Cross-cutting work in every gate

- **Security and tenancy:** deny by default; authorize server-side on every request, record, cache, job,
  file, export, retrieval, and tool call; always include negative cross-tenant tests.
- **Data quality:** preserve raw provider evidence, version transformations, reconcile outputs, expose
  freshness and lineage, and never turn missing values into zero.
- **Experience:** ship Arabic/RTL and English/LTR, light/dark, keyboard and screen-reader access,
  locale-aware formatting, logical CSS, responsive layouts, and truthful recovery states together.
- **Contracts:** schemas in `packages/contracts` are authoritative; generate clients and test compatibility
  instead of hand-copying types.
- **Operations:** assign ownership, telemetry, SLO/runbook, cost center, rollback, retention, and
  deprecation behavior to every deployable capability.
- **Evidence:** record commands, environment/runtime, revision, cases, outcomes, skipped checks, and
  artifact locations. Missing and flaky suites remain visible blockers.

## Priorities for the next delivery cycle

1. Complete and review the ECO-001A migration map for Ecomark naming, `apps/web`,
   `services/core-api`, `packages/contracts`, Docker, and ECS/Fargate.
2. Review and either integrate or explicitly defer the current `packages/ui` draft without mixing it
   into unrelated changes.
3. Make clean-checkout install, lint, typecheck, participating tests, build, Docker joint startup, and
   health checks reproducible; placeholder manifests or zero-task runs do not complete ECO-001A.
4. Implement the thinnest secure vertical slice of Gate 1: session → organization membership → owned
   store, including two-tenant denial tests.
5. Prepare Shopify sandbox contracts and deterministic reconciliation fixtures for Gate 2 in parallel
   only where they do not assume unfinished tenant authority.
6. Build the AI evaluation runner and review dataset design before model integration, but do not call AI
   quality “good” until Gate 3 provides trustworthy commerce evidence and Gate 4 results are measured.

## Roadmap review and change control

At every review, update the date, repository revision, gate states, evidence links, new blockers, and the
next three owned outcomes. A scope change must record affected requirement/feature IDs, owner, reason,
dependencies, acceptance impact, and decision date. Security or data-quality failures block the affected
gate. Other exceptions require an accountable owner, compensating control, expiry, and follow-up issue.

This roadmap supersedes sequencing in [the earlier SaaS release plan](../architecture/SAAS_RELEASE_PLAN.md)
and historical Arabic onboarding and architecture plans. Those documents retain useful capability,
security, and acceptance requirements, but their sequence is not current. Dates, capacity, revenue lift,
and AI accuracy remain assumptions until validated. Use the
[release process](../delivery/RELEASE_PROCESS.md) for promotion; this roadmap is not deployment
authorization.

# Product requirements

Owner: Product Engineering. Status: implementation requirements, not shipped capabilities. [Implementation status](../../IMPLEMENTATION_STATUS.md) records actual delivery. [Product evidence](../../product/README.md) remains the home of discovery, metrics and pricing decisions.

## Initial scope and acceptance

| ID | Requirement | Acceptance evidence |
|---|---|---|
| PR-01 | An authenticated account may create an organization or accept a valid invitation; ownership and membership are explicit. | Duplicate submission, expired invite and revoked membership tests pass. |
| PR-02 | An authorized organization member may create a store with a validated locale, currency and IANA timezone. | Store ownership cannot be reassigned by changing a request field. |
| PR-03 | A permitted member connects Shopify with minimum required read scopes through server-side OAuth handling. | Callback state is session/organization/store-bound, single-use and expiring; cancellation and replay are tested. |
| PR-04 | Sync persists verified raw events, normalizes canonical records and exposes progress, last success and reconciliation status. | Duplicate, out-of-order, interrupted and resumed syncs do not double-count orders. |
| PR-05 | Dashboard totals derive from authorized, traceable records with date range, timezone, currency and freshness. | Fixed fixtures reconcile to provider totals using documented exclusions; unavailable is distinct from zero. |
| PR-06 | AI analysis explains observed data with evidence references, period, limitations and version metadata. | Insufficient/stale evidence produces an explicit limitation; analysis cannot execute provider mutations. |
| PR-07 | Each step is usable in Arabic/RTL and English/LTR on mobile, tablet and desktop, in both themes. | The state and accessibility matrix in [design standards](../design/DESIGN_SYSTEM.md) passes. |

Required sequence: Account → Organization → Store → Shopify connection → Data sync → Dashboard → AI analysis. Completion means an authorized user can inspect the first reconciled dashboard and obtain a grounded analysis, not merely reach a page. Persist progress on the server and support safe resumption after logout or interruption.

## Boundaries and measurement

- Initial scope excludes advertising publication, autonomous spending, marketplaces and billing automation. Do not make them prerequisites for the first read-only slice.
- No production screen may substitute fabricated data when a connector, metric or analysis is unavailable. Demo fixtures must be isolated from production and explicitly labeled.
- Track organization creation, store creation, connection success, first reconciled sync, dashboard viewed and analysis completed as versioned, deduplicated events. Never include raw customer or credential fields in analytics.
- Measure activation as eligible organizations completing PR-01 through PR-06 divided by organizations that started onboarding in the same cohort. Record cohort boundaries and exclusions; do not claim a conversion target until evidence supports it.
- Report time to first verified value from onboarding start to first reconciled dashboard, with failures and abandonment visible. Product Engineering owns metric definitions and acceptance evidence.

Security gates are governed by [security policy](../../SECURITY.md). Financial definitions are governed by [content guidelines](../design/CONTENT_GUIDELINES.md). Scope changes require a requirement ID, owner, acceptance criteria and roadmap update.

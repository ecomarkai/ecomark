# User personas

Owner: Product Engineering. These are design hypotheses, not verified customer research. Store interviews and validation in [product discovery](../../product/README.md); update hypotheses using evidence without embedding customer data.

| Persona | Primary task | Minimum intended access | Success criterion |
|---|---|---|---|
| Organization owner | Establish the company, connect stores and assign access | Organization administration; sensitive changes require fresh authorization | Completes onboarding and can explain who may access each store |
| Commerce operator | Monitor sync, orders and trading performance | Read assigned stores; reconnect only with explicit integration permission | Identifies stale or failed data and follows a safe recovery action |
| Growth analyst | Compare performance and request evidence-backed analysis | Read authorized metrics and request permitted analysis | Can inspect definitions, evidence, comparison periods and uncertainty |
| Finance reviewer | Reconcile revenue, refunds and costs | Read permitted finance metrics; exports separately authorized | Reproduces a total without assuming missing cost is zero |
| Platform support operator | Diagnose failures and coordinate incidents | Separate platform surface; time-bound, reasoned and audited access | Resolves an issue without viewing credentials or unneeded customer data |

## Authorization and inclusion

Personas are not runtime roles and must not be used as permission checks. Identity and product owners must map tasks to explicit permissions, organization memberships, store restrictions and entitlements before implementation. A paid plan never grants a user permission by itself. Denied direct API calls must remain denied even when a page is hidden.

All personas must be supported in Arabic and English. Test keyboard-only use, screen readers, touch input, reduced motion and narrow layouts; do not assume operators work only on desktop. Account locale and store reporting timezone are separate preferences.

Before approving a journey, record the persona, job, authorized scope, failure recovery and research evidence or unresolved assumption. Use the [journeys](USER_JOURNEYS.md) and [accessibility standard](../design/ACCESSIBILITY.md) as acceptance inputs.

# User journeys

Owner: Product Engineering. The first journey implements [PR-01 through PR-07](PRODUCT_REQUIREMENTS.md). All transitions require authenticated server-side authorization; a browser route or progress flag never establishes permission.

| Step | User action and success state | Failure and recovery requirement |
|---|---|---|
| Account | Authenticate and establish a session | Explain invalid/expired authentication without revealing another account; allow retry |
| Organization | Create a company or accept an invitation and select authorized membership | Reject revoked/expired invitations; preserve safe form input; never accept a forged tenant identifier |
| Store | Create or select an owned store; confirm currency and timezone | Show field errors and reject an inaccessible store without revealing its existence |
| Shopify connection | Review read scopes, authorize Shopify and return to the intended store | Handle denial, callback replay, wrong session and provider outage; reconnect without duplicate connections |
| Data sync | Observe queued, running, partial, reconciled or failed state | Display last success and resumable progress; retry idempotently and explain missing permissions or quota delays |
| Dashboard | Inspect real totals, date range, currency, timezone and freshness | Distinguish no orders, no connection, partial data, unavailable metrics and permission denial |
| AI analysis | Request an analysis and inspect evidence and limitations | Show pending, cancelled, insufficient evidence, budget rejection and provider failure; never invent an analysis |

## Required alternate journeys

- Returning user resumes from server-verified progress. A bookmarked dashboard must explain unmet prerequisites with an authorized next action.
- Switching organization clears previous queries, selections and in-flight render results. A late response for the former organization must not appear in the new view.
- Read-only members can inspect permitted data but cannot connect stores, change roles or approve actions. Denial must include an appropriate route to request access.
- Disconnecting a store immediately disables new sync/analysis use of that connection and revokes its credentials; historical data follows the existing retention policy, not an implicit delete-all operation.
- Offline users see an explicit status. Never queue sensitive mutations for silent replay. Previously displayed authorized data must carry its freshness and be cleared on logout or tenant change.
- An AI recommendation is a proposal. Future execution enters a separate policy and approval journey; viewing or accepting text must never publish ads or spend money.

Acceptance evidence must cover each step and recovery path in both locales and directions. [Testing strategy](../engineering/TESTING_STRATEGY.md) defines the required suites; [UX principles](../design/UX_PRINCIPLES.md) defines state behavior.

# UX principles

Owner: Product Engineering. Apply these requirements to the [initial journey](../product/USER_JOURNEYS.md) and future features.

1. Keep organization, store, date range and data freshness visible wherever they change the meaning of results. Confirm context before sensitive actions; route changes must not silently switch tenants.
2. Give each screen one clear primary task. Preserve safe input after validation failure and support resumable onboarding; never persist secrets to browser storage.
3. Explain what happened and what the user can do next. A generic failure message is insufficient if a safe recovery is known. Do not reveal another tenant's resource existence.
4. Separate proposed, approved, queued, executing, verified, failed and unknown outcomes. An accepted API request is not a completed sync or executed action.
5. Show evidence, definitions, date windows and limitations with AI and financial results. Never present estimates as actuals, recommendations as guaranteed gains, or absent data as zero.
6. Make destructive and externally costly actions deliberate. The review must show affected store, action, data leaving Ecomark, cost/budget and reversibility; approval must bind to the exact action. Connecting an integration does not approve later publication.
7. Support keyboard, touch and screen-reader use without hiding core actions on hover. Arabic and English must offer equivalent functionality, error recovery and information density.

## State behavior

| State | Required behavior |
|---|---|
| Loading | Stable skeleton or progress label; announce long operations without repetitive interruptions |
| Empty | Explain whether setup is missing, filters match nothing or no records exist; offer the appropriate next action |
| Error | Safe localized message, correlation reference where useful, and retry only when safe |
| Offline | Persistent status; explain freshness; no silent replay of sensitive actions |
| Permission denied | Explain lack of access without leaking resource details; offer an authorized access-request path |
| Partial/stale | Show last successful update and missing coverage; prevent unsupported analysis or comparisons |
| Success | Confirm only the verified outcome; preserve access to details or audit history |

Acceptance requires observing both the happy path and recovery states with realistic translated content. Follow [content guidelines](CONTENT_GUIDELINES.md) and [testing strategy](../engineering/TESTING_STRATEGY.md).

# Change checklist

Owner: change author. Include this checklist or an equivalent evidence table in the review. Mark each item Pass, Fail, or Not applicable with a reason; a blank box is unresolved.

- [ ] Requested scope, acceptance criteria and affected feature IDs recorded.
- [ ] Existing instructions, implementation, contracts and documentation inspected.
- [ ] Pre-existing Git changes identified and preserved.
- [ ] App/package/domain boundaries preserved; architecture or dependency changes justified.
- [ ] Tenant context derived from authenticated membership; negative access cases covered.
- [ ] Secrets, customer data, logs, errors and client bundles reviewed for exposure.
- [ ] API/event/schema compatibility and idempotency checked where affected.
- [ ] Database migration, retention and recovery effects reviewed where affected.
- [ ] UI translation keys, Arabic/English parity, RTL/LTR, themes and responsive layouts verified.
- [ ] Loading, empty, error, offline, denied and partial/stale states verified where applicable.
- [ ] Accessibility automation and manual interaction checks recorded.
- [ ] Financial definitions, currency, reporting timezone and provenance verified.
- [ ] Connector/webhook replay, quota and token failures tested where affected.
- [ ] MCP quarantine, schema drift, approval, SSRF and kill-switch cases tested where affected.
- [ ] Agent evaluations include grounding, injection resistance, cost and execution boundaries where affected.
- [ ] Lint, typecheck and relevant suites passed with exact commands and outcomes.
- [ ] Missing/flaky/skipped checks listed with owner, impact and release implications.
- [ ] Operational owner, observability, budgets and runbook updated where affected.
- [ ] Documentation links and [index](../../FILE_INDEX.md) validated.
- [ ] Complete diff, including new files, reviewed; no unauthorized commit or destructive action.

A Not applicable entry must explain why the change does not touch that surface. Documentation-only work uses the narrower gate in [definition of done](DEFINITION_OF_DONE.md). See [testing strategy](../engineering/TESTING_STRATEGY.md) for required coverage; do not replace it with blanket “tests passed.”

# Coding standards

Owner: relevant team in [OWNERSHIP.md](../../OWNERSHIP.md). Follow [root instructions](../../AGENTS.md); these requirements supplement existing architecture rather than introduce new domain ownership.

## Change design

- Read the affected implementation, callers, contracts and tests before editing. Keep the diff scoped; do not regenerate placeholders, rename architecture or reformat unrelated files.
- Use strict TypeScript in JavaScript applications. Validate unknown data at boundaries, narrow types explicitly and avoid `any`, unchecked casts, non-null assertions and suppressed errors unless a documented invariant and test justify them.
- Keep functions focused on one domain operation. Name identifiers and comments in English; explain non-obvious invariants and tradeoffs rather than narrating syntax. Product strings use translation keys.
- Keep pure domain calculations separate from IO, framework state and provider SDKs. Errors must have typed, stable categories; follow [error handling](ERROR_HANDLING.md).
- Import only declared public package interfaces. Avoid cycles, app-to-app imports and handwritten copies of canonical schemas. Shared utilities require demonstrated reuse and ownership.
- Never use a global tenant, process-wide mutable user context or unscoped cache. Pass validated request/job context explicitly to authorization and persistence boundaries.
- Use deterministic clocks, identifiers and external adapters in tests. Time, randomness and provider calls must be replaceable for meaningful failure tests.
- Preserve existing language boundaries. Do not rewrite Python scaffold modules into TypeScript merely for consistency; select a runtime through an owned architecture decision and compatibility checks.

## Review and verification

Every implementation must include relevant regression evidence for changed behavior, especially negative authorization, money, retry and state transitions. Run lint/typecheck and the applicable [test suites](TESTING_STRATEGY.md). A suppression, test skip or TODO cannot silently replace a requirement. Missing runners must be reported and implemented in a scoped task before claiming the affected feature release-ready.

Use repository formatting tools when installed; do not install or upgrade tools without following [dependency policy](DEPENDENCY_POLICY.md). Documentation-only changes require readable Markdown, working local links and an accurate index. [Definition of done](../delivery/DEFINITION_OF_DONE.md) governs completion.

# Definition of done

Owner: change author and accountable reviewer. [CONTRIBUTING.md](../../CONTRIBUTING.md) remains the contribution policy. A feature is complete only when the following applicable requirements have evidence; unchecked or missing tests must remain visible.

## Implementation gate

- Requested acceptance criteria and requirement/feature IDs are satisfied; scope and actual implementation status are recorded accurately.
- Existing architecture and unrelated user changes are preserved. Canonical contracts, package boundaries and strict typing are respected.
- Server-side tenant/store authorization covers every access path; negative cross-tenant tests prove denial and no forbidden effects.
- Secrets and customer data do not leak through clients, logs, errors, prompts, fixtures or artifacts. MCP/agent changes include policy, approval, revocation, budget and evaluation evidence.
- Changed UI works in Arabic/RTL and English/LTR, both themes and responsive sizes; localization parity and applicable accessibility criteria pass.
- Loading, empty, error, offline, stale/partial and permission-denied states are implemented where applicable. Financial/AI outputs use real evidence and declared definitions.
- Lint, typecheck and relevant [test suites](../engineering/TESTING_STRATEGY.md) have passed. Shared changes include affected consumers; a missing runner is not a pass.
- Migrations have compatibility and recovery evidence; operational changes have ownership, telemetry and runbooks. Dependency changes have justification and compatibility evidence.
- Documentation and index are current. Complete diff, changed files, commands, results, skipped checks and risks are supplied for review. No commit is made unless explicitly requested.

## Documentation-only gate

Inspect existing documents and references first. New requirements must distinguish planned behavior
from verified capabilities and avoid duplicating authoritative documents. Validate internal links,
coverage in the current [repository file map](../architecture/REPOSITORY_FILE_MAP.md), instruction
consistency and Markdown diff whitespace. Prove application/configuration files were not altered by the
documentation task. Application tests need not be rerun for prose-only edits; state that explicitly.

Completion of a change does not authorize deployment or establish production readiness. Apply [release process](RELEASE_PROCESS.md) separately. Release-blocking security/isolation or accessibility failures cannot be hidden under a generic “done” label.

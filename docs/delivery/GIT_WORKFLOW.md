# Git workflow

Owner: all contributors. This operationalizes the existing trunk-based and conventional-commit policy in [CONTRIBUTING.md](../../CONTRIBUTING.md), rather than replacing it.

1. Inspect `git status`, current branch and recent history before work. Record pre-existing changes and leave them intact. The root repository owns all workspaces; never copy nested `.git` metadata.
2. Use short-lived scoped branches when branching is requested or needed; automation-created branch names use `codex/` by default unless the task specifies otherwise. Do not rewrite shared history.
3. Keep each change focused. Include tests and documentation for its behavior, but no unrelated regeneration, dependency upgrades or formatting.
4. Review `git diff --check`, `git diff --stat` and the complete diff. Include untracked file contents because ordinary `git diff` omits them. Identify pre-existing changes separately.
5. Do not stage unrelated files or create a Git commit unless explicitly requested. Show the diff before the requested commit; document the exact files included. Use a conventional message for an authorized commit.
6. Submit review evidence: problem, behavior, test commands/results, risks and migration/rollback details where relevant. Obtain the accountable team review under [OWNERSHIP.md](../../OWNERSHIP.md).
7. Before merging, validate against the current target branch and resolve conflicts without discarding user changes. Merge and release remain separate actions with their own authorization and gates.

Destructive resets, forced pushes, broad cleans and history rewrites require explicit approval for the exact effect. Never use them to obtain a clean status. A failed check must be explained and fixed or reported; do not bypass it by changing the test result or hiding a file.

Use [change checklist](CHANGE_CHECKLIST.md) and [definition of done](DEFINITION_OF_DONE.md) for the review record.

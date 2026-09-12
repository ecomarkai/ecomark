# Release process

Owner: SRE/Platform release owner with accountable domain teams. This procedure defines required evidence; the repository does not yet have a complete release pipeline. The existing [SaaS release plan](../architecture/SAAS_RELEASE_PLAN.md) owns broader capability gates and [current roadmap](../product/ROADMAP.md) owns initial sequencing.

## Promotion gates

1. Define scope, requirement IDs, accountable release owner, artifact revision, deployment target and rollback decision maker. Confirm the target environment and authorization before deployment.
2. Build reproducibly with Node compatibility checked and pnpm 10.0.0. Use `pnpm install --frozen-lockfile` in the release pipeline, then implemented package build and [test gates](../engineering/TESTING_STRATEGY.md). Record actual participating tasks and results; empty task graphs do not pass.
3. Review dependency/provenance evidence, secret scanning, contract compatibility, tenant-isolation results, accessibility findings, agent evaluations and outstanding risks. No unverified production-readiness claim is permitted.
4. For migrations, review lock/backfill impact, expand/contract compatibility, backup restoration and recovery steps. Explicitly approve any destructive operation; disclose data that cannot be restored by an app rollback.
5. Validate staging with sanitized fixtures and approved provider sandboxes. Exercise the full initial journey, recovery paths, observability and feature kill switches. No live paid action without its required approval.
6. Promote the same immutable artifact to a bounded canary/cohort; do not rebuild differently for production. Record monitoring window and numeric rollback thresholds before rollout using approved [performance/SLO evidence](../engineering/PERFORMANCE_BUDGETS.md).
7. Expand only after error, freshness, reconciliation, cost and security signals pass. Immediately halt on suspected tenant leakage, credential exposure or unapproved external action. Record the release outcome and evidence references in existing [operations](../../operations/README.md).

## Rollback and closure

Keep the previous known-good artifact and a tested recovery procedure. Stop new affected work using the narrowest feature/tenant/provider kill switch; reconcile in-flight paid actions before any replay. Roll back compatible app code or execute the approved forward data repair. A rollback cannot unsend a message or reverse spent money.

Document affected versions/cohorts, migrations, monitoring results, incidents and follow-up owners. Production evidence must stay in approved restricted storage, not raw customer snapshots in Git. Use [incident process](INCIDENT_PROCESS.md) for unexpected harm. Satisfying this document does not itself authorize a release.

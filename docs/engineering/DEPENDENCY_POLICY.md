# Dependency and runtime policy

Owner: Platform Engineering and the consuming domain team.

## Current baseline

| Item | Verified repository baseline | Rule |
|---|---|---|
| Package manager | `pnpm@10.0.0` in root and dashboard manifests | Only permitted JavaScript package manager; do not upgrade |
| Node.js | Local baseline `24.20.0` | Compatibility baseline, not an enforced engine pin or broader support claim |
| Workspace | Root `pnpm-workspace.yaml` and lockfile | No nested workspace or competing lockfile |
| Orchestration | Turbo root tasks | Package scripts must exist; empty task graphs are not validation |
| Dashboard | Next.js `16.3.4`, React `19.2.8`, TypeScript strict configuration | Review installed framework documentation before version-sensitive changes |

The repository currently has no engine pin, CI runtime matrix or production deployment proof. Establish those in a separately scoped implementation. A Node change must explain installed framework/native dependency compatibility and pass lint, typecheck, build and relevant tests under the proposed runtime before documenting it as supported.

## Adds and upgrades

A dependency proposal must state the problem, existing options considered, intended package owner, version choice, maintenance/license/security assessment, bundle/runtime impact, migration risk and validation. No unrequested upgrades, framework regeneration or lockfile churn. Changing pnpm requires a separately explicit instruction overriding the fixed-version policy.

Run installs from the root using the pinned pnpm version when installation is authorized. Declare dependencies in the actual consumer's manifest; use `workspace:*` for internal packages. CI/release installs must use the committed lockfile with `pnpm install --frozen-lockfile`; do not regenerate it during deployment.

Review install scripts and provenance before allowing execution. The existing workspace ignores build scripts for `sharp` and `unrs-resolver`; preserve that setting unless a scoped, justified compatibility change is reviewed. Never use a blanket script approval to suppress warnings.

Record vulnerability/license findings and their remediation owner. A release exception requires impact, compensating controls, expiry and security-owner review; do not claim dependencies are secure merely because installation succeeds. Follow [SECURITY.md](../../SECURITY.md) and [release process](../delivery/RELEASE_PROCESS.md).

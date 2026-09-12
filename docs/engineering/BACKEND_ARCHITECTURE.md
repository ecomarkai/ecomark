# Backend implementation boundaries

Owner: domain teams in [OWNERSHIP.md](../../OWNERSHIP.md). Reuse [project structure](../../PROJECT_STRUCTURE.md), [repository blueprint](../architecture/REPOSITORY_BLUEPRINT.md) and [scaling guardrails](../../SCALING_GUARDRAILS.md). This is an implementation contract for those boundaries, not a second architecture.

## Responsibilities

| Boundary | Must own | Must not do |
|---|---|---|
| API edge | Authentication entry, quotas and routing | Own commerce data or duplicate domain policy |
| Public API | Versioned client contract and authorized use-case routing | Expose internal storage or provider secrets |
| Admin gateway | Administrative read aggregation and typed command routing | Write another module's database directly |
| Identity/control plane | Membership and organization/store lifecycle respectively | Trust caller-selected tenant scope |
| Domain module | Use cases, invariants and owned persistence | Depend on browser or vendor SDK semantics |
| Connector | Provider auth, mapping, quotas, sync and approved command execution | Decide pricing, marketing or tenant permissions |
| Policy/approval/execution | Authorization, bound approvals, controlled execution and verification | Let model output grant execution rights |

Use ports and adapters: API/worker → application use case → domain; infrastructure implements IO ports. Start as a modular monolith with explicit module interfaces. Extract deployables only under scaling guardrails and an owned ADR. Templates and examples do not prove a runtime is deployed.

## Request and event lifecycle

Authenticate → resolve current tenant membership → authorize store/resource/action → validate schema → execute domain use case → persist outcome and audit safely → return a minimal contract. Service-to-service calls require authenticated workload identity and explicit scope, not implicit network trust.

For events, verify provider signature and bind the verified connection to the tenant before durable raw intake. Acknowledge only after durable acceptance; normalize asynchronously, deduplicate, reconcile and expose failures. Queue workers recheck connection state, permission and policy before sensitive execution.

Use transaction/outbox coordination when state and published events must agree. Jobs require versioned payloads, bounded retries, idempotency, cancellation, dead-letter replay and observable ownership. Never automatically retry an ambiguous paid write. [Database](DATABASE_GUIDELINES.md), [API](API_GUIDELINES.md) and [observability](OBSERVABILITY.md) rules apply to all adapters.

Agents emit typed proposals through canonical capabilities. Preserve the existing [MCP runtime boundary](../../services/mcp-gateway/security/runtime-boundaries.md); no backend convenience endpoint may bypass it.

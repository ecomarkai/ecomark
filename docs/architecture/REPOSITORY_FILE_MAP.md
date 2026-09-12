# Ecomark repository file map

This generated index lists every tracked or non-ignored repository file in the current
worktree. It describes presence and implementation state; it does not claim product readiness.
Regenerate with `python scripts/generate_repository_inventory.py`.

- Snapshot revision: `7a1c3e73406f0846f365e3bd3dc849943ce25192`
- Worktree: `dirty`
- Files indexed: 1403
- The two generated inventory files intentionally omit self-hashes.

State legend: `implemented-source` means substantive source exists, not that its integration or
release checks pass. `scaffold-source`, `stub`, `comment-only-stub`, `placeholder-data`, and
`placeholder` are not working implementation.

## agents

| Path | Kind | State | Summary |
|---|---|---|---|
| `agents/README.md` | documentation | documentation | Ecomark Agent Platform |
| `agents/_template/README.md` | documentation | documentation | Agent template |
| `agents/_template/agent.yaml.example` | configuration | specification | name: example-agent |
| `agents/_template/evaluations/datasets/golden-cases.jsonl` | evaluation | specification | Evaluation file. |
| `agents/_template/evaluations/rubric.yaml` | evaluation | specification | version: 1 |
| `agents/_template/evaluations/scenarios.yaml` | evaluation | specification | version: 1 |
| `agents/_template/evaluations/thresholds.yaml` | evaluation | specification | version: 1 |
| `agents/_template/migrations/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `agents/_template/policies/approval-rules.yaml` | configuration | specification | version: 1 |
| `agents/_template/policies/data-access.yaml` | configuration | specification | version: 1 |
| `agents/_template/policies/permissions.yaml` | configuration | specification | version: 1 |
| `agents/_template/policies/risk-limits.yaml` | configuration | specification | version: 1 |
| `agents/_template/prompts/explainer.md` | documentation | documentation | Template |
| `agents/_template/prompts/planner.md` | documentation | documentation | Template |
| `agents/_template/prompts/system.md` | documentation | documentation | Template |
| `agents/_template/src/__init__.py` | source | comment-only-stub | Source file. |
| `agents/_template/src/agent.py` | source | comment-only-stub | Source file. |
| `agents/_template/src/context.py` | source | comment-only-stub | Source file. |
| `agents/_template/src/output_schema.py` | source | comment-only-stub | Source file. |
| `agents/_template/src/planner.py` | source | comment-only-stub | Source file. |
| `agents/_template/tests/contract/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `agents/_template/tests/integration/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `agents/_template/tests/unit/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `agents/_template/tools/capability-bindings.yaml` | configuration | specification | version: 1 |
| `agents/_template/tools/registry.yaml` | configuration | specification | version: 1 |
| `agents/_template/workflows/human-approval.yaml` | configuration | specification | version: 1 |
| `agents/_template/workflows/main.yaml` | configuration | specification | version: 1 |
| `agents/_template/workflows/recovery.yaml` | configuration | specification | version: 1 |
| `agents/acquisition/creative-strategy/README.md` | documentation | documentation | creative-strategy |
| `agents/acquisition/creative-strategy/agent.yaml` | manifest | specification | version: 1 |
| `agents/acquisition/creative-strategy/contracts/input.schema.json` | contract | specification | "$schema": "https://json-schema.org/draft/2020-12/schema", |
| `agents/acquisition/creative-strategy/contracts/output.schema.json` | contract | specification | "$schema": "https://json-schema.org/draft/2020-12/schema", |
| `agents/acquisition/creative-strategy/evaluations/datasets/golden-cases.jsonl` | evaluation | placeholder-data | Evaluation file. |
| `agents/acquisition/creative-strategy/evaluations/rubric.yaml` | evaluation | specification | version: 1 |
| `agents/acquisition/creative-strategy/evaluations/scenarios.yaml` | evaluation | specification | version: 1 |
| `agents/acquisition/creative-strategy/evaluations/thresholds.yaml` | evaluation | specification | version: 1 |
| `agents/acquisition/creative-strategy/migrations/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `agents/acquisition/creative-strategy/policies/approval-rules.yaml` | configuration | specification | version: 1 |
| `agents/acquisition/creative-strategy/policies/data-access.yaml` | configuration | specification | version: 1 |
| `agents/acquisition/creative-strategy/policies/permissions.yaml` | configuration | specification | version: 1 |
| `agents/acquisition/creative-strategy/policies/risk-limits.yaml` | configuration | specification | version: 1 |
| `agents/acquisition/creative-strategy/prompts/explainer.md` | documentation | documentation | Explainer prompt |
| `agents/acquisition/creative-strategy/prompts/planner.md` | documentation | documentation | Planner prompt |
| `agents/acquisition/creative-strategy/prompts/system.md` | documentation | documentation | System prompt |
| `agents/acquisition/creative-strategy/src/__init__.py` | source | comment-only-stub | Source file. |
| `agents/acquisition/creative-strategy/src/agent.py` | source | stub | """creative-strategy runtime boundary.""" |
| `agents/acquisition/creative-strategy/src/context.py` | source | comment-only-stub | """Build a tenant-scoped, time-bounded and permission-filtered context.""" |
| `agents/acquisition/creative-strategy/src/output_schema.py` | source | comment-only-stub | """Typed proposals, evidence, confidence, risk and expected impact.""" |
| `agents/acquisition/creative-strategy/src/planner.py` | source | comment-only-stub | """Deterministic planning before optional model reasoning.""" |
| `agents/acquisition/creative-strategy/tests/contract/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `agents/acquisition/creative-strategy/tests/integration/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `agents/acquisition/creative-strategy/tests/unit/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `agents/acquisition/creative-strategy/tools/capability-bindings.yaml` | configuration | specification | version: 1 |
| `agents/acquisition/creative-strategy/tools/registry.yaml` | configuration | specification | version: 1 |
| `agents/acquisition/creative-strategy/workflows/human-approval.yaml` | configuration | specification | version: 1 |
| `agents/acquisition/creative-strategy/workflows/main.yaml` | configuration | specification | version: 1 |
| `agents/acquisition/creative-strategy/workflows/recovery.yaml` | configuration | specification | version: 1 |
| `agents/acquisition/media-buyer/README.md` | documentation | documentation | media-buyer |
| `agents/acquisition/media-buyer/agent.yaml` | manifest | specification | version: 1 |
| `agents/acquisition/media-buyer/contracts/input.schema.json` | contract | specification | "$schema": "https://json-schema.org/draft/2020-12/schema", |
| `agents/acquisition/media-buyer/contracts/output.schema.json` | contract | specification | "$schema": "https://json-schema.org/draft/2020-12/schema", |
| `agents/acquisition/media-buyer/evaluations/datasets/golden-cases.jsonl` | evaluation | placeholder-data | Evaluation file. |
| `agents/acquisition/media-buyer/evaluations/rubric.yaml` | evaluation | specification | version: 1 |
| `agents/acquisition/media-buyer/evaluations/scenarios.yaml` | evaluation | specification | version: 1 |
| `agents/acquisition/media-buyer/evaluations/thresholds.yaml` | evaluation | specification | version: 1 |
| `agents/acquisition/media-buyer/migrations/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `agents/acquisition/media-buyer/policies/approval-rules.yaml` | configuration | specification | version: 1 |
| `agents/acquisition/media-buyer/policies/data-access.yaml` | configuration | specification | version: 1 |
| `agents/acquisition/media-buyer/policies/permissions.yaml` | configuration | specification | version: 1 |
| `agents/acquisition/media-buyer/policies/risk-limits.yaml` | configuration | specification | version: 1 |
| `agents/acquisition/media-buyer/prompts/explainer.md` | documentation | documentation | Explainer prompt |
| `agents/acquisition/media-buyer/prompts/planner.md` | documentation | documentation | Planner prompt |
| `agents/acquisition/media-buyer/prompts/system.md` | documentation | documentation | System prompt |
| `agents/acquisition/media-buyer/src/__init__.py` | source | comment-only-stub | Source file. |
| `agents/acquisition/media-buyer/src/agent.py` | source | stub | """media-buyer runtime boundary.""" |
| `agents/acquisition/media-buyer/src/context.py` | source | comment-only-stub | """Build a tenant-scoped, time-bounded and permission-filtered context.""" |
| `agents/acquisition/media-buyer/src/output_schema.py` | source | comment-only-stub | """Typed proposals, evidence, confidence, risk and expected impact.""" |
| `agents/acquisition/media-buyer/src/planner.py` | source | comment-only-stub | """Deterministic planning before optional model reasoning.""" |
| `agents/acquisition/media-buyer/tests/contract/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `agents/acquisition/media-buyer/tests/integration/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `agents/acquisition/media-buyer/tests/unit/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `agents/acquisition/media-buyer/tools/capability-bindings.yaml` | configuration | specification | version: 1 |
| `agents/acquisition/media-buyer/tools/registry.yaml` | configuration | specification | version: 1 |
| `agents/acquisition/media-buyer/workflows/human-approval.yaml` | configuration | specification | version: 1 |
| `agents/acquisition/media-buyer/workflows/main.yaml` | configuration | specification | version: 1 |
| `agents/acquisition/media-buyer/workflows/recovery.yaml` | configuration | specification | version: 1 |
| `agents/acquisition/research/README.md` | documentation | documentation | research |
| `agents/acquisition/research/agent.yaml` | manifest | specification | version: 1 |
| `agents/acquisition/research/contracts/input.schema.json` | contract | specification | "$schema": "https://json-schema.org/draft/2020-12/schema", |
| `agents/acquisition/research/contracts/output.schema.json` | contract | specification | "$schema": "https://json-schema.org/draft/2020-12/schema", |
| `agents/acquisition/research/evaluations/datasets/golden-cases.jsonl` | evaluation | placeholder-data | Evaluation file. |
| `agents/acquisition/research/evaluations/rubric.yaml` | evaluation | specification | version: 1 |
| `agents/acquisition/research/evaluations/scenarios.yaml` | evaluation | specification | version: 1 |
| `agents/acquisition/research/evaluations/thresholds.yaml` | evaluation | specification | version: 1 |
| `agents/acquisition/research/migrations/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `agents/acquisition/research/policies/approval-rules.yaml` | configuration | specification | version: 1 |
| `agents/acquisition/research/policies/data-access.yaml` | configuration | specification | version: 1 |
| `agents/acquisition/research/policies/permissions.yaml` | configuration | specification | version: 1 |
| `agents/acquisition/research/policies/risk-limits.yaml` | configuration | specification | version: 1 |
| `agents/acquisition/research/prompts/explainer.md` | documentation | documentation | Explainer prompt |
| `agents/acquisition/research/prompts/planner.md` | documentation | documentation | Planner prompt |
| `agents/acquisition/research/prompts/system.md` | documentation | documentation | System prompt |
| `agents/acquisition/research/src/__init__.py` | source | comment-only-stub | Source file. |
| `agents/acquisition/research/src/agent.py` | source | stub | """research runtime boundary.""" |
| `agents/acquisition/research/src/context.py` | source | comment-only-stub | """Build a tenant-scoped, time-bounded and permission-filtered context.""" |
| `agents/acquisition/research/src/output_schema.py` | source | comment-only-stub | """Typed proposals, evidence, confidence, risk and expected impact.""" |
| `agents/acquisition/research/src/planner.py` | source | comment-only-stub | """Deterministic planning before optional model reasoning.""" |
| `agents/acquisition/research/tests/contract/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `agents/acquisition/research/tests/integration/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `agents/acquisition/research/tests/unit/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `agents/acquisition/research/tools/capability-bindings.yaml` | configuration | specification | version: 1 |
| `agents/acquisition/research/tools/registry.yaml` | configuration | specification | version: 1 |
| `agents/acquisition/research/workflows/human-approval.yaml` | configuration | specification | version: 1 |
| `agents/acquisition/research/workflows/main.yaml` | configuration | specification | version: 1 |
| `agents/acquisition/research/workflows/recovery.yaml` | configuration | specification | version: 1 |
| `agents/acquisition/seo/README.md` | documentation | documentation | seo |
| `agents/acquisition/seo/agent.yaml` | manifest | specification | version: 1 |
| `agents/acquisition/seo/contracts/input.schema.json` | contract | specification | "$schema": "https://json-schema.org/draft/2020-12/schema", |
| `agents/acquisition/seo/contracts/output.schema.json` | contract | specification | "$schema": "https://json-schema.org/draft/2020-12/schema", |
| `agents/acquisition/seo/evaluations/datasets/golden-cases.jsonl` | evaluation | placeholder-data | Evaluation file. |
| `agents/acquisition/seo/evaluations/rubric.yaml` | evaluation | specification | version: 1 |
| `agents/acquisition/seo/evaluations/scenarios.yaml` | evaluation | specification | version: 1 |
| `agents/acquisition/seo/evaluations/thresholds.yaml` | evaluation | specification | version: 1 |
| `agents/acquisition/seo/migrations/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `agents/acquisition/seo/policies/approval-rules.yaml` | configuration | specification | version: 1 |
| `agents/acquisition/seo/policies/data-access.yaml` | configuration | specification | version: 1 |
| `agents/acquisition/seo/policies/permissions.yaml` | configuration | specification | version: 1 |
| `agents/acquisition/seo/policies/risk-limits.yaml` | configuration | specification | version: 1 |
| `agents/acquisition/seo/prompts/explainer.md` | documentation | documentation | Explainer prompt |
| `agents/acquisition/seo/prompts/planner.md` | documentation | documentation | Planner prompt |
| `agents/acquisition/seo/prompts/system.md` | documentation | documentation | System prompt |
| `agents/acquisition/seo/src/__init__.py` | source | comment-only-stub | Source file. |
| `agents/acquisition/seo/src/agent.py` | source | stub | """seo runtime boundary.""" |
| `agents/acquisition/seo/src/context.py` | source | comment-only-stub | """Build a tenant-scoped, time-bounded and permission-filtered context.""" |
| `agents/acquisition/seo/src/output_schema.py` | source | comment-only-stub | """Typed proposals, evidence, confidence, risk and expected impact.""" |
| `agents/acquisition/seo/src/planner.py` | source | comment-only-stub | """Deterministic planning before optional model reasoning.""" |
| `agents/acquisition/seo/tests/contract/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `agents/acquisition/seo/tests/integration/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `agents/acquisition/seo/tests/unit/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `agents/acquisition/seo/tools/capability-bindings.yaml` | configuration | specification | version: 1 |
| `agents/acquisition/seo/tools/registry.yaml` | configuration | specification | version: 1 |
| `agents/acquisition/seo/workflows/human-approval.yaml` | configuration | specification | version: 1 |
| `agents/acquisition/seo/workflows/main.yaml` | configuration | specification | version: 1 |
| `agents/acquisition/seo/workflows/recovery.yaml` | configuration | specification | version: 1 |
| `agents/catalog.yaml` | configuration | specification | version: 1 |
| `agents/conversion/cro/README.md` | documentation | documentation | cro |
| `agents/conversion/cro/agent.yaml` | manifest | specification | version: 1 |
| `agents/conversion/cro/contracts/input.schema.json` | contract | specification | "$schema": "https://json-schema.org/draft/2020-12/schema", |
| `agents/conversion/cro/contracts/output.schema.json` | contract | specification | "$schema": "https://json-schema.org/draft/2020-12/schema", |
| `agents/conversion/cro/evaluations/datasets/golden-cases.jsonl` | evaluation | placeholder-data | Evaluation file. |
| `agents/conversion/cro/evaluations/rubric.yaml` | evaluation | specification | version: 1 |
| `agents/conversion/cro/evaluations/scenarios.yaml` | evaluation | specification | version: 1 |
| `agents/conversion/cro/evaluations/thresholds.yaml` | evaluation | specification | version: 1 |
| `agents/conversion/cro/migrations/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `agents/conversion/cro/policies/approval-rules.yaml` | configuration | specification | version: 1 |
| `agents/conversion/cro/policies/data-access.yaml` | configuration | specification | version: 1 |
| `agents/conversion/cro/policies/permissions.yaml` | configuration | specification | version: 1 |
| `agents/conversion/cro/policies/risk-limits.yaml` | configuration | specification | version: 1 |
| `agents/conversion/cro/prompts/explainer.md` | documentation | documentation | Explainer prompt |
| `agents/conversion/cro/prompts/planner.md` | documentation | documentation | Planner prompt |
| `agents/conversion/cro/prompts/system.md` | documentation | documentation | System prompt |
| `agents/conversion/cro/src/__init__.py` | source | comment-only-stub | Source file. |
| `agents/conversion/cro/src/agent.py` | source | stub | """cro runtime boundary.""" |
| `agents/conversion/cro/src/context.py` | source | comment-only-stub | """Build a tenant-scoped, time-bounded and permission-filtered context.""" |
| `agents/conversion/cro/src/output_schema.py` | source | comment-only-stub | """Typed proposals, evidence, confidence, risk and expected impact.""" |
| `agents/conversion/cro/src/planner.py` | source | comment-only-stub | """Deterministic planning before optional model reasoning.""" |
| `agents/conversion/cro/tests/contract/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `agents/conversion/cro/tests/integration/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `agents/conversion/cro/tests/unit/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `agents/conversion/cro/tools/capability-bindings.yaml` | configuration | specification | version: 1 |
| `agents/conversion/cro/tools/registry.yaml` | configuration | specification | version: 1 |
| `agents/conversion/cro/workflows/human-approval.yaml` | configuration | specification | version: 1 |
| `agents/conversion/cro/workflows/main.yaml` | configuration | specification | version: 1 |
| `agents/conversion/cro/workflows/recovery.yaml` | configuration | specification | version: 1 |
| `agents/conversion/merchandising/README.md` | documentation | documentation | merchandising |
| `agents/conversion/merchandising/agent.yaml` | manifest | specification | version: 1 |
| `agents/conversion/merchandising/contracts/input.schema.json` | contract | specification | "$schema": "https://json-schema.org/draft/2020-12/schema", |
| `agents/conversion/merchandising/contracts/output.schema.json` | contract | specification | "$schema": "https://json-schema.org/draft/2020-12/schema", |
| `agents/conversion/merchandising/evaluations/datasets/golden-cases.jsonl` | evaluation | placeholder-data | Evaluation file. |
| `agents/conversion/merchandising/evaluations/rubric.yaml` | evaluation | specification | version: 1 |
| `agents/conversion/merchandising/evaluations/scenarios.yaml` | evaluation | specification | version: 1 |
| `agents/conversion/merchandising/evaluations/thresholds.yaml` | evaluation | specification | version: 1 |
| `agents/conversion/merchandising/migrations/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `agents/conversion/merchandising/policies/approval-rules.yaml` | configuration | specification | version: 1 |
| `agents/conversion/merchandising/policies/data-access.yaml` | configuration | specification | version: 1 |
| `agents/conversion/merchandising/policies/permissions.yaml` | configuration | specification | version: 1 |
| `agents/conversion/merchandising/policies/risk-limits.yaml` | configuration | specification | version: 1 |
| `agents/conversion/merchandising/prompts/explainer.md` | documentation | documentation | Explainer prompt |
| `agents/conversion/merchandising/prompts/planner.md` | documentation | documentation | Planner prompt |
| `agents/conversion/merchandising/prompts/system.md` | documentation | documentation | System prompt |
| `agents/conversion/merchandising/src/__init__.py` | source | comment-only-stub | Source file. |
| `agents/conversion/merchandising/src/agent.py` | source | stub | """merchandising runtime boundary.""" |
| `agents/conversion/merchandising/src/context.py` | source | comment-only-stub | """Build a tenant-scoped, time-bounded and permission-filtered context.""" |
| `agents/conversion/merchandising/src/output_schema.py` | source | comment-only-stub | """Typed proposals, evidence, confidence, risk and expected impact.""" |
| `agents/conversion/merchandising/src/planner.py` | source | comment-only-stub | """Deterministic planning before optional model reasoning.""" |
| `agents/conversion/merchandising/tests/contract/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `agents/conversion/merchandising/tests/integration/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `agents/conversion/merchandising/tests/unit/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `agents/conversion/merchandising/tools/capability-bindings.yaml` | configuration | specification | version: 1 |
| `agents/conversion/merchandising/tools/registry.yaml` | configuration | specification | version: 1 |
| `agents/conversion/merchandising/workflows/human-approval.yaml` | configuration | specification | version: 1 |
| `agents/conversion/merchandising/workflows/main.yaml` | configuration | specification | version: 1 |
| `agents/conversion/merchandising/workflows/recovery.yaml` | configuration | specification | version: 1 |
| `agents/conversion/pricing-promotion/README.md` | documentation | documentation | pricing-promotion |
| `agents/conversion/pricing-promotion/agent.yaml` | manifest | specification | version: 1 |
| `agents/conversion/pricing-promotion/contracts/input.schema.json` | contract | specification | "$schema": "https://json-schema.org/draft/2020-12/schema", |
| `agents/conversion/pricing-promotion/contracts/output.schema.json` | contract | specification | "$schema": "https://json-schema.org/draft/2020-12/schema", |
| `agents/conversion/pricing-promotion/evaluations/datasets/golden-cases.jsonl` | evaluation | placeholder-data | Evaluation file. |
| `agents/conversion/pricing-promotion/evaluations/rubric.yaml` | evaluation | specification | version: 1 |
| `agents/conversion/pricing-promotion/evaluations/scenarios.yaml` | evaluation | specification | version: 1 |
| `agents/conversion/pricing-promotion/evaluations/thresholds.yaml` | evaluation | specification | version: 1 |
| `agents/conversion/pricing-promotion/migrations/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `agents/conversion/pricing-promotion/policies/approval-rules.yaml` | configuration | specification | version: 1 |
| `agents/conversion/pricing-promotion/policies/data-access.yaml` | configuration | specification | version: 1 |
| `agents/conversion/pricing-promotion/policies/permissions.yaml` | configuration | specification | version: 1 |
| `agents/conversion/pricing-promotion/policies/risk-limits.yaml` | configuration | specification | version: 1 |
| `agents/conversion/pricing-promotion/prompts/explainer.md` | documentation | documentation | Explainer prompt |
| `agents/conversion/pricing-promotion/prompts/planner.md` | documentation | documentation | Planner prompt |
| `agents/conversion/pricing-promotion/prompts/system.md` | documentation | documentation | System prompt |
| `agents/conversion/pricing-promotion/src/__init__.py` | source | comment-only-stub | Source file. |
| `agents/conversion/pricing-promotion/src/agent.py` | source | stub | """pricing-promotion runtime boundary.""" |
| `agents/conversion/pricing-promotion/src/context.py` | source | comment-only-stub | """Build a tenant-scoped, time-bounded and permission-filtered context.""" |
| `agents/conversion/pricing-promotion/src/output_schema.py` | source | comment-only-stub | """Typed proposals, evidence, confidence, risk and expected impact.""" |
| `agents/conversion/pricing-promotion/src/planner.py` | source | comment-only-stub | """Deterministic planning before optional model reasoning.""" |
| `agents/conversion/pricing-promotion/tests/contract/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `agents/conversion/pricing-promotion/tests/integration/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `agents/conversion/pricing-promotion/tests/unit/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `agents/conversion/pricing-promotion/tools/capability-bindings.yaml` | configuration | specification | version: 1 |
| `agents/conversion/pricing-promotion/tools/registry.yaml` | configuration | specification | version: 1 |
| `agents/conversion/pricing-promotion/workflows/human-approval.yaml` | configuration | specification | version: 1 |
| `agents/conversion/pricing-promotion/workflows/main.yaml` | configuration | specification | version: 1 |
| `agents/conversion/pricing-promotion/workflows/recovery.yaml` | configuration | specification | version: 1 |
| `agents/operations/analytics/README.md` | documentation | documentation | analytics |
| `agents/operations/analytics/agent.yaml` | manifest | specification | version: 1 |
| `agents/operations/analytics/contracts/input.schema.json` | contract | specification | Contract file. |
| `agents/operations/analytics/contracts/output.schema.json` | contract | specification | Contract file. |
| `agents/operations/analytics/evaluations/datasets/golden-cases.jsonl` | evaluation | placeholder-data | Evaluation file. |
| `agents/operations/analytics/evaluations/rubric.yaml` | evaluation | specification | version: 1 |
| `agents/operations/analytics/evaluations/scenarios.yaml` | evaluation | specification | version: 1 |
| `agents/operations/analytics/evaluations/thresholds.yaml` | evaluation | specification | version: 1 |
| `agents/operations/analytics/migrations/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `agents/operations/analytics/policies/approval-rules.yaml` | configuration | specification | version: 1 |
| `agents/operations/analytics/policies/data-access.yaml` | configuration | specification | version: 1 |
| `agents/operations/analytics/policies/permissions.yaml` | configuration | specification | version: 1 |
| `agents/operations/analytics/policies/risk-limits.yaml` | configuration | specification | version: 1 |
| `agents/operations/analytics/prompts/explainer.md` | documentation | documentation | explainer |
| `agents/operations/analytics/prompts/planner.md` | documentation | documentation | planner |
| `agents/operations/analytics/prompts/system.md` | documentation | documentation | system |
| `agents/operations/analytics/src/__init__.py` | source | comment-only-stub | Source file. |
| `agents/operations/analytics/src/agent.py` | source | scaffold-source | class Agent: |
| `agents/operations/analytics/src/planner.py` | source | comment-only-stub | """Deterministic planning boundary.""" |
| `agents/operations/analytics/tests/contract/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `agents/operations/analytics/tests/integration/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `agents/operations/analytics/tests/unit/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `agents/operations/analytics/tools/capability-bindings.yaml` | configuration | specification | version: 1 |
| `agents/operations/analytics/tools/registry.yaml` | configuration | specification | version: 1 |
| `agents/operations/analytics/workflows/human-approval.yaml` | configuration | specification | version: 1 |
| `agents/operations/analytics/workflows/main.yaml` | configuration | specification | version: 1 |
| `agents/operations/analytics/workflows/recovery.yaml` | configuration | specification | version: 1 |
| `agents/operations/forecasting/README.md` | documentation | documentation | forecasting |
| `agents/operations/forecasting/agent.yaml` | manifest | specification | version: 1 |
| `agents/operations/forecasting/contracts/input.schema.json` | contract | specification | Contract file. |
| `agents/operations/forecasting/contracts/output.schema.json` | contract | specification | Contract file. |
| `agents/operations/forecasting/evaluations/datasets/golden-cases.jsonl` | evaluation | placeholder-data | Evaluation file. |
| `agents/operations/forecasting/evaluations/rubric.yaml` | evaluation | specification | version: 1 |
| `agents/operations/forecasting/evaluations/scenarios.yaml` | evaluation | specification | version: 1 |
| `agents/operations/forecasting/evaluations/thresholds.yaml` | evaluation | specification | version: 1 |
| `agents/operations/forecasting/migrations/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `agents/operations/forecasting/policies/approval-rules.yaml` | configuration | specification | version: 1 |
| `agents/operations/forecasting/policies/data-access.yaml` | configuration | specification | version: 1 |
| `agents/operations/forecasting/policies/permissions.yaml` | configuration | specification | version: 1 |
| `agents/operations/forecasting/policies/risk-limits.yaml` | configuration | specification | version: 1 |
| `agents/operations/forecasting/prompts/explainer.md` | documentation | documentation | explainer |
| `agents/operations/forecasting/prompts/planner.md` | documentation | documentation | planner |
| `agents/operations/forecasting/prompts/system.md` | documentation | documentation | system |
| `agents/operations/forecasting/src/__init__.py` | source | comment-only-stub | Source file. |
| `agents/operations/forecasting/src/agent.py` | source | scaffold-source | class Agent: |
| `agents/operations/forecasting/src/planner.py` | source | comment-only-stub | """Deterministic planning boundary.""" |
| `agents/operations/forecasting/tests/contract/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `agents/operations/forecasting/tests/integration/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `agents/operations/forecasting/tests/unit/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `agents/operations/forecasting/tools/capability-bindings.yaml` | configuration | specification | version: 1 |
| `agents/operations/forecasting/tools/registry.yaml` | configuration | specification | version: 1 |
| `agents/operations/forecasting/workflows/human-approval.yaml` | configuration | specification | version: 1 |
| `agents/operations/forecasting/workflows/main.yaml` | configuration | specification | version: 1 |
| `agents/operations/forecasting/workflows/recovery.yaml` | configuration | specification | version: 1 |
| `agents/operations/inventory/README.md` | documentation | documentation | inventory |
| `agents/operations/inventory/agent.yaml` | manifest | specification | version: 1 |
| `agents/operations/inventory/contracts/input.schema.json` | contract | specification | Contract file. |
| `agents/operations/inventory/contracts/output.schema.json` | contract | specification | Contract file. |
| `agents/operations/inventory/evaluations/datasets/golden-cases.jsonl` | evaluation | placeholder-data | Evaluation file. |
| `agents/operations/inventory/evaluations/rubric.yaml` | evaluation | specification | version: 1 |
| `agents/operations/inventory/evaluations/scenarios.yaml` | evaluation | specification | version: 1 |
| `agents/operations/inventory/evaluations/thresholds.yaml` | evaluation | specification | version: 1 |
| `agents/operations/inventory/migrations/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `agents/operations/inventory/policies/approval-rules.yaml` | configuration | specification | version: 1 |
| `agents/operations/inventory/policies/data-access.yaml` | configuration | specification | version: 1 |
| `agents/operations/inventory/policies/permissions.yaml` | configuration | specification | version: 1 |
| `agents/operations/inventory/policies/risk-limits.yaml` | configuration | specification | version: 1 |
| `agents/operations/inventory/prompts/explainer.md` | documentation | documentation | explainer |
| `agents/operations/inventory/prompts/planner.md` | documentation | documentation | planner |
| `agents/operations/inventory/prompts/system.md` | documentation | documentation | system |
| `agents/operations/inventory/src/__init__.py` | source | comment-only-stub | Source file. |
| `agents/operations/inventory/src/agent.py` | source | scaffold-source | class Agent: |
| `agents/operations/inventory/src/planner.py` | source | comment-only-stub | """Deterministic planning boundary.""" |
| `agents/operations/inventory/tests/contract/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `agents/operations/inventory/tests/integration/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `agents/operations/inventory/tests/unit/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `agents/operations/inventory/tools/capability-bindings.yaml` | configuration | specification | version: 1 |
| `agents/operations/inventory/tools/registry.yaml` | configuration | specification | version: 1 |
| `agents/operations/inventory/workflows/human-approval.yaml` | configuration | specification | version: 1 |
| `agents/operations/inventory/workflows/main.yaml` | configuration | specification | version: 1 |
| `agents/operations/inventory/workflows/recovery.yaml` | configuration | specification | version: 1 |
| `agents/operations/profit/README.md` | documentation | documentation | profit |
| `agents/operations/profit/agent.yaml` | manifest | specification | version: 1 |
| `agents/operations/profit/contracts/input.schema.json` | contract | specification | Contract file. |
| `agents/operations/profit/contracts/output.schema.json` | contract | specification | Contract file. |
| `agents/operations/profit/evaluations/datasets/golden-cases.jsonl` | evaluation | placeholder-data | Evaluation file. |
| `agents/operations/profit/evaluations/rubric.yaml` | evaluation | specification | version: 1 |
| `agents/operations/profit/evaluations/scenarios.yaml` | evaluation | specification | version: 1 |
| `agents/operations/profit/evaluations/thresholds.yaml` | evaluation | specification | version: 1 |
| `agents/operations/profit/migrations/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `agents/operations/profit/policies/approval-rules.yaml` | configuration | specification | version: 1 |
| `agents/operations/profit/policies/data-access.yaml` | configuration | specification | version: 1 |
| `agents/operations/profit/policies/permissions.yaml` | configuration | specification | version: 1 |
| `agents/operations/profit/policies/risk-limits.yaml` | configuration | specification | version: 1 |
| `agents/operations/profit/prompts/explainer.md` | documentation | documentation | explainer |
| `agents/operations/profit/prompts/planner.md` | documentation | documentation | planner |
| `agents/operations/profit/prompts/system.md` | documentation | documentation | system |
| `agents/operations/profit/src/__init__.py` | source | comment-only-stub | Source file. |
| `agents/operations/profit/src/agent.py` | source | scaffold-source | class Agent: |
| `agents/operations/profit/src/planner.py` | source | comment-only-stub | """Deterministic planning boundary.""" |
| `agents/operations/profit/tests/contract/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `agents/operations/profit/tests/integration/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `agents/operations/profit/tests/unit/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `agents/operations/profit/tools/capability-bindings.yaml` | configuration | specification | version: 1 |
| `agents/operations/profit/tools/registry.yaml` | configuration | specification | version: 1 |
| `agents/operations/profit/workflows/human-approval.yaml` | configuration | specification | version: 1 |
| `agents/operations/profit/workflows/main.yaml` | configuration | specification | version: 1 |
| `agents/operations/profit/workflows/recovery.yaml` | configuration | specification | version: 1 |
| `agents/orchestration/growth-director/README.md` | documentation | documentation | growth-director |
| `agents/orchestration/growth-director/agent.yaml` | manifest | specification | version: 1 |
| `agents/orchestration/growth-director/contracts/input.schema.json` | contract | specification | "$schema": "https://json-schema.org/draft/2020-12/schema", |
| `agents/orchestration/growth-director/contracts/output.schema.json` | contract | specification | "$schema": "https://json-schema.org/draft/2020-12/schema", |
| `agents/orchestration/growth-director/evaluations/datasets/golden-cases.jsonl` | evaluation | placeholder-data | Evaluation file. |
| `agents/orchestration/growth-director/evaluations/rubric.yaml` | evaluation | specification | version: 1 |
| `agents/orchestration/growth-director/evaluations/scenarios.yaml` | evaluation | specification | version: 1 |
| `agents/orchestration/growth-director/evaluations/thresholds.yaml` | evaluation | specification | version: 1 |
| `agents/orchestration/growth-director/migrations/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `agents/orchestration/growth-director/policies/approval-rules.yaml` | configuration | specification | version: 1 |
| `agents/orchestration/growth-director/policies/data-access.yaml` | configuration | specification | version: 1 |
| `agents/orchestration/growth-director/policies/permissions.yaml` | configuration | specification | version: 1 |
| `agents/orchestration/growth-director/policies/risk-limits.yaml` | configuration | specification | version: 1 |
| `agents/orchestration/growth-director/prompts/explainer.md` | documentation | documentation | Explainer prompt |
| `agents/orchestration/growth-director/prompts/planner.md` | documentation | documentation | Planner prompt |
| `agents/orchestration/growth-director/prompts/system.md` | documentation | documentation | System prompt |
| `agents/orchestration/growth-director/src/__init__.py` | source | comment-only-stub | Source file. |
| `agents/orchestration/growth-director/src/agent.py` | source | stub | """growth-director runtime boundary.""" |
| `agents/orchestration/growth-director/src/context.py` | source | comment-only-stub | """Build a tenant-scoped, time-bounded and permission-filtered context.""" |
| `agents/orchestration/growth-director/src/output_schema.py` | source | comment-only-stub | """Typed proposals, evidence, confidence, risk and expected impact.""" |
| `agents/orchestration/growth-director/src/planner.py` | source | comment-only-stub | """Deterministic planning before optional model reasoning.""" |
| `agents/orchestration/growth-director/tests/contract/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `agents/orchestration/growth-director/tests/integration/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `agents/orchestration/growth-director/tests/unit/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `agents/orchestration/growth-director/tools/capability-bindings.yaml` | configuration | specification | version: 1 |
| `agents/orchestration/growth-director/tools/registry.yaml` | configuration | specification | version: 1 |
| `agents/orchestration/growth-director/workflows/human-approval.yaml` | configuration | specification | version: 1 |
| `agents/orchestration/growth-director/workflows/main.yaml` | configuration | specification | version: 1 |
| `agents/orchestration/growth-director/workflows/recovery.yaml` | configuration | specification | version: 1 |
| `agents/retention/crm/README.md` | documentation | documentation | crm |
| `agents/retention/crm/agent.yaml` | manifest | specification | version: 1 |
| `agents/retention/crm/contracts/input.schema.json` | contract | specification | "$schema": "https://json-schema.org/draft/2020-12/schema", |
| `agents/retention/crm/contracts/output.schema.json` | contract | specification | "$schema": "https://json-schema.org/draft/2020-12/schema", |
| `agents/retention/crm/evaluations/rubric.yaml` | evaluation | specification | version: 1 |
| `agents/retention/crm/policies/approval-rules.yaml` | configuration | specification | version: 1 |
| `agents/retention/crm/policies/data-access.yaml` | configuration | specification | version: 1 |
| `agents/retention/crm/policies/permissions.yaml` | configuration | specification | version: 1 |
| `agents/retention/crm/policies/risk-limits.yaml` | configuration | specification | version: 1 |
| `agents/retention/crm/prompts/explainer.md` | documentation | documentation | Explainer prompt |
| `agents/retention/crm/prompts/planner.md` | documentation | documentation | Planner prompt |
| `agents/retention/crm/prompts/system.md` | documentation | documentation | System prompt |
| `agents/retention/crm/src/__init__.py` | source | comment-only-stub | Source file. |
| `agents/retention/crm/src/agent.py` | source | stub | """crm runtime boundary.""" |
| `agents/retention/crm/src/context.py` | source | comment-only-stub | """Build a tenant-scoped, time-bounded and permission-filtered context.""" |
| `agents/retention/crm/src/output_schema.py` | source | comment-only-stub | """Typed proposals, evidence, confidence, risk and expected impact.""" |
| `agents/retention/crm/src/planner.py` | source | comment-only-stub | """Deterministic planning before optional model reasoning.""" |
| `agents/retention/crm/tests/contract/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `agents/retention/crm/tests/integration/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `agents/retention/crm/tests/unit/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `agents/retention/crm/tools/capability-bindings.yaml` | configuration | specification | version: 1 |
| `agents/retention/crm/tools/registry.yaml` | configuration | specification | version: 1 |
| `agents/retention/crm/workflows/main.yaml` | configuration | specification | version: 1 |
| `agents/retention/customer-support-intelligence/README.md` | documentation | documentation | customer-support-intelligence |
| `agents/retention/customer-support-intelligence/agent.yaml` | manifest | specification | version: 1 |
| `agents/retention/customer-support-intelligence/contracts/input.schema.json` | contract | specification | Contract file. |
| `agents/retention/customer-support-intelligence/contracts/output.schema.json` | contract | specification | Contract file. |
| `agents/retention/customer-support-intelligence/evaluations/datasets/golden-cases.jsonl` | evaluation | placeholder-data | Evaluation file. |
| `agents/retention/customer-support-intelligence/evaluations/rubric.yaml` | evaluation | specification | version: 1 |
| `agents/retention/customer-support-intelligence/evaluations/scenarios.yaml` | evaluation | specification | version: 1 |
| `agents/retention/customer-support-intelligence/evaluations/thresholds.yaml` | evaluation | specification | version: 1 |
| `agents/retention/customer-support-intelligence/migrations/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `agents/retention/customer-support-intelligence/policies/approval-rules.yaml` | configuration | specification | version: 1 |
| `agents/retention/customer-support-intelligence/policies/data-access.yaml` | configuration | specification | version: 1 |
| `agents/retention/customer-support-intelligence/policies/permissions.yaml` | configuration | specification | version: 1 |
| `agents/retention/customer-support-intelligence/policies/risk-limits.yaml` | configuration | specification | version: 1 |
| `agents/retention/customer-support-intelligence/prompts/explainer.md` | documentation | documentation | explainer |
| `agents/retention/customer-support-intelligence/prompts/planner.md` | documentation | documentation | planner |
| `agents/retention/customer-support-intelligence/prompts/system.md` | documentation | documentation | system |
| `agents/retention/customer-support-intelligence/src/__init__.py` | source | comment-only-stub | Source file. |
| `agents/retention/customer-support-intelligence/src/agent.py` | source | scaffold-source | class Agent: |
| `agents/retention/customer-support-intelligence/src/planner.py` | source | comment-only-stub | """Deterministic planning boundary.""" |
| `agents/retention/customer-support-intelligence/tests/contract/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `agents/retention/customer-support-intelligence/tests/integration/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `agents/retention/customer-support-intelligence/tests/unit/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `agents/retention/customer-support-intelligence/tools/capability-bindings.yaml` | configuration | specification | version: 1 |
| `agents/retention/customer-support-intelligence/tools/registry.yaml` | configuration | specification | version: 1 |
| `agents/retention/customer-support-intelligence/workflows/human-approval.yaml` | configuration | specification | version: 1 |
| `agents/retention/customer-support-intelligence/workflows/main.yaml` | configuration | specification | version: 1 |
| `agents/retention/customer-support-intelligence/workflows/recovery.yaml` | configuration | specification | version: 1 |
| `agents/retention/retention/README.md` | documentation | documentation | retention |
| `agents/retention/retention/agent.yaml` | manifest | specification | version: 1 |
| `agents/retention/retention/contracts/input.schema.json` | contract | specification | Contract file. |
| `agents/retention/retention/contracts/output.schema.json` | contract | specification | Contract file. |
| `agents/retention/retention/evaluations/datasets/golden-cases.jsonl` | evaluation | placeholder-data | Evaluation file. |
| `agents/retention/retention/evaluations/rubric.yaml` | evaluation | specification | version: 1 |
| `agents/retention/retention/evaluations/scenarios.yaml` | evaluation | specification | version: 1 |
| `agents/retention/retention/evaluations/thresholds.yaml` | evaluation | specification | version: 1 |
| `agents/retention/retention/migrations/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `agents/retention/retention/policies/approval-rules.yaml` | configuration | specification | version: 1 |
| `agents/retention/retention/policies/data-access.yaml` | configuration | specification | version: 1 |
| `agents/retention/retention/policies/permissions.yaml` | configuration | specification | version: 1 |
| `agents/retention/retention/policies/risk-limits.yaml` | configuration | specification | version: 1 |
| `agents/retention/retention/prompts/explainer.md` | documentation | documentation | explainer |
| `agents/retention/retention/prompts/planner.md` | documentation | documentation | planner |
| `agents/retention/retention/prompts/system.md` | documentation | documentation | system |
| `agents/retention/retention/src/__init__.py` | source | comment-only-stub | Source file. |
| `agents/retention/retention/src/agent.py` | source | scaffold-source | class Agent: |
| `agents/retention/retention/src/planner.py` | source | comment-only-stub | """Deterministic planning boundary.""" |
| `agents/retention/retention/tests/contract/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `agents/retention/retention/tests/integration/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `agents/retention/retention/tests/unit/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `agents/retention/retention/tools/capability-bindings.yaml` | configuration | specification | version: 1 |
| `agents/retention/retention/tools/registry.yaml` | configuration | specification | version: 1 |
| `agents/retention/retention/workflows/human-approval.yaml` | configuration | specification | version: 1 |
| `agents/retention/retention/workflows/main.yaml` | configuration | specification | version: 1 |
| `agents/retention/retention/workflows/recovery.yaml` | configuration | specification | version: 1 |

## apps

| Path | Kind | State | Summary |
|---|---|---|---|
| `apps/admin-portal/README.md` | documentation | documentation | admin-portal |
| `apps/admin-portal/app.yaml` | manifest | specification | version: 1 |
| `apps/admin-portal/control/kill-switches.yaml` | configuration | specification | version: 1 |
| `apps/admin-portal/navigation.yaml` | configuration | specification | version: 1 |
| `apps/admin-portal/public/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `apps/admin-portal/rbac/roles.yaml` | configuration | specification | version: 1 |
| `apps/admin-portal/src/app/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `apps/admin-portal/src/components/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `apps/admin-portal/src/features/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `apps/admin-portal/src/features/agents/README.md` | documentation | documentation | agents |
| `apps/admin-portal/src/features/ai-models/README.md` | documentation | documentation | ai-models |
| `apps/admin-portal/src/features/api-access/README.md` | documentation | documentation | api-access |
| `apps/admin-portal/src/features/approvals/README.md` | documentation | documentation | approvals |
| `apps/admin-portal/src/features/audit-log/README.md` | documentation | documentation | audit-log |
| `apps/admin-portal/src/features/automations/README.md` | documentation | documentation | automations |
| `apps/admin-portal/src/features/billing/README.md` | documentation | documentation | billing |
| `apps/admin-portal/src/features/compliance/README.md` | documentation | documentation | compliance |
| `apps/admin-portal/src/features/connectors/README.md` | documentation | documentation | connectors |
| `apps/admin-portal/src/features/feature-flags/README.md` | documentation | documentation | feature-flags |
| `apps/admin-portal/src/features/incidents/README.md` | documentation | documentation | incidents |
| `apps/admin-portal/src/features/jobs-queues/README.md` | documentation | documentation | jobs-queues |
| `apps/admin-portal/src/features/kill-switches/README.md` | documentation | documentation | kill-switches |
| `apps/admin-portal/src/features/mcp-connections/README.md` | documentation | documentation | mcp-connections |
| `apps/admin-portal/src/features/media-library/README.md` | documentation | documentation | media-library |
| `apps/admin-portal/src/features/organizations/README.md` | documentation | documentation | organizations |
| `apps/admin-portal/src/features/overview/README.md` | documentation | documentation | overview |
| `apps/admin-portal/src/features/security/README.md` | documentation | documentation | security |
| `apps/admin-portal/src/features/settings/README.md` | documentation | documentation | settings |
| `apps/admin-portal/src/features/skills/README.md` | documentation | documentation | skills |
| `apps/admin-portal/src/features/stores/README.md` | documentation | documentation | stores |
| `apps/admin-portal/src/features/system-health/README.md` | documentation | documentation | system-health |
| `apps/admin-portal/src/features/usage-costs/README.md` | documentation | documentation | usage-costs |
| `apps/admin-portal/src/features/users-roles/README.md` | documentation | documentation | users-roles |
| `apps/admin-portal/src/i18n/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `apps/admin-portal/src/lib/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `apps/admin-portal/src/styles/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `apps/admin-portal/tests/e2e/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `apps/admin-portal/tests/unit/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `apps/api-gateway/README.md` | documentation | documentation | api-gateway |
| `apps/api-gateway/app.yaml` | manifest | specification | version: 1 |
| `apps/api-gateway/public/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `apps/api-gateway/src/app/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `apps/api-gateway/src/auth/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `apps/api-gateway/src/components/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `apps/api-gateway/src/features/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `apps/api-gateway/src/i18n/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `apps/api-gateway/src/lib/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `apps/api-gateway/src/quotas/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `apps/api-gateway/src/routes/rest/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `apps/api-gateway/src/routes/webhooks/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `apps/api-gateway/src/styles/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `apps/api-gateway/src/versioning/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `apps/api-gateway/tests/e2e/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `apps/api-gateway/tests/unit/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `apps/browser-extension/README.md` | documentation | documentation | Browser extension |
| `apps/browser-extension/app.yaml` | manifest | specification | version: 1 |
| `apps/browser-extension/src/background/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `apps/browser-extension/src/content/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `apps/browser-extension/src/lib/api/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `apps/browser-extension/src/options/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `apps/browser-extension/src/popup/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `apps/browser-extension/src/security/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `apps/browser-extension/tests/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `apps/developer-portal/README.md` | documentation | documentation | developer-portal |
| `apps/developer-portal/app.yaml` | manifest | specification | version: 1 |
| `apps/developer-portal/public/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `apps/developer-portal/src/app/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `apps/developer-portal/src/components/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `apps/developer-portal/src/features/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `apps/developer-portal/src/features/api-keys/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `apps/developer-portal/src/features/mcp/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `apps/developer-portal/src/features/skills/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `apps/developer-portal/src/features/webhooks/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `apps/developer-portal/src/i18n/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `apps/developer-portal/src/lib/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `apps/developer-portal/src/styles/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `apps/developer-portal/tests/e2e/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `apps/developer-portal/tests/unit/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `apps/mobile-app/README.md` | documentation | documentation | Mobile app |
| `apps/mobile-app/app.yaml` | manifest | specification | version: 1 |
| `apps/mobile-app/src/app/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `apps/mobile-app/src/features/ai-chat/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `apps/mobile-app/src/features/alerts/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `apps/mobile-app/src/features/approvals/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `apps/mobile-app/src/features/auth/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `apps/mobile-app/src/features/media/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `apps/mobile-app/src/lib/api/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `apps/mobile-app/tests/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `apps/web/.gitignore` | other | present | See https://help.github.com/articles/ignoring-files/ for more about ignoring files. |
| `apps/web/AGENTS.md` | documentation | documentation | <!-- BEGIN:nextjs-agent-rules --> |
| `apps/web/ARCHITECTURE.md` | documentation | documentation | Ecomark web application |
| `apps/web/CLAUDE.md` | documentation | documentation | @AGENTS.md |
| `apps/web/DESIGN.md` | documentation | documentation | Web dashboard design requirements |
| `apps/web/README.md` | documentation | documentation | Ecomark web application |
| `apps/web/TESTING.md` | documentation | documentation | Web dashboard testing |
| `apps/web/app.yaml` | manifest | specification | version: 1 |
| `apps/web/eslint.config.mjs` | source | implemented-source | const eslintConfig = defineConfig([ |
| `apps/web/next.config.ts` | source | implemented-source | const nextConfig: NextConfig = { |
| `apps/web/package.json` | manifest | specification | "name": "@ecomarkai/web", |
| `apps/web/postcss.config.mjs` | source | implemented-source | const config = { |
| `apps/web/public/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `apps/web/public/file.svg` | asset | present | <svg fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 13.5V5.41a1 1 0 0 0-.3-.7L9.8.29A1 1 0 0 0 9.08 0H1.5v13.5A2.5 2.5 0 0 0 4 16h8a2.5 2.5 0 0 0 |
| `apps/web/public/globe.svg` | asset | present | <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g clip-path="url(#a)"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.27 14.1a6.5 6.5 0 0 0 3.67-3.45q |
| `apps/web/public/next.svg` | asset | present | <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 394 80"><path fill="#000" d="M262 0h68.5v12.7h-27.2v66.6h-13.6V12.7H262V0ZM149 0v12.7H94v20.4h44.3v12.6H94v21h55v12 |
| `apps/web/public/vercel.svg` | asset | present | <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1155 1000"><path d="m577.3 0 577.4 1000H0z" fill="#fff"/></svg> |
| `apps/web/public/window.svg` | asset | present | <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 2.5h13v10a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1zM0 1h16v11.5 |
| `apps/web/src/app/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `apps/web/src/app/favicon.ico` | asset | present | Asset file. |
| `apps/web/src/app/globals.css` | style | generated-starter | @import "tailwindcss"; |
| `apps/web/src/app/layout.tsx` | source | generated-starter | const geistSans = Geist({ |
| `apps/web/src/app/page.tsx` | source | generated-starter | export default function Home() { |
| `apps/web/src/components/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `apps/web/src/features/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `apps/web/src/features/automations/README.md` | documentation | documentation | Automations UI |
| `apps/web/src/features/creative-experiments/README.md` | documentation | documentation | Creative experiments UI specification |
| `apps/web/src/features/developer/README.md` | documentation | documentation | Developer UI |
| `apps/web/src/features/mcp-connections/README.md` | documentation | documentation | Connection manager UI specification |
| `apps/web/src/features/media-library/README.md` | documentation | documentation | Media Library UI |
| `apps/web/src/features/skills/README.md` | documentation | documentation | Skills UI |
| `apps/web/src/features/tenant-admin/README.md` | documentation | documentation | Tenant Admin |
| `apps/web/src/features/tenant-admin/navigation.yaml` | configuration | specification | version: 1 |
| `apps/web/src/i18n/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `apps/web/src/lib/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `apps/web/src/styles/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `apps/web/tests/e2e/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `apps/web/tests/unit/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `apps/web/tsconfig.json` | configuration | specification | "compilerOptions": { |

## compliance

| Path | Kind | State | Summary |
|---|---|---|---|
| `compliance/README.md` | documentation | documentation | Compliance Evidence |
| `compliance/audit-evidence/README.md` | documentation | documentation | Audit evidence |
| `compliance/consent-management/README.md` | documentation | documentation | Consent management |
| `compliance/data-processing/README.md` | documentation | documentation | Data processing |
| `compliance/data-residency/README.md` | documentation | documentation | Data residency |
| `compliance/data-retention/README.md` | documentation | documentation | Data retention |
| `compliance/data-subject-rights/README.md` | documentation | documentation | Data subject rights |
| `compliance/incident-response/README.md` | documentation | documentation | Incident response |
| `compliance/subprocessors/README.md` | documentation | documentation | Subprocessors |

## connectors

| Path | Kind | State | Summary |
|---|---|---|---|
| `connectors/README.md` | documentation | documentation | Connector Platform |
| `connectors/_template/README.md` | documentation | documentation | Connector Template Requirements |
| `connectors/_template/connector.yaml.example` | configuration | specification | name: example-connector |
| `connectors/_template/fixtures/api/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `connectors/_template/fixtures/webhooks/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `connectors/_template/migrations/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `connectors/_template/schemas/canonical/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `connectors/_template/schemas/vendor/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `connectors/_template/src/__init__.py` | source | comment-only-stub | Source file. |
| `connectors/_template/src/auth.py` | source | comment-only-stub | """OAuth, token refresh and secret references.""" |
| `connectors/_template/src/client.py` | source | comment-only-stub | """Typed vendor API client.""" |
| `connectors/_template/src/commands.py` | source | comment-only-stub | """Idempotent canonical command execution.""" |
| `connectors/_template/src/connector.py` | source | comment-only-stub | """Connector lifecycle and capability boundary.""" |
| `connectors/_template/src/errors.py` | source | comment-only-stub | """Stable platform error taxonomy.""" |
| `connectors/_template/src/mapper.py` | source | comment-only-stub | """Vendor payload to canonical contract mapping.""" |
| `connectors/_template/src/rate_limits.py` | source | comment-only-stub | """Distributed rate-limit coordination.""" |
| `connectors/_template/src/sync.py` | source | comment-only-stub | """Backfill and incremental synchronization.""" |
| `connectors/_template/src/webhooks.py` | source | comment-only-stub | """Signature verification, deduplication and acknowledgement.""" |
| `connectors/_template/tests/contract/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `connectors/_template/tests/integration/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `connectors/_template/tests/sandbox/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `connectors/_template/tests/unit/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `connectors/advertising/google/CONNECT_GUIDE_AR.md` | documentation | documentation | ربط Google Ads |
| `connectors/advertising/google/README.md` | documentation | documentation | google |
| `connectors/advertising/google/auth/oauth.yaml.example` | configuration | specification | version: 1 |
| `connectors/advertising/google/connector.yaml` | configuration | specification | version: 1 |
| `connectors/advertising/google/performance.yaml` | configuration | specification | version: 1 |
| `connectors/advertising/meta/README.md` | documentation | documentation | meta connector |
| `connectors/advertising/meta/connector.yaml` | configuration | specification | version: 1 |
| `connectors/advertising/meta/schemas/raw/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `connectors/advertising/meta/src/__init__.py` | source | comment-only-stub | Source file. |
| `connectors/advertising/meta/src/auth.py` | source | comment-only-stub | """OAuth, token rotation and secret references. Never log credentials.""" |
| `connectors/advertising/meta/src/client.py` | source | comment-only-stub | """Versioned vendor client with timeouts, retry and rate-limit handling.""" |
| `connectors/advertising/meta/src/commands.py` | source | comment-only-stub | """Canonical commands to idempotent vendor mutations.""" |
| `connectors/advertising/meta/src/connector.py` | source | scaffold-source | """meta connector composition root root.""" |
| `connectors/advertising/meta/src/errors.py` | source | comment-only-stub | """Translate vendor failures into stable platform error codes.""" |
| `connectors/advertising/meta/src/mappers.py` | source | comment-only-stub | """Vendor payloads to versioned canonical commerce events.""" |
| `connectors/advertising/meta/src/sync.py` | source | comment-only-stub | """Backfill and incremental sync with durable checkpoints.""" |
| `connectors/advertising/meta/src/webhooks.py` | source | comment-only-stub | """Signature verification, acknowledgement and deduplication.""" |
| `connectors/advertising/microsoft-ads/README.md` | documentation | documentation | microsoft-ads |
| `connectors/advertising/microsoft-ads/connector.yaml` | configuration | specification | version: 1 |
| `connectors/advertising/snapchat/README.md` | documentation | documentation | snapchat |
| `connectors/advertising/snapchat/connector.yaml` | configuration | specification | version: 1 |
| `connectors/advertising/tiktok/README.md` | documentation | documentation | tiktok |
| `connectors/advertising/tiktok/connector.yaml` | configuration | specification | version: 1 |
| `connectors/analytics-seo/bing-webmaster/README.md` | documentation | documentation | bing-webmaster |
| `connectors/analytics-seo/bing-webmaster/connector.yaml` | configuration | specification | version: 1 |
| `connectors/analytics-seo/ga4/README.md` | documentation | documentation | ga4 |
| `connectors/analytics-seo/ga4/connector.yaml` | configuration | specification | version: 1 |
| `connectors/analytics-seo/search-console/README.md` | documentation | documentation | search-console |
| `connectors/analytics-seo/search-console/connector.yaml` | configuration | specification | version: 1 |
| `connectors/catalog.yaml` | configuration | specification | version: 1 |
| `connectors/commerce/bigcommerce/README.md` | documentation | documentation | bigcommerce connector |
| `connectors/commerce/bigcommerce/connector.yaml` | configuration | specification | version: 1 |
| `connectors/commerce/bigcommerce/fixtures/sanitized/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `connectors/commerce/bigcommerce/migrations/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `connectors/commerce/bigcommerce/schemas/canonical/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `connectors/commerce/bigcommerce/schemas/raw/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `connectors/commerce/bigcommerce/src/__init__.py` | source | comment-only-stub | Source file. |
| `connectors/commerce/bigcommerce/src/auth.py` | source | comment-only-stub | """OAuth, token rotation and secret references. Never log credentials.""" |
| `connectors/commerce/bigcommerce/src/client.py` | source | comment-only-stub | """Versioned vendor client with timeouts, retry and rate-limit handling.""" |
| `connectors/commerce/bigcommerce/src/commands.py` | source | comment-only-stub | """Canonical commands to idempotent vendor mutations.""" |
| `connectors/commerce/bigcommerce/src/connector.py` | source | scaffold-source | """bigcommerce connector composition root root.""" |
| `connectors/commerce/bigcommerce/src/errors.py` | source | comment-only-stub | """Translate vendor failures into stable platform error codes.""" |
| `connectors/commerce/bigcommerce/src/mappers.py` | source | comment-only-stub | """Vendor payloads to versioned canonical commerce events.""" |
| `connectors/commerce/bigcommerce/src/sync.py` | source | comment-only-stub | """Backfill and incremental sync with durable checkpoints.""" |
| `connectors/commerce/bigcommerce/src/webhooks.py` | source | comment-only-stub | """Signature verification, acknowledgement and deduplication.""" |
| `connectors/commerce/bigcommerce/tests/contract/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `connectors/commerce/bigcommerce/tests/integration/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `connectors/commerce/bigcommerce/tests/unit/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `connectors/commerce/magento/README.md` | documentation | documentation | magento connector |
| `connectors/commerce/magento/connector.yaml` | configuration | specification | version: 1 |
| `connectors/commerce/magento/fixtures/sanitized/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `connectors/commerce/magento/migrations/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `connectors/commerce/magento/schemas/canonical/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `connectors/commerce/magento/schemas/raw/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `connectors/commerce/magento/src/__init__.py` | source | comment-only-stub | Source file. |
| `connectors/commerce/magento/src/auth.py` | source | comment-only-stub | """OAuth, token rotation and secret references. Never log credentials.""" |
| `connectors/commerce/magento/src/client.py` | source | comment-only-stub | """Versioned vendor client with timeouts, retry and rate-limit handling.""" |
| `connectors/commerce/magento/src/commands.py` | source | comment-only-stub | """Canonical commands to idempotent vendor mutations.""" |
| `connectors/commerce/magento/src/connector.py` | source | scaffold-source | """magento connector composition root root.""" |
| `connectors/commerce/magento/src/errors.py` | source | comment-only-stub | """Translate vendor failures into stable platform error codes.""" |
| `connectors/commerce/magento/src/mappers.py` | source | comment-only-stub | """Vendor payloads to versioned canonical commerce events.""" |
| `connectors/commerce/magento/src/sync.py` | source | comment-only-stub | """Backfill and incremental sync with durable checkpoints.""" |
| `connectors/commerce/magento/src/webhooks.py` | source | comment-only-stub | """Signature verification, acknowledgement and deduplication.""" |
| `connectors/commerce/magento/tests/contract/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `connectors/commerce/magento/tests/integration/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `connectors/commerce/magento/tests/unit/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `connectors/commerce/salla/README.md` | documentation | documentation | salla connector |
| `connectors/commerce/salla/connector.yaml` | configuration | specification | version: 1 |
| `connectors/commerce/salla/fixtures/sanitized/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `connectors/commerce/salla/migrations/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `connectors/commerce/salla/schemas/canonical/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `connectors/commerce/salla/schemas/raw/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `connectors/commerce/salla/src/__init__.py` | source | comment-only-stub | Source file. |
| `connectors/commerce/salla/src/auth.py` | source | comment-only-stub | """OAuth, token rotation and secret references. Never log credentials.""" |
| `connectors/commerce/salla/src/client.py` | source | comment-only-stub | """Versioned vendor client with timeouts, retry and rate-limit handling.""" |
| `connectors/commerce/salla/src/commands.py` | source | comment-only-stub | """Canonical commands to idempotent vendor mutations.""" |
| `connectors/commerce/salla/src/connector.py` | source | scaffold-source | """salla connector composition root root.""" |
| `connectors/commerce/salla/src/errors.py` | source | comment-only-stub | """Translate vendor failures into stable platform error codes.""" |
| `connectors/commerce/salla/src/mappers.py` | source | comment-only-stub | """Vendor payloads to versioned canonical commerce events.""" |
| `connectors/commerce/salla/src/sync.py` | source | comment-only-stub | """Backfill and incremental sync with durable checkpoints.""" |
| `connectors/commerce/salla/src/webhooks.py` | source | comment-only-stub | """Signature verification, acknowledgement and deduplication.""" |
| `connectors/commerce/salla/tests/contract/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `connectors/commerce/salla/tests/integration/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `connectors/commerce/salla/tests/unit/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `connectors/commerce/shopify/README.md` | documentation | documentation | shopify connector |
| `connectors/commerce/shopify/connector.yaml` | configuration | specification | version: 1 |
| `connectors/commerce/shopify/fixtures/sanitized/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `connectors/commerce/shopify/migrations/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `connectors/commerce/shopify/schemas/canonical/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `connectors/commerce/shopify/schemas/raw/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `connectors/commerce/shopify/src/__init__.py` | source | comment-only-stub | Source file. |
| `connectors/commerce/shopify/src/auth.py` | source | comment-only-stub | """OAuth, token rotation and secret references. Never log credentials.""" |
| `connectors/commerce/shopify/src/client.py` | source | comment-only-stub | """Versioned vendor client with timeouts, retry and rate-limit handling.""" |
| `connectors/commerce/shopify/src/commands.py` | source | comment-only-stub | """Canonical commands to idempotent vendor mutations.""" |
| `connectors/commerce/shopify/src/connector.py` | source | scaffold-source | """shopify connector composition root root.""" |
| `connectors/commerce/shopify/src/errors.py` | source | comment-only-stub | """Translate vendor failures into stable platform error codes.""" |
| `connectors/commerce/shopify/src/mappers.py` | source | comment-only-stub | """Vendor payloads to versioned canonical commerce events.""" |
| `connectors/commerce/shopify/src/sync.py` | source | comment-only-stub | """Backfill and incremental sync with durable checkpoints.""" |
| `connectors/commerce/shopify/src/webhooks.py` | source | comment-only-stub | """Signature verification, acknowledgement and deduplication.""" |
| `connectors/commerce/shopify/tests/contract/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `connectors/commerce/shopify/tests/integration/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `connectors/commerce/shopify/tests/unit/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `connectors/commerce/woocommerce/README.md` | documentation | documentation | woocommerce connector |
| `connectors/commerce/woocommerce/connector.yaml` | configuration | specification | version: 1 |
| `connectors/commerce/woocommerce/fixtures/sanitized/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `connectors/commerce/woocommerce/migrations/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `connectors/commerce/woocommerce/schemas/canonical/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `connectors/commerce/woocommerce/schemas/raw/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `connectors/commerce/woocommerce/src/__init__.py` | source | comment-only-stub | Source file. |
| `connectors/commerce/woocommerce/src/auth.py` | source | comment-only-stub | """OAuth, token rotation and secret references. Never log credentials.""" |
| `connectors/commerce/woocommerce/src/client.py` | source | comment-only-stub | """Versioned vendor client with timeouts, retry and rate-limit handling.""" |
| `connectors/commerce/woocommerce/src/commands.py` | source | comment-only-stub | """Canonical commands to idempotent vendor mutations.""" |
| `connectors/commerce/woocommerce/src/connector.py` | source | scaffold-source | """woocommerce connector composition root root.""" |
| `connectors/commerce/woocommerce/src/errors.py` | source | comment-only-stub | """Translate vendor failures into stable platform error codes.""" |
| `connectors/commerce/woocommerce/src/mappers.py` | source | comment-only-stub | """Vendor payloads to versioned canonical commerce events.""" |
| `connectors/commerce/woocommerce/src/sync.py` | source | comment-only-stub | """Backfill and incremental sync with durable checkpoints.""" |
| `connectors/commerce/woocommerce/src/webhooks.py` | source | comment-only-stub | """Signature verification, acknowledgement and deduplication.""" |
| `connectors/commerce/woocommerce/tests/contract/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `connectors/commerce/woocommerce/tests/integration/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `connectors/commerce/woocommerce/tests/unit/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `connectors/commerce/zid/README.md` | documentation | documentation | zid connector |
| `connectors/commerce/zid/connector.yaml` | configuration | specification | version: 1 |
| `connectors/commerce/zid/fixtures/sanitized/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `connectors/commerce/zid/migrations/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `connectors/commerce/zid/schemas/canonical/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `connectors/commerce/zid/schemas/raw/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `connectors/commerce/zid/src/__init__.py` | source | comment-only-stub | Source file. |
| `connectors/commerce/zid/src/auth.py` | source | comment-only-stub | """OAuth, token rotation and secret references. Never log credentials.""" |
| `connectors/commerce/zid/src/client.py` | source | comment-only-stub | """Versioned vendor client with timeouts, retry and rate-limit handling.""" |
| `connectors/commerce/zid/src/commands.py` | source | comment-only-stub | """Canonical commands to idempotent vendor mutations.""" |
| `connectors/commerce/zid/src/connector.py` | source | scaffold-source | """zid connector composition root root.""" |
| `connectors/commerce/zid/src/errors.py` | source | comment-only-stub | """Translate vendor failures into stable platform error codes.""" |
| `connectors/commerce/zid/src/mappers.py` | source | comment-only-stub | """Vendor payloads to versioned canonical commerce events.""" |
| `connectors/commerce/zid/src/sync.py` | source | comment-only-stub | """Backfill and incremental sync with durable checkpoints.""" |
| `connectors/commerce/zid/src/webhooks.py` | source | comment-only-stub | """Signature verification, acknowledgement and deduplication.""" |
| `connectors/commerce/zid/tests/contract/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `connectors/commerce/zid/tests/integration/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `connectors/commerce/zid/tests/unit/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `connectors/communications-crm/email/README.md` | documentation | documentation | email |
| `connectors/communications-crm/email/connector.yaml` | configuration | specification | version: 1 |
| `connectors/communications-crm/hubspot/README.md` | documentation | documentation | hubspot |
| `connectors/communications-crm/hubspot/connector.yaml` | configuration | specification | version: 1 |
| `connectors/communications-crm/klaviyo/README.md` | documentation | documentation | klaviyo |
| `connectors/communications-crm/klaviyo/connector.yaml` | configuration | specification | version: 1 |
| `connectors/communications-crm/salesforce/README.md` | documentation | documentation | salesforce |
| `connectors/communications-crm/salesforce/connector.yaml` | configuration | specification | version: 1 |
| `connectors/communications-crm/sms/README.md` | documentation | documentation | sms |
| `connectors/communications-crm/sms/connector.yaml` | configuration | specification | version: 1 |
| `connectors/communications-crm/whatsapp/README.md` | documentation | documentation | whatsapp |
| `connectors/communications-crm/whatsapp/connector.yaml` | configuration | specification | version: 1 |
| `connectors/operations/accounting/README.md` | documentation | documentation | accounting |
| `connectors/operations/accounting/connector.yaml` | configuration | specification | version: 1 |
| `connectors/operations/erp/README.md` | documentation | documentation | erp |
| `connectors/operations/erp/connector.yaml` | configuration | specification | version: 1 |
| `connectors/operations/inventory/README.md` | documentation | documentation | inventory |
| `connectors/operations/inventory/connector.yaml` | configuration | specification | version: 1 |
| `connectors/operations/payments/README.md` | documentation | documentation | payments |
| `connectors/operations/payments/connector.yaml` | configuration | specification | version: 1 |
| `connectors/operations/shipping/README.md` | documentation | documentation | shipping |
| `connectors/operations/shipping/connector.yaml` | configuration | specification | version: 1 |
| `connectors/storage/README.md` | documentation | documentation | Storage connectors |
| `connectors/storage/aws-s3/README.md` | documentation | documentation | AWS S3 |
| `connectors/storage/aws-s3/connector.yaml` | configuration | specification | version: 1 |
| `connectors/storage/aws-s3/src/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `connectors/storage/aws-s3/tests/contract/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `connectors/storage/azure-blob/README.md` | documentation | documentation | Azure Blob Storage |
| `connectors/storage/azure-blob/connector.yaml` | configuration | specification | version: 1 |
| `connectors/storage/azure-blob/src/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `connectors/storage/azure-blob/tests/contract/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `connectors/storage/catalog.yaml` | configuration | specification | version: 1 |
| `connectors/storage/cloudflare-r2/README.md` | documentation | documentation | Cloudflare R2 |
| `connectors/storage/cloudflare-r2/connector.yaml` | configuration | specification | version: 1 |
| `connectors/storage/cloudflare-r2/src/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `connectors/storage/cloudflare-r2/tests/contract/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `connectors/storage/google-cloud-storage/README.md` | documentation | documentation | Google Cloud Storage |
| `connectors/storage/google-cloud-storage/connector.yaml` | configuration | specification | version: 1 |
| `connectors/storage/google-cloud-storage/src/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `connectors/storage/google-cloud-storage/tests/contract/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `connectors/storage/minio/README.md` | documentation | documentation | MinIO |
| `connectors/storage/minio/connector.yaml` | configuration | specification | version: 1 |
| `connectors/storage/minio/src/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `connectors/storage/minio/tests/contract/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `connectors/support/freshdesk/README.md` | documentation | documentation | freshdesk |
| `connectors/support/freshdesk/connector.yaml` | configuration | specification | version: 1 |
| `connectors/support/intercom/README.md` | documentation | documentation | intercom |
| `connectors/support/intercom/connector.yaml` | configuration | specification | version: 1 |
| `connectors/support/zendesk/README.md` | documentation | documentation | zendesk |
| `connectors/support/zendesk/connector.yaml` | configuration | specification | version: 1 |

## contracts

| Path | Kind | State | Summary |
|---|---|---|---|
| `contracts/README.md` | contract | specification | Contracts |
| `contracts/admin/control-action.schema.json` | contract | specification | Contract file. |
| `contracts/automation/rule.schema.json` | contract | specification | Contract file. |
| `contracts/automation/run.schema.json` | contract | specification | Contract file. |
| `contracts/capabilities/README.md` | contract | specification | Capability Contracts |
| `contracts/capabilities/capability.schema.json` | contract | specification | "$schema": "https://json-schema.org/draft/2020-12/schema", |
| `contracts/integrations/connection.schema.json` | contract | specification | Contract file. |
| `contracts/mcp/agent-binding.schema.json` | contract | specification | "$schema": "https://json-schema.org/draft/2020-12/schema", |
| `contracts/mcp/external-server.schema.json` | contract | specification | Contract file. |
| `contracts/media/asset.schema.json` | contract | specification | Contract file. |
| `contracts/media/search.schema.json` | contract | specification | Contract file. |
| `contracts/openapi/public-api.yaml` | contract | specification | openapi: 3.1.0 |

## docs

| Path | Kind | State | Summary |
|---|---|---|---|
| `docs/README.md` | documentation | documentation | Ecomark documentation index |
| `docs/adr/ADR-0001-runtime-validation-zod.md` | documentation | documentation | ADR-0001: Runtime validation with Zod 4 |
| `docs/adr/ADR-0002-internal-package-consumption-model.md` | documentation | documentation | ADR-0002: Internal packages are consumed as TypeScript source |
| `docs/adr/README.md` | documentation | documentation | Architecture Decision Records |
| `docs/architecture/API_MCP_SKILLS.md` | documentation | documentation | API, MCP and Skills |
| `docs/architecture/AUTOMATION_PLATFORM.md` | documentation | documentation | Automation platform |
| `docs/architecture/CONNECTOR_AGENT_VISION.md` | documentation | documentation | Connector and Agent Vision |
| `docs/architecture/CONTROL_CENTER.md` | documentation | documentation | Ecomark Control Center |
| `docs/architecture/INTEGRATION_SCALE.md` | documentation | documentation | Integration scale |
| `docs/architecture/MCP_CONNECTION_GUIDE_AR.md` | documentation | documentation | دليل ربط Ecomark بـMCP و ومزودي الأدوات |
| `docs/architecture/MEDIA_LIBRARY.md` | documentation | documentation | Tenant media library |
| `docs/architecture/OSS_REUSE_POLICY.md` | documentation | documentation | Ecomark OSS reuse policy |
| `docs/architecture/OSS_TECHNOLOGY_REGISTRY.md` | documentation | documentation | Ecomark OSS technology registry |
| `docs/architecture/README.md` | documentation | documentation | Architecture Index |
| `docs/architecture/REPOSITORY_BLUEPRINT.md` | documentation | documentation | Repository blueprint |
| `docs/architecture/REPOSITORY_FILE_MAP.md` | generated-inventory | generated | Generated human-readable path and implementation-state map. |
| `docs/architecture/REPOSITORY_INVENTORY.json` | generated-inventory | generated | Generated machine-readable record for every repository file. |
| `docs/architecture/SAAS_RELEASE_PLAN.md` | documentation | documentation | Historical delivery gates |
| `docs/architecture/SECURITY_PERFORMANCE.md` | documentation | documentation | MCP security and performance |
| `docs/delivery/CHANGE_CHECKLIST.md` | documentation | documentation | Change checklist |
| `docs/delivery/DEFINITION_OF_DONE.md` | documentation | documentation | Definition of done |
| `docs/delivery/GIT_WORKFLOW.md` | documentation | documentation | Git workflow |
| `docs/delivery/INCIDENT_PROCESS.md` | documentation | documentation | Incident process |
| `docs/delivery/RELEASE_PROCESS.md` | documentation | documentation | Release process |
| `docs/design/ACCESSIBILITY.md` | documentation | documentation | Accessibility requirements |
| `docs/design/COMPONENT_STANDARDS.md` | documentation | documentation | Component standards |
| `docs/design/CONTENT_GUIDELINES.md` | documentation | documentation | Content and commerce metrics |
| `docs/design/DESIGN_SYSTEM.md` | documentation | documentation | Design system |
| `docs/design/I18N_RTL.md` | documentation | documentation | Internationalization and RTL |
| `docs/design/RESPONSIVE_DESIGN.md` | documentation | documentation | Responsive design |
| `docs/design/UX_PRINCIPLES.md` | documentation | documentation | UX principles |
| `docs/due-diligence/README.md` | documentation | documentation | Technical Due-Diligence Index |
| `docs/engineering/API_GUIDELINES.md` | documentation | documentation | API guidelines |
| `docs/engineering/BACKEND_ARCHITECTURE.md` | documentation | documentation | Backend implementation boundaries |
| `docs/engineering/CODING_STANDARDS.md` | documentation | documentation | Coding standards |
| `docs/engineering/DATABASE_GUIDELINES.md` | documentation | documentation | Database guidelines |
| `docs/engineering/DEPENDENCY_POLICY.md` | documentation | documentation | Dependency and runtime policy |
| `docs/engineering/ERROR_HANDLING.md` | documentation | documentation | Error handling |
| `docs/engineering/FRONTEND_ARCHITECTURE.md` | documentation | documentation | Frontend implementation boundaries |
| `docs/engineering/OBSERVABILITY.md` | documentation | documentation | Observability requirements |
| `docs/engineering/PERFORMANCE_BUDGETS.md` | documentation | documentation | Performance budgets |
| `docs/engineering/TESTING_STRATEGY.md` | documentation | documentation | Testing strategy |
| `docs/migrations/ECOMARK_RENAME_REPORT.md` | documentation | documentation | Ecomark rename report |
| `docs/product/FEATURE_CATALOG.md` | documentation | documentation | Feature catalog |
| `docs/product/PRODUCT_REQUIREMENTS.md` | documentation | documentation | Product requirements |
| `docs/product/ROADMAP.md` | documentation | documentation | Ecomark delivery roadmap |
| `docs/product/USER_JOURNEYS.md` | documentation | documentation | User journeys |
| `docs/product/USER_PERSONAS.md` | documentation | documentation | User personas |

## environments

| Path | Kind | State | Summary |
|---|---|---|---|
| `environments/README.md` | documentation | documentation | Environments |

## mcp

| Path | Kind | State | Summary |
|---|---|---|---|
| `mcp/README.md` | documentation | documentation | Ecomark MCP platform |
| `mcp/_template/server.yaml.example` | configuration | specification | version: 1 |
| `mcp/_template/src/auth.ts` | source | comment-only-stub | // OAuth, tenant context, scopes and audience validation. |
| `mcp/_template/src/prompts.ts` | source | comment-only-stub | // Versioned prompt templates. No secrets or merchant data. |
| `mcp/_template/src/resources.ts` | source | comment-only-stub | // Read-only resource registration with tenant filtering. |
| `mcp/_template/src/server.ts` | source | comment-only-stub | // MCP server composition root. Bind only approved canonical capabilities. |
| `mcp/_template/src/tools.ts` | source | comment-only-stub | // Tool registration and typed input/output validation. |
| `mcp/_template/tests/contract/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `mcp/_template/tests/integration/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `mcp/_template/tests/security/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `mcp/auth/README.md` | documentation | documentation | MCP security |
| `mcp/bindings/creative-generation.yaml.example` | configuration | specification | version: 1 |
| `mcp/bridges/google-ads/README.md` | documentation | documentation | Google Ads MCP bridge |
| `mcp/bridges/google-ads/server.yaml` | configuration | specification | version: 1 |
| `mcp/clients/internal-agent-client/client.yaml` | configuration | specification | version: 1 |
| `mcp/clients/internal-agent-client/src/client.ts` | source | comment-only-stub | // Typed MCP client with timeouts, retries, tracing and scope enforcement. |
| `mcp/external/README.md` | documentation | documentation | External MCP providers |
| `mcp/external/_template/connection.yaml.example` | configuration | specification | version: 1 |
| `mcp/external/custom/README.md` | documentation | documentation | Custom MCP connection |
| `mcp/external/custom/connection.yaml.example` | configuration | specification | version: 1 |
| `mcp/external/google-ads/README.md` | documentation | documentation | Google Ads integration mode |
| `mcp/external/higgsfield/README.md` | documentation | documentation | Higgsfield remote MCP |
| `mcp/external/higgsfield/connection.yaml.example` | configuration | specification | version: 1 |
| `mcp/external/higgsfield/performance.yaml` | configuration | specification | version: 1 |
| `mcp/external/higgsfield/trust.yaml` | configuration | specification | version: 1 |
| `mcp/external/registry.yaml` | configuration | specification | version: 1 |
| `mcp/registry.yaml` | configuration | specification | version: 1 |
| `mcp/servers/ecomark-automation/server.yaml` | configuration | specification | version: 1 |
| `mcp/servers/ecomark-automation/src/server.ts` | source | comment-only-stub | // Governed creation, inspection and execution of automation rules. |
| `mcp/servers/ecomark-automation/tests/contract/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `mcp/servers/ecomark-automation/tests/security/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `mcp/servers/ecomark-commerce/server.yaml` | configuration | specification | version: 1 |
| `mcp/servers/ecomark-commerce/src/server.ts` | source | comment-only-stub | // Commerce Graph, metrics, opportunities and governed actions. |
| `mcp/servers/ecomark-commerce/tests/contract/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `mcp/servers/ecomark-commerce/tests/security/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `mcp/servers/ecomark-media/server.yaml` | configuration | specification | version: 1 |
| `mcp/servers/ecomark-media/src/server.ts` | source | comment-only-stub | // Tenant-scoped semantic media search and approved asset selection. |
| `mcp/servers/ecomark-media/tests/contract/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `mcp/servers/ecomark-media/tests/security/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `mcp/transports/streamable-http/README.md` | documentation | documentation | Streamable HTTP |

## operations

| Path | Kind | State | Summary |
|---|---|---|---|
| `operations/README.md` | documentation | documentation | Operations |

## packages

| Path | Kind | State | Summary |
|---|---|---|---|
| `packages/config/README.md` | documentation | documentation | @ecomarkai/config |
| `packages/config/eslint.config.mjs` | source | implemented-source | export default defineConfig([ |
| `packages/config/package.json` | manifest | specification | "name": "@ecomarkai/config", |
| `packages/config/src/definition.ts` | source | implemented-source | /** |
| `packages/config/src/exposure.ts` | source | implemented-source | type PublicKeys<TDefinition extends AnyConfigDefinition> = { |
| `packages/config/src/index.ts` | source | implemented-source | /** |
| `packages/config/src/load.ts` | source | implemented-source | AnyConfigDefinition, |
| `packages/config/src/readers.ts` | source | implemented-source | /** |
| `packages/config/tests/config.test.ts` | test | implemented-test | REDACTED, |
| `packages/config/tsconfig.json` | configuration | specification | "extends": "../../tsconfig.base.json", |
| `packages/config/vitest.config.mts` | source | implemented-source | export default defineConfig({ |
| `packages/contracts/README.md` | contract | specification | @ecomarkai/contracts |
| `packages/contracts/eslint.config.mjs` | contract | specification | export default defineConfig([ |
| `packages/contracts/package.json` | manifest | specification | "name": "@ecomarkai/contracts", |
| `packages/contracts/src/identifiers.ts` | contract | specification | /** |
| `packages/contracts/src/index.ts` | contract | specification | /** |
| `packages/contracts/src/pagination.ts` | contract | specification | /** Deterministic ordering direction for a cursor-paginated list. */ |
| `packages/contracts/src/result.ts` | contract | specification | /** |
| `packages/contracts/src/tenancy.ts` | contract | specification | /** |
| `packages/contracts/tests/identifiers.test.ts` | test | implemented-test | isIdentifier, |
| `packages/contracts/tests/types.assert.ts` | test | implemented-test | /** |
| `packages/contracts/tsconfig.json` | contract | specification | "extends": "../../tsconfig.base.json", |
| `packages/contracts/vitest.config.mts` | contract | specification | export default defineConfig({ |
| `packages/errors/README.md` | documentation | documentation | @ecomarkai/errors |
| `packages/errors/eslint.config.mjs` | source | implemented-source | export default defineConfig([ |
| `packages/errors/package.json` | manifest | specification | "name": "@ecomarkai/errors", |
| `packages/errors/src/categories.ts` | source | implemented-source | /** |
| `packages/errors/src/codes.ts` | source | implemented-source | /** |
| `packages/errors/src/factories.ts` | source | implemented-source | PlatformError, |
| `packages/errors/src/index.ts` | source | implemented-source | /** |
| `packages/errors/src/platform-error.ts` | source | implemented-source | /** |
| `packages/errors/src/safe-payload.ts` | source | implemented-source | isPlatformError, |
| `packages/errors/tests/platform-error.test.ts` | test | implemented-test | ERROR_CATEGORIES, |
| `packages/errors/tests/safe-payload.test.ts` | test | implemented-test | forbiddenError, |
| `packages/errors/tsconfig.json` | configuration | specification | "extends": "../../tsconfig.base.json", |
| `packages/errors/vitest.config.mts` | source | implemented-source | export default defineConfig({ |
| `packages/events/README.md` | documentation | documentation | @ecomarkai/events |
| `packages/events/eslint.config.mjs` | source | implemented-source | export default defineConfig([ |
| `packages/events/package.json` | manifest | specification | "name": "@ecomarkai/events", |
| `packages/events/src/envelope.ts` | source | implemented-source | /** |
| `packages/events/src/index.ts` | source | implemented-source | /** |
| `packages/events/src/invariants.ts` | source | implemented-source | /** |
| `packages/events/src/tenant-ref.ts` | source | implemented-source | /** |
| `packages/events/tests/envelope.test.ts` | test | implemented-test | createEventEnvelope, |
| `packages/events/tests/invariants.test.ts` | test | implemented-test | createEventEnvelope, |
| `packages/events/tsconfig.json` | configuration | specification | "extends": "../../tsconfig.base.json", |
| `packages/events/vitest.config.mts` | source | implemented-source | export default defineConfig({ |
| `packages/schemas/README.md` | documentation | documentation | @ecomarkai/schemas |
| `packages/schemas/eslint.config.mjs` | source | implemented-source | export default defineConfig([ |
| `packages/schemas/package.json` | manifest | specification | "name": "@ecomarkai/schemas", |
| `packages/schemas/src/identifiers.ts` | source | implemented-source | toCorrelationId, |
| `packages/schemas/src/index.ts` | source | implemented-source | /** |
| `packages/schemas/src/pagination.ts` | source | implemented-source | /** |
| `packages/schemas/src/parse.ts` | source | implemented-source | /** |
| `packages/schemas/tests/identifiers.test.ts` | test | implemented-test | correlationIdSchema, |
| `packages/schemas/tests/pagination.test.ts` | test | implemented-test | DEFAULT_PAGE_LIMIT, |
| `packages/schemas/tests/types.assert.ts` | test | implemented-test | /** |
| `packages/schemas/tsconfig.json` | configuration | specification | "extends": "../../tsconfig.base.json", |
| `packages/schemas/vitest.config.mts` | source | implemented-source | export default defineConfig({ |
| `packages/ui/README.md` | documentation | documentation | `@ecomarkai/ui` |
| `packages/ui/eslint.config.mjs` | source | implemented-source | export default defineConfig([ |
| `packages/ui/package.json` | manifest | specification | "name": "@ecomarkai/ui", |
| `packages/ui/src/index.ts` | source | implemented-source | /** |
| `packages/ui/src/lib/class-names.ts` | source | implemented-source | export type ClassNameValue = string \| false \| null \| undefined; |
| `packages/ui/src/styles/foundations.css` | style | present | *, |
| `packages/ui/src/styles/index.css` | style | present | @import "./tokens.css"; |
| `packages/ui/src/styles/tokens.css` | style | present | :root, |
| `packages/ui/tests/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `packages/ui/tests/package.test.ts` | test | implemented-test | const packageRoot = resolve(dirname(fileURLToPath(import.meta.url)), ".."); |
| `packages/ui/tests/setup.ts` | test | implemented-test | Test file. |
| `packages/ui/tsconfig.json` | configuration | specification | "compilerOptions": { |
| `packages/ui/vitest.config.mts` | source | implemented-source | export default defineConfig({ |

## platform

| Path | Kind | State | Summary |
|---|---|---|---|
| `platform/README.md` | documentation | documentation | Internal Developer Platform |

## product

| Path | Kind | State | Summary |
|---|---|---|---|
| `product/README.md` | documentation | documentation | Product System |

## repository-governance

| Path | Kind | State | Summary |
|---|---|---|---|
| `.env.example` | configuration | specification | APP_ENV=local |
| `.gitignore` | other | present | persuaded |
| `AGENTS.md` | documentation | documentation | Ecomark repository instructions |
| `AI_REPOSITORY_GUIDE.md` | documentation | documentation | Ecomark AI repository guide |
| `CODEOWNERS` | other | present | * @ecomarkai |
| `CONTRIBUTING.md` | documentation | documentation | Contributing |
| `FINAL_STRUCTURE_AR.md` | documentation | documentation | Ecomark — هيكل SaaS النهائي لهذه المرحلة |
| `IMPLEMENTATION_STATUS.md` | documentation | documentation | Ecomark implementation status |
| `OWNERSHIP.md` | documentation | documentation | Ownership Model |
| `PROJECT_STRUCTURE.md` | documentation | documentation | Ecomark target project structure |
| `README.md` | documentation | documentation | Ecomark |
| `SCALING_GUARDRAILS.md` | documentation | documentation | Scaling Guardrails |
| `SECURITY.md` | documentation | documentation | Security |
| `START_HERE_AR.md` | documentation | documentation | ابدأ من هنا — Ecomark |
| `package.json` | manifest | specification | "name": "@ecomarkai/platform", |
| `pnpm-lock.yaml` | lockfile | present | lockfileVersion: '9.0' |
| `pnpm-workspace.yaml` | configuration | specification | packages: |
| `pyproject.toml` | manifest | specification | name = "ecomark-platform" |
| `tsconfig.base.json` | configuration | specification | "$schema": "https://json.schemastore.org/tsconfig", |
| `turbo.json` | configuration | specification | "$schema": "https://turbo.build/schema.json", |

## scripts

| Path | Kind | State | Summary |
|---|---|---|---|
| `scripts/build_archive.py` | source | implemented-source | """Generate an exact file index and the distributable scaffold archive.""" |
| `scripts/generate_repository_inventory.py` | source | implemented-source | """Generate the AI-facing Ecomark repository inventory from the current worktree.""" |
| `scripts/validate_scaffold.py` | source | implemented-source | """Validate scaffold syntax and internal example references; no live integration tests.""" |

## security

| Path | Kind | State | Summary |
|---|---|---|---|
| `security/README.md` | documentation | documentation | Security Engineering |

## services

| Path | Kind | State | Summary |
|---|---|---|---|
| `services/_template/README.md` | documentation | documentation | Service Template Requirements |
| `services/admin-gateway/README.md` | documentation | documentation | Admin gateway |
| `services/admin-gateway/operations/slo.yaml` | configuration | specification | version: 1 |
| `services/admin-gateway/service.yaml` | manifest | specification | version: 1 |
| `services/admin-gateway/src/api/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/admin-gateway/src/application/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/admin-gateway/src/infrastructure/service-clients/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/admin-gateway/tests/contract/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/admin-gateway/tests/integration/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/agent-orchestrator/README.md` | documentation | documentation | agent-orchestrator |
| `services/agent-orchestrator/migrations/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/agent-orchestrator/operations/slo.yaml` | configuration | specification | version: 1 |
| `services/agent-orchestrator/service.yaml` | manifest | specification | version: 1 |
| `services/agent-orchestrator/src/api/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/agent-orchestrator/src/application/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/agent-orchestrator/src/domain/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/agent-orchestrator/src/infrastructure/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/agent-orchestrator/src/workers/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/agent-orchestrator/tests/contract/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/agent-orchestrator/tests/integration/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/agent-orchestrator/tests/unit/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/approval/README.md` | documentation | documentation | approval |
| `services/approval/migrations/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/approval/operations/slo.yaml` | configuration | specification | version: 1 |
| `services/approval/service.yaml` | manifest | specification | version: 1 |
| `services/approval/src/api/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/approval/src/application/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/approval/src/domain/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/approval/src/infrastructure/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/approval/src/workers/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/approval/tests/contract/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/approval/tests/integration/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/approval/tests/unit/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/attribution/README.md` | documentation | documentation | attribution |
| `services/attribution/migrations/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/attribution/operations/slo.yaml` | configuration | specification | version: 1 |
| `services/attribution/service.yaml` | manifest | specification | version: 1 |
| `services/attribution/src/api/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/attribution/src/application/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/attribution/src/domain/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/attribution/src/infrastructure/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/attribution/src/workers/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/attribution/tests/contract/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/attribution/tests/integration/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/attribution/tests/unit/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/audit/README.md` | documentation | documentation | audit |
| `services/audit/migrations/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/audit/operations/slo.yaml` | configuration | specification | version: 1 |
| `services/audit/service.yaml` | manifest | specification | version: 1 |
| `services/audit/src/api/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/audit/src/application/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/audit/src/domain/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/audit/src/infrastructure/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/audit/src/workers/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/audit/tests/contract/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/audit/tests/integration/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/audit/tests/unit/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/automation-engine/README.md` | documentation | documentation | automation-engine |
| `services/automation-engine/catalog/actions/create-approval.yaml` | configuration | specification | version: 1 |
| `services/automation-engine/catalog/actions/email.yaml` | configuration | specification | version: 1 |
| `services/automation-engine/catalog/actions/whatsapp-message.yaml` | configuration | specification | version: 1 |
| `services/automation-engine/catalog/triggers/ad-spend-threshold.yaml` | configuration | specification | version: 1 |
| `services/automation-engine/catalog/triggers/commerce-event.yaml` | configuration | specification | version: 1 |
| `services/automation-engine/catalog/triggers/schedule.yaml` | configuration | specification | version: 1 |
| `services/automation-engine/examples/ad-spend-whatsapp-alert.yaml` | configuration | specification | version: 1 |
| `services/automation-engine/migrations/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/automation-engine/operations/slo.yaml` | configuration | specification | version: 1 |
| `services/automation-engine/service.yaml` | manifest | specification | version: 1 |
| `services/automation-engine/src/api/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/automation-engine/src/application/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/automation-engine/src/application/evaluate-rule/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/automation-engine/src/application/execute-run/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/automation-engine/src/domain/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/automation-engine/src/domain/action/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/automation-engine/src/domain/condition/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/automation-engine/src/domain/rule/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/automation-engine/src/domain/trigger/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/automation-engine/src/infrastructure/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/automation-engine/src/infrastructure/deduplication/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/automation-engine/src/infrastructure/event-consumer/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/automation-engine/src/infrastructure/scheduler/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/automation-engine/src/workers/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/automation-engine/tests/contract/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/automation-engine/tests/integration/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/automation-engine/tests/scenarios/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/automation-engine/tests/unit/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/automation-engine/workflows/evaluate-rule.yaml` | configuration | specification | version: 1 |
| `services/billing/README.md` | documentation | documentation | billing |
| `services/billing/migrations/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/billing/operations/slo.yaml` | configuration | specification | version: 1 |
| `services/billing/saas/entitlements.yaml` | configuration | specification | version: 1 |
| `services/billing/service.yaml` | manifest | specification | version: 1 |
| `services/billing/src/api/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/billing/src/application/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/billing/src/domain/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/billing/src/infrastructure/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/billing/src/workers/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/billing/tests/contract/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/billing/tests/integration/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/billing/tests/unit/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/commerce-graph/README.md` | documentation | documentation | commerce-graph |
| `services/commerce-graph/migrations/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/commerce-graph/operations/slo.yaml` | configuration | specification | version: 1 |
| `services/commerce-graph/service.yaml` | manifest | specification | version: 1 |
| `services/commerce-graph/src/api/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/commerce-graph/src/application/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/commerce-graph/src/domain/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/commerce-graph/src/infrastructure/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/commerce-graph/src/workers/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/commerce-graph/tests/contract/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/commerce-graph/tests/integration/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/commerce-graph/tests/unit/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/connector-manager/README.md` | documentation | documentation | connector-manager |
| `services/connector-manager/migrations/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/connector-manager/operations/slo.yaml` | configuration | specification | version: 1 |
| `services/connector-manager/service.yaml` | manifest | specification | version: 1 |
| `services/connector-manager/src/api/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/connector-manager/src/application/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/connector-manager/src/application/connect/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/connector-manager/src/application/disconnect/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/connector-manager/src/application/health-check/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/connector-manager/src/application/rotate-secret/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/connector-manager/src/domain/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/connector-manager/src/domain/capabilities/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/connector-manager/src/domain/connections/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/connector-manager/src/domain/credentials/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/connector-manager/src/infrastructure/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/connector-manager/src/infrastructure/secrets-manager/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/connector-manager/src/workers/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/connector-manager/tests/contract/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/connector-manager/tests/integration/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/connector-manager/tests/unit/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/control-plane/README.md` | documentation | documentation | control-plane |
| `services/control-plane/migrations/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/control-plane/operations/slo.yaml` | configuration | specification | version: 1 |
| `services/control-plane/saas/lifecycle.yaml` | configuration | specification | version: 1 |
| `services/control-plane/service.yaml` | manifest | specification | version: 1 |
| `services/control-plane/src/api/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/control-plane/src/application/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/control-plane/src/domain/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/control-plane/src/infrastructure/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/control-plane/src/workers/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/control-plane/tests/contract/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/control-plane/tests/integration/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/control-plane/tests/unit/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/decision-engine/README.md` | documentation | documentation | decision-engine |
| `services/decision-engine/migrations/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/decision-engine/operations/slo.yaml` | configuration | specification | version: 1 |
| `services/decision-engine/service.yaml` | manifest | specification | version: 1 |
| `services/decision-engine/src/api/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/decision-engine/src/application/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/decision-engine/src/domain/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/decision-engine/src/infrastructure/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/decision-engine/src/workers/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/decision-engine/tests/contract/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/decision-engine/tests/integration/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/decision-engine/tests/unit/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/event-normalizer/README.md` | documentation | documentation | event-normalizer |
| `services/event-normalizer/migrations/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/event-normalizer/operations/slo.yaml` | configuration | specification | version: 1 |
| `services/event-normalizer/service.yaml` | manifest | specification | version: 1 |
| `services/event-normalizer/src/api/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/event-normalizer/src/application/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/event-normalizer/src/domain/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/event-normalizer/src/infrastructure/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/event-normalizer/src/workers/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/event-normalizer/tests/contract/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/event-normalizer/tests/integration/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/event-normalizer/tests/unit/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/execution/README.md` | documentation | documentation | execution |
| `services/execution/migrations/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/execution/operations/slo.yaml` | configuration | specification | version: 1 |
| `services/execution/service.yaml` | manifest | specification | version: 1 |
| `services/execution/src/api/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/execution/src/application/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/execution/src/domain/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/execution/src/infrastructure/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/execution/src/workers/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/execution/tests/contract/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/execution/tests/integration/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/execution/tests/unit/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/experiment/README.md` | documentation | documentation | experiment |
| `services/experiment/migrations/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/experiment/operations/slo.yaml` | configuration | specification | version: 1 |
| `services/experiment/service.yaml` | manifest | specification | version: 1 |
| `services/experiment/src/api/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/experiment/src/application/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/experiment/src/domain/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/experiment/src/infrastructure/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/experiment/src/workers/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/experiment/tests/contract/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/experiment/tests/integration/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/experiment/tests/unit/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/identity/README.md` | documentation | documentation | identity |
| `services/identity/migrations/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/identity/operations/slo.yaml` | configuration | specification | version: 1 |
| `services/identity/service.yaml` | manifest | specification | version: 1 |
| `services/identity/src/api/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/identity/src/application/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/identity/src/domain/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/identity/src/infrastructure/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/identity/src/workers/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/identity/tests/contract/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/identity/tests/integration/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/identity/tests/unit/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/mcp-gateway/README.md` | documentation | documentation | mcp-gateway |
| `services/mcp-gateway/migrations/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/mcp-gateway/operations/external-provider-runbook.md` | documentation | documentation | External provider incident runbook |
| `services/mcp-gateway/operations/slo.yaml` | configuration | specification | version: 1 |
| `services/mcp-gateway/performance/budgets.yaml` | configuration | specification | version: 1 |
| `services/mcp-gateway/policies/external-mcp.yaml` | configuration | specification | version: 1 |
| `services/mcp-gateway/security/runtime-boundaries.md` | documentation | documentation | Runtime requirements |
| `services/mcp-gateway/security/threat-model.md` | documentation | documentation | External MCP threat model |
| `services/mcp-gateway/service.yaml` | manifest | specification | version: 1 |
| `services/mcp-gateway/src/api/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/mcp-gateway/src/application/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/mcp-gateway/src/application/approve-tools/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/mcp-gateway/src/application/discover-tools/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/mcp-gateway/src/application/register-server/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/mcp-gateway/src/application/revoke-server/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/mcp-gateway/src/application/test-connection/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/mcp-gateway/src/domain/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/mcp-gateway/src/domain/risk-classification/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/mcp-gateway/src/domain/server-registration/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/mcp-gateway/src/domain/tool-catalog/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/mcp-gateway/src/infrastructure/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/mcp-gateway/src/infrastructure/circuit-breaker/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/mcp-gateway/src/infrastructure/egress-proxy/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/mcp-gateway/src/infrastructure/oauth/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/mcp-gateway/src/workers/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/mcp-gateway/tests/contract/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/mcp-gateway/tests/integration/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/mcp-gateway/tests/unit/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/mcp-gateway/workflows/onboard-external-server.yaml` | configuration | specification | version: 1 |
| `services/media-library/README.md` | documentation | documentation | media-library |
| `services/media-library/config/storage.example.yaml` | configuration | specification | version: 1 |
| `services/media-library/migrations/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/media-library/operations/slo.yaml` | configuration | specification | version: 1 |
| `services/media-library/service.yaml` | manifest | specification | version: 1 |
| `services/media-library/src/api/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/media-library/src/application/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/media-library/src/application/delete/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/media-library/src/application/search/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/media-library/src/application/select/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/media-library/src/application/upload/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/media-library/src/domain/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/media-library/src/domain/assets/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/media-library/src/domain/collections/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/media-library/src/domain/folders/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/media-library/src/domain/rights/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/media-library/src/domain/tags/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/media-library/src/infrastructure/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/media-library/src/infrastructure/storage-port/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/media-library/src/infrastructure/vector-index/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/media-library/src/workers/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/media-library/tests/contract/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/media-library/tests/integration/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/media-library/tests/unit/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/media-processing/README.md` | documentation | documentation | media-processing |
| `services/media-processing/migrations/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/media-processing/operations/slo.yaml` | configuration | specification | version: 1 |
| `services/media-processing/pipelines/document.yaml` | configuration | specification | version: 1 |
| `services/media-processing/pipelines/image.yaml` | configuration | specification | version: 1 |
| `services/media-processing/pipelines/video.yaml` | configuration | specification | version: 1 |
| `services/media-processing/service.yaml` | manifest | specification | version: 1 |
| `services/media-processing/src/api/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/media-processing/src/application/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/media-processing/src/domain/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/media-processing/src/indexing/embeddings/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/media-processing/src/indexing/metadata/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/media-processing/src/infrastructure/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/media-processing/src/processors/audio/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/media-processing/src/processors/document/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/media-processing/src/processors/image/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/media-processing/src/processors/video/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/media-processing/src/security/malware-scan/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/media-processing/src/workers/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/media-processing/tests/contract/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/media-processing/tests/integration/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/media-processing/tests/unit/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/model-gateway/README.md` | documentation | documentation | model-gateway |
| `services/model-gateway/migrations/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/model-gateway/operations/slo.yaml` | configuration | specification | version: 1 |
| `services/model-gateway/service.yaml` | manifest | specification | version: 1 |
| `services/model-gateway/src/api/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/model-gateway/src/application/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/model-gateway/src/domain/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/model-gateway/src/infrastructure/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/model-gateway/src/workers/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/model-gateway/tests/contract/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/model-gateway/tests/integration/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/model-gateway/tests/unit/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/notification/README.md` | documentation | documentation | notification |
| `services/notification/migrations/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/notification/operations/slo.yaml` | configuration | specification | version: 1 |
| `services/notification/service.yaml` | manifest | specification | version: 1 |
| `services/notification/src/api/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/notification/src/application/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/notification/src/domain/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/notification/src/infrastructure/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/notification/src/workers/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/notification/tests/contract/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/notification/tests/integration/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/notification/tests/unit/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/opportunity/README.md` | documentation | documentation | opportunity |
| `services/opportunity/migrations/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/opportunity/operations/slo.yaml` | configuration | specification | version: 1 |
| `services/opportunity/service.yaml` | manifest | specification | version: 1 |
| `services/opportunity/src/api/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/opportunity/src/application/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/opportunity/src/domain/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/opportunity/src/infrastructure/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/opportunity/src/workers/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/opportunity/tests/contract/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/opportunity/tests/integration/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/opportunity/tests/unit/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/policy-engine/README.md` | documentation | documentation | policy-engine |
| `services/policy-engine/migrations/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/policy-engine/operations/slo.yaml` | configuration | specification | version: 1 |
| `services/policy-engine/service.yaml` | manifest | specification | version: 1 |
| `services/policy-engine/src/api/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/policy-engine/src/application/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/policy-engine/src/domain/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/policy-engine/src/infrastructure/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/policy-engine/src/workers/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/policy-engine/tests/contract/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/policy-engine/tests/integration/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/policy-engine/tests/unit/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/profit-engine/README.md` | documentation | documentation | profit-engine |
| `services/profit-engine/migrations/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/profit-engine/operations/slo.yaml` | configuration | specification | version: 1 |
| `services/profit-engine/service.yaml` | manifest | specification | version: 1 |
| `services/profit-engine/src/api/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/profit-engine/src/application/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/profit-engine/src/domain/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/profit-engine/src/infrastructure/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/profit-engine/src/workers/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/profit-engine/tests/contract/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/profit-engine/tests/integration/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/profit-engine/tests/unit/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/public-api/README.md` | documentation | documentation | public-api |
| `services/public-api/migrations/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/public-api/operations/slo.yaml` | configuration | specification | version: 1 |
| `services/public-api/service.yaml` | manifest | specification | version: 1 |
| `services/public-api/src/api/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/public-api/src/application/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/public-api/src/domain/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/public-api/src/infrastructure/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/public-api/src/workers/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/public-api/tests/contract/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/public-api/tests/integration/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/public-api/tests/unit/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/skill-registry/README.md` | documentation | documentation | skill-registry |
| `services/skill-registry/migrations/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/skill-registry/operations/slo.yaml` | configuration | specification | version: 1 |
| `services/skill-registry/service.yaml` | manifest | specification | version: 1 |
| `services/skill-registry/src/api/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/skill-registry/src/application/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/skill-registry/src/domain/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/skill-registry/src/infrastructure/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/skill-registry/src/workers/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/skill-registry/tests/contract/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/skill-registry/tests/integration/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/skill-registry/tests/unit/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/skill-runtime/README.md` | documentation | documentation | skill-runtime |
| `services/skill-runtime/migrations/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/skill-runtime/operations/slo.yaml` | configuration | specification | version: 1 |
| `services/skill-runtime/service.yaml` | manifest | specification | version: 1 |
| `services/skill-runtime/src/api/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/skill-runtime/src/application/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/skill-runtime/src/domain/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/skill-runtime/src/infrastructure/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/skill-runtime/src/workers/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/skill-runtime/tests/contract/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/skill-runtime/tests/integration/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/skill-runtime/tests/unit/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/webhook-gateway/README.md` | documentation | documentation | webhook-gateway |
| `services/webhook-gateway/migrations/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/webhook-gateway/operations/slo.yaml` | configuration | specification | version: 1 |
| `services/webhook-gateway/service.yaml` | manifest | specification | version: 1 |
| `services/webhook-gateway/src/api/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/webhook-gateway/src/application/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/webhook-gateway/src/domain/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/webhook-gateway/src/infrastructure/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/webhook-gateway/src/workers/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/webhook-gateway/tests/contract/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/webhook-gateway/tests/integration/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `services/webhook-gateway/tests/unit/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |

## skills

| Path | Kind | State | Summary |
|---|---|---|---|
| `skills/README.md` | documentation | documentation | Ecomark Skills |
| `skills/_template/SKILL.md` | documentation | documentation | Skill instructions |
| `skills/_template/assets/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `skills/_template/evaluations/cases.jsonl` | evaluation | specification | Evaluation file. |
| `skills/_template/instructions/workflow.md` | documentation | documentation | Workflow |
| `skills/_template/references/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `skills/_template/scripts/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `skills/_template/skill.yaml.example` | configuration | specification | version: 1 |
| `skills/_template/tests/.gitkeep` | placeholder | placeholder | Reserves an intended directory; contains no implementation. |
| `skills/acquisition/paid-media-audit/SKILL.md` | documentation | documentation | Paid media audit |
| `skills/acquisition/paid-media-audit/skill.yaml` | configuration | specification | version: 1 |
| `skills/acquisition/seo-content-plan/SKILL.md` | documentation | documentation | SEO content plan |
| `skills/acquisition/seo-content-plan/skill.yaml` | configuration | specification | version: 1 |
| `skills/automation/whatsapp-spend-alert/SKILL.md` | documentation | documentation | WhatsApp spend alert |
| `skills/automation/whatsapp-spend-alert/skill.yaml` | configuration | specification | version: 1 |
| `skills/conversion/pricing-experiment/SKILL.md` | documentation | documentation | Pricing experiment |
| `skills/conversion/pricing-experiment/skill.yaml` | configuration | specification | version: 1 |
| `skills/media/creative-asset-selection/SKILL.md` | documentation | documentation | Creative asset selection |
| `skills/media/creative-asset-selection/skill.yaml` | configuration | specification | version: 1 |
| `skills/registry.yaml` | configuration | specification | version: 1 |

## workflows

| Path | Kind | State | Summary |
|---|---|---|---|
| `workflows/creative-experiment/acceptance.md` | documentation | documentation | Acceptance scenarios (specification, not executed) |
| `workflows/creative-experiment/measurement.yaml` | configuration | specification | version: 1 |
| `workflows/creative-experiment/workflow.yaml` | configuration | specification | version: 1 |

# Repository blueprint

## Root

```text
ecomark/
├── apps/                 # User-facing deployables
├── agents/               # Governed decision plug-ins
├── skills/               # Installable, versioned Agent competencies
├── mcp/                  # Governed MCP servers, clients and registry
├── connectors/           # Vendor integrations
├── services/             # Business capabilities and data ownership
├── packages/             # Shared libraries; no business-service coupling
├── contracts/            # Canonical APIs, events, commands and capabilities
├── data/                 # Analytics, ML features, models and evaluations
├── platform/             # Golden paths and developer experience
├── infrastructure/       # Cloud, Kubernetes, monitoring and recovery
├── environments/         # Local, staging and production composition
├── tests/                # Platform-wide verification
├── security/             # Threat models and security controls
├── compliance/           # Legal/control evidence
├── operations/           # SLO, incidents, capacity and FinOps
├── product/              # Discovery, roadmap, metrics and pricing
└── docs/                 # Architecture, ADR, API and due diligence
```

## Future clients

- `apps/mobile-app` consumes the versioned public API for alerts, approvals, insights and AI chat.
- `apps/browser-extension` uses least-privilege site access and the public API.
- Neither client imports domain services or holds vendor credentials.

## Platform extensions

- `services/public-api` owns partner-facing REST contracts and quotas.
- `services/mcp-gateway` owns MCP discovery, authentication, sessions and tool exposure.
- `services/skill-registry` and `services/skill-runtime` own installable Skill lifecycle.
- `services/automation-engine` owns durable rules and run history.
- `services/media-library` and `services/media-processing` own company assets and AI indexing.

## Complete agent plug-in

```text
agent-name/
├── agent.yaml
├── README.md
├── src/
│   ├── __init__.py
│   ├── agent.py
│   ├── planner.py
│   ├── context.py
│   └── output_schema.py
├── contracts/
│   ├── input.schema.json
│   └── output.schema.json
├── prompts/
│   ├── system.md
│   ├── planner.md
│   └── explainer.md
├── policies/
│   ├── permissions.yaml
│   ├── risk-limits.yaml
│   ├── approval-rules.yaml
│   └── data-access.yaml
├── tools/
│   ├── registry.yaml
│   └── capability-bindings.yaml
├── workflows/
│   ├── main.yaml
│   ├── human-approval.yaml
│   └── recovery.yaml
├── evaluations/
│   ├── datasets/golden-cases.jsonl
│   ├── scenarios.yaml
│   ├── rubric.yaml
│   └── thresholds.yaml
├── tests/
│   ├── unit/
│   ├── integration/
│   └── contract/
└── migrations/
```

## Complete connector plug-in

```text
connector-name/
├── connector.yaml
├── README.md
├── src/
│   ├── connector.py
│   ├── client.py
│   ├── auth.py
│   ├── rate_limits.py
│   ├── sync.py
│   ├── webhooks.py
│   ├── mapper.py
│   ├── commands.py
│   └── errors.py
├── schemas/
│   ├── vendor/
│   └── canonical/
├── fixtures/
│   ├── webhooks/
│   └── api/
├── migrations/
└── tests/
    ├── unit/
    ├── integration/
    ├── contract/
    └── sandbox/
```

## Complete service

```text
service-name/
├── service.yaml
├── README.md
├── src/
│   ├── api/
│   ├── application/
│   ├── domain/
│   ├── infrastructure/
│   └── workers/
├── migrations/
├── tests/
│   ├── unit/
│   ├── integration/
│   └── contract/
└── operations/
    └── slo.yaml
```

## Agent execution boundary

Every externally mutating request follows:

```text
Objective -> Context -> Proposal -> Policy -> Approval -> Execution -> Verification -> Audit -> Learning
```

Agents produce typed proposals. The policy engine authorizes intent. The approval service records
human authorization. The execution service uses idempotency keys and connector capabilities.
Verification reads the source system again. Audit stores evidence for every transition.

## Deployment rule

Repository boundaries are not deployment boundaries. Start with a small number of deployables.
Extract a service only for independent scale, fault isolation, data residency, security or team ownership.

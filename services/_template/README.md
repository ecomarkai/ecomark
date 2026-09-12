# Service Template Requirements

Every service created from this template must contain:

```text
service-name/
├── src/
│   ├── domain/
│   ├── application/
│   ├── adapters/
│   └── infrastructure/
├── migrations/
├── tests/
│   ├── unit/
│   ├── integration/
│   └── contract/
├── deploy/
├── docs/
│   ├── api/
│   └── runbook/
├── service.yaml
└── README.md
```

`service.yaml` records owner, tier, SLO, dependencies, data classification, scaling unit, dashboards, and runbook links.


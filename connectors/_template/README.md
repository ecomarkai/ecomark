# Connector Template Requirements

Every connector must isolate vendor behavior behind canonical contracts and include:

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

`connector.yaml` records API versions, scopes, quotas, owned commands, emitted events, webhook verification, data classification, and deprecation dates.

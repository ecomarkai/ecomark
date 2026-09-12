# External MCP threat model

Threats include malicious tool descriptions, prompt injection, schema drift, credential theft,
SSRF, DNS rebinding, data exfiltration, cross-tenant access, replay, confused deputy, excessive cost,
slow responses and compromised providers.

Controls include verified presets, egress proxy, DNS and endpoint allowlists, TLS, OAuth, secret
references, tenant binding, schema pinning, quarantined discovery, tool allowlists, input and output
validation, data-loss prevention, signed media references, idempotency, budgets, timeouts, circuit
breakers, audit, anomaly alerts and kill switches.

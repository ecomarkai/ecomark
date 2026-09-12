# MCP security and performance

## Security

Use TLS, OAuth 2.1, PKCE for user authorization, workload identity for internal services, encrypted
tenant secret references, endpoint and DNS allowlists, egress proxying, SSRF protection, tool-schema
validation, explicit allowlists, risk classification, prompt-injection defenses, output scanning,
idempotency, cost limits, audit and immediate revocation.

External tools are discovered into quarantine. Changes to a provider's tool list or schema disable
the affected tool until review. Write tools remain disabled by default.

## Performance

Use connection pooling, capability metadata caching, bounded concurrency, per-provider queues,
distributed rate-limit coordination, bulk reads, event-driven sync, async jobs for generation,
timeouts, retries with jitter, circuit breakers and backpressure. Separate interactive reads from
long-running and mutation workloads. Track p50, p95 and p99 latency plus queue age and provider error
rate. Cache only tenant-scoped, non-sensitive results with explicit freshness metadata.

# Contracts

This directory is the single source of truth for interfaces.

- `openapi` — synchronous HTTP APIs.
- `asyncapi` — event-stream and webhook channels.
- `events` — canonical domain-event definitions.
- `commands` — versioned execution commands and results.
- `schemas` — reusable JSON Schema/Protobuf definitions and compatibility policy.
- `capabilities` — provider-neutral capability vocabulary used by agents, policies, and connectors.

CI must validate schemas, generate client types, run consumer-driven contract tests, and reject incompatible changes unless a documented migration is included.

# Connector and Agent Vision

## Strategic model

Ecomark separates observation, reasoning, authorization, and execution:

```text
External platforms
→ Connectors
→ Canonical events
→ Commerce Graph and Growth Memory
→ Decision Engine
→ Specialist Agents
→ Policy and Approval
→ Canonical commands
→ Connectors
→ Verified outcomes
```

This separation makes the system portable across model providers and external platforms, limits blast radius, and creates reusable proprietary evidence about decisions and outcomes.

## Connector vision

The Connector Platform becomes a regional integration network and eventual marketplace. Official connectors, certified partner connectors, and enterprise-private connectors all implement the same contracts. A connector declares its data, events, commands, scopes, quotas, risk, ownership, API compatibility, and deprecation policy.

Connector health is a product feature. Ecomark must expose authentication state, last successful sync, freshness, backlog, quota pressure, reconciliation status, provider API version, and degraded capabilities.

## Agent vision

The Agent Platform becomes a governed digital growth team. Each agent has a narrow measurable objective, declared tools, permissions, budgets, risk level, evaluation suite, and autonomy ceiling. Agents share a tenant-scoped business memory but retrieve only the minimum context needed for a task.

The Growth Director coordinates specialists and resolves proposals, but the Decision Engine and Policy Engine remain authoritative for financial calculations, risk constraints, and execution rights.

## Conflict example

The Media Buyer may recommend scaling a profitable campaign. The Inventory Agent may report seven days of stock, while the Profit Agent may report margin compression. The resulting decision may block acquisition scaling and prefer a bounded retention campaign until inventory arrives.

## Strategic moat

The moat is not the number of agents. It is the combination of:

- deep connector coverage and reliable platform behavior;
- a canonical Gulf-commerce data model;
- the Commerce Graph and tenant-specific Growth Memory;
- measured decision and outcome history;
- safe, verified, reversible execution;
- agent and connector SDKs adopted by partners;
- reliable benchmarks built from legally permitted, privacy-safe aggregates.

## Historical platform build order

> **Sequencing notice:** The capability sequence below is retained as historical platform context.
> [docs/product/ROADMAP.md](../product/ROADMAP.md) is authoritative for current implementation
> sequencing. Complete Account → Organization → Store → Shopify connection → Data sync → Dashboard
> → AI analysis first. After that MVP is stable, add Salla, Meta integrations, GA4 and other
> connectors, and then advanced MCP creative-provider workflows.

### Foundation

1. Connector SDK and capability contracts.
2. One commerce connector and one advertising connector.
3. Analytics Agent and Profit Agent.
4. Policy, approval, audit, and evaluation foundations.

### Growth

5. Media Buyer and Growth Director.
6. Creative Strategy, Retention, Inventory, and SEO.
7. Verified execution with progressive autonomy.

### Platform

8. Connector and Agent marketplaces.
9. Partner SDKs and certification.
10. Enterprise-private connectors and custom agents.

# Historical delivery gates

> **Sequencing notice:** This document preserves an earlier capability plan for historical context.
> [docs/product/ROADMAP.md](../product/ROADMAP.md) is authoritative for current sequencing. Complete
> Account → Organization → Store → Shopify connection → Data sync → Dashboard → AI analysis first.
> After that Shopify-first MVP is stable, add Salla, Meta integrations, GA4 and other connectors,
> and then advanced MCP creative-provider workflows.

The security, isolation, approval, reconciliation, and scale requirements below remain applicable
when their capabilities are implemented. Their numbered order is not the current implementation order.

## Earlier capability plan

1. Foundation: tenant membership and isolation; one dashboard and control plane.
2. Custom MCP: endpoint validation, auth, discovery, bindings, read tool and failure handling.
3. Creative vertical slice: ideas, approved generation, durable jobs and tenant media import.
4. SaaS: entitlement enforcement, metering, billing callbacks, cancellation and exports.
5. Advertising experiment: ad drafts, second approval, execution reconciliation and measurement.
6. Scale: realistic traffic model (stores x sync frequency x rows x tool calls), load tests,
queue fairness, provider quotas, costs and recovery drill before capacity claims.

Keep API gateway as edge, public-api as client contract, admin-gateway as administrative BFF.
They call owning domain modules; avoid duplicate ownership. Deploy as a few processes initially.

# Capability Contracts

Capability contracts decouple agent intent from provider-specific APIs.

Examples:

- `commerce.orders.read`
- `commerce.products.update`
- `ads.campaigns.read`
- `ads.budget.update`
- `seo.pages.audit`
- `seo.content.draft`
- `crm.segment.create`
- `messaging.campaign.send`
- `inventory.availability.read`
- `shipping.delivery.read`

Agents request capabilities. Policy evaluates whether the tenant, agent, user, and connector may use them. The Connector Platform translates an approved canonical command into the provider operation.


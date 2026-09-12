# Connector Platform

Connectors are Ecomark's controlled interface to external commerce systems. They collect facts and execute approved canonical commands; they never contain product decision logic.

## Connector families

- `commerce` — Salla, Zid, Shopify, WooCommerce, Magento, and BigCommerce.
- `advertising` — Meta, Google, TikTok, Snapchat, and Microsoft Ads.
- `analytics-seo` — GA4, Search Console, and Bing Webmaster.
- `communications-crm` — WhatsApp, email, SMS, HubSpot, Salesforce, and Klaviyo.
- `operations` — payment, shipping, ERP, accounting, and inventory systems.
- `support` — Zendesk, Intercom, and Freshdesk.

## Required lifecycle

1. Authenticate using the minimum scopes.
2. Capture and verify webhooks.
3. Store the immutable raw payload.
4. Normalize it to a versioned canonical event.
5. Reconcile Ecomark totals with the provider.
6. Accept only versioned canonical commands.
7. Validate, execute idempotently, and verify the external result.
8. Publish execution evidence for audit and learning.

Every connector must be created from `_template` and publish a capability manifest.


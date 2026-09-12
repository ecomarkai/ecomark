# Content and commerce metrics

Owner: Product Engineering; Commerce Intelligence owns metric semantics. Copy must use plain language, clear actions and equivalent Arabic/English meaning. Do not promise guaranteed growth, imply a proposal ran, or describe an uncertain result as verified.

## Metric contract

Every metric must have a canonical ID/version, formula, unit, currency where relevant, source lineage, included/excluded records, time basis, timezone, date interval, freshness and rounding policy. Implement definitions in deterministic owning-domain code; UI and AI may format or explain them, not recalculate independent versions. Publish approved definitions with the data contracts before a metric is enabled.

Initial reporting conventions below are proposed requirements for the Shopify slice. Commerce Intelligence must validate mappings against provider fixtures before release; these definitions do not claim that a current connector implements them.

| Metric | Required definition and disclosure |
|---|---|
| Gross merchandise sales | Sum eligible item price × quantity before discounts, excluding shipping and tax; exclude test and cancelled orders explicitly |
| Net merchandise sales | Gross merchandise sales minus allocated item discounts and merchandise refunds; disclose refund recognition date and exclude tax/shipping consistently |
| Eligible orders | Distinct qualifying provider order IDs using the same order-status and time rules as the sales denominator |
| Average order value | Net merchandise sales divided by eligible orders for the declared comparable cohort; zero denominator is unavailable, not zero |
| Contribution profit | Net revenue minus explicitly enumerated cost components; missing COGS/fees/ad costs must show incomplete, never assume zero |
| ROAS | Attributed revenue divided by ad spend, with attribution model/window and currency conversion disclosed; unavailable without both sources |
| Period change | (Current − previous) / previous; previous zero or incomparable coverage yields unavailable with explanation |

Do not mix refund-date and order-cohort semantics in comparisons. Reconciliation must account for timing, currency, tax, shipping, discounts and provider status exclusions. The first dashboard may expose only metrics whose required inputs are available and verified.

## Money, dates and states

- Calculate using integer minor units or approved decimal types with currency-aware precision; never binary floating-point arithmetic for money. Round only at the defined boundary.
- Show SAR through locale-aware formatting. Keep original currencies. Mixed-currency aggregation requires an explicit reporting currency, FX source, rate timestamp and conversion policy; otherwise show separate totals.
- Display date range, reporting timezone, last successful sync and partial coverage. Exported values must carry the same definition/version, timezone and currency as the screen.
- Zero means measured zero. Use localized unavailable, not connected, syncing, stale or insufficient evidence states when appropriate. Do not generate sample trends or substitute random values in production.
- Isolate demo fixtures from production data paths and label every demo surface. Customer identifiers and records must not appear in repository screenshots or fixtures.
- Error copy must state a safe next action without stack traces, secrets or raw provider responses. AI copy must link evidence, state uncertainty and distinguish observation from recommendation.

Review copy and metric labels in both languages, including negative amounts, large values, refunds and no-data cases. Follow [I18N/RTL](I18N_RTL.md) and [database guidelines](../engineering/DATABASE_GUIDELINES.md).

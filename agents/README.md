# Ecomark Agent Platform

Agents are versioned specialists that operate on shared, evidence-backed commerce context. Agents cannot hold provider credentials or mutate external platforms directly.

## Agent families

### Orchestration

- `growth-director` — translates business goals into a coordinated plan, resolves conflicts, and tracks outcomes.

### Acquisition

- `research` — market, competitor, season, and product opportunity intelligence.
- `seo` — technical SEO, content gaps, search visibility, and profitable organic growth.
- `media-buyer` — cross-channel budget, campaign, audience, and scaling recommendations.
- `creative-strategy` — creative patterns, fatigue, hooks, offers, and briefs.

### Conversion

- `cro` — funnel, landing page, checkout, and experiment recommendations.
- `merchandising` — product order, bundles, upsell, cross-sell, and recommendations.
- `pricing-promotion` — discounts, offers, and margin-aware pricing experiments.

### Retention

- `crm` — lifecycle, segmentation, lead state, and follow-up planning.
- `retention` — repeat purchase, win-back, loyalty, and customer value.
- `customer-support-intelligence` — complaints, returns, sentiment, and product issue signals.

### Operations

- `analytics` — trusted metrics, anomalies, evidence, and data-quality warnings.
- `profit` — contribution margin and profitability across customers, SKUs, and channels.
- `inventory` — stock risk, slow-moving inventory, and marketing constraints.
- `forecasting` — demand, revenue, profit, cash, and capacity forecasts.

## Autonomy levels

1. `monitor` — observe and alert.
2. `recommend` — create evidence-backed recommendations.
3. `approval` — execute only after an authorized approval.
4. `autopilot` — execute only inside explicit tenant policies and budgets.

Each agent must start in `monitor` or `recommend`. Promotion requires evaluation evidence, production history, rollback coverage, and risk approval.

## Mandatory execution path

```text
Agent output
→ schema validation
→ decision validation
→ policy evaluation
→ human/delegated approval
→ canonical command
→ connector execution
→ external verification
→ immutable audit
→ outcome learning
```


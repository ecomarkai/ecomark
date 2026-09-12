# Web dashboard design requirements

Owner: Product Engineering. This document applies the repository [design system](../../docs/design/DESIGN_SYSTEM.md) to `apps/web`; it does not replace [ARCHITECTURE.md](ARCHITECTURE.md).

## Shell and hierarchy

- Keep the current organization, store, reporting period, timezone, currency, and data freshness visible wherever they affect the screen's meaning.
- Provide a skip link, semantic landmarks, one clear page heading, visible focus, and keyboard-accessible navigation. Navigation must identify the current page and work with touch in RTL and LTR.
- Use semantic tokens for every color, surface, border, focus ring, spacing, type style, radius, elevation, chart series, motion, and breakpoint. Support mapped light and dark themes without feature-local theme overrides.
- Use Arabic-capable typography with tested glyph coverage, line height, weights, and diacritics. Long Arabic and English labels must wrap without covering controls or changing semantic reading order.

## Screens and components

All screens must work at the representative viewport matrix in [responsive design](../../docs/design/RESPONSIVE_DESIGN.md). Mobile stacks content and keeps primary actions reachable; tablet uses collapsible navigation and wrapping controls; desktop may use persistent navigation and multi-column comparisons. Do not remove financial fields or recovery actions to fit a narrow view.

Forms, tables, dialogs, charts, navigation, and notifications must follow [component standards](../../docs/design/COMPONENT_STANDARDS.md). Use the planned `packages/ui` primitives when that package exists; until then, keep feature components local and do not establish duplicate shared systems.

Every data-bearing screen must define:

- loading without fake values;
- ready with source, period, timezone, currency, and freshness;
- empty that distinguishes no records, filters, and incomplete setup;
- stale or partial coverage with explicit limitations;
- safe error and retry behavior;
- offline behavior without silent sensitive replay;
- permission denial without revealing inaccessible resources.

Financial and commerce displays follow [content and metric definitions](../../docs/design/CONTENT_GUIDELINES.md). Zero, unavailable, syncing, and insufficient evidence are different states. Production UI must never substitute sample metrics, random charts, or generated AI conclusions for missing data.

## Acceptance evidence

Review each changed journey in Arabic/RTL and English/LTR, light and dark themes, and mobile, tablet, desktop, 320-pixel reflow, and 400% zoom. Include keyboard focus, screen-reader semantics, touch targets, long labels, negative and large SAR values, loading, error, no-data, and denied states. Follow [TESTING.md](TESTING.md); screenshots alone do not prove accessibility or correct interaction.

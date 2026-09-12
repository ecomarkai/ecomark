# Design system

Owner: Product Engineering. This specifies the future interface; no theme or component implementation is implied. Apply [frontend architecture](../engineering/FRONTEND_ARCHITECTURE.md) for package ownership and [component standards](COMPONENT_STANDARDS.md) for review gates.

## Visual language and tokens

- Use a restrained enterprise SaaS hierarchy: persistent organization/store context, clear page title, primary task, then supporting metrics and detail. Do not use ornamental effects that compete with financial or operational information.
- Define semantic tokens for surface, text, border, action, focus, success, warning, danger, chart series, spacing, typography, radius, elevation, motion and breakpoints. Consumer code must not embed raw color values or arbitrary replacements for existing tokens.
- Map semantic tokens separately for light and dark themes; do not invert colors mechanically. Every text/background and interactive state combination must pass [accessibility](ACCESSIBILITY.md). Chart status must also use labels or patterns.
- Establish one spacing scale and type scale in shared UI tokens before creating feature-specific variants. Arabic typography must have tested glyph coverage, readable line height and equivalent hierarchy; never simulate bold or crop diacritics to fit an English height.
- Store theme preference per user, with system preference as the initial default. Resolve theme and locale consistently across server rendering and hydration; avoid a flash of an unreadable theme or wrong direction.
- Shared primitives belong in the planned `packages/ui`; feature composites belong with their feature. Do not establish a second token system in the dashboard.

## Required state matrix

Every data-bearing component must document loading, ready, empty, partial/stale, error, offline and permission-denied behavior. Stateful controls also cover hover, focus-visible, active, disabled and pending states. A skeleton must preserve layout without suggesting fake values. Empty, zero and unavailable must be distinct.

Before accepting a new pattern, attach review evidence in Arabic/RTL and English/LTR, light and dark themes, and the [responsive viewport matrix](RESPONSIVE_DESIGN.md). Include keyboard focus, long translated labels, missing data and large monetary values. Use sanitized fixtures only. Adoption requires Product Engineering review and the applicable visual/accessibility tests; a screenshot alone is insufficient.

# Component standards

Owner: Product Engineering. Shared primitive location is defined by [frontend architecture](../engineering/FRONTEND_ARCHITECTURE.md); do not create duplicate button, dialog, input or table foundations in each feature.

## Contract

Every reusable component must declare semantic purpose, typed inputs/events, supported states, keyboard behavior, accessible name, direction handling and theme tokens. Keep data fetching and business permissions outside presentation primitives. Do not pass whole customer objects when a minimal display model suffices. A disabled button does not replace server authorization.

## Required patterns

- **Forms:** visible labels, localized instructions, semantic input types, appropriate autocomplete, required indicators explained in text, schema validation and server revalidation. Associate field errors programmatically; focus the first invalid field or error summary on submit. Preserve safe fields and announce status. Prevent duplicate submission without trapping users in a permanent loading state.
- **Tables:** semantic headers, caption or accessible name, explicit sort state and named row actions. Maintain header associations and keyboard access. Pagination/filter changes must announce results. Use a labeled scroll region or purposeful mobile summary when a wide table cannot reflow; do not silently omit financial columns.
- **Dialogs:** accessible title and description where needed, initial focus, contained tab sequence, Escape/cancel behavior and focus return. Destructive confirmation must name the action and scope. Background content must be inert while modal. Nested modal stacks require explicit accessibility review.
- **Charts:** title, units, time window, currency, freshness and a text summary or data table. Do not convey series/status only by color. Tooltips must be available to keyboard users and must not contain the sole copy of essential information.
- **Navigation:** current page indication, meaningful link names, skip link and visible focus. Menus must work with keyboard and touch in either direction. Avoid using a button to imitate a link or a link to perform a mutation.
- **Notifications:** distinguish persistent blocking errors from transient confirmations. Use live regions appropriately; do not move focus for routine background updates. Critical recovery instructions must not disappear automatically.

A primitive change requires component interaction tests, accessibility checks and visual regression coverage across both themes and directions. Review existing consumers before changing its contract. Follow [accessibility](ACCESSIBILITY.md) and [responsive design](RESPONSIVE_DESIGN.md).

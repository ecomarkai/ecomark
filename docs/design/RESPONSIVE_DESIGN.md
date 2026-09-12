# Responsive design

Owner: Product Engineering. Layout must follow content needs through shared breakpoint tokens; device names are testing categories, not hard-coded layout assumptions.

## Layout requirements

- Desktop may use persistent navigation, filter bars and multi-column metrics. Tablet must preserve primary tasks with collapsible navigation and wrapping controls. Mobile must provide accessible navigation, stacked content and reachable primary actions.
- Use logical inline/block sizing and spacing. Test every arrangement in RTL and LTR; never use CSS visual reordering that breaks reading or keyboard order.
- Page-level horizontal overflow is prohibited at supported widths. Wide tables may use a contained, labeled scroll area with discoverable overflow. Preserve units, column headers, totals and access to row actions.
- Dialogs must fit the viewport, scroll internally when needed and keep title/actions reachable with a software keyboard open. Fixed banners and sticky controls must not cover focus or the last form field.
- Use flexible text, wrapping and minimum content sizing. Do not truncate essential amounts, Arabic labels or error recovery text. Optional truncation requires a keyboard-accessible way to obtain the complete value.
- Loading and empty states must obey the same layout constraints as real data. Do not use desktop-only charts or hide permissions/error states on narrow screens.

## Required verification matrix

Use representative CSS viewport sizes: 360×800 mobile, 768×1024 tablet and 1440×900 desktop; additionally check 320-pixel reflow and 400% desktop zoom. Test portrait and landscape where controls or tables are affected. At each representative size cover Arabic/RTL and English/LTR in light and dark themes, long labels, large amounts and error states.

Record viewport, locale, theme and state with screenshots or visual baselines. Passing desktop screenshots does not waive mobile interaction checks. Actual browser/assistive-technology coverage is recorded under [testing strategy](../engineering/TESTING_STRATEGY.md). Follow [accessibility](ACCESSIBILITY.md) for focus, targets and reflow exceptions.

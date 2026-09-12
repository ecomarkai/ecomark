# Internationalization and RTL

Owner: Product Engineering. Arabic and English are required from the first product screen. New engineering documentation remains English; existing historical Arabic architecture references are preserved.

## Strings and direction

- Use stable namespaced translation keys for all authored user-facing text, including navigation, validation, aria labels, chart labels, empty states, dates in messages and notifications. Do not concatenate translated sentence fragments.
- Maintain Arabic and English key parity, parameter parity and plural forms. Missing keys must fail validation before release; silent English fallback is not an acceptable completed Arabic screen. User/provider content must be escaped and identified as external content, not treated as a translation key or trusted HTML.
- Resolve document `lang` and `dir` from the selected locale at the server boundary and preserve them through hydration. Locale changes must update portals, dialogs, charts and notifications as well as page content.
- Use CSS logical properties. Mirror directional navigation icons when their meaning follows reading direction; do not mirror brand marks, media controls or numeric charts blindly. Keep DOM order semantically correct.
- Isolate mixed-direction IDs, emails, URLs and numbers with appropriate bidirectional markup such as `bdi`. Test Arabic sentences containing Latin store names and negative currency values. Do not use invisible direction characters to patch layout bugs.

## Formatting

Use `Intl.NumberFormat` and `Intl.DateTimeFormat` with an explicit locale, currency and IANA timezone. Support `ar-SA` and `en-SA` presentation; decide digit conventions consistently and test them rather than replacing digits manually. SAR amounts must use currency formatting, not string-concatenated symbols. Preserve canonical machine values separately from display strings.

Store timestamps as UTC instants. Use the store's configured timezone for reporting windows; `Asia/Riyadh` is the initial Saudi-store default, never an assumption for every tenant. Display the reporting timezone near date filters and exports. User locale must not change the underlying window or currency. Use a Gregorian reporting calendar explicitly for comparable commerce periods; a different calendar requires an explicit product decision and tests.

Never infer currency from language or location. For multi-currency values and FX disclosures follow [content guidelines](CONTENT_GUIDELINES.md). Date range boundaries, leap days, month transitions and timezone changes require tests.

Acceptance: all translation keys present in both locales, correct plural/parameter behavior, no direction leakage, equivalent navigation and formatting on every [responsive viewport](RESPONSIVE_DESIGN.md).

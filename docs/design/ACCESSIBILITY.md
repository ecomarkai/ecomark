# Accessibility requirements

Owner: Product Engineering; release owner is accountable for evidence. Target: WCAG 2.2 Level AA for customer-facing web journeys. This is an acceptance target, not a claim of present conformance. The [W3C WCAG 2.2 standard](https://www.w3.org/TR/WCAG22/) defines the criteria; all applicable A and AA criteria must be assessed, not only the checks below.

## Minimum implementation checks

- Use semantic landmarks, one meaningful page-level heading, ordered heading hierarchy and a skip link. Set correct document language and direction; identify language changes where needed.
- Every action must be keyboard operable with visible focus, logical order and no keyboard trap. Sticky headers, dialogs and notices must not obscure focused controls. Pointer gestures must have simple alternatives.
- Meet text contrast of at least 4.5:1 for normal text and 3:1 for large text; required non-text controls and meaningful graphics need 3:1 against adjacent colors. Test both themes and every interactive state.
- Provide at least the applicable 24 by 24 CSS pixel target size or spacing alternative; prefer 44 by 44 for touch controls. Document any standards-based exception in the accessibility review.
- Support reflow at 320 CSS pixels and zoom to 400% without loss of functionality, except content that genuinely requires two-dimensional layout, such as a data table in its own labeled scroll region. Text resizing must not clip Arabic text or validation messages.
- Respect reduced motion. Avoid flashing, autoplay distraction and essential information available only on hover, color, animation or a timed toast.
- Use visible form labels, announced errors, correct autocomplete and accessible authentication; allow password managers and paste. Explain session expiry and offer extension where security constraints permit.
- Provide accessible names and status announcements for async operations. Dialogs require focus management; charts require meaningful text alternatives; tables require header associations. Apply [component standards](COMPONENT_STANDARDS.md).

## Evidence and gate

For every changed journey, run automated accessibility checks and manual keyboard/focus checks. Before release, perform screen-reader checks with a documented browser/assistive-technology combination in Arabic and English, plus zoom, theme contrast and mobile reflow checks. Record versions, routes, states, findings and fixes.

Automated scans do not establish conformance. Unresolved A/AA failures in the changed journey block its release; record triage evidence and remediation ownership. Do not erase baseline issues or relabel a failure as a passed check. [Testing strategy](../engineering/TESTING_STRATEGY.md) owns execution and reporting.

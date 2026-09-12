# Feature catalog

Owner: Product Engineering. “Required” below means planned acceptance scope. Only the Next.js starter and tooling are implemented; consult [implementation status](../../IMPLEMENTATION_STATUS.md). A scaffold directory is not evidence that a feature works.

| Feature ID | Capability | Delivery gate | Owning boundary | Required acceptance |
|---|---|---|---|---|
| F-01 | Account/session and memberships | Initial | Identity + dashboard | Authentication, expiry and revocation deny access correctly |
| F-02 | Organization and store lifecycle | Initial | Control plane + dashboard | Tenant/store scoping and resumable onboarding |
| F-03 | Shopify connection | Initial | Connector manager + Shopify connector | Read scopes, callback validation, safe reconnect/disconnect |
| F-04 | Sync and reconciliation | Initial | Webhook gateway + event normalizer | Durable intake, deduplication, replay and freshness |
| F-05 | Commerce dashboard | Initial | Dashboard + owning metric modules | Traceable totals, currency/period definitions and truthful states |
| F-06 | Grounded AI analysis | Initial | Decision engine + model gateway + analytics agent | Evidence, uncertainty, budget and no mutation |
| F-07 | Localization and accessibility | Every gate | Customer applications | Arabic/English, RTL/LTR, both themes, accessible interactions |
| F-08 | Audit, policy and isolation | Every gate | Identity + policy + audit | Enforced server-side with negative tests |
| F-09 | MCP connections and tool governance | Later | MCP gateway | Quarantine, schema binding, approved tool scope and revocation |
| F-10 | Skills, media and creative experiments | Later | Skill runtime + media + experiment | Rights, sandbox, generation approval and result verification |
| F-11 | Billing and entitlements | Later | Billing + control plane | Verified callbacks, idempotent metering and cancellation |
| F-12 | Advertising and autonomous actions | Later | Approval + execution + connectors | Separate spend approval, bounded delegation and reconciliation |
| F-13 | Partner clients and marketplaces | Later | Public API + registries | Versioned contracts and reviewed distribution/security model |

Do not expose a later feature as operational from navigation, placeholder success messages or demo metrics. A disabled preview must state its status and must not collect production credentials. New features need an ID, owner, measurable acceptance, dependencies, data classification and tests before implementation.

Existing detailed specifications remain authoritative for their domains: [control center](../architecture/CONTROL_CENTER.md), [automation](../architecture/AUTOMATION_PLATFORM.md), [media](../architecture/MEDIA_LIBRARY.md), and [API/MCP/skills](../architecture/API_MCP_SKILLS.md). This catalog indexes scope; it does not replace those specifications.

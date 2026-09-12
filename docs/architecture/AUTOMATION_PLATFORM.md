# Automation platform

Automations are durable rules made from a Trigger, zero or more Conditions, one or more Actions,
and Safety controls. Rules execute without an open user session.

The ad-spend example uses a daily window and Asia/Riyadh timezone. Spend is normalized to SAR before
comparison. A threshold crossing creates an idempotent action job. Consent, approved WhatsApp
template, cooldown, daily limits and duplicate suppression are checked before sending.

Natural language can draft a rule, but the user must review the parsed fields and run a dry-run
before enabling it. High-risk actions always pass policy and approval.

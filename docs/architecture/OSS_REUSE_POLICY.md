# Ecomark OSS reuse policy

Owner: Platform Engineering. Established 2026-09-12 (Africa/Cairo) by ECO-001A Step 2.5.

This is a permanent governance rule. The concrete decisions it governs live in the
[OSS technology registry](OSS_TECHNOLOGY_REGISTRY.md); the mechanics of adding a dependency live
in the [dependency policy](../engineering/DEPENDENCY_POLICY.md).

## The rule

**Ecomark must not reinvent mature commodity infrastructure when a well-maintained, secure and
replaceable open-source solution exists. Ecomark must own its differentiation.**

Both halves are binding. Rebuilding a job queue wastes the budget that should go to commerce
intelligence. Outsourcing the canonical commerce model to whatever an integration library happens
to return gives away the product.

## What Ecomark owns

These are never delegated to a dependency, and never allowed to take their shape from one:

- canonical commerce model
- tenant architecture
- signals
- insights
- recommendations
- actions
- approval policies
- ECO reasoning
- ECO memory
- ECO learning
- evaluation semantics
- commerce intelligence
- growth intelligence
- product UX

A useful test: **if a competitor could buy the same thing, it is infrastructure. If it is why a
merchant chooses Ecomark, we own it.**

A subtler failure than importing the wrong library is letting a dependency define a concept.
Adopting a vendor's idea of what an "evaluation score", a "customer" or a "conversion" means —
because that is what the SDK returns — surrenders product meaning without any dependency review
ever taking place.

## What OSS may provide

Infrastructure: frameworks, persistence, queues, workflow engines, telemetry, validation,
protocol implementations, provider SDKs, testing tools.

## Evaluation criteria

Every substantial technology candidate is assessed against all of these before adoption, and the
assessment is recorded as a registry entry:

| Criterion | What to establish |
|---|---|
| Official repository | The canonical source, not a fork or mirror |
| License | Compatible with commercial SaaS; note copyleft and dual-license terms |
| Maintenance | Active maintainers, not a single unavailable owner |
| Release activity | Recent releases; security fixes land promptly |
| Security | Vulnerability history and disclosure process; transitive dependency count |
| Ecosystem / adoption | Real production use; findable answers to real problems |
| Architecture fit | Fits our boundaries without reshaping them |
| Compatibility | Node.js 24.20.0, TypeScript strict, pnpm 10, Turborepo |
| Operational complexity | What running it costs, and who runs it |
| Lock-in | How deeply it would spread through the codebase |
| Replacement strategy | Concretely, what replacing it would require |

A candidate that cannot answer **lock-in** and **replacement strategy** is not ready for adoption,
regardless of how good it is.

## Prohibitions

**Never copy an entire repository.** Starter kits, examples and templates encode their author's
architecture, not ours. Read them for API semantics and protocol detail; do not adopt their
structure. This applies with particular force to provider starter kits, which are written to
demonstrate the provider rather than to build a multi-tenant platform.

**Never fork without documented justification.** A fork is a permanent maintenance liability. It
requires a recorded reason, an owner, a plan to upstream or retire it, and a re-review date.
Preferred order: upstream a fix, use an official extension point, wrap in an adapter, then — only
then — fork.

**Never introduce a foundational dependency without architecture review.** Foundational means
anything that would be expensive to remove: a framework, an ORM, a queue, a workflow engine, an
authorization service, an AI gateway. These need a registry entry and an ADR before any code is
written against them.

**Never adopt an archived or unmaintained project on a security-sensitive path.** Credential
handling, customer messaging, payment and authentication paths require a maintained upstream. See
the archived WhatsApp SDK entry in the registry for a worked example of this rejection.

## The adapter rule

External systems are reached through an Ecomark-owned interface. Vendor types do not cross that
boundary.

```
Application  ->  Ecomark interface  ->  VendorAdapter  ->  vendor SDK / API
```

Concretely: no Salla, Shopify, Meta, Sentry, Langfuse or LiteLLM type may appear in a domain or
application signature. The adapter translates in both directions, including translating provider
errors into `@ecomarkai/errors` categories.

This is what makes the registry's exit strategies real rather than aspirational. An exit strategy
that requires touching domain code is not an exit strategy.

## Recording a decision

1. Add a registry entry with every field populated, including risks and exit strategy.
2. Write an ADR if the technology is foundational or the decision is contested.
3. Record the decision state and the phase in which it may be introduced.
4. Do not install ahead of that phase. An unused dependency still carries supply-chain, license,
   upgrade and review cost.
5. On reversal, keep the original entry and append the reversal and its reason, so the reasoning
   history stays inspectable.

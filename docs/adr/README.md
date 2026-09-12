# Architecture Decision Records

Use one immutable record per material decision. Include context, decision, alternatives, consequences, owner, date, and review trigger.

## Naming convention

`ADR-NNNN-kebab-case-title.md`, with `NNNN` zero-padded and assigned in the order records are
written. Numbers are never reused, and an accepted record is never edited in place: supersede it
with a new record and mark the old one superseded.

## Accepted records

| Record | Title | Status |
|---|---|---|
| [ADR-0001](ADR-0001-runtime-validation-zod.md) | Runtime validation with Zod 4 | Accepted |
| [ADR-0002](ADR-0002-internal-package-consumption-model.md) | Internal packages are consumed as TypeScript source | Accepted |

## Backlog

Topics that warrant a record but do not have one yet. These are not reserved numbers; each is
numbered when it is written.

- Modular monolith before service extraction
- PostgreSQL as the operational source of truth
- Immutable raw event retention
- Versioned canonical events and commands
- Graph as a rebuildable projection
- Multi-provider model gateway
- LLM separation from financial calculations and execution
- Durable approval and execution workflows
- NestJS as the core API framework (required at introduction)
- Drizzle ORM for persistence (required at introduction)


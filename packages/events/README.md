# @ecomarkai/events

Event primitives.

## Responsibility

Owns the envelope every Ecomark event travels in, its factories, and structural checks for the
envelope's own invariants.

## Boundary

Dependency-free, including of every other Ecomark package, so an event producer never drags an
unrelated boundary in with it.

Contains **no infrastructure**: no broker, no Kafka, no queue, no outbox table, no worker, no
publisher, no subscriber, no retry policy, no topic and no transport. None of those exist yet,
and guessing their shape now would constrain the choice later.

The intended path stays open:

```
Domain Event -> Transactional Outbox -> Worker -> future message infrastructure
```

Nothing here assumes which infrastructure that will be. The envelope is equally valid written
to a database row, handed to an in-process handler, or published later.

## Envelope

`eventId`, `eventType`, `eventVersion`, `occurredAt`, `correlationId`, optional `causationId`,
optional `tenant`, and `payload`.

## Tenant metadata is deliberately generic

`TenantRef` is `{ scope, id }` — nothing more. It is **not** a tenancy model: no organization,
workspace or store entity, no membership, no hierarchy.

When the tenancy model lands, an organization-scoped event is
`{ scope: "organization", id: "org_1" }` and nothing about the envelope changes. A richer scope
can be added as an extra field without breaking consumers that read only these two.

Carrying a tenant reference never grants access. A consumer must still authorize before acting
on an event, exactly as it would for an inbound request.

## Two invariants the tests enforce

- **A derived event inherits its parent's tenant and correlation and cannot override either.**
  `DerivedEvent` omits both fields, so a handler bug cannot make one tenant's event produce
  another tenant's event. A genuinely different scope must be an explicitly authorized new root
  event.
- **Clock and identifier generation are injected ports**, so ordering and freshness behavior is
  tested deterministically rather than against a moving clock.

## Envelope checks, not schema validation

`envelopeViolations` and `isEventEnvelope` check the envelope's own structure and nothing else.
**Payload validation is the consumer's responsibility** and stays out of this package while no
runtime validation technology is approved for the repository. When that ADR lands, payload
validation composes on top of these checks rather than replacing them.

One behavior worth knowing: `isTimestamp` rejects impossible calendar dates.
`Date.parse("2026-02-31T00:00:00Z")` resolves to 2026-03-03 instead of failing, and an
`occurredAt` that quietly moves two days would corrupt ordering, freshness and reconciliation
downstream.

## Verification

`pnpm --filter @ecomarkai/events test`

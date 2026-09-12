/**
 * @ecomarkai/events — event primitives.
 *
 * Contains the envelope, its factories and structural checks for its own invariants. It
 * contains no broker, no Kafka, no queue, no outbox table, no worker, no publisher, no
 * subscriber, no retry policy and no transport. None of those exist yet, and guessing their
 * shape now would constrain the choice later.
 *
 * Dependency-free, including of the other Ecomark packages, so an event producer never drags
 * an unrelated boundary in with it.
 */
export {
  createEventEnvelope,
  deriveEventEnvelope,
  randomEventIdFactory,
  systemClock,
  type Clock,
  type DerivedEvent,
  type EventEnvelope,
  type EventEnvelopeDependencies,
  type EventIdFactory,
  type NewEvent,
} from "./envelope.js";
export { isTenantRef, type TenantRef } from "./tenant-ref.js";
export {
  envelopeViolations,
  isEventEnvelope,
  isEventType,
  isTimestamp,
} from "./invariants.js";

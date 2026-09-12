# Integration scale

Each tenant-provider pair is a Connection with independent credentials, capabilities, limits, health
and lifecycle. Interactive reads, mutating actions and background sync use separate queues. Long image,
video and bulk-ad operations return job IDs and execute asynchronously.

Cache metadata and safe read results, never authorization decisions or secrets. Coordinate vendor
quotas across replicas. Use idempotency keys, bounded retries, jitter, circuit breakers, dead-letter
queues and reconciliation. Partition events and jobs by tenant and provider. Add regional workers
without changing Agent or API contracts.

New provider onboarding must use the template, compatibility tests, sandbox, canary tenants,
observability dashboards, version policy and deprecation plan.

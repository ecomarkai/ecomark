# Acceptance scenarios (specification, not executed)

- Tenant A cannot select Tenant B asset or connection even by guessing its ID.
- Schema changed after approval: execution blocks until binding reapproval.
- Unapproved generation or publication: no external call.
- Generation succeeded but response lost: reconcile job; no automatic paid duplicate.
- Import URL targets internal IP or redirects there: reject.
- Polling reports failure: release unused reservation; keep audit and charged amounts.
- Revoked membership/connection during queue wait: deny at execution time.
- Ad budget or creative changed after approval: invalidate approval.
- Insufficient experiment sample: inconclusive, no fabricated winner.
- Compare same sample/window definitions; preserve attribution limitations.

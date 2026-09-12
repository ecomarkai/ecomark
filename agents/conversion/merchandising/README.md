# merchandising

Optimizes assortment, placement, bundles and discovery.

## Required lifecycle

Observe -> Diagnose -> Propose -> Policy check -> Approval if required -> Execute -> Verify -> Learn.

This agent must never call a vendor API directly. It requests canonical capabilities through the
tool gateway so that the same agent works with Salla, Zid, Shopify and future platforms.

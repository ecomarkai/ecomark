# ADR-0002: Internal packages are consumed as TypeScript source

- **Status:** Accepted
- **Date:** 2026-09-12 (Africa/Cairo)
- **Owner:** Platform Engineering
- **Review trigger:** the first consumer that cannot compile workspace source; publishing a
  package outside this repository; or a measured build-time problem attributable to this model

## Context

Every internal package exports raw TypeScript from its `exports` map:

```json
"exports": { ".": "./src/index.ts" }
```

No package has a `build` script and none emits `dist/`. This was inherited from the original
`packages/ui` draft and repeated by the Step 2 packages for consistency. The Step 2 audit flagged
it as an open question that should be settled before the core API is built, because the core API
is the first consumer that compiles with something other than a bundler.

The choice is between:

- **A** — workspace applications consume TypeScript source directly.
- **B** — internal packages compile to `dist/` before consumption.

## Decision

**Option A: internal packages are consumed as TypeScript source.**

No internal package gets a build step at this stage. `exports` continues to point at `src`.

## Compatibility analysis

**Next.js (`apps/web`).** Next compiles workspace source when the package is listed in
`transpilePackages`. Without that entry, importing a raw-TS workspace package fails at build time.
`apps/web` imports no internal package today, so nothing is broken; the entry must be added in the
same change as the first import. This is recorded as a required follow-up rather than configured
now, because adding `transpilePackages` for packages nothing imports is dead configuration.

**Future NestJS core API.** This is the case that actually decides the ADR. A NestJS service
compiled by `tsc` will not emit files for imported workspace source unless configured for it, and
`nest build` does not transpile dependencies by default. Two workable approaches exist —
TypeScript project references with composite builds, or an SWC/bundler-based build that treats
workspace packages as internal source. **Step 3 must verify one of these before the core API is
considered working.** If neither proves workable, that is the trigger to revisit this ADR and move
to option B; it is an explicit risk, not an assumption that it will be fine.

**Turborepo.** Works cleanly with source consumption: without `build` tasks on packages, the task
graph is flatter and `lint`/`typecheck`/`test` run directly against source. Under option B, every
consumer task would need `dependsOn: ["^build"]`, and a stale `dist/` would silently produce wrong
results.

**Vitest.** Prefers source. It transforms TypeScript directly, and source consumption means tests
exercise the same files that ship rather than a build artifact — with accurate stack traces and no
sourcemap indirection.

**pnpm.** Indifferent. `workspace:*` links the directory; what the `exports` map points at is the
consumer's problem.

## Why A rather than B

**B is the correct answer for a published package and the wrong one for this repository today.**

Every package here is `"private": true` and consumed only inside this workspace. A build step
would buy artifact stability we do not need and cost us a stale-`dist` failure mode we would
otherwise never have — the class of bug where a developer edits source, forgets to rebuild, and
debugs a compiled copy of yesterday's code.

Source consumption also keeps one honest property: `pnpm typecheck` checks the code that actually
runs. With `dist/` plus emitted `.d.ts`, a consumer type-checks against declarations, and a
mismatch between declaration and implementation becomes possible.

Per the Step 2.5 brief, no bundler (`tsup`, `unbuild`, Rollup) is introduced. There is no
demonstrated need, and adding one now would create a build pipeline before the thing it is
supposed to serve exists.

## Consequences

**Positive.** No build step to maintain, no stale artifacts, flatter Turbo graph, tests and
typecheck run against real source, no bundler dependency.

**Negative.** Every consumer must be configured to compile workspace TypeScript. The burden is on
consumers, and it is a real, recurring cost — each new consumer pays it once.

**Required follow-ups.**

1. Add `transpilePackages` to `apps/web/next.config.ts` in the same change as its first internal
   package import.
2. Verify a workable compilation strategy for the NestJS core API in Step 3, before declaring it
   working.
3. Revisit this ADR before any package is published outside this repository — at that point
   option B becomes correct, and the migration is adding build scripts and repointing `exports`,
   with no consumer source changes.

## Exit strategy

Migrating to option B later is mechanical: add a build script per package, point `exports` at
`dist`, add `dependsOn: ["^build"]` to the consuming Turbo tasks. No consumer import statement
changes. The cost of choosing A now and reversing later is genuinely low, which is the main reason
to choose the simpler option first.

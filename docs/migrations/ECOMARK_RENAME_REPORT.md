# Ecomark rename report

Reviewed: 2026-09-12 (Africa/Cairo)

## Summary

The active repository identity is Ecomark and the configured internal npm scope is `@ecomarkai`.
Ecomark-owned intelligence uses ECO, meaning **E-commerce Growth Operator**. Generic AI terminology and
third-party provider names remain unchanged. The repository directory is now
`/home/mapogo/Projects/ecomark`.

The current Git history begins with the consolidated Ecomark platform commit, so this report records the
verified resulting state rather than claiming a reviewable one-to-one rename diff for every original
file.

## Key resulting mappings

| Concern | Result |
|---|---|
| Product/company | Ecomark |
| Intelligence | ECO |
| Domain | `ecomark.ai` |
| Repository path | `/home/mapogo/Projects/ecomark` |
| npm packages | `@ecomarkai/platform`, `@ecomarkai/ui` |
| Python project | `ecomark-platform` |
| MCP servers | `ecomark-commerce`, `ecomark-media`, `ecomark-automation` |
| Internal ownership | `@ecomarkai` and Ecomark owner identifiers |
| Example database/bucket | `ecomark`, `ecomark-local` |

## ECO terminology

The primary README and AI repository guide define the permanent vocabulary:

- Ecomark is the platform.
- ECO is the intelligence inside it.
- ECO owns Ecomark-specific signals, insights, recommendations, reasoning, learning, forecasting,
  governed agents, and controlled actions.
- OpenAI and other provider names, generic AI infrastructure, and machine-learning terminology are not
  renamed.

## Compatibility-sensitive items

No deployed legacy environment variable, public route, event type, webhook name, signature header,
queue, bucket, Terraform state address, or external package was found in the active repository. The
repository still declares itself a non-running scaffold, so this is repository evidence rather than
proof that no out-of-repository consumer exists.

The valid configured npm scope is `@ecomarkai`; no assumption was made about `@ecomark/*` availability.
`CODEOWNERS` uses the confirmed repository owner handle `@ecomarkai`.

## Database and migrations

No historical migration implementation or product-branded table was found or rewritten. Migration
paths in the broad scaffold contain `.gitkeep` placeholders. Agent migration directories are not data
ownership: the approved target requires all migrations and persistence ownership to live behind
authorized core API domain modules. Removing or relocating those placeholder directories belongs to the
controlled ECO-001A structure migration.

## External contracts

The active OpenAPI example uses `https://api.ecomark.ai/v1`. Existing public route paths and operation
IDs were not changed. MCP IDs are Ecomark-branded internal scaffold identifiers; no live MCP sessions or
external consumers are documented.

## Remaining legacy occurrences

A case-insensitive repository scan for `growthos`, `growthai`, `growth-ai`, `growth_ai`, `growth os`, and
`growth ai` returned no active occurrences outside ignored dependencies/generated build directories.
The `growth-director` agent ID remains intentionally: “growth” is commerce-domain vocabulary, not a
legacy GrowthOS identifier.

## Validation

| Check | Result |
|---|---|
| Node.js / pnpm | 24.20.0 / 10.0.0 |
| `pnpm install --frozen-lockfile` | Passed |
| `pnpm lint` | Passed for two workspace packages; UI lint emitted a non-failing Next.js pages-directory warning |
| `pnpm typecheck` | Passed for two workspace packages |
| `pnpm test` | Passed, but only one `packages/ui` identity assertion ran; web and product tests are absent |
| `pnpm build` | Passed for the generated web dashboard; no core API or service runtime participates |
| `pytest` | No tests collected; exit code 5, so Python coverage is missing rather than passed |
| Scaffold validation | Passed for repository JSON/YAML and catalog/workflow references |
| Legacy-name scan | No matches |

## Remaining implementation work

- Complete ECO-001A target migration to `apps/web`, `services/core-api`, and `packages/contracts`.
- Add Docker joint startup and ECS/Fargate definitions.
- Replace agent/connector stubs and placeholder datasets with reviewed implementation and evidence.
- Add real frontend, backend, tenant-isolation, connector, E2E, security, and ECO evaluation suites.
- Verify external consumers before changing any identifier that later becomes deployed or persisted.

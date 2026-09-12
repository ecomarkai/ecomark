# Ecomark web dashboard

This is the Next.js App Router shell for the Ecomark merchant dashboard. The current page is generated starter content; product screens and the Account → Organization → Store → Shopify connection → Data sync → Dashboard → AI analysis journey are not implemented yet. Read [ARCHITECTURE.md](ARCHITECTURE.md), [DESIGN.md](DESIGN.md), [TESTING.md](TESTING.md), and [AGENTS.md](AGENTS.md) before implementation.

## Local development

From the repository root, use pnpm 10.0.0:

```bash
pnpm --filter web-dashboard dev
```

Open [http://localhost:3000](http://localhost:3000). The application source is under `apps/web-dashboard/src`.

Run the currently available checks from the repository root:

```bash
pnpm --filter web-dashboard lint
pnpm --filter web-dashboard typecheck
```

The dashboard does not yet have a runnable application test suite. See [TESTING.md](TESTING.md) for the required coverage and current gap.

## Framework references

- Use the installed documentation under `node_modules/next/dist/docs/` for this exact Next.js version.
- The public [Next.js documentation](https://nextjs.org/docs) is supplementary and may describe a newer release.

Deployment is not configured by this README. Follow the repository [release process](../../docs/delivery/RELEASE_PROCESS.md) after deployment infrastructure exists and is explicitly authorized.

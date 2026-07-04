# Vibework + MUI

A starter for going from **Figma design → real prototype** fast, with a full **MUI design system catalog in Storybook**.

Drop in a design, describe what you want, and iterate with an AI coding agent. Vibework is intentionally opinionated so you spend time on the product, not on wiring up tooling. The bundled Storybook mirrors [MUI](https://mui.com/material-ui/all-components/) — Foundations, Components, and Patterns — themed with this project's MUI theme.

This repo is a **[GitHub public template](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template)**. On GitHub, **Use this template** → **Create a new repository** copies everything here into a **new repo** of yours (not a fork). Clone that new repo to work locally.

<!-- MAINTAINER:START -->

Based on the DS-agnostic **[vibework](https://github.com/simoncrypta/vibework)** core. Generic stack files sync from tagged vibework releases — see [Syncing from core](#syncing-from-core).

<!-- MAINTAINER:END -->

---

## System requirements

- **Node.js** — LTS recommended (see [Vite+ docs](https://viteplus.dev/guide/))
- **pnpm** — installed automatically via `vp install` when using Vite+
- **[Vite+](https://viteplus.dev/guide/) (`vp`)** — unified CLI for install, dev, build, check, and tests

Install `vp` once on your machine:

**macOS / Linux**

```bash
curl -fsSL https://vite.plus | bash
```

**Windows** (PowerShell)

```powershell
irm https://vite.plus/ps1 | iex
```

---

## Quick start

1. On GitHub: **Use this template** → **Create a new repository**.
2. Locally:

```bash
git clone <your-new-repo-url>
cd <your-project>
vp install

# Run the app (RedwoodSDK on Cloudflare Workers)
vp dev

# Browse component stories (separate terminal)
vp run storybook
```

| What      | URL                                   |
| --------- | ------------------------------------- |
| App       | Vite dev server (see terminal output) |
| Storybook | http://localhost:6006                 |

When you're ready to deploy the app:

```bash
vp run release
```

If setup or packages look wrong, run `vp env doctor` and share the output.

---

## What it's for

- Turning Figma (or any design) into a clickable, deployable prototype quickly
- Browsing and validating MUI components, tokens, and page patterns in Storybook
- Experimenting with UI and flows without fighting config
- Pairing with an AI agent that already knows the stack (see [`AGENTS.md`](./AGENTS.md))

It is **not** a production app framework with every feature pre-built. It is a clean runway: React, MUI design system, edge deploy, one CLI, and a Storybook catalog.

---

## Stack

Everything is documented for agents in [`AGENTS.md`](./AGENTS.md). In short:

### Vite+ (`vp`)

[Vite+](https://viteplus.dev/guide/) is the unified toolchain. One global CLI (`vp`) covers install, dev, build, format, lint, typecheck, and tests.

| Command         | What it does                                      |
| --------------- | ------------------------------------------------- |
| `vp install`    | Install dependencies                              |
| `vp dev`        | Start the app dev server                          |
| `vp build`      | Production build                                  |
| `vp check`      | Format, lint, and typecheck                       |
| `vp test`       | Run tests                                         |
| `vp env doctor` | Diagnose setup / runtime / package-manager issues |

### RedwoodSDK

[RedwoodSDK](https://docs.rwsdk.com/) — React Server Components on [Cloudflare Workers](https://developers.cloudflare.com/workers).

| Path             | Role               |
| ---------------- | ------------------ |
| `src/worker.tsx` | Worker entry       |
| `src/client.tsx` | Client hydration   |
| `src/app/`       | Pages and document |

Deploy with `vp run release` (builds with Vite+ and deploys via Wrangler).

### MUI + Tailwind

UI comes from [MUI](https://mui.com/material-ui/) with Tailwind for layout and overrides — adapted for RedwoodSDK RSC.

- Docs: [mui.com/material-ui](https://mui.com/material-ui/all-components/)
- Global styles: `src/app/styles.css`
- Theme provider: `src/app/providers.tsx` (MUI `ThemeProvider`)
- Pages stay Server Components; interactive bits live in small `"use client"` islands

**Styling habit:** MUI components for UI; Tailwind utilities for layout and `className` overrides on wrappers.

### Storybook

[Storybook](https://storybook.js.org/docs) documents the full MUI catalog for this project. It does **not** ship to the app — only for local design-system browsing and agent reference.

| Command                       | What it does                                            |
| ----------------------------- | ------------------------------------------------------- |
| `vp run storybook`            | Dev server at http://localhost:6006                     |
| `vp run storybook-build`      | Static build → `storybook-static/`                      |
| `vp run generate:mui-stories` | Regenerate component/pattern stories from the generator |

Stories live under `src/storybook/mui/`. Generated files import MUI components directly. After upgrading `@mui/material`, run `vp run generate:mui-stories` and commit the diff.

---

## Project layout

```
src/
  worker.tsx              # Cloudflare Worker entry
  client.tsx              # Client hydration
  app/
    pages/                # Routes / screens — start here
    components/           # App UI + Storybook stories
    document.tsx          # HTML document shell
    providers.tsx         # Theme (MUI)
    styles.css            # MUI + Tailwind
  storybook/mui/          # Design system catalog (Storybook only)
    foundations/          # Hand-authored token & layout docs
    generated/            # Generated component + pattern stories
    shared/               # Story helpers
.storybook/               # Storybook config
```

<!-- MAINTAINER:START -->

```
VARIANT_OWNED.json        # Paths protected from core sync
scripts/
  sync-to-variant.mjs
  build-starter.mjs
```

## Maintainer: core sync

See [Syncing from core](#syncing-from-core). Publish template users a stripped tree:

```bash
vp run build:starter
```

Set GitHub **default branch** to **`starter`**.

## Syncing from core

From a clone of **[vibework](https://github.com/simoncrypta/vibework)**:

```bash
# Preview changes
vp run sync:variant -- ../vibework-mui --dry-run

# Apply sync from current HEAD
vp run sync:variant -- ../vibework-mui

# Apply sync from a tagged core release
vp run sync:variant -- ../vibework-mui --ref v0.2.0
```

`VARIANT_OWNED.json` protects MUI-specific paths — those files are never overwritten. After syncing, run `vp check && vp test` here.

<!-- MAINTAINER:END -->

---

## Other templates

| Template                                                              | What you get                                      |
| --------------------------------------------------------------------- | ------------------------------------------------- |
| **[vibework](https://github.com/simoncrypta/vibework)**               | Core stack + Tailwind — bring your own components |
| **[vibework-astryx](https://github.com/simoncrypta/vibework-astryx)** | Astryx design system + full Storybook catalog     |
| **vibework-mui** (this repo)                                          | MUI design system + full Storybook catalog        |

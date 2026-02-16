# MLX Consulting Clone — Project Instructions

## What This Is

A self-hosted Next.js 15 recreation of the MLX Consulting website (originally at `mlxconsulting.com`, powered by Framer at `my-work.life`).

## Stack

- **Framework**: Next.js 15 (App Router) + React 18
- **Styling**: Tailwind CSS 3.4.17 (NOT v4)
- **Animations**: Framer Motion 11.15.0
- **Fonts**: Inter (primary), Geist (stats), Fragment Mono (mono)
- **Smooth scroll**: Lenis 1.1.18
- **Icons**: Phosphor Icons 2.1.7

## Design System

| Token | Value |
|-------|-------|
| Cream background | `#fffbf5` |
| Dark text | `#21201b` |
| Accent orange | `#ff833b` |
| Teal dark | `#1f3630` |
| Desktop breakpoint | >=1200px |
| Tablet breakpoint | 810-1199px |
| Mobile breakpoint | <=809px |

## Key Patterns

- All visible sections use `<ScrollReveal>` from `components/animations/ScrollReveal.tsx`
- Two animation variants: `scaleIn` (1.1->1.0) and `slideUp` (y:50->0), both 3s spring
- Root layout provides Header + Footer — pages only render their content
- Use `generateMetadata()` for per-page SEO

## Deployment

- **VPS**: Ubuntu 24.04 at `74.208.250.22`
- **Path**: `/var/www/mlx-consulting`
- **PM2**: process `mlx-consulting`, port 3003
- **Staging**: `https://150reasons.com`
- **GitHub**: `github.com/linczyc-MLX/mlx-consulting`, branch `main`
- **Deploy**: `cd /var/www/mlx-consulting && git pull && npm install && npm run build && pm2 restart mlx-consulting`
- If `git pull` fails: `git checkout -- . && git clean -fd` then pull

## Agent Architecture

Three agents work in parallel via tmux (launched with `./mlx-dev.sh` from project root):

| Agent | File | Scope |
|-------|------|-------|
| `agent-media` | `.claude/agents/agent-media.md` | Portfolio galleries, video embeds, Google Maps, PDF brochure |
| `agent-pages` | `.claude/agents/agent-pages.md` | 8 service detail pages, routing, inter-page navigation |
| `agent-polish` | `.claude/agents/agent-polish.md` | Contact forms, responsive QA, SEO, performance, deployment |

Agents should NOT overlap scope. If you need work from another agent's domain, leave a TODO comment and note it in your commit message.

## Rules

- Always run `npm run build` before committing — catch TypeScript errors early
- Use Tailwind only — no CSS modules or inline styles
- Keep bundle size minimal — avoid heavy new dependencies
- Commit after each completed task with descriptive messages
- Check the original site at `https://my-work.life/` for visual reference

# MLX Consulting — Self-Hosted Clone

Recreated from [mlxconsulting.com](https://mlxconsulting.com) (originally hosted on Framer at my-work.life).

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://motion.dev/)
- **Icons**: [Phosphor Icons](https://phosphoricons.com/)
- **Smooth Scroll**: [Lenis](https://lenis.darkroom.engineering/)
- **Fonts**: Inter, Geist, Fragment Mono

## Getting Started

### Prerequisites

- Node.js 20+
- npm or pnpm

### Setup

```bash
# Install dependencies
npm install

# Download Geist font
# Get GeistVF.woff2 from https://vercel.com/font
# Place it in /public/fonts/GeistVF.woff2

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

### Build & Deploy

```bash
# Production build
npm run build

# Start production server
npm start
```

### Deploy to Vercel

```bash
npx vercel
```

## Project Structure

```
clone_scaffold/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx                # Root layout (Header + Footer + SmoothScroll)
│   ├── page.tsx                  # Homepage
│   ├── globals.css               # Design tokens + global styles
│   ├── about/page.tsx
│   ├── services/
│   │   ├── page.tsx              # Services hub
│   │   ├── d-velop360/page.tsx   # + 7 more service pages
│   │   └── ...
│   ├── portfolio/page.tsx
│   ├── projects/
│   │   ├── page.tsx              # Project listing
│   │   └── .../temp/page.tsx     # Project detail pages
│   ├── videos/page.tsx
│   ├── contact-us/page.tsx
│   ├── privacy-policy/page.tsx
│   └── terms/page.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx            # Sticky nav + Services mega dropdown
│   │   ├── Footer.tsx            # Multi-column footer
│   │   └── SmoothScrollProvider.tsx
│   ├── sections/
│   │   ├── Hero.tsx              # Full-bleed hero section
│   │   └── StatsBar.tsx          # Stats counter cards
│   └── animations/
│       └── ScrollReveal.tsx      # Scroll-triggered animation wrapper
├── public/
│   ├── images/                   # Downloaded site images (add manually)
│   └── fonts/                    # Geist font file (add manually)
├── package.json
├── tsconfig.json
├── postcss.config.mjs
├── next.config.ts
└── README.md
```

## Design Tokens

All design tokens are defined in `app/globals.css` using Tailwind's `@theme` directive:

| Token | Value | Usage |
|-------|-------|-------|
| `--color-cream` | `#fffbf5` | Page background |
| `--color-dark` | `#21201b` | Primary text |
| `--color-accent-orange` | `#ff833b` | CTAs, buttons |
| `--font-inter` | Inter | Body text, headings |
| `--font-geist` | Geist | Stat numbers |

See `../design-tokens.md` for the complete token inventory.

## Animations

Two core scroll-triggered animations (matching the original Framer site):

1. **Scale In**: `scale: 1.1 → 1.0` — 3s spring, no bounce (hero images)
2. **Slide Up**: `y: 50px → 0` — 3s spring, no bounce (text/cards)

Usage:
```tsx
import { ScrollReveal } from "@/components/animations/ScrollReveal";

<ScrollReveal variant="scaleIn">
  <img src="..." />
</ScrollReveal>

<ScrollReveal variant="slideUp" delay={0.2}>
  <h2>Heading</h2>
</ScrollReveal>
```

## TODO / Next Steps

- [ ] Download all images from framerusercontent.com and place in `/public/images/`
- [ ] Download Geist font and place in `/public/fonts/`
- [ ] Implement remaining homepage sections (How We Work, Gallery, Services, FAQs)
- [ ] Build out inner page content (About, Services detail, Portfolio, etc.)
- [ ] Add interactive accordion component for FAQs and differentiators
- [ ] Add tabbed component for process steps and portfolio categories
- [ ] Implement contact form with server action or Formspree
- [ ] Add Google Maps embed on contact page
- [ ] Responsive QA at 375px, 810px, 1200px, 1440px
- [ ] SEO: add per-page metadata, sitemap, structured data
- [ ] Performance: optimize images, code-split animations
- [ ] Configure mlxconsulting.com DNS to point to Vercel

## Reference Docs

All audit documentation is in the parent `mlxconsulting_clone_audit/` folder:

- `site-map.md` — Complete page/route inventory
- `link-manifest.json` — All links and navigation structure
- `design-tokens.md` — Colors, typography, spacing, component styles
- `tech-stack.md` — Technology analysis
- `assets-manifest.csv` — All images, fonts, scripts cataloged
- `interactions.md` — Animations and interactive behaviors
- `responsive-spec.md` — Breakpoints and responsive layout rules
- `replication-plan.md` — Full implementation roadmap
- `test-plan.md` — QA and acceptance criteria

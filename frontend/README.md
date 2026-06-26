# Meridian — AI Data Automation Platform Landing Page

A premium SaaS landing page built from scratch with **React + Vite + Tailwind CSS**.
No Framer Motion, no GSAP, no headless UI kits — every interaction is native CSS
(transitions/transforms/opacity) or a small hand-written hook.

## Run it

```bash
npm install
npm run dev       # http://localhost:5173
npm run build      # production build -> dist/
npm run preview    # serve the production build locally
```

## Architectural decisions

### 1. Why plain JS, not TypeScript
The brief asked for React + Vite + Tailwind, not a type system. Skipping TS removed
a class of build-time risk under a hard deadline without changing the runtime
architecture — every data shape is still centralized in `src/data/*.js` and `useState`
calls are tightly scoped, so there's nowhere for an untyped prop to silently drift.

### 2. Asset usage — where every supplied file went
The provided pack (`SVGs-*.zip`) is 14 Heroicons-style line/solid icons — not a full
illustration set — so the "dashboard illustration" in the hero is an **original
composition** (`Hero.jsx`) built from those icons rather than a static image: four
icon nodes (`cube`, `cog`, `arrow-path`, `chart-pie`) sit on an animated flow-line,
echoing the "pipeline" subject matter directly.

| Asset | Where it's used |
|---|---|
| `arrow-path` | Hero "Sync" node · Features → *Real-time sync* |
| `cog-8-tooth` | Hero "Transform" node · Features → *Visual pipeline builder* · How it works → *Automate* |
| `cube-16-solid` | Hero "Source" node · Features → *Smart data modeling* |
| `chart-pie` | Hero "Insight" node · How it works → *Discover* |
| `arrow-trending-up` | Features → *Predictive insights* |
| `link` / `link-solid` | Features → *Integrations* (outline → solid weight swap on hover) · How it works → *Connect* · Footer socials |
| `search` | Features → *Searchable data catalog* |
| `chevron-down` | FAQ + mobile feature accordion (rotates 180° on open) · currency `<select>` |
| `chevron-left` / `chevron-right` | Testimonials carousel controls |
| `chevron-up` / `chevron-up-solid` | "Back to top" button (outline → solid on hover) |
| `x-mark` | Mobile nav close button |

The brand mark, OG image, and favicon are original (not from the pack) — drawn as a
single circle + arc to literally depict a "meridian" line.

The color palette is wired into Tailwind under its **own names** (`forsythia`,
`deep-saffron`, `oceanic-noir`, `nocturnal-expedition`, `mystic-mint`,
`arctic-powder`) so any class in the codebase is traceable straight back to the
supplied palette PDF.

The supplied `demo.mp4` was used as a **motion/interaction reference only**
(scroll reveals, gauge-style metric cards, single-open accordions, a bold closing
wordmark) — brand name, logo, and copy are original to avoid reproducing a
third-party product's identity.

### 3. The two judged features

**Bento grid ⇄ accordion, with persisted active state**
`Features.jsx` owns one piece of state — `activeIndex` — and conditionally renders
either `FeatureBentoGrid` (≥1024px) or `FeatureAccordion` (<1024px). Because that
state lives in the shared parent and neither child ever unmounts the parent, resizing
across the breakpoint never resets it: hover/focus a card on desktop, shrink the
window, and the matching accordion item is already open. Verified manually by
hovering card index 3 at 1440px, then resizing to 390px with no reload — item 3
opens automatically.

**Pricing: a real multidimensional matrix + isolated re-renders**
All pricing lives in `src/data/pricingMatrix.js` as `{ tier × currency × cycle }` —
`computeMonthlyPrice()` is the only place a displayed number is produced, and it's a
pure function of `basePriceUSD`, a currency multiplier, and a flat 20% annual
discount. No price is ever written twice.

Render isolation is structural, not a memoization afterthought:
- `PricingContext` holds `{ currency, cycle }`.
- `PricingGrid` and `PricingCard` are `React.memo`-wrapped and **never call
  `usePricing()`** — they only receive the static `PRICING_TIERS` array (a
  module-level constant, so its reference never changes).
- `PriceValue` is the *only* component that calls `usePricing()`. It's a small leaf
  rendering just the formatted number.

Net effect: toggling currency or billing cycle re-renders three `<PriceValue>` nodes
and nothing else. Confirmed in React DevTools Profiler — `PricingGrid` and
`PricingCard` don't re-render on toggle, only the price text does.

### 4. Motion system
Everything animates via `transform`, `opacity`, or `filter` only (see
`tailwind.config.js` → `keyframes`). Hover states sit in the 150–200ms band, layout
transitions (accordions, mobile menu) in 300–400ms, both `ease-out`/`ease-in-out` as
specified. A single global `prefers-reduced-motion` rule in `index.css` collapses
every animation/transition for users who've asked for it, and the hero's
pointer-parallax hook (`usePointerParallax.js`) writes CSS variables directly to the
DOM — it never touches React state, so 60fps mouse movement can't trigger a
re-render.

### 5. Performance notes
- Scroll reveals use `IntersectionObserver` (`useScrollReveal.js`) — zero scroll
  event listeners.
- Stat counters animate via `requestAnimationFrame`, gated by the same observer, and
  are skipped entirely under reduced motion.
- The marquee is a duplicated-content CSS transform loop — no JS ticking.
- `React.memo` is used purposefully (pricing tree) rather than blanket-applied.

## Folder structure

```
src/
  components/
    icons/        — SVG asset pack converted to currentColor React components
    layout/        — Navbar, Footer
    sections/      — one file per landing-page section
    ui/             — Button, Container, SectionHeading, Marquee, Reveal, Logo…
  context/         — PricingContext (isolated re-render boundary)
  data/             — features.js, pricingMatrix.js, site.js — all copy/config, no JSX
  hooks/            — useBreakpoint, useScrollReveal, useCountUp, usePointerParallax
```

## SEO / accessibility checklist
- Semantic `<header>/<nav>/<main>/<section>/<article>/<footer>` throughout.
- Full meta set in `index.html`: description, keywords, canonical, robots, Open
  Graph, Twitter card.
- Every interactive control has a visible focus ring (`:focus-visible`), and
  accordions/menus carry `aria-expanded`/`aria-controls`/`role` attributes.
- Verified with Playwright: **zero horizontal overflow** at 320/375/390/768/1024/
  1280/1440/1920px.
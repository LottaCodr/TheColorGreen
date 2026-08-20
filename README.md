# The Colour Green — TCG

A monochrome editorial landing site for **TCG (The Colour Green)**, a sustainable-fashion events brand. The UI is implemented pixel-faithfully from the three Figma design mockups in [`app/design_mockup/`](app/design_mockup) — including the black side rails, gray model panels, stacked *THE COLOUR / GREEN* hero headline, brand strip, *E for Effort, E for Event*, *Experience Our Event*, testimonials, newsletter and footer.

## Stack

- **Vite 6** + React 19 + TypeScript
- **Tailwind CSS v4** (via `@tailwindcss/vite`, theme tokens in `src/index.css`)
- React Router 7 (multi-page), Framer Motion (scroll/animation), Lucide icons
- Fonts: Archivo Variable (sans) + Playfair Display Variable (serif brand wordmarks)

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # serve the production build
```

## Pages

| Route             | Page                                                        | Mockup |
| ----------------- | ----------------------------------------------------------- | ------ |
| `/`               | Home — hero, brands, E for Effort, Experience, testimonials, newsletter | `Group 1000001757.png` |
| `/events`         | Event gallery — hero photo, 6 event cards                    | `Group 1000001758.png` |
| `/events/:slug`   | Event detail — ABOUT THE EVENT, EXPERIENCE MORE EVENTS       | `Group 1000001759.png` |
| `/contact`        | Contact page (the navbar links to it, so a page was added)   | — |
| `*`               | 404                                                          | — |

## Design system (sampled from the mockups)

- **Palette:** white `#fff`, ink `#484848` (headings), body `#6b6b6b`, mute `#8d8d8d`, faint `#9e9e9e`, panel `#e0e0e0` (hero side panels), accent red `#ff4646` (“Experience More” links), black buttons with sharp corners.
- **Signature elements:** full-height black side rails on the homepage (≥1544px viewports), grayscale photography that colourises on hover, borderless cards, white “Subscribe Now” button with black border, borderless email input.

## Animations (researched & implemented)

Chosen per 2025/2026 landing-page research: subtle, purposeful motion that uses **transform/opacity only**, with full `prefers-reduced-motion` support (`MotionConfig reducedMotion="user"` + CSS fallback).

1. Hero — editorial word-by-word headline reveal, staggered thumbnail entrances, scroll-linked parallax on the model panels.
2. Brand strip — infinite marquee, pauses on hover, soft edge fades.
3. Scroll reveals — fade-up, once-only, staggered card entrances (IntersectionObserver-based `whileInView`).
4. Play buttons — pulsing ring micro-interaction (hero thumbs + event film).
5. Cards & photos — grayscale→colour + slow zoom on hover; red “Experience More” arrow nudges diagonally.
6. Buttons — hover inversion (black↔white/border), tap-scale feedback.
7. Navbar — shrinks on scroll, hairline + 2px black scroll-progress bar, animated mobile menu.
8. Page transitions — 300ms fade/slide between routes.
9. Forms — underline border animates to black on focus; “Subscribed ✓” success micro-interaction.

## What the mockups were missing (added after research)

- Contact page (the navbar's `Contact` link had no destination)
- Responsive navigation for mobile/tablet (hamburger + animated overlay)
- SEO/meta (description, OG tags, per-route titles), favicon, skip-link, aria labelling
- Hover/focus states, keyboard accessibility, reduced-motion fallbacks
- Real copy replacing the placeholder lorem text (same layout rhythm)
- A 404 page, lazy-loaded imagery, and optimised WebP assets (25 MB PNG → 1.9 MB WebP)

## Assets

All photography in `public/images/` was AI-generated for the site (16 images: models, event film posters, avatars, gallery/event heroes, 6 event cards) and converted to WebP.

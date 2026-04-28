# UI Kit — Bobochic Paris · marketing site

A high-fidelity, component-level recreation of the Bobochic Paris store-front based on the Figma `/Template` and `/Logos` pages. This kit is **cosmetic** — components look pixel-right but the state is faked.

## What's in here

- `index.html` — the full mount. Boots a homepage, lets you click through the category nav, open the NIHAD PDP, add to cart, and open a mini-cart drawer.
- `Header.jsx` — 4-bar header: top bandeau, search row, category nav, sub-nav.
- `Footer.jsx` — dark 4-column footer with newsletter + payment marks.
- `Breadcrumb.jsx`, `CategoryPill.jsx`, `Button.jsx`, `Flag.jsx`, `IconButton.jsx`.
- `Hero.jsx` — full-bleed homepage hero with protection gradient.
- `ProductCard.jsx` — canonical sofa card with flag + heart + sale price.
- `ProductGrid.jsx` — responsive 4-up grid.
- `PdpHero.jsx`, `PdpGallery.jsx`, `PdpConfig.jsx`, `PdpStory.jsx` — PDP blocks for NIHAD.
- `MiniCart.jsx` — right-side slide-in cart drawer.
- `BenefitStrip.jsx` — truck · guarantee · return · SAV strip.

## Sources

- `/Template/Template` — page shell (node `2843:29720`)
- `/Template/external/StateDefaultSizeLaptop` — 4-bar header
- `/Couleurs/Usabilit-Doc` — product card reference (NIHAD copy lives here)
- Voice: paragraphs from `/Couleurs/Usabilit-Doc` and `/Typographies/Usabilit-Doc`.

## Conventions

- Buttons have **sharp corners** (`--radius-button: 0`).
- Promo flags have **sharp corners** (`--radius-flag: 0`).
- Cards have `--radius-lg` (16 px).
- Primary text color is `--color-neutral-950` (#0B0B0C).
- Sale price is `--color-red-800` (#A40104). Promo flag fill is also `--color-red-800` (only `red-200` + `red-800` are used).
- Default page font is `.text-md-regular` — Hanken 400 · 14/20.

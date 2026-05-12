---
name: bobochic-design
description: Use this skill to generate well-branded interfaces and assets for Bobochic Paris (Meridian design system), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping a French mid-market furniture e-commerce in the Bobochic visual language.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick map

- `README.md` — full company context, content tone, visual foundations, iconography rules
- `colors_and_type.css` — the only stylesheet you should ever need; CSS custom properties for the entire palette + type scale + spacing + radius + elevation, plus semantic class hooks (`.h1`, `.text-md`, `.btn-primary`, etc.)
- `tokens.json` — the same tokens in JSON form, for use in JS or for re-export
- `fonts/` — Hanken Grotesk (variable, italic) — the ONLY brand typeface
- `assets/` — logos, icons (184 hairline 24px SVGs), payment marks
- `preview/*.html` — atomic specimen cards (color, type, spacing, components)
- `ui_kits/marketing_site/` — click-thru recreation of the bobochicparis.com store: `Header.jsx`, `ProductCard.jsx`, `PDP.jsx`, `MiniCart.jsx`, etc., wired up in `index.html`

## House style — the 5-second version

1. **Type** is always Hanken Grotesk. Display weights up to 119 px, body 16 px / line-height 1.5, links underlined.
2. **Color** is monochrome forest-green + warm cream + paper white. `--green-primary` (#1F4837) is the only brand accent. Red (#D8232A) is reserved for promo flags / sale prices. Avoid bluish-purple gradients entirely.
3. **Corners** are mostly **sharp** (radius 0). Soft surfaces use radius 8 or 16. Buttons are SHARP. Flags are SHARP.
4. **Shadows** are gentle, zero-offset, ~25 px blur — never harsh.
5. **Voice** is French, vouvoiement (`vous`), title case for product names, no emoji, prices in EUR with non-breaking space (`1 099 €`).

## When in doubt

- Copy a snippet from a `preview/*.html` card or a `ui_kits/marketing_site/*.jsx` component rather than inventing.
- Iconography: pull from `assets/icons/` first (24×24, currentColor, 1.5 px stroke). Don't draw your own.
- Need a font glyph the variable file doesn't cover? Fall back to system-ui — never to a different brand.

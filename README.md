# Meridian Design System

_Le design system du site e-commerce **Bobochic Paris**._

---

## 1 · Company & product context

**Bobochic Paris** is a French furniture e-commerce brand best known for convertible corner sofas, beds, mattresses and soft furnishings for the mid-market. The voice is **élégant, chaleureux, disruptif** — elegant, warm, a bit disruptive of the stuffy French furniture tradition. Product merchandising leans into story-telling around craft (tapissiers européens, velours côtelé, finitions précises) rather than specs.

The system takes its name from the project shell ("Meridian") but is built straight from the Bobochic Paris Figma styles file. Think of **Meridian = Bobochic's in-house design language** — the internal/operating name for what becomes the store-front.

Representative products in the source material:
- **NIHAD** — _Canapé d'angle réversible convertible coffre_, 1 199 € → **1 099 €** (−10 %, non remboursable). Angle gauche, dimensions 160×200, coloris Beige.
- Generic sofas in velours côtelé ("La noblesse du velours côtelé").
- Co-branded universe: Bobochic × Conforama / DODO / Samsung / Teulat / Artiga / Bloon Paris / Brût / OFF Seine Paris.

Sub-brands present in the Figma:
- **Bobochic Paris** — the primary commerce store (most assets).
- **Bobochic** — short form, e.g. for app icons and condensed horizontal layouts.
- **Bobo** / **BoboXS** — mobile-first lockup.
- **Bobochic Admin** / **Bobochic Blog** — internal tools lockup.
- **Bobochicailab** — an experimental AI lab sub-brand.

### Surfaces this system has to cover
1. **Marketing site** — bobochicparis.com (desktop + tablet + mobile). The Figma `/Template` page shows all three responsive states.
2. **Product list / grid** — category pages with filter rails.
3. **Product detail (PDP)** — the NIHAD page is the canonical example.
4. **Admin / back-office** — referenced through "Bobochic Admin" logo lockup.
5. **Blog / editorial** — referenced through "Bobochic Blog" logo lockup.

Breakpoints: 393 (iPhone 16), 576, 768, 834 (iPad Pro 11"), 1536 (laptop), 2560 (2K).

---

## 2 · Sources

| What | Where |
| --- | --- |
| Figma file | `"Styles (Bobochic).fig"` (mounted virtually) |
| Color token frame | `/Couleurs/Usabilit-Doc`, node `2958:7913` |
| Type token frame | `/Typographies/typography`, node `2320:7740` |
| Spacing frames | `/Espacements` (52 children, 2 → 360 px) |
| Radii | `/Bords/radius`, node `2330:21481` |
| Elevation | `/Effets/elevation`, node `2407:13575` |
| Blur | `/Effets/blur`, node `2407:13576` |
| Breakpoints | `/Breakpoints/Breakpoints`, node `2407:13577` |
| Logos | `/Logos` (10 variants, see §7) |
| Template (responsive shells) | `/Template/Template`, node `2843:29720` |
| Uploaded fonts | `fonts/HankenGrotesk-VariableFont_wght.ttf`, `fonts/HankenGrotesk-Italic-VariableFont_wght.ttf` |

Reader does not need access — values are lifted into files in this repo.

---

## 3 · Content fundamentals

> **Tone** — élégant, chaleureux, disruptif.
> **Language** — French (fr-FR), **never** mixed with English on customer-facing surfaces.

### Voice traits observed in the Figma copy
- **Nous / vous.** Copy uses "nous" for the brand and "vous" for the customer. It is polite and warm without being overly formal. _"Nous avons collaboré avec les meilleurs tapissiers d'Europe."_ _"Nous vous proposons un tissu…"_
- **Editorial paragraphs, not bullets.** Product stories read like a short magazine column — one compound French sentence introducing a craft problem, a second explaining how Bobochic solved it. Specs (dimensions, angle, coloris) live in a separate **Frame1099** key/value list _below_ the editorial, not inside it.
- **Sentence case for titles.** Headlines are written in natural sentence case with a capital only on the first word and proper nouns. _"La noblesse du velours côtelé"_, _"Voir les déclinaisons"_, _"Nouvelle collection"_.
- **Small-caps / ALL CAPS only for eyebrows and subtitles.** The `$subtitle-md` token is uppercase with 3 % letter-spacing: _"LE MEILLEUR TISSU"_. Product name on the card (`NIHAD`) is ALL CAPS at body-size.
- **Utilitarian CTAs.** Buttons are short verb phrases: _"Voir les déclinaisons"_, _"Ajouter au panier"_, _"Rechercher…"_. No marketing puff. No exclamation marks.
- **Numbers use French conventions.** Space thousands separator and comma decimal: **1 199 €**, **1 099 €**. Percent glued to number with minus sign: **-10%**. Dates spelled-out: _"entre le 12 Janvier et le 25 Février"_.
- **No emoji, no exclamation marks, no slang.** The brand stays composed even in promo and error states. Disruption comes from layout and scale, not exclamation.
- **Accent on craft nouns.** _noblesse_, _difficile à travailler_, _finitions homogènes_, _tapissiers_, _merveille_. Adjectives lean sensory (noble, élégant, moelleux, chaleureux).
- **Benefit strip / top bandeau.** Short, declarative: _"Bénéficiez de la livraison différée."_

### Specific examples from the source
| Where | Copy |
| --- | --- |
| Product title | _"NIHAD"_ (ALL CAPS, Hanken Grotesk Bold) |
| Product eyebrow | _"LE MEILLEUR TISSU"_ |
| Product story | _"La noblesse du velours côtelé"_ |
| Body paragraph | _"Noble et élégant, le velours côtelé n'en reste pas moins un tissu extrêmement difficile à travailler. Un défi donc pour concevoir un canapé aux finitions homogènes et précises. C'est pourquoi nous avons collaboré avec les meilleurs tapissiers d'Europe. Ainsi, nous avons pu vous proposer un tissu aux chaleureuses tissus qui épouse à merveille la structure du canapé."_ |
| CTA | _"Voir les déclinaisons"_ |
| Delivery line | _"Date de livraison estimée entre le 12 Janvier et le 25 Février"_ |
| Badge / guarantee | _"Garantie tâches, Brûlures et déchirures 1 an"_ |
| Bandeau top | _"Bénéficiez de la livraison différée."_ |
| Category nav | _Soldes_ • _Nouvelle collection_ • _Avant première_ • _Meilleures ventes_ • _Services_ • _Espace Pro_ |

### Writing rules (for new copy)
- Stay in French. If you need to borrow (e.g. "AI Lab"), keep it brand-scoped and capitalised.
- Prefer one rich sentence over a list of features.
- Titles: sentence case. Eyebrows & subtitles: UPPER CASE + 3 % tracking.
- Prices always in the form `1 099 €` with a non-breaking space.
- Use en-dash `–` for ranges, `-10%` with the minus for promos.
- No emoji outside internal tools; no exclamation marks.

---

## 4 · Visual foundations

### Overall mood
A **cool, near-monochrome** system — white surfaces, near-black type, a single disruptive red for sale / error / critical. Imagery carries the warmth: photography is lit warm (beige, taupe, cognac sofas on grey floors, soft daylight) and is always **full-bleed** on the hero, gently **protected** with a 20 % white gradient when text overlays it. No painted backgrounds, no decorative illustrations, no gradients elsewhere.

### Colors
- **Neutrals are the backbone.** Roughly 90 % of the UI is `--neutral-0` through `--neutral-900`. Text defaults to `#0B0B0C`, surfaces to pure white, wash to `#F2F2F2`, hairlines to `#D9D9D9`.
- **Red is disruptive, not decorative.** Use **only** `--red-200` (soft bg) and `--red-800` (`#A40104`, foreground / accent / sale price / promo flags / errors). All other red steps exist as primitives but are not used in components.
- **Green / orange / yellow** — strictly functional feedback. Each colour exposes **only two steps** in components: `200` (soft bg) and `900` (green) / `700` (orange) / `600` (yellow) for the foreground / accent. Other steps exist as primitives but are not used.
- WCAG 2.2 is explicit: every colour step carries a contrast badge (AAA / AA / A) in the Figma; when in doubt, use `--neutral-700` or darker for body text on white.

### Typography
- **Hanken Grotesk** is the primary family for everything customer-facing — product titles, headings, body, CTAs. Variable weight 100 → 900.
- **Jost** is kept as a legacy display fallback for marketing artefacts that have not yet been migrated.
- **Inconsolata** is used only to render design-token names inside chips (never in product UI).
- Three scales: **Display** (marketing hero, 125 → 48 px), **Title** (page titles, 49 → 20 px), **Subtitle** (UPPER eyebrows, 16/12 px with 3 % tracking).
- Titles: Bold 700, letter-spacing `-0.01em`. Headings feel tight and confident.
- Body: Regular 400, line-height generous (`1.5`). Never italicise body.

### Spacing
- **4 px base grid** with 2 px micro steps. The Figma spacing page exposes the full ladder: **2, 4, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96, 104 … 360**.
- Component paddings in the Figma frequently use **8 / 16 / 24**. Section paddings use **64** on laptop, **32** on tablet, **16** on mobile (these are the page gutters).
- Type-to-container padding follows an 8 px rhythm (e.g. `padding: 2px 8px 2px 8px` on chips).

### Backgrounds & imagery
- **Full-bleed product photography** on hero. Mobile shows a 4:3 photo occupying the top 50 % of the viewport; laptop shows a breadcrumb + title + subtitle on white _above_ the hero rail.
- **Protection gradient** when text overlays imagery: `linear-gradient(rgba(255,255,255,0.2), rgba(255,255,255,0.2))` or a soft radial white for readability.
- No hand-drawn illustrations, no repeating patterns, no textures, no noise.
- Backdrop blur (`$blur-sm` = 15 px, `$blur-lg` = 80 px) is used on **sticky headers** and **modal overlays** — glass bars are encouraged over opaque ones when a photo scrolls underneath.

### Animation & motion
- Minimal. Fades (150 ms ease-out) for mount, smooth `transform` scale/translate (200 ms ease) on hover — never bounces, never back-easing.
- Scroll behaviour: smooth is fine but scroll-jacking is not.
- Skeletons use a gentle 1.4 s shimmer on `--neutral-100` / `--neutral-150`.

### Hover / press / focus
- **Hover** — darken by one step on the neutral scale (`--neutral-900` → `--neutral-800`), or lift elevation from `--elevation-1` → `--elevation-2`. Cards: shift `translateY(-2px)` + elevation bump.
- **Press** — remove elevation, `transform: scale(0.98)` — 60 ms.
- **Focus** — 2 px outline `var(--color-border-neutral-7)` with `outline-offset: 2px`. Never coloured unless the element is already red/green.
- **Disabled** — reduce opacity to 0.4, background to `--neutral-100`, text `--neutral-400`.

### Borders
- Default hairline: `1px solid var(--color-border-neutral-5)` (`#D9D9D9`).
- Inputs at rest: `1px solid #D9D9D9`, focus: `1px solid #0B0B0C` (no colour shift).
- Product cards: **no border**, just elevation.
- Error fields: `1px solid var(--color-border-red-dark)`.

### Radii
- `0` for full-bleed hero sections.
- `4 px` on chips and badges.
- `8 px` on inputs, dropdowns, category cards.
- `10 px` on primary buttons (per `/Template` — unusual but intentional).
- `16 px` on product cards, promo cards, modals.
- Never over `32 px` on rectangles; circular uses `9999px`.

### Elevation (shadow system)
Single-layer soft shadow, always black with low opacity, **25 px blur, zero offset**. Three stops only:
- `--elevation-1` — card default: `0 0 25px rgba(12,12,13,0.05)`
- `--elevation-2` — hover card: `0 0 25px rgba(12,12,13,0.10)`
- `--elevation-3` — modal / popover: `0 0 25px rgba(12,12,13,0.15)`
- Button rest: `0 1px 4px rgba(12,12,13,0.08)` (tiny tactile lift).

### Transparency & blur
- Transparency reserved for **glass nav bars** and **image-protection gradients** (20 % white, 40 % white for dark imagery).
- `backdrop-filter: blur(15px)` for sticky headers; `blur(80px)` for full-screen modals.
- Never use translucent solid-colour panels — either it's white/solid, or it's glass over imagery.

### Card anatomy
A canonical card = `16 px` radius, white fill, `--elevation-1`, **no border**, 24 px internal padding, 16 px gap between blocks. Images inside cards share the card's rounding on the **image side only** (top or left); the content side remains sharp.

### Layout rules
- **Fixed header** (top bandeau + nav) — typical height **208 px** on laptop, **220 px** on iPad, a two-row + status-bar stack on mobile.
- **Sticky "scroll-to-top"** button, `64 × 64`, bottom-right, `--elevation-2`.
- **Breadcrumb** sits under the header (`Accueil > Page 1 > Page 2`), left-aligned, 12 px body, neutral-6 separators.
- Page gutters: **64 px** on laptop, **32 px** on iPad, **16 px** on mobile. Content max-width ≈ 1408 px.

### Iconography vibe
Hairline, geometric, 24 × 24 in a 24 × 24 frame. See §6 for the full doctrine.

---

## 5 · Index of the system

| Path | What |
| --- | --- |
| `colors_and_type.css` | CSS custom properties: colors, type, radii, elevation, spacing, semantic classes. |
| `README.md` | This file — context, content rules, visual foundations, iconography. |
| `SKILL.md` | Agent-invokable skill manifest. |
| `fonts/` | Hanken Grotesk variable (normal + italic). |
| `assets/` | Logos, icons, hero imagery. |
| `preview/` | Per-concept preview cards rendered in the Design System tab. |
| `ui_kits/` | Hi-fi reusable kit per product surface — see below. |

### UI kits
- `ui_kits/marketing_site/` — Bobochic Paris store-front on laptop. `index.html` mounts a working e-commerce experience: top bandeau, search header, category nav, hero, editorial strip, a shoppable PDP with coloris swatches and a slide-in mini-cart. Built from React + the CSS tokens; all copy is French. Split into `Atoms.jsx` (icons, buttons, flags, benefit strip, logo), `Structure.jsx` (header, footer, hero, category tiles, product card), `PDP.jsx` (PDP + mini-cart + sample product data) and `App.jsx` (routing + composition).

---

## 6 · Iconography (detailed)

Bobochic uses a **thin-line, geometric** icon family drawn in a **24 × 24 frame** with paths hairline-thin (~1.2 px stroke-weight equivalent when rendered from filled SVG paths). Fills are always `currentColor` — icons inherit foreground colour from their parent.

### Common icons observed in the Figma
- `arrow-left`, `arrow-right` — 24 × 24 frame, arrow 16.7 × 12.7. Long horizontal shaft + chevron head — very geometric. Used on pagination, carousels, CTA buttons.
- `plus`, `minus` — 24 × 24 frame, hairline 12 × 12 / 12 × 1. Used on quantity steppers and expandables.
- `checkmark` — 24 × 24 frame, 16.7 × 11 shape. Confirmation & selection.
- `caret-up`, `caret-double` — dropdown indicators.
- `chain` — link icon, used inside token chips.
- `textile` — custom Bobochic icon for fabric swatches.

### Bobochic's approach
- **No icon font.** Every icon is an inline SVG, thin-line, `currentColor`. Icons scale with text.
- **No emoji** on customer surfaces. Emoji appear only inside the Figma itself as page labels (e.g. 🌈 Couleurs, 🔠 Typographies) and in the Thumbnail overview — this is an _internal_ convention, not a product convention.
- **No pictograms with colour**. Icons are almost always `--neutral-900` on light or `--neutral-0` on dark. A red `x` on an error or green check on success are the only tinted uses.
- **Three icon sizes** appear: **16 × 16** (dense lists), **24 × 24** (default, buttons, nav), **32 × 32** (hero, category tiles).

### What ships in this system
- The handful of first-party icons we extracted sit in `assets/icons/` as hand-written SVGs matching the Figma geometry (hairline, geometric, 24 × 24).
- **For anything we do not have** (cart, search, menu, user, heart, compare) we substitute **[Phosphor Thin](https://phosphoricons.com/)** via CDN — the closest public match to Bobochic's hairline geometric style. This is a **substitution and is flagged to the user** — the real Bobochic icon set should replace it when delivered.
- Unicode is not used as an icon system. Arrows, checks, and carets are all SVGs.

### Logos
- **Bobochic Paris (dark)** — full wordmark `bobochic` in thin-geometric sans + micro-capital `PARIS`. Used on marketing header.
- **Bobochic Paris (light)** — same shape, inverted for dark mode.
- **Bobochic (dark)** — wordmark without the `PARIS` subtitle, slightly lighter weight.
- **BoboXS (dark)** — compact mark for mobile tab bar / favicons.
- **Bobochic Admin, Blog, Bobochicailab** — lockups for internal tools.

All logos live in `assets/` as SVG with `currentColor`, so they tint via `color`.

---

## 7 · Known substitutions & flags

- **Jost** — available via Google Fonts; used only for a few legacy marketing assets. Safe.
- **Inconsolata** — available via Google Fonts; used inside token chips only.
- **Hanken Grotesk** — shipped as the uploaded variable TTF; the canonical family across the system.
- **Phosphor Thin** — CDN fallback for icons outside the five we hand-extracted from Figma. Please send the real Bobochic icon bundle and we will swap it in.
- **Assorted display fonts seen in the Figma** (F37 Caslon, Mort, Akira Expanded, Noto Serif KR, Expletus Sans, Radikal, etc.) appear inside the _Typographies_ page as **font-exploration scraps** — they are not part of the live brand system and have been intentionally omitted.

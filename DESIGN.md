---
version: alpha
name: Polaris
description: Rugged premium outdoor & overland ecommerce. Asymmetrical editorial layouts meet utilitarian clarity — sells the lifestyle first, then the gear. Brigade Overland DNA.
colors:
  forest: "#323C32"
  primary: "#323C32"
  night: "#1A1A1A"
  slate: "#7D786E"
  earth: "#B43C32"
  sand: "#E7E6DD"
  snow: "#F7F7F7"
  white: "#FFFFFF"
  teal: "#2D4650"
  sage: "#C3D6AE"
  on-forest: "#FFFFFF"
  on-earth: "#FFFFFF"
  on-night: "#FFFFFF"
  on-sand: "#1A1A1A"
  on-snow: "#1A1A1A"
typography:
  display-xl:
    fontFamily: Special Gothic Condensed One
    fontSize: 4rem
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: "-0.01em"
  display-lg:
    fontFamily: Special Gothic Condensed One
    fontSize: 3rem
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  h1:
    fontFamily: Geist
    fontSize: 2.5rem
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  h2:
    fontFamily: Geist
    fontSize: 1.75rem
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  h3:
    fontFamily: Geist
    fontSize: 1.25rem
    fontWeight: 600
    lineHeight: 1.3
  body-lg:
    fontFamily: Geist
    fontSize: 1.125rem
    fontWeight: 400
    lineHeight: 1.6
  body-md:
    fontFamily: Geist
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.5
  body-sm:
    fontFamily: Geist
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.5
  label-caps:
    fontFamily: Geist
    fontSize: 0.75rem
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.08em"
  label-sm:
    fontFamily: Geist
    fontSize: 0.75rem
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.04em"
  nav-link:
    fontFamily: Geist
    fontSize: 0.875rem
    fontWeight: 500
    lineHeight: 1.4
rounded:
  none: 0
  xs: 2px
  sm: 4px
  md: 8px
  lg: 12px
  xl: 16px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
  4xl: 96px
  section-padding: 80px
components:
  announcement-bar:
    backgroundColor: "{colors.night}"
    textColor: "{colors.on-night}"
    typography: "{typography.label-sm}"
    padding: 8px
  header:
    backgroundColor: "{colors.white}"
    textColor: "{colors.night}"
    padding: 16px
    height: 72px
  nav-link-default:
    textColor: "{colors.night}"
    typography: "{typography.nav-link}"
  nav-link-hover:
    textColor: "{colors.earth}"
    typography: "{typography.nav-link}"
  nav-link-active:
    textColor: "{colors.earth}"
    typography: "{typography.nav-link}"
  button-primary:
    backgroundColor: "{colors.earth}"
    textColor: "{colors.on-earth}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.sm}"
    padding: 14px
  button-primary-hover:
    backgroundColor: "{colors.night}"
    textColor: "{colors.on-night}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.sm}"
    padding: 14px
  button-ghost:
    backgroundColor: "{colors.white}"
    textColor: "{colors.night}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.sm}"
    padding: 14px
  button-ghost-hover:
    backgroundColor: "{colors.white}"
    textColor: "{colors.earth}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.sm}"
    padding: 14px
  button-full:
    backgroundColor: "{colors.night}"
    textColor: "{colors.on-night}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.sm}"
    padding: 14px
  hero-carousel:
    backgroundColor: "{colors.forest}"
    textColor: "{colors.on-forest}"
    typography: "{typography.h2}"
    padding: 0
  hero-text-block:
    backgroundColor: "{colors.forest}"
    textColor: "{colors.on-forest}"
    typography: "{typography.display-xl}"
    padding: 48px
  category-card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.night}"
    typography: "{typography.h3}"
    rounded: "{rounded.md}"
    padding: 0
  category-card-hover:
    backgroundColor: "{colors.white}"
    textColor: "{colors.earth}"
    typography: "{typography.h3}"
    rounded: "{rounded.md}"
    padding: 0
  editorial-cluster:
    backgroundColor: "{colors.sand}"
    textColor: "{colors.on-sand}"
    typography: "{typography.body-md}"
    padding: 48px
  brand-link-card:
    backgroundColor: "{colors.snow}"
    textColor: "{colors.night}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.sm}"
    padding: 16px
  product-card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.night}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: 0
  product-card-hover:
    backgroundColor: "{colors.white}"
    textColor: "{colors.night}"
    rounded: "{rounded.md}"
    padding: 0
  product-price:
    textColor: "{colors.slate}"
    typography: "{typography.body-sm}"
  product-compare-price:
    textColor: "{colors.earth}"
    typography: "{typography.body-sm}"
  footer:
    backgroundColor: "{colors.forest}"
    textColor: "{colors.on-forest}"
    typography: "{typography.body-sm}"
    padding: 80px
  footer-link:
    textColor: "{colors.on-forest}"
    typography: "{typography.body-sm}"
  footer-link-hover:
    textColor: "{colors.earth}"
    typography: "{typography.body-sm}"
  input:
    backgroundColor: "{colors.white}"
    textColor: "{colors.night}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: 12px
  input-focus:
    backgroundColor: "{colors.white}"
    textColor: "{colors.night}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: 12px
  badge:
    backgroundColor: "{colors.sage}"
    textColor: "{colors.forest}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.sm}"
    padding: 4px
  section-bg-forest:
    backgroundColor: "{colors.forest}"
    textColor: "{colors.on-forest}"
    padding: "{spacing.section-padding}"
  section-bg-sand:
    backgroundColor: "{colors.sand}"
    textColor: "{colors.on-sand}"
    padding: "{spacing.section-padding}"
  section-bg-snow:
    backgroundColor: "{colors.snow}"
    textColor: "{colors.on-snow}"
    padding: "{spacing.section-padding}"
  section-bg-white:
    backgroundColor: "{colors.white}"
    textColor: "{colors.night}"
    padding: "{spacing.section-padding}"
  section-bg-teal:
    backgroundColor: "{colors.teal}"
    textColor: "{colors.on-forest}"
    padding: "{spacing.section-padding}"
  cart-drawer:
    backgroundColor: "{colors.white}"
    textColor: "{colors.night}"
    typography: "{typography.body-md}"
    padding: 24px
  cart-item:
    backgroundColor: "{colors.white}"
    textColor: "{colors.night}"
    typography: "{typography.body-sm}"
    padding: 16px
  swatch:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.full}"
    size: 32px
  swatch-selected:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.full}"
    size: 32px
  toast:
    backgroundColor: "{colors.night}"
    textColor: "{colors.on-night}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: 12px

---

## Overview

**Polaris** is a rugged-premium Shopify theme for outdoor, overland, camping, and
adventure gear brands. The design ethos is *"sell the lifestyle first, then the
gear."* It avoids the cluttered, high-volume look of discount outdoor retailers
in favor of generous negative space, high-impact photography, and editorial
asymmetry that feels custom-coded rather than template-bound.

The theme structures every page as a rhythm of alternating section backgrounds —
forest green, warm beige, light gray, white — that carry the user through a
narrative: aspiration (hero) → category discovery → editorial deep-dive →
brand trust → conversion (footer). No two adjacent sections share the same
background color unless separated by a full-bleed image.

The visual language borrows from overland culture: utilitarian sans-serif
typography, a topographic-map texture motif that threads through the hero and
footer, and a single bold accent color (earth red) that appears only on CTAs,
logo marks, and hover states. Photography is dark, dramatic, and
environmental — products exist *in context,* not on white seamless.

Every component is designed for merchant customization via Shopify's theme
settings schema. Colors, typography, section visibility, and layout options
are exposed. The theme ships with three preset palettes (Overland, Alpine,
Coastal) and is built on Shopify Online Store 2.0 with sections-everywhere,
JSON templates, and app blocks.

### Brand Voice

- **Authoritative** — we know the gear and the terrain. No hedging.
- **Aspirational** — this is the life the customer wants. Photography leads.
- **Utilitarian** — information is clear, scannable, and never decorative.
- **Grounded** — earthy, tactile, real. No glassmorphism, no gratuitous animation.

### Key Differentiators (vs. standard Shopify themes)

1. **Asymmetrical editorial layouts** — Section 9 (image-cluster-links) breaks
   the grid with overlapping images and magazine-style text placement, creating
   visual interest that standard grid-based themes cannot achieve.
2. **Cohesive brand texture** — The topographic map pattern appears in both
   hero and footer, tying the scroll experience together.
3. **Section background color rhythm** — Alternating bg-forest → bg-sand →
   bg-snow → bg-white prevents the "wall of white" that plagues most Shopify
   themes.
4. **Carousel thumbnails (not dots)** — The hero carousel shows preview
   thumbnails in a bottom strip, inviting exploration rather than passive
   "dot waiting."
5. **Sells lifestyle before product** — The hero is about the experience
   (overland vehicle in context), not a product grid. Categories follow,
   then editorial, then brands. Hierarchy is emotional, not functional.

## Colors

The palette is an earth-anchored system with a single high-contrast interaction
accent. Every color has defined `on-*` variants for text/icon contrast on that
surface — use these, never guess the text color.

- **Forest `{colors.forest}`:** Deep pine green — hero backgrounds, footer,
  dark section anchors. The brand's grounding color. Always paired with
  `{colors.on-forest}` (white) text.
- **Night `{colors.night}`:** Near-black primary text, borders, form outlines,
  announcement bar background. Also serves as the button-full background.
- **Slate `{colors.slate}`:** Secondary text, muted borders, product metadata
  (prices, SKUs, vendor names). Softens the forest/night contrast without
  going gray.
- **Earth `{colors.earth}`:** Brigade red — the *sole* interaction driver. Use
  only on CTA buttons, logo accent, hover states, compare-at prices, and
  selected indicators. Never use for decorative purposes. One per viewport
  maximum.
- **Sand `{colors.sand}`:** Warm beige section background (`bg-beige`). Used for
  editorial/cluster layouts where the content needs to feel considered and
  premium. Text is `{colors.on-sand}` (near-black).
- **Snow `{colors.snow}`:** Light gray section background (`bg-light`). Used for
  category grids, brand links, and product grids. Softer than white; creates
  subtle depth without calling attention to itself.
- **White `{colors.white}`:** Page base, card surfaces, input backgrounds,
  product pages. The default section background.
- **Teal `{colors.teal}`:** Alternative depth tone — available for merchants who
  want a cooler secondary dark. Used sparingly in hover states and alternate
  section accent.
- **Sage `{colors.sage}`:** Soft green accent — seasonal badges, eco callouts,
  sale indicators, subtle highlights that shouldn't compete with earth red.

### Merchant Color Customization

All 9 colors are exposed as theme settings with color pickers. The theme ships
with three palettes:

1. **Overland (default):** Forest + Earth red — warm, grounded, masculine.
2. **Alpine:** Teal primary + Sage accent — cooler, mountain-lodge feel.
3. **Coastal:** Slate primary + Sand background — lighter, driftwood-desaturated.

## Typography

Two type families, one rule: Geist for everything, Special Gothic Condensed One
for display moments only (hero headlines, section kickers, collection titles).

### Type Scale

| Token | Family | Size | Weight | Use |
|-------|--------|------|--------|-----|
| `display-xl` | Special Gothic Condensed One | 4rem | 400 | Hero headline (desktop) |
| `display-lg` | Special Gothic Condensed One | 3rem | 400 | Hero headline (tablet), collection title |
| `h1` | Geist | 2.5rem | 700 | Page titles, section headings |
| `h2` | Geist | 1.75rem | 600 | Subsection headings, product titles on PDP |
| `h3` | Geist | 1.25rem | 600 | Card headings, form section titles |
| `body-lg` | Geist | 1.125rem | 400 | Lead paragraphs, editorial body |
| `body-md` | Geist | 1rem | 400 | Body copy, descriptions, form labels |
| `body-sm` | Geist | 0.875rem | 400 | Product metadata, prices, footer links |
| `label-caps` | Geist | 0.75rem | 600 | ALL CAPS CTAs, button text, category labels |
| `label-sm` | Geist | 0.75rem | 500 | Badges, tags, small labels |
| `nav-link` | Geist | 0.875rem | 500 | Navigation links, breadcrumbs |

### Font Features

- Geist supports variable weight (100–900). Use the static weights above to
  keep the CSS payload small; variable is opt-in via theme setting.
- Special Gothic Condensed One is loaded only on the homepage template unless
  the merchant enables it globally.
- `letter-spacing` is negative on display/h1 sizes (tight, modern), positive
  on all-caps labels (legible at small sizes).
- `font-feature-settings: "ss01"` (Geist stylistic set 1) is enabled on
  nav-link for a slightly more condensed "a" and "g" that reads better at
  small navigation sizes.

## Layout & Spacing

The spacing scale is an 8px baseline, borrowed from Tailwind v4's default
spacing scale. Every section, component, and gutter uses these tokens — no
arbitrary pixel values.

| Token | Value | Use |
|-------|-------|-----|
| `xs` | 4px | Icon-to-text gaps, badge padding |
| `sm` | 8px | Tight intra-component gaps, form field spacing |
| `md` | 16px | Standard intra-component gaps, card padding |
| `lg` | 24px | Inter-component gaps, grid gutters (default) |
| `xl` | 32px | Section title to content gap |
| `2xl` | 48px | Component-group spacing, hero content padding |
| `3xl` | 64px | Large section internal breathing room |
| `4xl` | 96px | Major layout divisions |
| `section-padding` | 80px | Vertical padding on all sections (responsive: 48px mobile) |

### Grid System

- Max content width: `1440px` (`--max-site-width`)
- Standard content width: `1280px` (`--content-width`)
- Narrow content: `960px` (`--content-narrow`) — editorial, product descriptions
- Grid columns: 12-column default, with 24px (`lg`) gutters
- Section backgrounds extend full-bleed; content is always constrained to
  `--max-site-width` and centered

### Section Background Rhythm

Every section in the page flow MUST alternate background color. The rhythm:
```
1. Announcement Bar → night
2. Header → white (sticky)
3. Hero → forest (carousel fills full viewport width)
4. Category Grid → snow
5. Editorial Cluster → sand
6. Brand Links → snow
7. Featured Products → white
8. Footer → forest
```

Consecutive sections with the same background color are only permitted when
separated by a full-bleed image or video band. This rhythm is enforced by the
theme's section ordering in `templates/index.json`, not by the section code
itself — merchants can override, but the presets follow this pattern.

### Breakpoints

| Name | Width | Target |
|------|-------|--------|
| `xs` | < 480px | Small phones |
| `sm` | 480px | Large phones |
| `md` | 768px | Tablets |
| `lg` | 1024px | Small laptops / landscape tablets |
| `xl` | 1280px | Desktops |
| `2xl` | 1440px | Large desktops (max-width constraint) |

## Elevation & Depth

Polaris uses minimal elevation — the design achieves depth through color
alternation and photography, not shadows. When shadows are necessary, they
are subtle and functional.

- **Card surfaces:** No default shadow. Cards differentiate from the section
  background via their white fill against snow/sand sections.
- **Sticky header:** `box-shadow: 0 1px 0 {colors.night} at 8% opacity` —
  a hairline separator, not a floating elevation.
- **Dropdowns / modals / drawers:** `box-shadow: 0 4px 24px rgba(26, 26, 26, 0.12)`
  — soft, diffuse, barely-there. The dark overlay behind drawers is
  `rgba(26, 26, 26, 0.5)`.
- **Hover lift:** Product cards lift 4px on hover with a 12px-blur shadow at
  8% opacity. This is the only "interactive" elevation effect in the theme.
- **Topographic texture overlay:** The hero and footer use a repeating
  topographic contour SVG pattern at 5% opacity over the background color.
  This is a brand texture, not elevation — it creates perceived depth without
  shadows.

## Shapes

Rounded corners are modest and consistent. No pill shapes, no 50% radius on
cards — this is an outdoor brand, not a SaaS dashboard.

| Token | Value | Use |
|-------|-------|-----|
| `none` | 0 | Section edges, full-bleed images |
| `xs` | 2px | Input focus rings, subtle outlines |
| `sm` | 4px | Buttons, inputs, badges, small interactive elements |
| `md` | 8px | Cards (product, category, brand), modals |
| `lg` | 12px | Editorial image clusters, PDP image gallery |
| `xl` | 16px | Hero image overlays on mobile, large media |
| `full` | 9999px | Product swatches only |

## Components

### Announcement Bar

Full-width, single-line, centered text on `{colors.night}` background. Shows
one message at a time; auto-rotates if multiple messages are enabled. Always
dismissible. Text is `{typography.label-sm}` in `{colors.on-night}`. The close
button is a subtle X icon, 16px, positioned to the right.

### Header

Sticky (`position: sticky; top: 0; z-index: 40`). White background with a
hairline bottom border (`border-bottom: 1px solid {colors.night} at 8% opacity`).
Three zones:
- **Left:** Hamburger menu icon (mobile) or full mega-nav (desktop ≥1024px)
- **Center:** Brand logo (SVG, max-height 40px). Scales down to 32px on scroll
  past 100px via CSS transition.
- **Right:** Search icon, account icon, cart icon (with item count badge).

On mobile, the hamburger opens a full-screen drawer with the nav tree. Cart
opens a slide-in drawer from the right. Search opens a modal overlay.

### Navigation

Three nav states per link:
- **Default:** `{colors.night}`, weight 500
- **Hover:** `{colors.earth}`, underline animation (bottom-border slides in
  from left, 200ms ease-out)
- **Active:** `{colors.earth}`, weight 600, persistent underline

Mobile nav is a flat list with collapsible parent categories. Each parent
toggles open/closed with a chevron indicator. Nested links are indented 16px
with a left border on the active item.

### Buttons

Four variants, plus hover states:

- **`button-primary`:** Solid `{colors.earth}` background, white text,
  all-caps `{typography.label-caps}`. The *only* high-emphasis CTA on a page.
  There must be at most one `button-primary` visible per viewport.
- **`button-ghost`:** Transparent background, `{colors.night}` text and
  border. Used for secondary actions adjacent to primary. Hover changes
  text color to `{colors.earth}`.
- **`button-full`:** Solid `{colors.night}` background, white text. Used for
  full-width actions (newsletter signup, add to cart on PDP).
- **Link-style (no token):** `{colors.earth}` text, underline on hover. For
  inline navigation in editorial text.

All buttons have `{rounded.sm}` (4px), 14px vertical padding, 24px horizontal
padding, and a 200ms ease transition on background-color and color. Minimum
tap target is 44×44px per WCAG 2.5.5.

### Hero Carousel

Full viewport-width on `{colors.forest}` background. Each slide is a
horizontal split (60/40 on desktop, stacked on mobile):
- **Left (60%):** Dark textured background (`{colors.forest}` + topographic
  pattern at 8% opacity). Headline in `{typography.display-xl}`, subheadline
  in `{typography.body-lg}` at `{colors.on-forest}` with 80% opacity. Single
  `button-primary` CTA.
- **Right (40%):** Full-bleed product/lifestyle image that extends to the
  right viewport edge. Image is lazy-loaded and uses Shopify CDN responsive
  `srcset`.

Below the carousel, a thumbnail strip shows preview images for each slide
(not dots). Clicking a thumbnail jumps to that slide. Current slide thumbnail
has a `{colors.earth}` bottom-border accent (3px).

Auto-rotate is off by default (accessibility). Enable via merchant setting.

### Category Image Grid

Standard section with `{colors.snow}` background. Displays 3–6 category cards
in a responsive grid:
- Mobile: 2 columns (scrollable horizontal strip if >4)
- Desktop: 6 columns, equal-width

Each card: white background, `{rounded.md}` (8px), product image, category
name in `{typography.h3}`, a right-arrow SVG icon. Hover: image scales 1.03×
(300ms ease), category name changes to `{colors.earth}`, arrow slides right 4px.

### Editorial Cluster (Image + Text Links)

The signature section — asymmetrical, magazine-style. `{colors.sand}`
background. Two-column layout (60/40 desktop, stacked mobile):
- **Left:** Large product/lifestyle image, slightly overlapping the right
  column if the image extends. Uses `object-fit: cover` with a
  `{rounded.lg}` (12px) corner.
- **Right:** Vertical list of text links, each with a small thumbnail icon
  (40×40px) + bold heading + supporting line. Clicking expands/reveals content
  inline or navigates to a collection.

This section is the single biggest differentiator from standard Shopify
themes. It creates visual interest through controlled asymmetry — the image
bleeds beyond the text column, breaking the rigid grid.

### Brand Links

`{colors.snow}` background. Displays brand logos or names in a responsive
grid (3–8 columns). Each brand is a card with:
- Brand logo image (grayscale by default, color on hover — CSS filter
  transition, 200ms)
- Brand name below in `{typography.label-caps}`

Optional: tap-to-filter — clicking a brand navigates to that brand's
collection page.

### Product Card

The core conversion unit. White background, `{rounded.md}`, no shadow.

Anatomy (top to bottom):
1. **Image container:** 1:1 aspect ratio (merchant-adjustable to 4:3 or 3:4).
   Secondary image appears on hover with 300ms crossfade. Badge overlays
   (Sale, New, Eco) in the top-left corner.
2. **Quick-add button:** Appears centered at the bottom of the image on hover
   (opacity 0→1, translateY 8px→0, 200ms). `button-primary` style, compact.
3. **Vendor name:** `{typography.label-sm}`, `{colors.slate}`, above the title.
4. **Product title:** `{typography.body-sm}`, `{colors.night}`, single line
   with ellipsis.
5. **Price:** `{colors.slate}`, `{typography.body-sm}`. Compare-at price
   (strikethrough) in `{colors.earth}`.

**Hover:** Entire card lifts 4px (`transform: translateY(-4px)`) with a soft
shadow (`0 8px 24px rgba(26,26,26,0.08)`). Image scales 1.03×. Transition:
300ms ease-out.

**Product badge overlay positions:**
- Top-left: Sale (earth red), New (sage green), Eco (sage)
- Top-right: Sold out (night with 80% opacity white text)

### Product Page (PDP)

Two-column layout on desktop (55/45, image left, details right). Stacks on
mobile (images first, then details).

**Image gallery:** Vertical thumbnails on the left (desktop), horizontal strip
below main image (mobile). Main image is `{rounded.md}`. Zoom on hover
(merchant-toggleable). Flickity-powered for swipe navigation.

**Product form (right column):**
1. Vendor + title
2. Price (with compare-at strikethrough)
3. Variant selector (swatches for color, dropdown for size)
4. Quantity selector (+/− buttons, 36px tall)
5. `button-full` Add to Cart
6. Accordion sections: Description, Specifications, Shipping & Returns

### Cart Drawer

Slide-in from the right (400px wide desktop, full-width mobile). White
background, dark overlay behind (`rgba(26, 26, 26, 0.5)`). Anatomy:
1. Header: "Cart (N)" title + close X button
2. Cart items: Each line item shows 80×80px image, title, variant, quantity
   controls, price, remove button
3. Free shipping progress bar (if threshold set): animated fill, "Add $X more
   for free shipping" message
4. Subtotal + Checkout button (Shopify Pay + standard checkout)
5. Optional upsells / cross-sells at the bottom

Animation: Drawer slides in from the right (300ms ease-out). Overlay fades in
(200ms).

### Footer

`{colors.forest}` background with topographic pattern overlay (8% opacity
white). Four-column grid on desktop, stacked on mobile:

1. **Newsletter:** Email input (`{colors.white}` bg, 12px padding) + submit
   button. "SIGN UP FOR EXCLUSIVE OFFERS" heading.
2. **About:** Company story, contact link, dealer ordering link.
3. **Help:** Shipping, returns, terms, privacy — standard Shopify policy links.
4. **Social + Copyright:** Instagram, YouTube, Facebook icons. Copyright line
   `{typography.label-sm}`.

Footer links use `{colors.on-forest}` text, hover to `{colors.earth}`.

### Newsletter Section

Independent section, not part of the footer. `{colors.sand}` background.
Split layout (50/50 desktop, stacked mobile):
- Left: Heading + body copy selling the newsletter value
- Right: Email input + submit button (button-full style)

### Search Overlay

Full-screen modal overlay triggered from header search icon. Dark semi-opaque
background. Contains:
- Search input (large, centered, with autofocus)
- Predictive search results (products, collections, pages) as-you-type
- Recent searches (stored in localStorage)
- Popular searches (merchant-configurable list)

### Featured Collection

Standard section pulling products from a merchant-selected collection.
Supports grid (2–5 columns) or carousel (Flickity) layout. "View All"
link-arrow button at the top-right of the section heading.

### Testimonials

`{colors.white}` background. Centered layout: quote in `{typography.body-lg}`,
attribution in `{typography.label-caps}`. Carousel or static grid.
Merchant-configurable star rating display.

### Instagram Feed

`{colors.snow}` background. Grid of 4–6 Instagram images with hover overlay
showing like/comment counts. Pulls from merchant's Instagram via section
setting (access token or manual image upload fallback).

## Do's and Don'ts

### Do

- **Do** alternate section backgrounds to create visual rhythm. The rhythm
  pattern is: forest → snow → sand → snow → white → forest.
- **Do** use `{colors.earth}` for exactly one interaction per viewport. If
  there's already a red CTA, secondary actions use ghost or link variants.
- **Do** use the topographic pattern texture only in hero and footer. It is a
  bookend motif, not a decoration to sprinkle everywhere.
- **Do** caption product images with environmental context. Products on white
  belong on the PDP; lifestyle shots belong in the hero and editorial sections.
- **Do** keep the mobile nav flat and collapsible — never nest more than 2
  levels deep in the drawer.
- **Do** use `{typography.display-xl}` (Special Gothic Condensed One)
  exclusively for hero headlines. It loses impact if used in body or CTAs.
- **Do** expose every color, font choice, section order, and toggle as a theme
  setting with sensible defaults. The theme must work out of the box for a
  merchant who never opens the customizer.

### Don't

- **Don't** use `{colors.earth}` for decorative elements, section backgrounds,
  or non-interactive text. It is the interaction signal and must remain
  scarce.
- **Don't** add box-shadows to cards on the default state. Elevation comes
  from color contrast, not shadows.
- **Don't** introduce rounded corners larger than `{rounded.md}` (8px) on
  standard components. `lg` and `xl` are reserved for editorial images only.
- **Don't** use serif body text. The utilitarian sans-serif voice is
  foundational.
- **Don't** add autoplay to any carousel without an explicit merchant opt-in
  and a pause-on-focus/hover mechanism.
- **Don't** stack two sections with the same background color without a
  full-bleed image between them.
- **Don't** replicate the exact Brigade Overland UI — adapt the principles
  (asymmetry, rhythm, texture, scarcity of accent) to a generic theme that
  any outdoor merchant can brand as their own.
- **Don't** include Brigade Overland's logo, trademarked brand names, or
  proprietary images in the theme assets. The topographic pattern is a
  custom SVG created for Polaris — not sourced from Brigade's site.

## Section Background System

The theme uses a CSS-class-based section background system that merchants
control via a dropdown in each section's settings:

| Class | Color | Use case |
|-------|-------|----------|
| `section-bg-forest` | `{colors.forest}` | Hero, footer, high-impact CTAs |
| `section-bg-sand` | `{colors.sand}` | Editorial, about, newsletter |
| `section-bg-snow` | `{colors.snow}` | Category grids, brand links, product grids |
| `section-bg-white` | `{colors.white}` | Product detail, cart, standard content |
| `section-bg-teal` | `{colors.teal}` | Alternative dark sections, Alpine preset |

Sections expose a `background_style` setting:
```json
{
  "type": "select",
  "id": "background_style",
  "label": "Section background",
  "options": [
    { "value": "forest", "label": "Forest Green" },
    { "value": "sand", "label": "Warm Beige" },
    { "value": "snow", "label": "Light Gray" },
    { "value": "white", "label": "White" }
  ],
  "default": "white"
}
```

### Theme Settings Schema (key excerpt)

```json
{
  "settings": [
    {
      "type": "header",
      "content": "Colors"
    },
    {
      "type": "select",
      "id": "color_palette",
      "label": "Color palette",
      "options": [
        { "value": "overland", "label": "Overland (forest + red)" },
        { "value": "alpine", "label": "Alpine (teal + sage)" },
        { "value": "coastal", "label": "Coastal (slate + sand)" }
      ],
      "default": "overland"
    },
    {
      "type": "header",
      "content": "Typography"
    },
    {
      "type": "select",
      "id": "body_font",
      "label": "Body font",
      "options": [
        { "value": "geist", "label": "Geist" },
        { "value": "inter", "label": "Inter" },
        { "value": "system", "label": "System stack" }
      ],
      "default": "geist"
    },
    {
      "type": "checkbox",
      "id": "enable_display_font",
      "label": "Use condensed display font for hero headlines",
      "default": true
    },
    {
      "type": "header",
      "content": "Layout"
    },
    {
      "type": "range",
      "id": "page_width",
      "label": "Max content width",
      "min": 1000,
      "max": 1600,
      "step": 20,
      "unit": "px",
      "default": 1440
    },
    {
      "type": "header",
      "content": "Features"
    },
    {
      "type": "checkbox",
      "id": "enable_topographic_texture",
      "label": "Show topographic map texture on hero and footer",
      "default": true
    },
    {
      "type": "checkbox",
      "id": "enable_quick_add",
      "label": "Show quick-add button on product cards",
      "default": true
    }
  ]
}
```

## GSAP ScrollTrigger Animation Language

The theme uses GSAP + ScrollTrigger for entrance animations and scroll-driven
effects. These are opt-in via theme settings and degrade gracefully to static
rendering when disabled or when JS fails.

### Animation Principles

1. **Reveal on scroll, never on load.** Elements animate into view as the user
   scrolls — no hero animation on page load (perceived performance).
2. **Stagger, don't flood.** Grid items stagger by 80–120ms. Never fire all at
   once.
3. **Subtle, not flashy.** Fade + slight Y-translate (20–40px). Never rotate,
   scale aggressively (1.1× max), or use bounce easing.
4. **Once per visit.** Animations fire only on the first scroll-through. After
   that, elements stay revealed. No scroll-jacking — ScrollTrigger scrub is
   disabled except on the hero parallax overlay.
5. **Duration caps at 600ms.** Any single animation must complete in ≤600ms.
6. **Mobile reduced.** Tablet and below use shorter durations (300ms) and
   smaller translations (12px). Respects `prefers-reduced-motion`.

### Animation Presets

| Name | Trigger | Effect | Duration | Easing |
|------|---------|--------|----------|--------|
| `fade-up` | Element enters viewport (top 85%) | opacity 0→1, y 30→0 | 500ms | power2.out |
| `fade-in` | Element enters viewport (top 90%) | opacity 0→1 | 400ms | power1.out |
| `stagger-fade-up` | Container enters viewport (top 85%) | fade-up on children, stagger 100ms | 500ms | power2.out |
| `hero-parallax` | Scroll-driven | Hero image y translates at 30% of scroll speed | scrub | none |
| `drawer-slide` | Triggered manually (cart/menu open) | x: 100%→0, 300ms | 300ms | power2.out |

### Section Animation Assignments

| Section | Animation | Notes |
|---------|-----------|-------|
| Hero carousel | `hero-parallax` (image column only) | Disabled on mobile |
| Category grid | `stagger-fade-up` | 100ms stagger per card |
| Editorial cluster | `fade-up` on left image, 200ms delay before `fade-up` on right text | Creates cascading reveal |
| Brand links | `stagger-fade-up` | 80ms stagger per brand |
| Featured products | `stagger-fade-up` | 100ms stagger per product |
| Testimonials | `fade-in` | Simple, respectful |
| Newsletter | `fade-up` |  |
| Footer | `fade-in` | 200ms delay after page load |

## Shopify Theme Store Compliance Checklist

All components and patterns must pass Shopify Theme Store review:

- [x] Built on Dawn's base architecture (Online Store 2.0) — sections
  everywhere, JSON templates, app blocks
- [x] No hardcoded external scripts that load without merchant consent
- [x] All third-party libraries (GSAP, Flickity) loaded via `theme.liquid`
  `{{ 'gsap.min.js' | asset_url }}` — self-hosted assets, no CDN hotlinks
- [x] Theme settings for all colors, fonts, and feature toggles (no hardcoded
  brand-specific values)
- [x] WCAG 2.1 AA compliant — all color combos pass 4.5:1 contrast ratio on
  text, 3:1 on large text (18px+ bold or 24px+ regular)
- [x] Keyboard-navigable (Tab through all interactive elements, visible focus
  rings using `{colors.earth}` outline)
- [x] Screen-reader-friendly (aria-labels on icon-only buttons, live regions
  for cart updates, semantic HTML landmarks)
- [x] No jQuery (Dawn requirement) — all JS is vanilla or GSAP/Flickity
- [x] Responsive images with `srcset` and lazy loading
- [x] No merchant data collection or external tracking without consent
- [x] Works with Shopify's standard sections (rich text, image with text,
  collage, etc.)
- [x] Supports multi-level mega-nav
- [x] Supports predictive search
- [x] Supports product filtering (Storefront filtering API)
- [x] Supports cross-selling (product recommendations API)
- [x] Translated to all Shopify-supported languages via `{{ 'key' | t }}`

## Warnings

### Contrast

The following color pairs require verification before production:

- `{colors.slate}` (#7D786E) on `{colors.white}` — contrast ratio 3.86:1
  (fails WCAG AA 4.5:1). This color is used only for secondary/metadata text
  at `{typography.body-sm}` (14px) which is below the large-text threshold.
  **Resolution:** Use `{colors.slate}` only at sizes ≥18px bold or on
  non-essential metadata. For body text at normal sizes, use
  `{colors.night}` instead.
- `{colors.earth}` (#B43C32) on `{colors.white}` — contrast ratio 5.42:1
  (passes WCAG AA, fails AAA 7:1). Acceptable for interactive elements;
  AAA is not required for theme store approval.
- `{colors.sage}` (#C3D6AE) on `{colors.white}` — contrast ratio 1.68:1
  (fails all levels). **Resolution:** Sage is only for badge backgrounds,
  never for text on white. Always pair sage backgrounds with
  `{colors.forest}` text (contrast 4.9:1, passes AA).

### Type Loading

Special Gothic Condensed One is a Google Font. Theme store policy requires
fonts to be self-hosted as asset files. Include the font files in `assets/`
and reference via `@font-face` in `theme.css`. Load asynchronously via
`<link rel="preload">` to avoid FOIT.

### Bundle Size

GSAP + ScrollTrigger (minified, gzipped: ~23KB) + Flickity (~7KB) + theme JS
(~8KB) = ~38KB JS payload. Acceptable. Do not add additional animation
libraries — if an effect can't be done with GSAP or CSS transitions, design
around it.
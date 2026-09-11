# Polaris — Shopify Theme

Rugged premium outdoor & overland ecommerce theme. Online Store 2.0, not a Dawn fork.
Reference site: Brigade Overland (CSSDA-listed, Shopify + Tailwind + GSAP).

## Project Structure

```
/home/ryan/polaris-theme/
├── DESIGN.md                    # Full design token spec (954 lines, 0 lint errors)
├── tailwind.theme.json          # Tailwind config export from DESIGN.md
├── theme/                       # THEME TARGET — build ALL code here
│   ├── assets/                  # JS, CSS (Tailwind output), GSAP
│   ├── config/                  # settings_schema.json, settings_data.json
│   ├── layout/                  # theme.liquid
│   ├── sections/                # Section Liquid files
│   ├── snippets/                # Reusable Liquid snippets
│   ├── templates/               # JSON templates (index, product, collection, etc.)
│   │   └── customers/           # Customer account templates
│   └── locales/                 # en.default.json
├── brigade-overland/            # Reference material
│   ├── screenshots/             # 12 PNGs (desktop 1440 + mobile 390)
│   ├── source.html              # Raw HTML (166KB)
│   ├── css/app.css              # Full theme CSS (138KB)
│   └── screenshots/page-structure.json  # Per-section inventory
└── preview/                     # Earlier static HTML preview
```

## DESIGN.md Token Reference (from /home/ryan/polaris-theme/DESIGN.md)

### Colors
| Token | Hex | Use |
|-------|-----|-----|
| `forest` / `primary` | `#323C32` | Hero BG, nav, footer, primary buttons |
| `night` | `#1A1A1A` | Body text, alternate dark BG |
| `slate` | `#7D786E` | Secondary text, borders |
| `earth` | `#B43C32` | Accent, sale badges, CTAs, link hovers |
| `sand` | `#E7E6DD` | Editorial BG, about sections, newsletter |
| `snow` | `#F7F7F7` | Category grids, product cards BG |
| `white` | `#FFFFFF` | Product detail, cart, standard content |
| `teal` | `#2D4650` | Alpine preset alternative dark sections |
| `sage` | `#C3D6AE` | Success, badges, highlights |
| `on-forest` | `#FFFFFF` | Text on forest BG |
| `on-earth` | `#FFFFFF` | Text on earth BG |
| `on-night` | `#FFFFFF` | Text on night BG |
| `on-sand` | `#1A1A1A` | Text on sand BG |
| `on-snow` | `#1A1A1A` | Text on snow BG |

### Typography
- Display XL/LG: **Special Gothic Condensed One** (Google Fonts) — hero headlines, 4rem/3rem, weight 400, tight tracking
- Headings H1–H3: **Geist** (Google Fonts) — 2.5rem/1.75rem/1.25rem, weights 700/600/600
- Body: **Geist** — 1.125rem/1rem/0.875rem, weight 400
- Labels: **Geist** — 0.75rem, weights 600 (caps) / 500 (small)
- Nav: **Geist** — 0.875rem, weight 500

### Spacing
`xs:4 sm:8 md:16 lg:24 xl:32 2xl:48 3xl:64 4xl:96` — section-padding: 80px

### Border Radius
`xs:2px sm:4px md:8px lg:12px xl:16px full:9999px`

### Section BG Rhythm
`forest → snow → sand → snow → white → forest` — alternate for editorial tension

## Reference Screenshots Map

| File | Brigade Section | Our Section |
|------|----------------|-------------|
| 01-full-desktop.png | Full page view | Visual reference |
| 01-full-mobile.png | Mobile view | Responsive reference |
| 01-section-*-announcement-desktop.png | Free shipping bar | `announcement-bar.liquid` |
| 01/02/03-* | Header group (nav + drawer) | `header.liquid` |
| 06-* (hero) | "RELEASE THE BEAST" | `hero.liquid` |
| 07-* (categories) | TENTS SWAGS AWNINGS... | `category-grid.liquid` |
| 08-* (featured) | Australia's favorite... | `featured-collection.liquid` |
| 09-* (brands) | SHOP BY BRAND logos | `brand-logos.liquid` |
| 10-* (footer) | Newsletter + links | `footer.liquid` |

## Build Order (execute in this sequence)

### Step 1: Tailwind Config + Base Layout
1. Write `theme/tailwind.config.js` using tokens from `tailwind.theme.json`
2. Write `theme/assets/tailwind.css` (Tailwind directives + base styles)
3. Write `theme/layout/theme.liquid` — minimal Shopify wrapper with:
   - `{{ content_for_header }}`, `{{ content_for_layout }}`
   - Google Fonts links (Special Gothic Condensed One, Geist)
   - Tailwind CSS link, GSAP CDN (for dev; vendor later)
   - `{% sections 'header-group' %}`, `{{ content_for_layout }}`, `{% sections 'footer-group' %}`

### Step 2: Config
4. Write `theme/config/settings_schema.json` — Merchant settings:
   - Color preset picker: Overland (forest/earth) | Alpine (teal/night) | Coastal (sage/white)
   - Font picker (heading + body from Google Fonts subset)
   - Feature toggles: announcement bar, predictive search, AJAX cart
   - Social media links, favicon, logo upload
5. Write `theme/config/settings_data.json` — default values (Overland preset)

### Step 3: Sections (build in order, one at a time)
6. `sections/announcement-bar.liquid` — full-width, small text, link, configurable color bg
7. `sections/header.liquid` — sticky, logo left, nav center, icons right (search/account/cart + badge), mobile hamburger → slide-out drawer
8. `sections/hero.liquid` — full-viewport, overlay gradient, overline + display heading + subtitle + dual CTAs (primary/outline), background image from section settings
9. `sections/category-grid.liquid` — 3-col or 4-col grid, image cards with overlay labels, configurable via blocks
10. `sections/featured-collection.liquid` — product grid (3–4 products), uses `snippets/product-card.liquid`
11. `sections/brand-logos.liquid` — logo grid (auto-width), grayscale → color on hover
12. `sections/newsletter.liquid` — dark BG, heading + email input + CTA, configurable BG color
13. `sections/footer.liquid` — 4-column grid (brand/about, links, customer service, social), bottom bar with payment icons

### Step 4: Snippets (reusable)
14. `snippets/product-card.liquid` — image (4:5 aspect), hover zoom, badge overlay, title, price, quick-add button
15. `snippets/price-display.liquid` — compare-at strikethrough, sale highlighting (earth red)
16. `snippets/icon-cart.liquid`, `icon-search.liquid`, `icon-user.liquid`, `icon-menu.liquid` — inline SVGs
17. `snippets/cart-drawer.liquid` — slide-in from right, line items, subtotal, checkout CTA

### Step 5: Templates (JSON)
18. `templates/index.json` — sections array pointing to hero, category-grid, featured-collection, brand-logos, newsletter
19. `templates/product.json`, `templates/collection.json`, `templates/cart.json`, `templates/page.json`

### Step 6: GSAP Animations (in `theme/assets/polaris.js`)
20. ScrollTrigger reveals: fade-up, stagger-fade-up, hero-parallax, scale-reveal, draw-in
    - Register GSAP + ScrollTrigger, use `gsap.matchMedia()` for responsive breakpoints
    - All animations respect `prefers-reduced-motion`
    - Clean up on Shopify `shopify:section:unload` event
    - Use `cubic-bezier(0.23, 1, 0.32, 1)` easing, NOT `ease`
    - No `scale(0)` — minimum `scale(0.95)` for entries
    - No `transition: all` — be specific

### Step 7: Locales + Lint
21. `locales/en.default.json` — all translatable strings
22. Run `npx @shopify/theme check theme/` — fix ALL errors

## GSAP Animation Specs

### Hero Parallax
- Hero BG image scrolls at 0.85x viewport speed
- Text content fades up + slides slightly on load (not scroll-triggered — immediate entrance)
- Elements: `gsap.fromTo()` with opacity 0→1, y 40→0, duration 0.8s, stagger 0.15s

### Scroll-Triggered Fade Up (use on: category cards, product cards, brand logos, newsletter)
- `gsap.fromTo()` triggered when element 85% visible
- opacity 0→1, y 30→0, duration 0.6s
- stagger 0.1s for grids

### Scale Reveal (use on: featured images, editorial blocks)
- opacity 0→1, scale 0.95→1, duration 0.7s, ease: cubic-bezier(0.23, 1, 0.32, 1)

### MatchMedia Breakpoints
- Desktop: full animations
- Tablet (768–1024px): reduced duration (0.4s), no parallax
- Mobile (<768px): fade-only, no transforms, duration 0.3s
- prefers-reduced-motion: ALL animations disabled, elements visible immediately

## Shopify Theme Store Compliance (MANDATORY)

- NO hardcoded store names, brands, or merchant-specific text
- ALL configurable via `settings_schema.json` — colors, fonts, layout, visibility
- Online Store 2.0: JSON templates, sections everywhere, app blocks (`{% schema %}` with blocks)
- Predictive search: `{{ routes.predictive_search_url }}`
- AJAX cart drawer: fetch `/cart.js`, render client-side, no page reload
- ALL images must have `alt` text (`{{ image.alt | escape }}`)
- ARIA labels on interactive elements, keyboard navigation for cart/menu
- NO jQuery — vanilla JS only
- `prefers-reduced-motion` respected (no animation, all elements visible)
- Schema: every section must have `{% schema %}` with `name`, `settings`, optional `blocks`, `presets`
- Settings types: `color`, `text`, `image_picker`, `font_picker`, `checkbox`, `select`, `range`
- DO NOT use deprecated settings: `radio` → use `select`, `product` → use `product_list`

## Liquid Patterns (Shopify-Specific)

```liquid
{# Section settings #}
{% assign bg_color = section.settings.background_color %}
{% assign heading = section.settings.heading | escape %}

{# Blocks (dynamic content) #}
{% for block in section.blocks %}
  {% case block.type %}
    {% when 'collection_card' %}
      {% assign collection = block.settings.collection %}
      ...render card...
  {% endcase %}
{% endfor %}

{# Schema #}
{% schema %}
{
  "name": "Hero",
  "settings": [
    { "type": "image_picker", "id": "background_image", "label": "Background Image" },
    { "type": "color", "id": "background_color", "label": "Background Color", "default": "#323C32" },
    { "type": "text", "id": "heading", "label": "Heading", "default": "Adventure Awaits" },
    { "type": "select", "id": "heading_size", "label": "Heading Size", "options": [
      { "value": "display-xl", "label": "Extra Large" },
      { "value": "display-lg", "label": "Large" },
      { "value": "h1", "label": "Medium" }
    ], "default": "display-xl" }
  ],
  "blocks": [],
  "presets": [{ "name": "Hero", "category": "Hero" }]
}
{% endschema %}
```

## Anti-Slop Design Rules (NON-NEGOTIABLE)

From emil-design-eng / design-taste-frontend / high-end-visual-design skills:

### ANIMATIONS
- **EASING**: Use `cubic-bezier(0.23, 1, 0.32, 1)` — NEVER use `ease`, `ease-in`, `ease-out`, `ease-in-out`
- **NO scale(0)**: Entry animations minimum `scale(0.95)`. Elements entering from scale(0) with `ease` or `easeOutBack` is AI slop signature
- **TRANSITION**: Never `transition: all` — be explicit: `transition: opacity 0.4s, transform 0.4s`
- **ACTIVE FEEDBACK**: All interactive elements (buttons, links, cards) must have `:active` state. Buttons: `scale(0.97)` on `:active`
- **TRANSFORM ORIGIN**: Popovers, tooltips, dropdowns need `transform-origin` matching their anchor point

### TYPOGRAPHY
- At least 3 distinct sizes, clear hierarchy — no System UI default
- Headlines should feel intentional, not "scaled up body text"
- No AI-purple (#7C3AED, #8B5CF6), no violet gradient

### LAYOUT
- Whitespace is intentional. Don't fill every pixel. Negative space = confidence.
- No 3 identical feature cards in a row with the same icon style — vary visual treatment
- No decorative dots, no scroll-down cues, no section numbers
- No glassmorphism (frosted glass, backdrop-blur cards)
- No em-dashes as decorative separators

### IMAGES
- Use Unsplash for placeholder images: `https://images.unsplash.com/photo-{ID}?w=1200&q=80`
- Outdoor/overland themed Unsplash IDs: search for "overland", "camping", "offroad", "adventure"
- Do NOT use CSS gradient divs as image placeholders

### RESPONSIVE
- `min-height` not `h-screen` for hero — prevents mobile viewport issues with browser chrome
- Test all GSAP animations at 320px, 768px, 1024px, 1440px widths

## Shopify Liquid Section Schema Reference

Use these setting types in `{% schema %}`:
- `text`, `textarea`, `richtext`, `image_picker`, `color`, `color_background`
- `font_picker`, `url`, `video_url`, `product`, `product_list`, `collection`, `collection_list`
- `checkbox`, `radio` (deprecated, use `select`), `select`, `range`, `number`
- `header` (visual separator), `paragraph` (help text), `link_list`

Section group types in `theme.liquid`:
- `header-group` — announcement bar, header
- `template content` — `{{ content_for_layout }}`
- `footer-group` — newsletter, footer

## When Stuck
- Read the reference screenshots in `../brigade-overland/screenshots/` — they show exactly what each section should look like
- Read `../brigade-overland/screenshots/page-structure.json` for computed styles per section
- Read `../brigade-overland/css/app.css` for Brigade Overland's actual CSS patterns
- Read `../DESIGN.md` for full token spec

## Output
All files go in `/home/ryan/polaris-theme/theme/`. Build complete sections, not stubs. Each section must be fully functional with schema, settings, and responsive markup. GSAP animations in a single `assets/polaris.js` file.
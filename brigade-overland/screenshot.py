"""Capture full-page screenshots of Brigade Overland at desktop + mobile widths."""
import asyncio, json, os, re, sys, time
from pathlib import Path

OUT = Path("/home/ryan/polaris-theme/brigade-overland/screenshots")

async def capture():
    from playwright.async_api import async_playwright

    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True, args=["--no-sandbox", "--disable-setuid-sandbox"])

        # --- DESKTOP ---
        ctx = await browser.new_context(
            viewport={"width": 1440, "height": 900},
            device_scale_factor=2,
            user_agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/122.0 Safari/537.36"
        )
        page = await ctx.new_page()
        print("Loading desktop...")
        await page.goto("https://brigadeoverland.com/", wait_until="networkidle", timeout=60000)
        await page.wait_for_timeout(3000)  # let animations settle

        # Full page screenshot
        await page.screenshot(path=str(OUT / "01-full-desktop.png"), full_page=True)
        print("  ✓ 01-full-desktop.png")

        # Per-section screenshots
        sections = await page.evaluate("""() => {
            const secs = document.querySelectorAll('div[data-section-id], section, div.section, header, footer, div.shopify-section');
            return Array.from(secs).map((el, i) => ({
                index: i,
                tag: el.tagName,
                id: el.id,
                className: el.className?.substring(0, 120),
                dataSectionId: el.getAttribute('data-section-id') || '',
                y: el.getBoundingClientRect().top + window.scrollY,
                height: el.offsetHeight
            }));
        }""")

        print(f"  Found {len(sections)} sections")
        for i, s in enumerate(sections):
            if s['height'] < 20: continue
            try:
                await page.evaluate(f"window.scrollTo(0, {s['y']})")
                await page.wait_for_timeout(500)
                # screenshot just this section
                el = await page.query_selector(f'[data-section-id="{s["dataSectionId"]}"]') if s['dataSectionId'] else None
                if not el:
                    el = page.locator(f'xpath=(//section|//header|//footer|//div[contains(@class,"shopify-section")])[{i+1}]')
                await el.screenshot(path=str(OUT / f"{i+1:02d}-section-{s['tag'].lower()}-{s['id'][:20] or 'unnamed'}-desktop.png"))
                print(f"  ✓ section {i+1}: {s['tag']}#{s['id'][:30]} ({s['height']}px)")
            except Exception as e:
                print(f"  ✗ section {i+1}: {e}")

        # --- Collect page structure for DESIGN.md ---
        structure = await page.evaluate("""() => {
            const getStyles = (el) => {
                const cs = getComputedStyle(el);
                return {
                    bg: cs.backgroundColor,
                    color: cs.color,
                    fontFamily: cs.fontFamily,
                    fontSize: cs.fontSize,
                    padding: cs.padding,
                    margin: cs.margin,
                    maxWidth: cs.maxWidth
                };
            };
            const sections = [];
            document.querySelectorAll('div[data-section-id], section, header, footer, div.shopify-section').forEach((el, i) => {
                const rect = el.getBoundingClientRect();
                const h1 = el.querySelector('h1');
                const h2 = el.querySelector('h2');
                const img = el.querySelector('img');
                const btn = el.querySelector('a.button, a.btn, button, a[role="button"]');
                sections.push({
                    index: i,
                    tag: el.tagName,
                    id: el.id,
                    className: el.className?.substring(0, 200),
                    dataSectionId: el.getAttribute('data-section-id') || '',
                    visibleText: el.innerText?.substring(0, 200).replace(/\\s+/g, ' '),
                    heading: h1?.innerText || h2?.innerText || '',
                    images: [...(el.querySelectorAll('img'))].map(img => ({
                        src: img.src.substring(0, 120),
                        alt: img.alt,
                        width: img.naturalWidth,
                        height: img.naturalHeight
                    })).slice(0, 3),
                    hasBtn: !!btn,
                    btnText: btn?.innerText?.trim(),
                    styles: getStyles(el),
                    height: rect.height,
                    width: rect.width
                });
            });
            return sections;
        }""")

        json.dump(structure, open(str(OUT / "page-structure.json"), "w"), indent=2, default=str)
        print(f"  ✓ page-structure.json ({len(structure)} sections)")

        # --- Extract custom properties (CSS variables) ---
        css_vars = await page.evaluate("""() => {
            const root = getComputedStyle(document.documentElement);
            const vars = {};
            for (let i = 0; i < 200; i++) {
                const prop = root[i];
                if (prop && prop.startsWith('--')) {
                    vars[prop] = root.getPropertyValue(prop).trim();
                }
            }
            return vars;
        }""")
        json.dump(css_vars, open(str(OUT / "css-variables.json"), "w"), indent=2)
        print(f"  ✓ css-variables.json ({len(css_vars)} vars)")

        # --- MOBILE ---
        ctx_m = await browser.new_context(
            viewport={"width": 390, "height": 844},
            device_scale_factor=3,
            user_agent="Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 Mobile/15E148 Safari/604.1"
        )
        page_m = await ctx_m.new_page()
        print("Loading mobile...")
        await page_m.goto("https://brigadeoverland.com/", wait_until="networkidle", timeout=60000)
        await page_m.wait_for_timeout(3000)

        await page_m.screenshot(path=str(OUT / "01-full-mobile.png"), full_page=True)
        print("  ✓ 01-full-mobile.png")

        await browser.close()

    # --- Report ---
    files = sorted(OUT.glob("*"))
    print(f"\n=== DONE: {len(files)} files ===")
    for f in files:
        size = f.stat().st_size
        print(f"  {f.name} ({size:,} bytes)")

asyncio.run(capture())
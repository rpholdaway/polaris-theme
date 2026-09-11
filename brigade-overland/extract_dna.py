"""Extract design DNA from Brigade Overland source HTML."""
import re, json

with open("/home/ryan/polaris-theme/brigade-overland/source.html","rb") as f:
    html = f.read(500000).decode("utf-8","ignore")

print("=== SHOPIFY THEME ===")
m = re.search(r'Shopify\.theme\s*=\s*(\{[^}]+\})', html)
if m: 
    try: print(json.dumps(json.loads(m.group(1)), indent=2))
    except: print(m.group(1)[:500])

print("\n=== FONTS ===")
for m in re.finditer(r'font-family:\s*([^;}]+)', html):
    f = m.group(1).strip()
    if f and 5 < len(f) < 200: print(f"  CSS -> {f}")
for m in re.finditer(r'"https://fonts\.googleapis\.com[^"]*"', html):
    print(f"  Google Fonts -> {m.group(0).strip(chr(34))}")

print("\n=== COLORS (hex, unique, sorted) ===")
hexes = set()
for m in re.finditer(r'#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})\b', html):
    hexes.add('#'+m.group(1).upper())
for h in sorted(hexes):
    print(f"  {h}")

print("\n=== STRUCTURAL: header/footer/nav/main tags ===")
for m in re.finditer(r'<(?:header|footer|nav|main)\b[^>]*?(?:class|id)="([^"]*)"[^>]*>', html):
    print(f"  {m.group(0)[:120]}")

print("\n=== TITLE + META ===")
m = re.search(r'<title>([^<]+)</title>', html)
if m: print(f"  TITLE: {m.group(1)}")

print("\n=== KEY CSS CLASSES (top 60, non-shopify) ===")
classes = set()
for m in re.finditer(r'class="([^"]{3,60})"', html):
    for c in m.group(1).split():
        cl = c.strip()
        if cl and len(cl) > 2 and not cl.startswith('shopify') and not cl.startswith('data-') and cl != 'class':
            classes.add(cl)
for c in sorted(classes)[:80]:
    print(f"  .{c}")

print("\n=== SECTION TYPES (data- attributes, headings) ===")
seen = set()
for m in re.finditer(r'<(?:section|div|header)[^>]*>((?:.|\n)*?)</(?:section|div|header)>', html[:200000]):
    block = m.group(0)[:300]
    h2 = re.search(r'<h[12][^>]*>([^<]+)</h[12]>', block)
    ds = re.search(r'data-section-type="([^"]+)"', block)
    if h2 or ds:
        key = (h2.group(1) if h2 else '') + (ds.group(1) if ds else '')
        if key not in seen:
            seen.add(key)
            print(f"  {h2.group(1) if h2 else ''} | data-section-type={ds.group(1) if ds else ''}")
print("\n=== DONE ===")
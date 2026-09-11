"""Analyze Brigade Overland CSS for design tokens."""
import re, json

with open("/home/ryan/polaris-theme/brigade-overland/css/app.css", "rb") as f:
    css = f.read().decode("utf-8", "ignore")

print("=== HEX COLORS (by frequency) ===")
hexes = re.findall(r'#(?:[0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})\b', css)
tally = {}
for h in hexes:
    key = h.lower()
    tally[key] = tally.get(key, 0) + 1
for h in sorted(tally, key=tally.get, reverse=True):
    print(f"  #{h.upper():8} x{tally[h]}")

print("\n=== FONT FAMILIES ===")
seen = set()
for m in re.finditer(r'font-family:\s*([^;}]+)', css):
    f = m.group(1).strip()
    if f and len(f) < 200 and f not in seen:
        seen.add(f)
        print(f"  {f}")

print("\n=== TAILWIND CONFIG / DESIGN TOKENS ===")
for m in re.finditer(r'--([a-z][\w-]*color[a-z0-9-]*):\s*([^;]+)', css, re.IGNORECASE):
    print(f"  --{m.group(1)}: {m.group(2).strip()}")
for m in re.finditer(r'--([a-z][\w-]*spacing[a-z0-9-]*):\s*([^;]+)', css, re.IGNORECASE):
    print(f"  --{m.group(1)}: {m.group(2).strip()}")
for m in re.finditer(r'--([a-z][\w-]*font[a-z0-9-]*):\s*([^;]+)', css, re.IGNORECASE):
    print(f"  --{m.group(1)}: {m.group(2).strip()}")

print("\n=== BACKGROUND GRADIENTS ===")
for m in re.finditer(r'background(?:-image)?:\s*(linear-gradient\([^)]+\))', css):
    g = m.group(1)
    if len(g) < 300:
        print(f"  {g}")

print("\n=== BOX SHADOWS ===")
for m in re.finditer(r'box-shadow:\s*([^;}]+)', css):
    print(f"  {m.group(1).strip()}")

print("\n=== TRANSITIONS / ANIMATIONS ===")
for m in re.finditer(r'(?:transition|animation):\s*([^;}]+)', css):
    val = m.group(1).strip()
    if len(val) < 200 and val not in seen_trans:
        pass
trans_seen = set()
for m in re.finditer(r'(?:transition(?:-[\w]+)?|animation):\s*([^;}]+)', css):
    val = m.group(1).strip()
    if len(val) < 200 and val not in trans_seen:
        trans_seen.add(val)
        print(f"  {val}")

print("\n=== BUTTON STYLES ===")
for m in re.finditer(r'\.button[\w-]*\s*\{([^}]+)\}', css):
    print(f"  {m.group(0)[:200]}")

print("\n=== MAX WIDTHS (layout constraints) ===")
widths = set(re.findall(r'max-width:\s*([^;}]+)', css))
for w in sorted(widths):
    print(f"  {w}")

print("\n=== DONE ===")
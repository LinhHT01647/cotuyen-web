# Co Tuyen — Logo Vector Specification

> **Version:** 1.0  
> **Date:** 2025-03-19  
> **Purpose:** Vector reconstruction guide for Stitch / Figma / Illustrator — đủ thông số để tái tạo nhiều phiên bản

---

## 1. Design System

### Color Palette (Tokens)

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| `color-bg` | `#0A0404` | 10, 4, 4 | Background mặc định |
| `color-primary` | `#DA0000` | 218, 0, 0 | Red accent – badge fill, emblem |
| `color-gold-light` | `#FFDD00` | 255, 221, 0 | Gold highlight – top of gradient |
| `color-gold-mid` | `#C8930A` | 200, 147, 10 | Gold mid – gradient stop |
| `color-gold-dark` | `#8B5E0A` | 139, 94, 10 | Gold shadow |
| `color-red-deep` | `#8B0000` | 139, 0, 0 | Bottom of text gradient |
| `color-emblem-bg` | `#2A3028` | 42, 48, 40 | Emblem hexagon fill (dark olive-grey) |
| `color-vehicle-red` | `#CC1111` | 204, 17, 17 | Silhouette của tank/heli/warship |
| `color-border-gold` | `#B8860B` | 184, 134, 11 | Viền ngoài emblem, border effects |
| `color-transparent` | `#00000000` | — | Alpha background |

---

## 2. Wordmark — "CO TUYEN"

### Typography Spec

| Property | Value |
|----------|-------|
| Font | Bold Condensed Military/Stencil style, weight 900 |
| Font suggestion | **Barlow Condensed Black**, **Bebas Neue**, **Oswald ExtraBold**, **Anton** |
| Text line 1 | `CO` |
| Text line 2 | `TUYEN` |
| Line 1 scale | ~40% of line 2 size |
| Letter spacing | `0.05em` |
| Text transform | `UPPERCASE` |

### Gradient Fill (CO TUYEN)

```
Direction: Top → Bottom (270°)
Stops:
  0%   → #FFDD00  (bright gold)
  35%  → #C8930A  (mid gold)
  65%  → #DA0000  (red transition)
  100% → #8B0000  (deep red)
```

### Decorative Elements (flanking CO)

- 2 horizontal bars left and right of "CO"
- Width: ~80px each, Height: ~6px
- Same gold gradient as text
- Small chamfer/bevel on ends (45° cut at outer corner)
- Y-position: vertically centered to "CO" baseline

### Layer Structure (vector groups)

```
[Group] Wordmark
  ├── [Text] CO — gradient fill, gold→red
  ├── [Rect] Deco-bar-left — gradient fill
  ├── [Rect] Deco-bar-right — gradient fill
  └── [Text] TUYEN — gradient fill, gold→red (larger)
```

### 3D/Bevel Effect

```
Highlight edge (top-left): +20% brightness stroke, 1px
Shadow edge (bottom-right): #0A0404, 2px
Inner bevel: 15% depth, 45° angle
```

---

## 3. Emblem Badge

### Outer Shape: Hexagon

```
Shape: Regular Hexagon (flat-top orientation)
Size reference: 512x512 canvas → hexagon ~ 480px width
Orientation: Flat sides top and bottom (NOT pointy-top)
Corner treatment: Sharp (no rounding)

Fill: #2A3028 (dark olive-grey)
Border: 4px solid #B8860B (dark gold)
Outer border: 6px solid #0A0404 (near-black, adds depth)
```

### Inner Triangle (gold outline)

```
Shape: Isoceles triangle, pointing up
Stroke only (no fill)
Stroke color: #FFDD00 → #C8930A gradient
Stroke width: 3px
Position: centered in hexagon, ~85% of hexagon width
Vertices:
  Top: center-top of hexagon interior
  Bottom-left: lower-left area
  Bottom-right: lower-right area
```

### Vehicle Silhouettes (red)

All silhouettes are **flat fill #CC1111**, no outline:

#### Helicopter (top, apex of triangle)
```
Position: top center, straddling the triangle apex
Size: ~120x60px (relative to 512 canvas)
Style: side-profile military helicopter silhouette
  - Main rotor visible (horizontal bar above fuselage)
  - Tail rotor small on right
  - Skid landing gear
```

#### Tank (bottom-left, inside triangle corner)
```
Position: bottom-left of triangle interior
Size: ~100x55px
Style: side-profile tank
  - Rectangular hull
  - Long gun barrel pointing right (horizontal)
  - Visible track/tread band at bottom
  - Small turret hatch rectangle on top
```

#### Warship (bottom-right, inside triangle corner)
```
Position: bottom-right of triangle interior
Size: ~140x50px
Style: side-profile naval destroyer
  - Long flat hull with distinct bow (left side) and stern
  - Superstructure/bridge structure in center-right area
  - Gun turret visible on deck
  - Antenna mast
```

### Center Token (face-down game piece)

```
Shape: Circle
Size: ~130px diameter (relative to 512 canvas)
Position: center of triangle, slightly below midpoint

Outer ring:
  Fill: #C8930A (gold)
  Width: 8px stroke

Inner circle:
  Fill: radial gradient
    Center: #3A3020 (dark brown-olive)
    Edge: #2A2010 (darker)

"?" Symbol:
  Color: #FFDD00
  Font: bold condensed, ~60px
  Weight: 900
  Position: centered
  Style: slightly worn/distressed
```

### Topographic Map Lines (background texture)

```
Layer: inside hexagon, behind all elements
Opacity: 15-20%
Color: #8A9A80 (muted green-grey)
Style: freeform wavy horizontal lines (military topo map)
Grid overlay: faint 30x30px grid, opacity 10%
```

---

## 4. Logo Versions & Usage Guide

### Version Matrix

| Version | Components | Use Case | File |
|---------|-----------|---------|------|
| **Full Horizontal** | Emblem + Wordmark side-by-side | Website header, banner, press kit | `logo-full.svg` |
| **Emblem Only** | Hexagon badge only | App icon, favicon, avatar | `logo-emblem.svg` |
| **Wordmark Only** (CO+TUYEN) | Text only, no emblem | Nav bar, compact header | `logo-wordmark.svg` |
| **Wordmark Full** (CO+TUYEN+FRONTLINE CHESS) | Text with subtitle | Splash screen, footer, credits | `logo-wordmark-full.svg` |
| **Monochrome** | Single color (#FFDD00 or white) | Dark overlay, merchandise, embroidery | `logo-mono.svg` |
| **Stacked** | Emblem top + Wordmark below | Square format, app store screenshot | `logo-stacked.svg` |

---

## 5. Artboard / Canvas Specs

| Version | Canvas Size | Padding |
|---------|------------|---------|
| Emblem | 512 × 512 | 16px all sides |
| Wordmark (CO+TUYEN) | 400 × 240 | 10px all sides |
| Wordmark Full | 480 × 320 | 10px all sides |
| Full Horizontal | 960 × 360 | 20px all sides |
| Stacked | 480 × 540 | 20px all sides |
| App Icon | 1024 × 1024 | 80px all sides |

---

## 6. AI Prompt — Recreate in Stitch / Midjourney / DALL-E

### Emblem Icon Prompt
```
Military strategy game emblem badge. Flat-top hexagonal shape, dark olive-grey fill (#2A3028), golden border.
Inside: a golden triangle outline. At triangle apex (top): red helicopter silhouette. 
Bottom-left: red tank silhouette. Bottom-right: red naval warship silhouette.
Center: circular game token, dark background, golden ring border, large "?" in golden yellow.
Background texture: faint topographic map lines.
Style: vector flat design, dark military aesthetic, no national symbols.
Colors: dark olive-grey, crimson red #DA0000, golden yellow #FFDD00, near-black #0A0404.
```

### Wordmark Prompt
```
Bold condensed military font wordmark. 
"CO" text smaller on top, two short horizontal gold bars flanking it left and right.
"TUYEN" large dominant text below.
Gold-to-red vertical gradient (#FFDD00 top → #8B0000 bottom).
3D bevel effect, metallic sheen. Dark or transparent background.
No national symbols. Universal military strategy aesthetic.
```

---

## 7. Export Checklist

- [ ] `logo-emblem.svg` — Clean SVG, no raster effects
- [ ] `logo-emblem.png` — 512x512, transparent background
- [ ] `logo-emblem@2x.png` — 1024x1024
- [ ] `logo-wordmark.svg` — Outlines converted (no live text)
- [ ] `logo-wordmark.png` — 400x240, transparent background
- [ ] `logo-full.svg` — Combined horizontal version
- [ ] `logo-full.png` — 960x360, transparent background
- [ ] `favicon.ico` — Multi-res: 16, 32, 48px embedded
- [ ] `apple-touch-icon.png` — 180x180

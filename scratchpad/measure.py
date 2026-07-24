#!/usr/bin/env python3
"""
Measure the TRUE overlay->product separation: the clean-background band that sits
between the burned-in overlay (header / price sticker, above) and the product mass
(below). This is independent of where keep_top was placed. A wide clean band = a
safe, high-clearance crop; a thin/zero band = the overlay hugs the product and a
1-2px slip ruins it -> what the >=2% floor is meant to exclude.

Method, per file:
  - background colour from the side borders of the photo region
  - a row is "clean" if >=90% of its pixels are within tol of background
  - product_top = first row starting a long (>=60px) run of busy rows (the product)
  - clearance = count of contiguous clean rows immediately above product_top
  - overlay_bottom = last busy row above that clean band (sanity/report only)
"""
import json
from pathlib import Path
import numpy as np
from PIL import Image

CAT = Path("/Users/john/Desktop/balloons/public/assets/catalog")
H = 1000
FLOOR = 0.02


def clearance(path):
    rgb = np.asarray(Image.open(CAT / path).convert("RGB")).astype(np.float32)
    h, w, _ = rgb.shape
    # background: side borders, sampled below the status bar
    border = np.concatenate([rgb[56:h-125, :12].reshape(-1, 3),
                             rgb[56:h-125, -12:].reshape(-1, 3)])
    bg = np.median(border, axis=0)
    dist = np.sqrt(((rgb - bg) ** 2).sum(axis=2))
    near_bg = dist < 34
    clean = near_bg.mean(axis=1) >= 0.90        # per-row clean flag
    busy = ~clean

    # product_top: first row (below the top black bar) that begins a >=60px busy run
    start = 60
    prod_top = None
    y = start
    while y < h - 125:
        if busy[y]:
            run = 1
            while y + run < h - 125 and busy[y + run]:
                run += 1
            if run >= 60:
                prod_top = y
                break
            y += run
        else:
            y += 1
    if prod_top is None:
        return None

    # clean band immediately above product
    c = 0
    yy = prod_top - 1
    while yy >= start and clean[yy]:
        c += 1
        yy -= 1
    overlay_bottom = yy  # last busy row above the clean band
    return {"product_top": int(prod_top), "overlay_bottom": int(overlay_bottom),
            "clear_px": int(c), "clear_pct": round(c / H, 4)}


def main():
    plan = json.load(open("/Users/john/Desktop/balloons/scratchpad/final_plan.json"))
    rows = []
    for p in plan:
        if p["bucket"] != 1:
            continue
        m = clearance(p["file"])
        p.update(m or {"clear_px": 0, "clear_pct": 0.0})
        p["below_floor"] = p["clear_pct"] < FLOOR
        rows.append(p)
    rows.sort(key=lambda r: r["clear_pct"], reverse=True)
    json.dump(rows, open("/Users/john/Desktop/balloons/scratchpad/measured.json", "w"), indent=1)
    for r in rows:
        flag = "  <FLOOR" if r["below_floor"] else ""
        print(f"{r['file']:40s} keep {r['keep_top']:3d}..{r['keep_bottom']:3d} "
              f"sep={r['clear_px']:3d}px ({r['clear_pct']*100:.1f}%) "
              f"[overlay_bot={r['overlay_bottom']} prod_top={r['product_top']}]{flag}")
    print(f"\n{sum(1 for r in rows if not r['below_floor'])} of {len(rows)} clear the 2% floor")


if __name__ == "__main__":
    main()

#!/usr/bin/env python3
"""
Detect Instagram-story overlay bands in catalog photos and classify croppability.

Two independent things are measured:

1. LETTERBOX CHROME (reliable): the black bars holding the iOS status bar at
   top and the send-message bar / story filmstrip at bottom. The photo is the
   longest contiguous run of non-black rows. Stripping these is always safe --
   they sit outside the photo entirely.

2. BURNED-IN STICKERS (heuristic): story header (avatar/username/date/X) and
   price/promo text drawn ON the photo. Cropping cannot remove these unless
   they hang off the top or bottom edge clear of the product. Scored, not
   certain -- every call is meant to be eyeballed before use.

Outputs JSON consumed by report.py.
"""
import json
import sys
from pathlib import Path

import numpy as np
from PIL import Image

CATALOG = Path("/Users/john/Desktop/balloons/public/assets/catalog")

DARK_LUMA = 40          # pixel counts as "black bar" below this luma
DARK_ROW_FRAC = 0.85    # row is letterbox if this fraction of it is dark

# Sticker/text pixels: near-white strokes or strongly saturated fills, both
# with hard edges. Product photos here are pastel and smoothly shaded.
WHITE_LUMA = 205
SAT_STRONG = 105
EDGE_STRONG = 40
STICKER_ROW_FRAC = 0.055   # fraction of row width that must look like text

MIN_W, MIN_H = 272, 220


def luma(rgb):
    return rgb[..., 0] * 0.299 + rgb[..., 1] * 0.587 + rgb[..., 2] * 0.114


def photo_bounds(lum):
    """Longest contiguous run of non-letterbox rows."""
    dark_row = (lum < DARK_LUMA).mean(axis=1) > DARK_ROW_FRAC
    best = (0, len(dark_row))
    best_len = -1
    start = None
    for y, d in enumerate(list(dark_row) + [True]):
        if not d and start is None:
            start = y
        elif d and start is not None:
            if y - start > best_len:
                best_len, best = y - start, (start, y)
            start = None
    return best


def text_mask(rgb):
    """Boolean map of pixels that look like burned-in text/sticker strokes."""
    f = rgb.astype(np.float32)
    mx, mn = f.max(axis=2), f.min(axis=2)
    sat = np.where(mx > 0, (mx - mn) / np.maximum(mx, 1) * 255, 0)
    lum_r = luma(f)

    gy = np.abs(np.diff(lum_r, axis=0, prepend=lum_r[:1]))
    gx = np.abs(np.diff(lum_r, axis=1, prepend=lum_r[:, :1]))
    edge = gx + gy

    return ((lum_r > WHITE_LUMA) | (sat > SAT_STRONG)) & (edge > EDGE_STRONG)


def runs(flags):
    """Yield (start, end) for each contiguous True run."""
    out, start = [], None
    for i, v in enumerate(list(flags) + [False]):
        if v and start is None:
            start = i
        elif not v and start is not None:
            out.append((start, i))
            start = None
    return out


def analyze(path):
    im = Image.open(path).convert("RGB")
    w, h = im.size
    rgb = np.asarray(im)
    lum = luma(rgb.astype(np.float32))

    p_top, p_bot = photo_bounds(lum)
    photo_h = p_bot - p_top

    # Text density per row, measured only inside the photo.
    tm = text_mask(rgb[p_top:p_bot])
    trow = tm.mean(axis=1) > STICKER_ROW_FRAC
    bands = [(a + p_top, b + p_top) for a, b in runs(trow) if b - a >= 8]

    # Where does each band sit within the photo, proportionally?
    def pos(y):
        return (y - p_top) / max(photo_h, 1)

    EDGE = 0.14  # bands wholly within this much of an edge can be cropped off
    lead = [b for b in bands if pos(b[1]) <= EDGE]
    trail = [b for b in bands if pos(b[0]) >= 1 - EDGE]
    middle = [b for b in bands if b not in lead and b not in trail]

    keep_top = max([b[1] for b in lead], default=p_top)
    keep_bot = min([b[0] for b in trail], default=p_bot)

    mid_rows = sum(b[1] - b[0] for b in middle)
    crop_h = keep_bot - keep_top

    return {
        "file": path.name,
        "w": w,
        "h": h,
        "photo_top": int(p_top),
        "photo_bottom": int(p_bot),
        "chrome_top": int(p_top),
        "chrome_bottom": int(h - p_bot),
        "keep_top": int(keep_top),
        "keep_bottom": int(keep_bot),
        "crop_w": int(w),
        "crop_h": int(crop_h),
        "bands_lead": [[int(a), int(b)] for a, b in lead],
        "bands_trail": [[int(a), int(b)] for a, b in trail],
        "bands_middle": [[int(a), int(b)] for a, b in middle],
        "mid_text_rows": int(mid_rows),
        "mid_text_frac": round(mid_rows / max(photo_h, 1), 4),
        "clearance_top": round((keep_top - p_top) / max(h, 1), 4),
        "clearance_bottom": round((p_bot - keep_bot) / max(h, 1), 4),
        "has_chrome": bool(p_top > 0 or p_bot < h),
        "too_small": bool(w < MIN_W or crop_h < MIN_H),
    }


def main():
    files = sorted(CATALOG.glob("*.jpg"))
    if len(sys.argv) > 1:
        want = set(sys.argv[1:])
        files = [f for f in files if f.name in want]
    print(json.dumps([analyze(f) for f in files], indent=1))


if __name__ == "__main__":
    main()

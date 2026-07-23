#!/usr/bin/env python3
"""
Apply the per-file keep-ranges from scratchpad/buckets.md.

Writes each cropped image back to its ORIGINAL filename, so no application code
has to change. Originals are recoverable from git history -- the script refuses
to run if the catalog has uncommitted changes.

Usage:
  python3 scratchpad/crop.py --dry-run          # report only, touch nothing
  python3 scratchpad/crop.py --only a.jpg b.jpg # crop just these
  python3 scratchpad/crop.py                    # crop every Bucket 1 file
"""
import argparse
import re
import subprocess
import sys
from pathlib import Path

from PIL import Image

ROOT = Path("/Users/john/Desktop/balloons")
CATALOG = ROOT / "public/assets/catalog"
BUCKETS = ROOT / "scratchpad/buckets.md"

MIN_W, MIN_H = 272, 220
JPEG_QUALITY = 92

# Source dimensions the ranges were computed against (all story screenshots).
SRC_W, SRC_H = 462, 1000

# Row of the Bucket-1 table:  | # | `file.jpg` | keep_top | keep_bottom | ...(any cols)
# Only the first four cells matter; anything after is free-form (status, notes).
ROW = re.compile(
    r"^\|\s*\d+\s*\|\s*`([^`]+)`\s*\|\s*(\d+)\s*\|\s*(\d+)\s*\|"
)


def load_plan():
    """Parse the Bucket-1 keep-range table straight out of buckets.md.

    Already-cropped files are left in the table for the record; the per-file
    size guard in main() harmlessly skips them (their height is no longer 1000).
    """
    plan = []
    for line in BUCKETS.read_text().splitlines():
        m = ROW.match(line)
        if not m:
            continue
        f, kt, kb = m.group(1), int(m.group(2)), int(m.group(3))
        plan.append({"file": f, "keep_top": kt, "keep_bottom": kb,
                     "src_w": SRC_W, "src_h": SRC_H})
    return plan


def git_clean_or_die():
    """Refuse to overwrite originals unless they are safely committed."""
    out = subprocess.run(
        ["git", "status", "--porcelain", "--", str(CATALOG)],
        cwd=ROOT, capture_output=True, text=True, check=True,
    ).stdout.strip()
    if out:
        sys.exit(
            "REFUSING TO RUN: catalog has uncommitted changes.\n"
            "Originals would not be recoverable from git. Commit first:\n" + out
        )

    untracked = subprocess.run(
        ["git", "ls-files", "--others", "--exclude-standard", "--", str(CATALOG)],
        cwd=ROOT, capture_output=True, text=True, check=True,
    ).stdout.strip()
    if untracked:
        sys.exit("REFUSING TO RUN: untracked files in catalog:\n" + untracked)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--dry-run", action="store_true")
    ap.add_argument("--only", nargs="*", default=None)
    args = ap.parse_args()

    if not args.dry_run:
        git_clean_or_die()

    plan = load_plan()
    if args.only:
        want = set(args.only)
        plan = [p for p in plan if p["file"] in want]
        missing = want - {p["file"] for p in plan}
        if missing:
            sys.exit(f"Not in plan: {sorted(missing)}")

    changed = 0
    for p in plan:
        path = CATALOG / p["file"]
        im = Image.open(path)
        w, h = im.size
        top, bottom = p["keep_top"], p["keep_bottom"]

        # Guard: the plan was computed against a specific source size. If the
        # file no longer matches, the offsets are meaningless -- skip it.
        if (w, h) != (p["src_w"], p["src_h"]):
            print(f"SKIP {p['file']}: size {w}x{h} != plan {p['src_w']}x{p['src_h']}")
            continue
        if not (0 <= top < bottom <= h):
            print(f"SKIP {p['file']}: bad range {top}..{bottom} for height {h}")
            continue

        new_h = bottom - top
        if w < MIN_W or new_h < MIN_H:
            print(f"SKIP {p['file']}: crop {w}x{new_h} under {MIN_W}x{MIN_H}")
            continue

        print(f"{'DRY ' if args.dry_run else ''}{p['file']}: "
              f"{w}x{h} -> {w}x{new_h}  (keep {top}..{bottom})")
        if not args.dry_run:
            im.crop((0, top, w, bottom)).save(
                path, "JPEG", quality=JPEG_QUALITY,
                progressive=True, optimize=True,
            )
        changed += 1

    print(f"\n{changed} file(s) {'would be' if args.dry_run else ''} cropped.")


if __name__ == "__main__":
    main()

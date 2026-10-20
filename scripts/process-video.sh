#!/usr/bin/env bash
# Prepare a product video: ≤720p, ≤5 MB, no audio, H.264 MP4 + a poster JPG.
#   scripts/process-video.sh path/to/clip.mov black-gold
# Writes public/assets/videos/<slug>.mp4 and public/assets/images/products/collections/<slug>-poster.jpg
# Then add to the product's data entry (lib/readySets.js):
#   videos: [{ src: '/assets/videos/<slug>.mp4', poster: '/assets/images/products/collections/<slug>-poster.jpg' }]
set -euo pipefail
[ $# -eq 2 ] || { echo "usage: $0 <input-video> <slug>"; exit 1; }
IN="$1"; SLUG="$2"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="$ROOT/public/assets/videos/$SLUG.mp4"
POSTER="$ROOT/public/assets/images/products/collections/$SLUG-poster.jpg"
MAX_BYTES=$((5 * 1024 * 1024))
command -v ffmpeg >/dev/null || { echo "ffmpeg not found (brew install ffmpeg)"; exit 1; }
mkdir -p "$(dirname "$OUT")" "$(dirname "$POSTER")"

DUR=$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$IN")
# target video bitrate (bits/s) so the file lands under ~90% of the limit
KBPS=$(python3 -c "d=float('$DUR'); print(max(150, min(2500, int($MAX_BYTES*8*0.9/max(d,0.1)/1000))))")
VF="scale=-2:'min(720,ih)',format=yuv420p"

encode() { # $1 = bitrate kbps
  ffmpeg -y -v error -i "$IN" -an -vf "$VF" -c:v libx264 -preset slow -b:v "${1}k" -maxrate "$((${1}*3/2))k" -bufsize "$((${1}*2))k" -movflags +faststart "$OUT"
}
encode "$KBPS"
# if still too big, step the bitrate down until it fits
while [ "$(stat -f%z "$OUT" 2>/dev/null || stat -c%s "$OUT")" -gt "$MAX_BYTES" ] && [ "$KBPS" -gt 150 ]; do
  KBPS=$((KBPS * 80 / 100)); echo "too big, retrying at ${KBPS}k"; encode "$KBPS"
done

ffmpeg -y -v error -ss 0.5 -i "$OUT" -frames:v 1 -q:v 3 "$POSTER" || ffmpeg -y -v error -i "$OUT" -frames:v 1 -q:v 3 "$POSTER"
SIZE=$(stat -f%z "$OUT" 2>/dev/null || stat -c%s "$OUT")
echo "video:  $OUT ($((SIZE / 1024)) KB, ${KBPS}k)"
echo "poster: $POSTER"

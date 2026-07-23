# Catalog overlay-crop buckets

_Regenerated 2026-07-22 from the real client photos (the original buckets.md was lost). Letterbox geometry measured programmatically (`scratchpad/analyze.py`); overlay-vs-product classification by vision pass + adversarial refute pass; every Bucket-1 keep-range and the pilot 10 confirmed by eye on rendered crops (`scratchpad/preview/`)._

## Summary

- **148** catalog images total
- **28** clean originals, no Instagram chrome — _no action_
- **120** Instagram-story screenshots (462×1000; black status bar + send-message/filmstrip bands)
  - **Bucket 1 — croppable: 27** (overlay clears the product; a deeper crop removes it)
  - **Bucket 2 — not croppable: 91** (overlay sits on the product itself)
  - **Marginal: 2** (croppable but <2% clearance — excluded from crop runs)

### Key findings

- **No image is croppable by stripping the black bands alone.** Every screenshot carries the Instagram *story header* (avatar / username / date / X) burned onto the photo just below the status bar, so Bucket 1 always means an **extended** crop that also takes off that header row.
- **Nothing falls under 272px wide.** All screenshots are 462px wide and stay 462 after a vertical crop (tightest result 462×456). The lost analysis's "7 under 272px" does not reproduce — it likely used a square/horizontal scheme. **These ranges are vertical-only.**
- **Bottom band starts at row 877, not 878** (1px dark transition). All crops cap `keep_bottom` at **876**; same 1px transition at the top (row 55). This was caught in adversarial verification after the first detector kept a black sliver.
- **30 files are byte-identical duplicates** (12 groups, listed at bottom) — cropping can't fix those.

## Bucket 1 — croppable (per-file keep ranges)

Row indices in the original 1000px-tall image; crop = `(0, keep_top, width, keep_bottom)`. ★ = pilot batch of 10, chosen to span every crop scenario (header-only, top-promo removal, bottom-sticker exclusion, foil shapes, extreme lower-panel) so quality is judged across the range. _Clearance is an approximate programmatic estimate of the overlay→product gap; it under-reads on product-filled crops, so pilots were confirmed visually rather than by this number._

| # | file | keep_top | keep_bottom | crop W×H | pilot | note |
|---|------|----------|-------------|----------|-------|------|
| 1 | `pink-cat-crown-set-baby-girl.jpg` | 125 | 745 | 462×620 | ★ |  |
| 2 | `silver-bouquet-confetti.jpg` | 120 | 715 | 462×595 | ★ | bottom price sticker excluded |
| 3 | `gold-engagement-ring-set.jpg` | 125 | 700 | 462×575 | ★ | bottom price sticker excluded |
| 4 | `blue-silver-baby-set.jpg` | 120 | 718 | 462×598 | ★ | bottom price sticker excluded |
| 5 | `blue-silver-men-s-bouquet.jpg` | 120 | 718 | 462×598 | ★ | bottom price sticker excluded |
| 6 | `beige-number-1-set-baby-boy.jpg` | 165 | 745 | 462×580 | ★ | bottom price sticker excluded at 745 |
| 7 | `blue-baby-blocks-set.jpg` | 225 | 876 | 462×651 | ★ |  |
| 8 | `gold-giraffe-set.jpg` | 175 | 876 | 462×701 | ★ |  |
| 9 | `black-silver-bouquet.jpg` | 120 | 876 | 462×756 | ★ |  |
| 10 | `white-red-bouquet.jpg` | 420 | 876 | 462×456 | ★ | lower close-up panel; upper collage discarded |
| 11 | `beige-elephant-set-baby-shower.jpg` | 185 | 876 | 462×691 |  |  |
| 12 | `beige-elephant-set.jpg` | 185 | 876 | 462×691 |  |  |
| 13 | `blue-baby-blocks-set-baby-boy.jpg` | 225 | 876 | 462×651 |  |  |
| 14 | `blue-baby-set-baby-boy.jpg` | 170 | 876 | 462×706 |  |  |
| 15 | `blue-number-6-set.jpg` | 170 | 876 | 462×706 |  |  |
| 16 | `gold-black-bouquet.jpg` | 125 | 876 | 462×751 |  |  |
| 17 | `green-number-2-set.jpg` | 125 | 876 | 462×751 |  |  |
| 18 | `mauve-bubble-set.jpg` | 130 | 876 | 462×746 |  |  |
| 19 | `pink-bubble-set-baby-girl.jpg` | 225 | 876 | 462×651 |  |  |
| 20 | `pink-bubble-set-for-her.jpg` | 225 | 876 | 462×651 |  |  |
| 21 | `pink-bubble-set-gender-party.jpg` | 146 | 725 | 462×579 |  | bottom bow tails kept to 725 |
| 22 | `pink-bubble-set.jpg` | 225 | 876 | 462×651 |  | corrected top 151->225 (150 CAD) |
| 23 | `pink-cat-crown-set-gold.jpg` | 125 | 695 | 462×570 |  | corrected bottom 710->695 |
| 24 | `pink-number-2-set.jpg` | 126 | 677 | 462×551 |  |  |
| 25 | `pink-number-25-set-for-her.jpg` | 190 | 876 | 462×686 |  |  |
| 26 | `pink-number-25-set.jpg` | 190 | 876 | 462×686 |  |  |
| 27 | `silver-bouquet.jpg` | 120 | 685 | 462×565 |  | bottom price sticker excluded |

## Marginal — croppable but below 2% clearance (excluded)

- `pink-number-15-set.jpg` — <2% clearance to balloon top
- `pink-number-5-set.jpg` — <2% clearance to balloon top

## Bucket 2 — overlay on the product, not croppable (91)

_Price/promo text, emoji, or the story header overlaps the product itself; no vertical crop removes it without cutting the product. Needs re-editing or reshoots._

<details><summary>5 that looked croppable but failed adversarial verification</summary>

- `beige-giraffe-set.jpg` — giraffe horns poke into Free-delivery banner
- `beige-gold-bouquet.jpg` — promo text overlaps balloon tops
- `beige-sage-green-bouquet.jpg` — 90 CAD sticker at balloon height, side
- `blue-bunny-set.jpg` — bunny ears amputated; overlay blocks higher crop
- `blue-number-6-set-baby-boy.jpg` — price sits over long strings

</details>

<details><summary>86 classified Bucket 2 directly</summary>

`baby-blocks-boy.jpg`, `baby-blocks-girl.jpg`, `beige-bunny-set.jpg`, `beige-giraffe-set-35.jpg`, `beige-heart-set-for-her.jpg`, `beige-heart-set.jpg`, `beige-number-8-set-baby-girl.jpg`, `beige-number-8-set-cream.jpg`, `beige-number-8-set.jpg`, `beige-rose-gold-bouquet.jpg`, `beige-sage-green-bouquet-sage-green.jpg`, `beige-teddy-bear-cutout.jpg`, `black-gold-men-s-bouquet-man-s-birthday.jpg`, `black-gold-men-s-bouquet.jpg`, `blue-elephant-set-baby-boy.jpg`, `blue-elephant-set.jpg`, `blue-navy-bouquet.jpg`, `blue-navy-men-s-bouquet-man-s-birthday.jpg`, `blue-navy-men-s-bouquet.jpg`, `blue-number-1-set-80.jpg`, `blue-number-1-set-baby-boy.jpg`, `blue-number-1-set-pink.jpg`, `blue-number-1-set.jpg`, `blue-number-6-set-baby-girl.jpg`, `first-birthday-set-boy.jpg`, `first-birthday-set-girl.jpg`, `gift-for-him-10-balloons.jpg`, `gift-for-him-15-balloons.jpg`, `giraffe-birthday-set-pink.jpg`, `giraffe-safari-set-sage.jpg`, `glitter-bubble-balloon-large.jpg`, `glitter-bubble-balloon-small.jpg`, `gold-confetti-bouquet.jpg`, `gold-polka-dot-bouquet.jpg`, `gold-rose-gold-bouquet.jpg`, `gold-silver-bouquet.jpg`, `green-number-6-set.jpg`, `happy-birthday-star-balloon.jpg`, `hedgehog-foil-balloon.jpg`, `mauve-number-5-set-baby-girl.jpg`, `number-15-set-gold.jpg`, `number-15-set-rose-gold.jpg`, `number-18-set-gold.jpg`, `number-18-set-silver.jpg`, `personalized-welcome-home-set.jpg`, `pink-baby-set-baby-girl.jpg`, `pink-balloon-bouquet-10.jpg`, `pink-balloon-bouquet-15.jpg`, `pink-balloon-bouquet-20.jpg`, `pink-balloon-bouquet-25.jpg`, `pink-bouquet-for-her.jpg`, `pink-bow-cutout-balloon.jpg`, `pink-bubble-set-white.jpg`, `pink-bunny-set.jpg`, `pink-cat-paw-cutout-balloon.jpg`, `pink-cat-set.jpg`, `pink-heart-bubble-set.jpg`, `pink-number-1-set-baby-girl.jpg`, `pink-number-1-set-gold.jpg`, `pink-number-1-set.jpg`, `pink-number-4-set.jpg`, `red-number-2-set.jpg`, `rose-gold-chrome-bouquet.jpg`, `rose-gold-engagement-ring-set.jpg`, `rose-gold-gold-bouquet-140.jpg`, `rose-gold-gold-bouquet-150.jpg`, `rose-gold-gold-bouquet-80.jpg`, `rose-gold-gold-bouquet-90.jpg`, `rose-gold-gold-bouquet-for-her.jpg`, `rose-gold-gold-bouquet-gold.jpg`, `rose-gold-gold-bouquet.jpg`, `rose-gold-number-2-set.jpg`, `rose-gold-number-3-set-gold.jpg`, `rose-gold-number-4-set.jpg`, `sage-green-bouquet.jpg`, `sage-green-bunny-set-90.jpg`, `sage-green-bunny-set.jpg`, `sage-green-gold-bouquet-gold.jpg`, `sage-green-gold-star-set.jpg`, `teddy-bear-foil-balloon.jpg`, `violet-blue-bouquet.jpg`, `violet-gold-bouquet.jpg`, `violet-heart-set.jpg`, `violet-number-25-set.jpg`, `violet-white-bouquet.jpg`, `whale-foil-balloon.jpg`

</details>

## Clean originals — no chrome, no action (28)

`beige-cream-bouquet.jpg`, `beige-number-1-set.jpg`, `beige-number-3-set.jpg`, `black-gender-reveal-set.jpg`, `blue-baby-set.jpg`, `blue-beige-baby-set.jpg`, `blue-gender-reveal-set.jpg`, `blue-gold-baby-set.jpg`, `blue-gold-bouquet.jpg`, `blue-green-baby-set.jpg`, `blue-men-s-bouquet.jpg`, `coral-pink-bouquet.jpg`, `graduation-class-of-bouquet.jpg`, `green-number-1-set.jpg`, `mauve-number-5-set.jpg`, `pink-baby-set.jpg`, `pink-bouquet.jpg`, `pink-cat-crown-set.jpg`, `pink-cream-ceiling-set.jpg`, `pink-gold-bouquet.jpg`, `pink-teddy-bear-set.jpg`, `pink-white-bouquet.jpg`, `rose-gold-number-3-set.jpg`, `sage-green-boho-pampas-set.jpg`, `sage-green-bubble-set.jpg`, `sage-green-gold-bouquet.jpg`, `silver-white-bouquet-white.jpg`, `silver-white-bouquet.jpg`

## Byte-identical duplicate groups (catalog issue, independent of cropping)

- `personalized-welcome-home-set.jpg`, `pink-heart-bubble-set.jpg`
- `baby-blocks-boy.jpg`, `baby-blocks-girl.jpg`
- `glitter-bubble-balloon-large.jpg`, `glitter-bubble-balloon-small.jpg`
- `number-15-set-gold.jpg`, `number-15-set-rose-gold.jpg`
- `hedgehog-foil-balloon.jpg`, `teddy-bear-foil-balloon.jpg`, `whale-foil-balloon.jpg`
- `gold-confetti-bouquet.jpg`, `gold-polka-dot-bouquet.jpg`, `rose-gold-chrome-bouquet.jpg`, `sage-green-gold-star-set.jpg`
- `beige-teddy-bear-cutout.jpg`, `happy-birthday-star-balloon.jpg`, `pink-bow-cutout-balloon.jpg`, `pink-cat-paw-cutout-balloon.jpg`
- `pink-balloon-bouquet-10.jpg`, `pink-balloon-bouquet-15.jpg`, `pink-balloon-bouquet-20.jpg`, `pink-balloon-bouquet-25.jpg`
- `gift-for-him-10-balloons.jpg`, `gift-for-him-15-balloons.jpg`
- `giraffe-birthday-set-pink.jpg`, `giraffe-safari-set-sage.jpg`
- `first-birthday-set-boy.jpg`, `first-birthday-set-girl.jpg`
- `number-18-set-gold.jpg`, `number-18-set-silver.jpg`

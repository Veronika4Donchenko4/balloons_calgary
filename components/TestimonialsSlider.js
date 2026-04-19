'use client'
import { useState } from 'react'

const testimonials = [
  {
    text: "The balloon arrangement for my daughter's birthday was absolutely stunning! Everyone at the party was amazed. The colors were perfect and the delivery was right on time.",
    author: "Sarah M.",
    role: "Birthday Party",
  },
  {
    text: "I ordered a romantic balloon set for our anniversary and it exceeded all expectations. My wife was so surprised and the quality was incredible. Will definitely order again!",
    author: "James K.",
    role: "Anniversary",
  },
  {
    text: "Used Balloons Calgary for my baby shower and it was the best decision. The pastel arrangement was exactly what I envisioned. Professional, beautiful, and hassle-free!",
    author: "Emily R.",
    role: "Baby Shower",
  },
  {
    text: "Outstanding service from start to finish. The custom balloon arch they created for our corporate event was a showstopper. Highly recommend for any occasion!",
    author: "David L.",
    role: "Corporate Event",
  },
]

export default function TestimonialsSlider() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((current + 1) % testimonials.length)
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length)

  const t = testimonials[current]

  return (
    <div className="testimonials-slider">
      <div className="testimonial-card">
        <div className="testimonial-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
        <p className="testimonial-text">&ldquo;{t.text}&rdquo;</p>
        <div className="testimonial-author">{t.author}</div>
        <div className="testimonial-role">{t.role}</div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '24px' }}>
        <button onClick={prev} className="btn btn-outline btn-sm" aria-label="Previous testimonial">&larr;</button>
        <span style={{ display: 'flex', alignItems: 'center', color: '#9CA3AF', fontSize: '0.85rem' }}>
          {current + 1} / {testimonials.length}
        </span>
        <button onClick={next} className="btn btn-outline btn-sm" aria-label="Next testimonial">&rarr;</button>
      </div>
    </div>
  )
}

import React from 'react'

export function accentE(text) {
  if (!text) return text
  const parts = String(text).split(/(E)/g)
  if (parts.length === 1) return text
  return parts.map((part, i) =>
    part === 'E' ? <span key={i} className="accent-letter">E</span> : part
  )
}

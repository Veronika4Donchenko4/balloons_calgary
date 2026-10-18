// Elegant stand-in for product photography: a gradient tile with a faint balloon.
export default function Placeholder({ gradient, label, className = '' }) {
  return (
    <div
      className={`ph ${className}`}
      style={{ background: gradient || 'linear-gradient(135deg, #E8DDD3, #F5F5F0)' }}
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      <span className="ph-icon">🎈</span>
    </div>
  )
}

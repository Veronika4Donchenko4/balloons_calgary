'use client'
import { useState } from 'react'
import { useCartStore } from '@/lib/cartStore'

export default function AddToCartButton({ item, className = '' }) {
  const addItem = useCartStore(s => s.addItem)
  const [showToast, setShowToast] = useState(false)

  const handleAdd = () => {
    addItem(item)
    setShowToast(true)
    setTimeout(() => setShowToast(false), 3000)
  }

  return (
    <>
      <button onClick={handleAdd} className={`btn btn-primary ${className}`}>
        Add to Cart
      </button>
      {showToast && (
        <div className="toast">
          Added {item.name} to cart
        </div>
      )}
    </>
  )
}

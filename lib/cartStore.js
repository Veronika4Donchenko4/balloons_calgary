'use client'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item) => {
        const items = get().items
        const existing = items.find(i => i.id === item.id)
        if (existing) {
          set({ items: items.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i) })
        } else {
          set({ items: [...items, { ...item, quantity: 1 }] })
        }
      },
      // A parent plus an add-on child (child.parentId === parent.id). The child
      // always follows its parent's quantity and is removed with it.
      addBundle: (parent, child) => {
        const items = get().items
        if (items.some(i => i.id === parent.id)) {
          set({ items: items.map(i => (i.id === parent.id || i.parentId === parent.id) ? { ...i, quantity: i.quantity + 1 } : i) })
        } else {
          set({ items: [...items, { ...parent, quantity: 1 }, { ...child, parentId: parent.id, quantity: 1 }] })
        }
      },
      removeItem: (id) => set({ items: get().items.filter(i => i.id !== id && i.parentId !== id) }),
      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          set({ items: get().items.filter(i => i.id !== id && i.parentId !== id) })
        } else {
          set({ items: get().items.map(i => (i.id === id || i.parentId === id) ? { ...i, quantity } : i) })
        }
      },
      clearCart: () => set({ items: [] }),
      getTotal: () => get().items.reduce((sum, i) => sum + i.price * i.quantity, 0),
      getCount: () => get().items.reduce((sum, i) => sum + (i.parentId ? 0 : i.quantity), 0),
    }),
    { name: 'balloons-cart' }
  )
)

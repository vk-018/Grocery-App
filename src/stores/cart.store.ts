import { create } from "zustand"
import { Product } from "../Types/product"

// Type for item inside cart
interface CartItem {
  product: Product
  quantity: number
}

// Store state + actions type
interface CartState {
  items: CartItem[]

  addToCart: (product: Product, quantity: number) => void
  removeFromCart: (productId: string) => void
  increaseQuantity: (productId: string) => void
  decreaseQuantity: (productId: string) => void
  clearCart: () => void
}


//creating a hooke
export const useCartStore = create<CartState>((set, get) => ({
  items: [],

  addToCart: (product, quantity) =>
  set((state) => {
    const existingItem = state.items.find(
      (item) => item.product.id === product.id
    )

    if (existingItem) {
      return {
        items: state.items.map((item) =>
          item.product.id === product.id
            ? {
                ...item,
                quantity: item.quantity + quantity,
              }
            : item
        ),
      }
    }

    return {
      items: [
        ...state.items,
        { product, quantity },
      ],
    }
  }),


  removeFromCart: (productId) => {
    set({
      items: get().items.filter(
        (item) => item.product.id !== productId
      ),
    })
  },

  increaseQuantity: (productId) => {
    set({
      items: get().items.map((item) =>
        item.product.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ),
    })
  },

  decreaseQuantity: (productId) => {
    set({
      items: get().items
        .map((item) =>
          item.product.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0),
    })
  },

  clearCart: () => {
    set({ items: [] })
  },
}))


import { create } from "zustand"
import { Product } from "../Types/product"

/**
 * Favourite Store
 * Manages wishlist state
 */
interface FavouriteState {
  favourites: Product[]
  addFavourite: (product: Product) => void
  removeFavourite: (id: string) => void
  isFavourite: (id: string) => boolean
}

export const useFavouriteStore =
  create<FavouriteState>((set, get) => ({

    favourites: [],

    addFavourite: (product) =>
      set((state) => ({
        favourites: [...state.favourites, product]
      })),

    removeFavourite: (id) =>
      set((state) => ({
        favourites: state.favourites.filter(
          (item) => item.id !== id
        )
      })),

    isFavourite: (id) =>
      get().favourites.some(
        (item) => item.id === id
      ),

  }))

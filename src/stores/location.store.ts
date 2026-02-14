import { create } from "zustand"

interface Location {
  zone: string
  area: string
}

interface LocationState {
  location: Location | null
  setLocation: (data: Location) => void
  clearLocation: () => void
}

export const useLocationStore =
  create<LocationState>((set) => ({
    location: null,

    setLocation: (data) =>
      set({ location: data }),

    clearLocation: () =>
      set({ location: null }),
  }))

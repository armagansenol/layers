import { create } from 'zustand'

interface State {
  isVisible: boolean
  isOpen: boolean
  currentRoute: 'features' | 'services' | 'resources' | 'requestADemo' | null
  setVisibility: (val: boolean) => void
  setIsOpen: (val: boolean) => void
  setCurrentRoute: (
    val: 'features' | 'services' | 'resources' | 'requestADemo' | null
  ) => void
}

export const useStore = create<State>((set) => ({
  isVisible: true,
  isOpen: false,
  currentRoute: null,
  setVisibility: (toggle: boolean) => set({ isVisible: toggle }),
  setIsOpen: (toggle: boolean) => set({ isOpen: toggle }),
  setCurrentRoute: (
    toggle: 'features' | 'services' | 'resources' | 'requestADemo' | null
  ) => set({ currentRoute: toggle }),
}))

export const useMenuStore = useStore

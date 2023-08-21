import { MainRoute } from '@/global'
import { create } from 'zustand'

interface State {
  isVisible: boolean
  isOpen: boolean
  isAbsolute: boolean
  currentRoute:
    | MainRoute.features
    | MainRoute.services
    | MainRoute.resources
    | null
  setVisibility: (val: boolean) => void
  setPosition: (val: boolean) => void
  setIsOpen: (val: boolean) => void
  setCurrentRoute: (
    val: MainRoute.features | MainRoute.services | MainRoute.resources | null
  ) => void
}

export const useStore = create<State>((set) => ({
  isVisible: true,
  isAbsolute: false,
  isOpen: false,
  currentRoute: null,
  setVisibility: (toggle: boolean) => set({ isVisible: toggle }),
  setPosition: (toggle: boolean) => set({ isAbsolute: toggle }),
  setIsOpen: (toggle: boolean) => set({ isOpen: toggle }),
  setCurrentRoute: (
    toggle: MainRoute.features | MainRoute.services | MainRoute.resources | null
  ) => set({ currentRoute: toggle }),
}))

export const useMenuStore = useStore

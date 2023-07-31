import { DynamicRoutes } from '@/global'
import { create } from 'zustand'

interface State {
  isVisible: boolean
  isOpen: boolean
  currentRoute:
    | DynamicRoutes.features
    | DynamicRoutes.services
    | DynamicRoutes.resources
    | null
  setVisibility: (val: boolean) => void
  setIsOpen: (val: boolean) => void
  setCurrentRoute: (
    val:
      | DynamicRoutes.features
      | DynamicRoutes.services
      | DynamicRoutes.resources
      | null
  ) => void
}

export const useStore = create<State>((set) => ({
  isVisible: true,
  isOpen: false,
  currentRoute: null,
  setVisibility: (toggle: boolean) => set({ isVisible: toggle }),
  setIsOpen: (toggle: boolean) => set({ isOpen: toggle }),
  setCurrentRoute: (
    toggle:
      | DynamicRoutes.features
      | DynamicRoutes.services
      | DynamicRoutes.resources
      | null
  ) => set({ currentRoute: toggle }),
}))

export const useMenuStore = useStore

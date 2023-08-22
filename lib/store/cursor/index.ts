import { create } from 'zustand'

export enum CursorType {
  default = 'default',
  marqueeLink = 'marqueeLink',
  drag = 'drag',
}

interface State {
  visibility: boolean
  cursorType: CursorType
  mediaSrc: string
  setType: (type: CursorType) => void
  setMediaSrc: (src: string) => void
  toggleVisibility: () => void
}

const useStore = create<State>((set, get) => ({
  visibility: true,
  cursorType: CursorType.default,
  mediaSrc: '',
  setType: (type) => set({ cursorType: type }),
  setMediaSrc: (src) => set({ mediaSrc: src }),
  toggleVisibility: () => set({ visibility: !get().visibility }),
}))

export const useCursorStore = useStore

import { create } from 'zustand'

interface State {
  isVisible: boolean
  messages: string[]
  setVisibility: (val: boolean) => void
  setMessages: (val: string) => void
  clearMessages: () => void
}

export const useStore = create<State>((set) => ({
  isVisible: false,
  messages: [],
  setVisibility: (toggle: boolean) => set({ isVisible: toggle }),
  setMessages: (message) =>
    set((state) => ({ messages: [...state.messages, message] })),
  clearMessages: () => set({ messages: [] }),
}))

export const useErrorStore = useStore

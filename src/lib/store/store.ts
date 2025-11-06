import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface JPAppStoreState {
  count: number;
  increment: () => void;
  decrement: () => void;
}

export const useStore = create<JPAppStoreState>()(
  persist(
    (set) => ({
      count: 0,
      increment: () => set((state) => ({ count: state.count + 1 })),
      decrement: () => set((state) => ({ count: state.count - 1 })),
    }),
    {
      name: 'jp-app-store',
    },
  ),
);

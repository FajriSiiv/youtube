import { create } from "zustand";

export const useStore = create((set) => ({
  sidebarState: false,
  onChangeSidebar: () =>
    set((state: any) => ({
      sidebarState: !state.sidebarState,
    })),
}));

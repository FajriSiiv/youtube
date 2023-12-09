import { create } from "zustand";
import { dataDutube } from "../../data/dataDutube";

export const useStore = create((set) => ({
  sidebarState: false,
  searchValue: "",
  dataYoutube: dataDutube,
  filteredData: [],
  isLoading: true,
  onChangeSidebar: () =>
    set((state: any) => ({
      sidebarState: !state.sidebarState,
    })),
  setSearchValue: (newValue: string) => set({ searchValue: newValue }),
  loadingPage: () => {
    set({ isLoading: true });

    setInterval(() => {
      set({ isLoading: false });
    }, 1000);
  },
  search: () => {
    const { searchValue, dataYoutube, loadingPage }: any = useStore.getState();

    set({ isLoading: true });

    const loadingInterval = setInterval(() => {
      if (searchValue.trim() === "" || searchValue === undefined) {
        set({ filteredData: dataYoutube });
      } else {
        const filteredData = dataYoutube.filter((item: any) =>
          item.title.toLowerCase().includes(searchValue.toLowerCase())
        );

        console.log("Search results:", filteredData);
        set({ filteredData, isLoading: false });
      }

      clearInterval(loadingInterval);
    }, 1000);
  },
}));

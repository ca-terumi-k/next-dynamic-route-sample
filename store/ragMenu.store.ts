import { create } from 'zustand';

interface RagPageState {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const useRagMenuStore = create<RagPageState>((set) => ({
  currentPage: 'home',
  setCurrentPage: (page) => set(() => ({ currentPage: page })),
}));

export default useRagMenuStore;
import { create } from 'zustand';

interface Message {
  message: string;
  sender: string;
}

interface ChatState {
  messagesByPage: { [page: string]: Message[] };
  addMessage: (page: string, message: string, sender: string) => void;
  clearMessages: (page: string) => void;
}

const useChatStore = create<ChatState>((set) => ({
  messagesByPage: {},
  addMessage: (page, message, sender) => set((state) => {
    const pageMessages = state.messagesByPage[page] || [];
    return {
      messagesByPage: {
        ...state.messagesByPage,
        [page]: [...pageMessages, { message, sender }],
      },
    };
  }),
  clearMessages: (page) => set((state) => {
    return {
      messagesByPage: {
        ...state.messagesByPage,
        [page]: [],
      },
    };
  }),
}));

export default useChatStore;

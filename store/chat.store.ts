import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Message {
  message: string;
  sender: string;
}

interface Chat {
  messages: Message[];
}

type Sender = 'user' | 'bot';

interface ChatState {
  messagesByPage: Record<string, Chat>;
  addMessage: (page: string, message: string, sender: Sender) => void;
  removeMessage: (page: string, index: number) => void;
  clearMessages: (page: string) => void;
  addBotResponse: (page: string) => void; // 追加
}

const useChatStore = create<ChatState>()(
  persist(
    (set) => ({
      messagesByPage: {},

      addMessage: (page, message, sender) =>
        set((state) => {
          const pageMessages = state.messagesByPage[page]?.messages || [];
          const updatedMessages = [...pageMessages, { message, sender }];

          // 更新されたメッセージをセット
          const newState = {
            messagesByPage: {
              ...state.messagesByPage,
              [page]: { messages: updatedMessages },
            },
          };

          // 一定確率で bot のメッセージを追加
          // if (sender === 'user' && Math.random() < 0.5) {
          if (sender === 'user') {
            setTimeout(() => {
              set((currentState) => ({
                messagesByPage: {
                  ...currentState.messagesByPage,
                  [page]: {
                    messages: [
                      ...currentState.messagesByPage[page].messages,
                      {
                        message: generateBotResponse(),
                        sender: 'bot',
                      },
                    ],
                  },
                },
              }));
            }, 0);
          }

          return newState;
        }),

      removeMessage: (page, index) =>
        set((state) => {
          const pageMessages = state.messagesByPage[page]?.messages || [];
          if (index < 0 || index >= pageMessages.length) return state;
          return {
            messagesByPage: {
              ...state.messagesByPage,
              [page]: {
                messages: pageMessages.filter((_, i) => i !== index),
              },
            },
          };
        }),

      clearMessages: (page) =>
        set((state) => {
          if (!state.messagesByPage[page]?.messages.length) return state;
          return {
            messagesByPage: {
              ...state.messagesByPage,
              [page]: { messages: [] },
            },
          };
        }),

      // Bot のメッセージを手動で追加するメソッド
      addBotResponse: (page) =>
        set((state) => {
          const pageMessages = state.messagesByPage[page]?.messages || [];
          return {
            messagesByPage: {
              ...state.messagesByPage,
              [page]: {
                messages: [
                  ...pageMessages,
                  { message: generateBotResponse(), sender: 'bot' },
                ],
              },
            },
          };
        }),
    }),
    {
      name: 'chat-store',
    }
  )
);

// Bot のメッセージをランダムに生成
function generateBotResponse(): string {
  console.log('Bot response generated');
  const responses = [
    'こんにちは！どうしましたか？',
    'それは面白いですね！',
    'なるほど、もっと詳しく教えてください。',
    'うーん、ちょっと考えさせてください。',
    'それはいい質問ですね！',
    'すごい！',
  ];
  return responses[Math.floor(Math.random() * responses.length)];
}

export default useChatStore;

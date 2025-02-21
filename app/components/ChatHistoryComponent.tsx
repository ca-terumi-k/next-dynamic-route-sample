'use client';
import React, { useMemo } from 'react';
import useChatStore from '@/store/chat.store';

interface ChatHistoryProps {
  pageName: string;
}

export const ChatHistory = ({ pageName }: ChatHistoryProps) => {
  const messagesByPage = useChatStore((state) => state.messagesByPage);

  // メッセージの取得を useMemo でキャッシュ
  const messages = useMemo(() => messagesByPage[pageName]?.messages ?? [], [messagesByPage, pageName]);

  return (
    <div className="space-y-4">
      {messages.length === 0 ? (
        <p className="text-gray-500">メッセージがありません。</p>
      ) : (
        messages.map((entry, index) => (
          <div
            key={index}
            className={`p-3 rounded-lg ${
              entry.sender.toLowerCase() === 'bot' ? 'bg-gray-200' : 'bg-blue-200 self-end'
            }`}
          >
            {entry.message}
          </div>
        ))
      )}
    </div>
  );
};

'use client';
import React from 'react';
import useChatStore from '@/store/chat.store';

interface ChatHistoryProps {
  pageName : string;
}



export const ChatHistory = ({ pageName } : ChatHistoryProps) => {
  const { messagesByPage } = useChatStore();
  const messages = messagesByPage[pageName] || [];

  return (
    <div className="space-y-4">
      {messages.map((entry: { sender: string; message: string }, index: number) => (
        <div
          key={index}
          className={`p-3 rounded-lg ${entry.sender === 'bot' ? 'bg-gray-200' : 'bg-blue-200 self-end'}`}
        >
          {entry.message}
        </div>
      ))}
    </div>
  );
}

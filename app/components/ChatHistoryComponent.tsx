'use client';
import React, { useMemo } from 'react';
import useChatStore from '@/store/chat.store';
import { CiUser } from "react-icons/ci";
import { FaRobot } from "react-icons/fa";

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
            className={`flex items-center items-start space-x-2 ${
              entry.sender.toLowerCase() === 'bot' ? 'flex-row' : 'flex-row-reverse'
            }`}
            >
            <div className="flex-shrink-0">
              {entry.sender.toLowerCase() === 'bot' ? 
                <FaRobot className="w-6 h-6" />: 
                <CiUser className="w-6 h-6" />
              }
            </div>
            <div
              className={`p-3 rounded-lg max-w-xs ${
              entry.sender.toLowerCase() === 'bot' ? 'bg-gray-200' : 'bg-blue-200 self-end'
              }`}
            >
              {entry.message}
            </div>
            </div>
        ))
      )}
    </div>
  );
};

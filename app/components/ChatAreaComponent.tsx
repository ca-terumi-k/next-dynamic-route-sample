'use client';
import React from 'react';
import { ChatInputBtn } from './ChatInputBtnComponent';
import { ChatHistory } from './ChatHistoryComponent';
import useChatStore from '@/store/chat.store';

interface ChatAreaProps {
  title: string;
  page_name: string;
}

export const ChatArea = ({ title, page_name }: ChatAreaProps) => {
  const clearMessages = useChatStore((state) => state.clearMessages);

  return (
    <>
      <div className="flex flex-col h-full bg-white rounded-lg shadow-lg">
        <div className='flex justify-between items-center p-4 border-b'>
          <h1 className="text-2xl font-bold">{title}</h1>
          <button 
            onClick={() => clearMessages(page_name)}
            className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg transition"
          >
            Clear Chat
          </button>
        </div>
        <div className="flex-grow overflow-y-auto p-4">
          <ChatHistory pageName={page_name} />
        </div>
        <ChatInputBtn pageName={page_name}/>
      </div>
    </>
  );
}

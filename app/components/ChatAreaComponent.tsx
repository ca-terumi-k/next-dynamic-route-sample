import React from 'react';
import { ChatInputBtn } from './ChatInputBtnComponent';
import { ChatHistory } from './ChatHistoryComponent';

interface ChatAreaProps {
  title: string;
  page_name: string;
}

export const ChatArea = ({ title, page_name } : ChatAreaProps) => {
  return (
    <>
      <div className="flex flex-col h-full bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">{title}</h1>
        <div className="flex-grow overflow-y-auto p-4">
          <ChatHistory pageName={page_name} />
        </div>
        <ChatInputBtn pageName={page_name}/>
      </div>
    </>
  );
}
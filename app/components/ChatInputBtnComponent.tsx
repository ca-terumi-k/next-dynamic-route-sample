'use client';
import { useState } from 'react';
import useChatStore from '@/store/chat.store';

interface ChatInputBtnProps {
  pageName : string;
}

export const ChatInputBtn = ({ pageName } : ChatInputBtnProps) => {
  const [message, setMessage] = useState('');
  const addMessage = useChatStore((state) => state.addMessage);

  const handleSend = () => {
    if (message.trim()) {
      addMessage(pageName , message, 'User');
      setMessage('');
    }
  };

  return (
    <>
      <form
        className="p-4 bg-gray-100 border-t border-gray-300 flex items-center"
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
      >
        <input
          type="text"
          placeholder="Type your message..."
          className="w-full p-2 border border-gray-300 rounded-lg"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="button"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg ml-2"
          onClick={handleSend}
        >
          Template
        </button>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg ml-2"
        >
          Send
        </button>
      </form>
    </>
  );
};
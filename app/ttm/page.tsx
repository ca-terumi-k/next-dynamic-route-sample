'use client';
import { use, useEffect, useState } from "react";

export default function Home() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [showTemplateModal, setShowTemplateModal] = useState(false);
  const [showTemplateForm, setShowTemplateForm] = useState(false);
  const [templates, setTemplates] = useState([
    "Hello",
    "How are you?",
    "Good morning",
    "Good night",
    "What's up?",
    "See you later",
    "Take care",
    "Thank you",
    "You're welcome",
    "Sorry",
    "No problem",
    "Yes",
    "No",
    "Maybe",
    "I don't know",
    "Can you help me?",
    "I need assistance",
    "Let's meet",
    "Call me",
    "Email me",
    "I'll be there",
    "I'm busy",
    "Talk to you soon",
    "Goodbye",
    "Have a nice day",
    "Congratulations",
    "Happy Birthday",
    "Merry Christmas",
    "Happy New Year",
    "Good luck",
  ]);

  const handleCloseModal = () => {
      setShowTemplateModal(false);
      setShowTemplateForm(false);
  };

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, input]);
      setInput("");
    }
  };

  const toggleTemplateModal = () => {
    setShowTemplateModal(!showTemplateModal);
  }

  const toggleTemplateForm = () => {
    setShowTemplateForm(!showTemplateForm);
    toggleTemplateModal();
  }

  const [newTemplate, setNewTemplate] = useState("");

  return (
    <div className="flex flex-col h-full bg-gray-100 p-4">
      <div className="flex-grow p-4 overflow-y-auto">
        {messages.map((message, index) => (
          <div key={index} className="mb-2 p-2 bg-white rounded shadow">
            {message}
          </div>
        ))}
      </div>
      <div className="p-4 border-t border-gray-200">
        {showTemplateForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center w-full">
            <div className="bg-white p-8 rounded-lg shadow-lg w-3/4 h-auto mx-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold mb-6">Add New Template</h2>
                <button onClick={toggleTemplateForm} className="text-gray-500 hover:text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
              </button>
            </div>
            <textarea
              value={newTemplate}
              onChange={(e) => setNewTemplate(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded mb-6 h-48 resize-none"
              placeholder="Enter new template..." />
            <div className="flex justify-end">
              <button
                onClick={() => {
                  if (newTemplate.trim()) {
                    setTemplates([...templates, newTemplate]);
                    setNewTemplate("");
                    toggleTemplateForm();
                  }
                } }
                className="p-3 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Add Template
              </button>
              <button
                onClick={toggleTemplateForm}
                className="p-3 bg-red-500 text-white rounded hover:bg-red-600 ml-4"
              >
                Cancel
              </button>
            </div>
          </div>
      </div>
        )}
    
        {showTemplateModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center w-full">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold mb-6">Templates</h2>
                  <button onClick={handleCloseModal} className="text-gray-500 hover:text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
              </div>
              <div className="grid grid-cols-6 gap-4 max-h-60 overflow-y-auto w-full">
                {templates.map((template, index) => (
                  <div key={index} className="relative p-4 bg-gray-100 rounded-lg shadow-md">
                    <button
                      onClick={() => {
                        setInput(template);
                        toggleTemplateModal();
                      } }
                      className="w-full text-left"
                    >
                      {template}
                    </button>
                    <button
                      onClick={() => {
                        const newTemplates = templates.filter((_, i) => i !== index);
                        setTemplates(newTemplates);
                      } }
                      className="absolute top-1 right-1 text-red-500"
                    >
                      ✖
                    </button>
                  </div>
                ))}
                <div className="relative p-4 bg-gray-100 rounded-lg shadow-md flex items-center justify-center">
                  <button
                    onClick={toggleTemplateForm}
                    className="w-full h-full text-center text-blue-500 border border-dashed border-blue-500 rounded-lg p-4 hover:bg-blue-100"
                  >
                    + Add Template
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
    </div>
    <div className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow p-2 border border-gray-300 rounded-l"
          placeholder="Type your message..." />
        <button
          onClick={toggleTemplateModal}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg ml-2"
        >
          Temp
        </button>
        <button
          onClick={handleSend}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg ml-2"
        >
          Send
        </button>
      </div>
    </div>
  );
}

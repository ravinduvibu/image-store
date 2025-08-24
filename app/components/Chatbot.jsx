"use client";

import { useState, useRef, useEffect } from "react";

export default function Chatbot() {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hi! Ask me about pricing, license, or downloads." },
  ]);
  const [input, setInput] = useState("");
  const listRef = useRef(null);

  // simple predefined Q&A
  const qa = [
    { k: ["price", "pricing"], a: "Plans: Basic $9, Pro $29, Unlimited $99." },
    { k: ["license"], a: "All purchases include a royalty-free license." },
    { k: ["download"], a: "Downloads are instant after purchase." },
    {
      k: ["contact", "support"],
      a: "Reach us via the contact form below or email support@example.com.",
    },
  ];

  function findAnswer(text) {
    const t = text.toLowerCase();
    for (const pair of qa) {
      if (pair.k.some((kw) => t.includes(kw))) return pair.a;
    }
    return "I’m just a demo bot. Try asking about pricing, license, or downloads.";
  }

  function sendMessage(e) {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg = { role: "user", text: input.trim() };
    const botMsg = { role: "bot", text: findAnswer(input) };
    setMessages((m) => [...m, userMsg, botMsg]);
    setInput("");
  }

  // auto-scroll to bottom
  useEffect(() => {
    const el = listRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, chatOpen]);

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setChatOpen(true)}
        className={`fixed bottom-6 right-6 z-50 rounded-full bg-blue-600 p-4 text-white shadow-lg hover:bg-blue-700 ${
          chatOpen ? "hidden" : ""
        }`}
      >
        💬
      </button>

      {/* Chat widget */}
      {chatOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-80 rounded-lg border bg-white shadow-xl flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-center border-b p-3">
            <span className="font-semibold">Chatbot</span>
            <button onClick={() => setChatOpen(false)} className="px-2">
              ×
            </button>
          </div>

          {/* Messages */}
          <div
            ref={listRef}
            className="flex-1 overflow-y-auto p-3 space-y-2 text-sm max-h-80"
          >
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${
                  m.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`px-3 py-2 rounded-lg ${
                    m.role === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-neutral-900"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <form onSubmit={sendMessage} className="flex border-t p-2 gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 border rounded-md px-2 py-1 text-sm"
              placeholder="Type a message..."
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-3 rounded-md hover:bg-blue-700"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
}

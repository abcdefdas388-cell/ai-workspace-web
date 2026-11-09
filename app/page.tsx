"use client";

import { useState } from "react";

export default function Home() {
  const [prompt, setPrompt] = useState("");

  const suggestions = [
    "Build me a modern website",
    "Explain Python from zero",
    "Create a React dashboard",
    "Help me debug my code",
  ];

  return (
    <main className="min-h-screen bg-[#09090b] text-white flex">
      <aside className="hidden md:flex w-64 border-r border-white/10 p-5 flex-col">
        <h1 className="text-xl font-bold mb-10">✦ AI Workspace</h1>
        <button className="bg-white/10 rounded-xl p-3 text-left mb-6">
          + New Chat
        </button>
        <p className="text-xs text-gray-500 mb-3">WORKSPACE</p>
        <nav className="space-y-4 text-gray-300">
          <p>✧ AI Chat</p>
          <p>⌘ Coding Assistant</p>
          <p>▣ App Builder</p>
          <p>◷ History</p>
          <p>⚙ Settings</p>
        </nav>
        <div className="mt-auto text-sm text-gray-500">
          Free Plan · Demo
        </div>
      </aside>

      <section className="flex-1 flex flex-col">
        <header className="h-16 border-b border-white/10 flex items-center justify-between px-6">
          <span className="font-semibold">AI Workspace</span>
          <button className="text-sm bg-white/10 px-4 py-2 rounded-lg">
            Upgrade
          </button>
        </header>

        <div className="flex-1 flex flex-col items-center justify-center px-5 py-12">
          <div className="text-center max-w-2xl w-full">
            <div className="text-sm text-violet-300 mb-5">
              YOUR PERSONAL AI WORKSPACE
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-5">
              What can I help you <span className="text-violet-400">build?</span>
            </h2>
            <p className="text-gray-400 mb-10">
              Chat, code, create and turn your ideas into reality.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {suggestions.map((item) => (
                <button
                  key={item}
                  onClick={() => setPrompt(item)}
                  className="text-left p-4 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/10 text-sm text-gray-300"
                >
                  {item} →
                </button>
              ))}
            </div>

            <div className="rounded-2xl border border-white/15 bg-[#18181b] p-3">
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Ask anything or describe what you want to build..."
                className="w-full bg-transparent outline-none resize-none p-3 min-h-24 text-white placeholder:text-gray-500"
              />
              <div className="flex justify-between items-center px-2 pb-1">
                <span className="text-xs text-gray-500">
                  AI Workspace · Demo
                </span>
                <button
                  onClick={() => alert("AI connection coming soon!")}
                  className="bg-violet-600 hover:bg-violet-500 rounded-xl px-5 py-2 text-sm font-medium"
                >
                  Send ↑
                </button>
              </div>
            </div>

            <p className="text-xs text-gray-600 mt-5">
              AI can make mistakes. Verify important information.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
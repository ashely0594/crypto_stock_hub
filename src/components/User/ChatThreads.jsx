import React from "react";
import { MessageCircle } from "lucide-react";

export default function ChatThreads() {
  const threads = [
    {
      id: 1,
      name: "Crypto Trading Group",
      lastMessage: "ETH looking strong today!",
      unread: 3,
      avatar: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d",
    },
    {
      id: 2,
      name: "Stock Analysis",
      lastMessage: "NASDAQ futures up 2%",
      unread: 1,
      avatar: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3",
    },
    {
      id: 3,
      name: "Technical Analysis",
      lastMessage: "Breaking: S&P 500 resistance level",
      unread: 0,
      avatar: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3",
    },
  ];

  return (
    <aside className="hidden lg:block w-80 border-l bg-white dark:bg-gray-800 p-4 shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Trading Groups
        </h2>
        <MessageCircle size={24} className="text-gray-600 dark:text-gray-300" />
      </div>

      <div className="space-y-4">
        {threads.map((thread) => (
          <div
            key={thread.id}
            className="flex items-center gap-3 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg cursor-pointer transition-all"
          >
            <img
              src={thread.avatar}
              alt={thread.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 dark:text-white">
                {thread.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                {thread.lastMessage}
              </p>
            </div>
            {thread.unread > 0 && (
              <span className="bg-blue-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {thread.unread}
              </span>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
}

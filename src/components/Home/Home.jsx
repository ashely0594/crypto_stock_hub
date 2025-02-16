import React, { useState } from "react";
import { Menu } from "lucide-react";
import { Sidebar } from "./Sidebar";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className={`w-full min-h-screen ${isDarkMode ? "dark bg-gray-900 text-white" : "bg-gray-50 text-gray-900"}`}>
      <main className="w-full min-h-screen p-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold">CryptoStockHub</h1>
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg"
            >
              <Menu size={24} />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-md shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Recent Posts</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Your feed is empty. Start connecting with others!
              </p>
            </div>
            <div className="p-6 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-md shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Learning Resources</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Explore our beginner, intermediate, and advanced courses.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-md shadow-lg">
              <h2 className="text-xl font-semibold mb-4">AI Assistant</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Get personalized crypto and stock insights with our AI chat.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Sidebar Component */}
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        isDarkMode={isDarkMode}
        onThemeToggle={toggleTheme}
      />
    </div>
  );
}





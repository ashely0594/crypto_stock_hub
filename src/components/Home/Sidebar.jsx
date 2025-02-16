import React, { useState } from "react";
import {
  Home,
  BookOpen,
  MessageSquare,
  Users,
  Plus,
  Sun,
  Moon,
  ChevronLeft,
  Newspaper,
  TrendingUp,
  GraduationCap,
  ChevronDown,
  ChevronUp,
  LogOut,
  Settings,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Sidebar = ({ isOpen, onClose, isDarkMode, onThemeToggle }) => {
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user"); // Clear user session
    sessionStorage.removeItem("user");
    navigate("/"); // ✅ Redirect to Landing Page (Correct Route)
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full w-64 transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="h-full backdrop-blur-md bg-white/30 dark:bg-gray-800/30 shadow-lg border-l border-gray-200 dark:border-gray-700">
        <div className="p-4 flex flex-col h-full">
          <button onClick={onClose} className="mb-8 hover:text-blue-500">
            <ChevronLeft size={24} />
          </button>
          <div className="space-y-6 flex-grow">
            <NavItem icon={<Home />} label="Dashboard" />
            <NavItem icon={<Users />} label="Social Feed" />
            <NavItem icon={<BookOpen />} label="Resources" />
            <NavItem icon={<GraduationCap />} label="Courses" />
            <NavItem icon={<MessageSquare />} label="AI Chat" />
            <NavItem icon={<TrendingUp />} label="Market Trends" />
            <NavItem icon={<Newspaper />} label="News" />
            <NavItem icon={<Plus />} label="Create Post" />
          </div>

          {/* Account Section */}
          <div className="mt-auto mb-4">
            <button
              onClick={() => setIsAccountOpen(!isAccountOpen)}
              className="w-full p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-between"
            >
              <span className="font-medium">Account</span>
              {isAccountOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {isAccountOpen && (
              <div className="mt-2 ml-2 space-y-2">
                <NavItem icon={<Settings size={20} />} label="Settings" />
                <button
                  onClick={handleLogout} // ✅ Logout Button
                  className="w-full p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center gap-2 text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300"
                >
                  <LogOut size={20} />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={onThemeToggle}
            className="w-full p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center gap-2"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            <span>{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const NavItem = ({ icon, label, className = "" }) => (
  <button className={`w-full p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center gap-2 ${className}`}>
    {icon}
    <span>{label}</span>
  </button>
);







     
  
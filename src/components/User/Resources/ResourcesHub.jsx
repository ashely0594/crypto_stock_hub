import React, { useState } from "react";
import { ArticlePreview } from "./ArticlePreview";
import { Search, Home, BookOpen, MessageSquare, Users, Sun, Moon, Newspaper, TrendingUp, GraduationCap, ChevronLeft, ChevronUp, ChevronDown, LogOut, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const ResourcesHub = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem("theme") === "dark");
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  // Toggle Dark Mode
  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  // Handles logout functionality
  const handleLogout = () => {
    localStorage.removeItem("user");
    sessionStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div 
      className={`min-h-screen bg-gray-50 w-full ${isDarkMode ? "dark bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}
      onMouseMove={(e) => {
        if (e.clientX > window.innerWidth - 50) {
          setIsSidebarOpen(true);
        }
      }}
    >
      {/* Sidebar that appears on hover */}
      <div
        className={`fixed top-0 right-0 h-full w-64 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onMouseLeave={() => setIsSidebarOpen(false)}
      >
        <div className="h-full backdrop-blur-md bg-white/30 dark:bg-gray-800/30 shadow-lg border-l border-gray-200 dark:border-gray-700">
          <div className="p-4 flex flex-col h-full">
            <button onClick={() => setIsSidebarOpen(false)} className="mb-8 hover:text-blue-500">
              <ChevronLeft size={24} />
            </button>
            <div className="space-y-6 flex-grow">
              <NavItem icon={<Home />} label="Dashboard" onClick={() => navigate("/home")} />
              <NavItem icon={<Users />} label="Social Feed" onClick={() => navigate("/social-feed")} />
              <NavItem icon={<BookOpen />} label="Resources" onClick={() => navigate("/resources")}/>
              <NavItem icon={<GraduationCap />} label="Courses" onClick={() => navigate("/courses")} />
              <NavItem icon={<MessageSquare />} label="AI Chat" />
              <NavItem icon={<TrendingUp />} label="Market Trends" />
              <NavItem icon={<Newspaper />} label="News" />
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
                    onClick={handleLogout}
                    className="w-full p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center gap-2 text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300"
                  >
                    <LogOut size={20} />
                    <span>Logout</span>
                  </button>
                </div>
              )}
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="w-full p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center gap-2"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              <span>{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Page Content */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trading & Crypto Resources
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mb-8">
            Explore our comprehensive collection of guides, tutorials, and insights about trading and cryptocurrency.
          </p>
          <div className="relative max-w-xl">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="search"
              placeholder="Search resources..."
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Featured Guides</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div onClick={() => navigate("/resources-page")} className="cursor-pointer">
              <ArticlePreview
                title="Essential Trading & Crypto Platforms Guide"
                description="A comprehensive overview of the best trading platforms, crypto tools, and digital wallets for traders of all experience levels."
                readTime="5 min read"
                date="February 2024"
                category="Platforms"
                link="/resources-page"
              />
            </div>
            <ArticlePreview
              title="Understanding Technical Analysis"
              description="Learn the fundamentals of technical analysis and how to apply it to both stock and crypto markets."
              readTime="8 min read"
              date="July 2023"
              category="Education"
              link="/resources/technical-analysis"
            />
          </div>
 </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Getting Started</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <ArticlePreview
              title="Crypto Trading 101"
              description="Everything you need to know to start trading cryptocurrency safely and effectively."
              readTime="6 min read"
              date="July 2023"
              category="Basics"
              link="/resources/crypto-101"
            />
            <ArticlePreview
              title="Stock Market Fundamentals"
              description="A beginner's guide to understanding stock market basics and making your first trade."
              readTime="7 min read"
              date="July 2023"
              category="Basics"
              link="/resources/stock-basics"
            />
            <ArticlePreview
              title="Wallet Security Guide"
              description="Learn how to secure your crypto assets and protect yourself from common threats."
              readTime="4 min read"
              date="July 2023"
              category="Security"
              link="/resources/wallet-security"
            />
          </div>
        </section>
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Advanced Topics</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <ArticlePreview
              title="DeFi Deep Dive"
              description="Understanding decentralized finance and its role in the crypto ecosystem."
              readTime="10 min read"
              date="July 2023"
              category="Advanced"
              link="/resources/defi-guide"
            />
            <ArticlePreview
              title="Options Trading Strategies"
              description="Advanced options trading techniques for experienced traders."
              readTime="12 min read"
              date="July 2023"
              category="Advanced"
              link="/resources/options-trading"
            />
            <ArticlePreview
              title="Market Making Explained"
              description="Understanding market making and liquidity provision in crypto markets."
              readTime="9 min read"
              date="July 2023"
              category="Advanced"
              link="/resources/market-making"
            />
          </div>
        </section>

        {/* Button to navigate to Resources Page */}
        <div className="text-center mt-12">
          <button onClick={() => navigate("/resources-page")} className="text-blue-500 hover:underline text-lg font-semibold">
            View All Resources →
          </button>
        </div>
      </main>
    </div>
  );
};

const NavItem = ({ icon, label, onClick, className = "" }) => (
  <button
    onClick={onClick}
    className={`w-full p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center gap-2 ${className}`}
  >
    {icon}
    <span>{label}</span>
  </button>
);

export default ResourcesHub;



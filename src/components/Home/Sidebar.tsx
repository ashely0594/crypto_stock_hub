import React, { useState } from 'react';
import { 
  Home, 
  Settings, 
  User, 
  Star, 
  BookOpen, 
  MessageSquare, 
  Menu, 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, onToggle }) => {
  const navigation = [
    {
      name: "Home",
      icon: Home,
    },
    {
      name: "Settings",
      icon: Settings,
    },
    {
      name: "Account",
      icon: User,
    },
    {
      name: "Favorites",
      icon: Star,
    },
    {
      name: "Courses",
      icon: BookOpen,
    },
    {
      name: "ChatGPT",
      icon: MessageSquare,
    },
  ];
  return (
    <div
      className={`${isOpen ? "w-64" : "w-20"} h-full bg-gray-900 text-white p-4 transition-all duration-300 ease-in-out relative`}
    >
      <button
        onClick={onToggle}
        className="absolute -right-3 top-4 bg-purple-600 rounded-full p-1.5 hover:bg-purple-700 transition-colors"
      >
        <Menu className="w-4 h-4" />
      </button>
      <div className="mb-8">
        <h1
          className={`text-xl font-bold px-4 text-purple-400 ${!isOpen && "hidden"}`}
        >
          Crypto Stock Hub
        </h1>
      </div>
      <nav>
        {navigation.map((item) => (
          <Link 
            key={item.name} 
            to={item.link || '/'} // Assuming 'link' is optional
            className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-purple-900/50 rounded-lg transition-colors"
          >
            <item.icon className="w-5 h-5 text-purple-400" />
            <span className={`${!isOpen && "hidden"} transition-opacity`}>
              {item.name}
            </span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
import React from 'react';
import { Icon } from './Sidebar'; 

const Header = ({ onSidebarToggle }) => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
    <h1 className="text-lg font-bold">My App</h1>
    <Icon icon="menu" /> // Use the Icon component
    <button
      onClick={onSidebarToggle}
      className="text-white p-2 bg-gray-600 rounded"
    >
        Toggle Sidebar
      </button>
    </header>
  );
};

export default Header;


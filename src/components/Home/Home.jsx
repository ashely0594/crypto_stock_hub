import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from "./Sidebar";


function HomePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleSidebarToggle = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  return (
    <div className="flex h-screen bg-gray-900">
      <Sidebar isOpen={isSidebarOpen} onToggle={handleSidebarToggle} />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6">
          <Routes>
            <Route path="/" element={
              <div>
                <h2 className="text-xl text-white mb-4">
                  Welcome to Crypto Stock Hub
                </h2>
                {/* Main content will go here */}
              </div>
            } /> 
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default HomePage;

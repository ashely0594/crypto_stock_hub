import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar"; // Sidebar component
import Header from "./Header"; // Header component

const Home = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Simulating a check for a logged-in user (you can replace this with your actual logic)
    const user = localStorage.getItem("user"); // Check if there's a logged-in user in localStorage
    if (user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleSidebarToggle = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  // if (!isLoggedIn) {
  //   // Redirect to login if the user is not logged in
  //   window.location.href = "/login"; // Or use navigate if you're using react-router-dom
  //   return null;
  // }

  return (
    <div>
      <Header onSidebarToggle={handleSidebarToggle} />
      <div className="flex">
        {isSidebarOpen && <Sidebar />}
        <div className="content-container flex-1 p-4">
          {children}
        </div>
      </div>
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
    </div>
  );
};
export default Home;


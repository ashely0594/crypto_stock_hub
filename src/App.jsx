import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";
import Navbar from "./components/navbar/Navbar"; 
import Post from './components/User/Posts/Posts';

import { CourseLayout } from "./components/User/Courses/CourseLayout";
import { ResourcesHub } from "./components/User/Resources/ResourcesHub";
import { ResourcesPage } from "./components/User/Resources/ResourcesPage";
const App = () => {
  return (
    
    <>
      <Routes>
        {/* Landing Page with Navbar */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <LandingPage />
            </>
          }
        />

        {/* Authentication Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Home Page (No Navbar) */}
        <Route path="/home" element={<Home />} />
        <Route path="posts" element={<Post />} />
        
        <Route path="/courses" element={<CourseLayout />} />
        <Route path="/resources" element={<ResourcesHub />} />
        <Route path="/resources-page" element={<ResourcesPage />} />
      </Routes>
    </>
  );
};

export default App;






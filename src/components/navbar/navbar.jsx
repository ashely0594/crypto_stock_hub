import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);

 
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

 
  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div 
      className={`navbar fixed top-0 left-0 w-full z-50 bg-black bg-opacity-60 p-2 flex justify-between items-center shadow-md rounded-full transition-all duration-300 ${
        showNavbar ? 'visible' : 'hidden' 
      }`} 
    > 
      <ul className="flex gap-6 text-white">
        <li>
          <Link to="/" className="hover:text-blue-400 cursor-pointer" onClick={() => handleScrollToSection("home")}>
            Home
          </Link> 
        </li>
        <li>
          <Link to="/features" className="hover:text-gray-400" onClick={() => handleScrollToSection("features")}>
            Features
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-blue-400 cursor-pointer" onClick={() => handleScrollToSection("about")}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-blue-400 cursor-pointer" onClick={() => handleScrollToSection("contact")}>
            Contact
          </Link>
        </li>
      </ul>

      {/* ✅ Login / Sign Up Button */}
      <div className="nav-right">
        <Link to="/login">
          <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-full text-white">
            Sign Up / Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  // Show navbar only on LandingPage, Login, and Register pages
  const allowedRoutes = ["/", "/login", "/register"];
  if (!allowedRoutes.includes(location.pathname)) {
    return null; // Hide navbar on other pages
  }

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY <= 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToSection = (sectionId) => {
    if (location.pathname !== "/") {
      // ✅ Redirect to Landing Page first, then scroll after navigation
      navigate("/", { replace: true });

      // Wait for the Landing Page to load, then scroll
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 500);
    } else {
      // ✅ Already on Landing Page, just scroll
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div
      className={`navbar fixed top-0 left-0 w-full z-50 bg-black bg-opacity-60 p-2 flex items-center justify-between shadow-md rounded-full transition-all duration-300 ${
        showNavbar ? "visible" : "hidden"
      }`}
    >
      {/* Centered Navigation Links */}
      <div className="nav-center">
        <ul className="flex gap-8 text-white">
          <li>
            <button onClick={() => handleScrollToSection("home")} className="hover:text-blue-400 cursor-pointer">
              Home
            </button>
          </li>
          <li>
            <button onClick={() => handleScrollToSection("features")} className="hover:text-gray-400 cursor-pointer">
              Features
            </button>
          </li>
          <li>
            <button onClick={() => handleScrollToSection("about")} className="hover:text-blue-400 cursor-pointer">
              About
            </button>
          </li>
          <li>
            <button onClick={() => handleScrollToSection("contact")} className="hover:text-blue-400 cursor-pointer">
              Contact
            </button>
          </li>
        </ul>
      </div>

      {/* Sign Up / Login Button */}
      <div className="nav-right">
        <Link to="/login" replace>
          <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-full text-white">
            Sign Up / Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;






import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';



const Navbar = () => {
  return (
    <div className="navbar fixed top-0 left-0 w-full z-50 bg-black bg-opacity-60 p-2 flex justify-between items-center shadow-md rounded-full"> 
      
      <ul className="flex gap-6 text-white">
        <li>
          <Link to="/" className="hover:text-blue-400 cursor-pointer">Home</Link> 
        </li>
        <li>
        <Link to="/features" className="hover:text-gray-400">Features</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-blue-400 cursor-pointer">About</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-blue-400 cursor-pointer">Contact</Link>
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
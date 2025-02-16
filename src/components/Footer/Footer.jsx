import React from "react";
import discordIcon from "../../assets/images/discord.svg";
import facebookIcon from "../../assets/images/facebook.svg";
import instagramIcon from "../../assets/images/instagram.svg";
import linkedinIcon from "../../assets/images/linkedin.svg";

export default function Footer() {
  return (
    <footer className="relative w-full h-[250px] overflow-hidden bg-[#08192D] flex flex-col justify-center items-center">
      {/* Animated Waves */}
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMax slice"
        className="absolute top-0 left-0 w-full h-full"
      >
        <defs>
          <linearGradient id="bg">
            <stop offset="0%" style={{ stopColor: "rgba(9, 14, 20, 0.8)" }} />
            <stop offset="50%" style={{ stopColor: "rgba(7, 54, 129, 0.6)" }} />
            <stop offset="100%" style={{ stopColor: "rgba(35, 15, 19, 0.6)" }} />
          </linearGradient>
          <path
            id="wave"
            fill="url(#bg)"
            d="M-363.852,502.589c0,0,236.988-41.997,505.475,0s371.981,38.998,575.971,0
            s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z"
          />
        </defs>
        <g>
          <use xlinkHref="#wave" opacity=".3">
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="translate"
              dur="6s" 
              calcMode="spline"
              values="270 230; -334 180; 270 230"
              keyTimes="0; .5; 1"
              keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
              repeatCount="indefinite"
            />
          </use>
          <use xlinkHref="#wave" opacity=".6">
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="translate"
              dur="5s" 
              calcMode="spline"
              values="-270 230;243 220;-270 230"
              keyTimes="0; .6; 1"
              keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
              repeatCount="indefinite"
            />
          </use>
          <use xlinkHref="#wave" opacity=".9">
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="translate"
              dur="4s"
              calcMode="spline"
              values="0 230;-140 200;0 230"
              keyTimes="0; .4; 1"
              keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
              repeatCount="indefinite"
            />
          </use>
        </g>
      </svg>

      {/* Social Media Icons (Smaller & White) */}
      <div className="relative z-10 flex space-x-6 mt-4">
        <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
          <img src={discordIcon} alt="Discord" className="w-8 h-8 filter invert hover:scale-110 transition duration-300" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src={facebookIcon} alt="Facebook" className="w-8 h-8 filter invert hover:scale-110 transition duration-300" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt="Instagram" className="w-8 h-8 filter invert hover:scale-110 transition duration-300" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" className="w-8 h-8 filter invert hover:scale-110 transition duration-300" />
        </a>
      </div>

      {/* Footer Navigation Links */}
      <nav className="relative z-10 mt-3">
        <ul className="flex space-x-6 text-white text-sm">
          <li>
            <a href="#home" className="hover:text-blue-400">Home</a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-400">About</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-400">Contact</a>
          </li>
          <li>
            <a href="#features" className="hover:text-blue-400">Features</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}





  
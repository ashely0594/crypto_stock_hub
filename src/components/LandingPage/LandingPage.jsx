import React from "react";
import Background from "../background/Background";
import Features from "../navbar/Features";
import About from "../navbar/About";
import Contact from "../navbar/Contact";
import Footer from "../Footer/Footer";
import stockImage from "../../assets/images/Stock.jpg";
import "animate.css";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background Video */}
      <Background />

      {/* Scrollable Sections */}
      <main className="flex-grow relative z-10">
  <section id="home" className="h-screen flex items-center justify-between text-white px-10">
    <h1 className="text-7xl font-extrabold rubik-mono-one-regular animate__animated animate__lightSpeedInLeft w-full flex flex-col gap-32">
      <span className="text-left w-1/2 -mt-20">Welcome to</span>
      <span className="self-end text-white px-10 mt-20">Crypto Stock Hub</span>
    </h1>
  </section>

        <section 
          id="features" 
          className="h-screen flex items-center justify-center text-white bg-cover bg-center relative"
          style={{ backgroundImage: `url(${stockImage})` }}
        >
          {/* Blur Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md"></div>
          
          {/* Features Content */}
          <div className="relative z-10">
            <Features />
          </div>
        </section>

        <section id="about" className="h-screen flex items-center justify-center bg-gray-900 text-white">
          <About />
        </section>

        <section id="contact" className="h-screen flex items-center justify-center bg-gray-900 text-white">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}



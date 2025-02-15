import React from "react";
import Background from "../background/Background";
import Navbar from "../navbar/Navbar";
import Features from "../navbar/Features";
import About from "../navbar/About";
import Contact from "../navbar/Contact";
import Footer from "../Footer/Footer";
import stockImage from "../../assets/images/Stock.jpg"; // Import the image

export default function LandingPage() {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background Video */}
      <Background />

      {/* Navbar */}
      <Navbar />

      {/* Scrollable Sections */}
      <main className="flex-grow relative z-10">
        <section id="home" className="h-screen flex items-center justify-center text-white">
          <h1 className="text-5xl font-bold">Welcome to Crypto Stock Hub</h1>
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


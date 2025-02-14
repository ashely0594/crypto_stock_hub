import React from "react";
import { motion } from "framer-motion";
import Navbar from "../navbar/Navbar";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar /> {/* Render the Navbar component */}
      
      <div className="p-10 flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-6"
        >
          About CryptoStock Hub
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-lg text-gray-300 text-center max-w-3xl"
        >
          CryptoStock Hub is your one-stop platform for **crypto and stock market insights**.  
          Whether you're a beginner or an experienced trader, we provide **AI-powered answers,  
          educational courses, and a thriving community** to help you make smarter investment decisions.
        </motion.p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-800 p-6 rounded-xl shadow-lg"
          >
            <h2 className="text-2xl font-semibold">🤖 AI-Powered Assistance</h2>
            <p className="text-gray-400 mt-2">
              Use our **ChatGPT-powered AI** to get real-time stock and crypto insights,  
              market trends, and investment strategies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gray-800 p-6 rounded-xl shadow-lg"
          >
            <h2 className="text-2xl font-semibold">📚 Learn & Grow</h2>
            <p className="text-gray-400 mt-2">
              Explore **stock & crypto courses** that teach fundamental and technical analysis,  
              risk management, and trading strategies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-gray-800 p-6 rounded-xl shadow-lg"
          >
            <h2 className="text-2xl font-semibold">🌍 Community & Networking</h2>
            <p className="text-gray-400 mt-2">
              Connect with **like-minded investors**! Comment on posts, upload portfolio pictures,  
              and engage in market discussions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-gray-800 p-6 rounded-xl shadow-lg"
          >
            <h2 className="text-2xl font-semibold">📊 Market Resources</h2>
            <p className="text-gray-400 mt-2">
              Stay informed with **real-time news, expert insights, and advanced market tools**  
              for crypto and stock tracking.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;

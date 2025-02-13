import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../navbar/navbar'; 

const features = [
  { title: "ChatGPT AI", description: "AI tailored to answering stock and crypto questions." },
  { title: "Stock & Crypto Courses", description: "Learn trading strategies and market insights." },
  { title: "User Database", description: "Connect with others, comment on posts, and upload pictures." },
  { title: "Resources Tab", description: "Access valuable market tools and news." }
];

export default function Features() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">
      {/* Render Navbar */}
      <Navbar />

      {/* Animated Heading */}
      <motion.h1 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-8"
      >
        Platform Features
      </motion.h1>

      {/* Features List */}
      <div className="space-y-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg"
          >
            <h2 className="text-2xl font-semibold">{feature.title}</h2>
            <p className="text-gray-400 mt-2">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

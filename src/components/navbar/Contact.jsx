import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Navbar from "../navbar/Navbar"; // Ensure correct path

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(null); // To handle errors

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs
      .send(
        "service_ko06an8", 
        "template_mh4146l", 
        formData, 
        "CeRmOruHnXKzjktdx" 
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setIsSent(true);
          setFormData({ name: "", email: "", message: "" }); 
          setError(null);
        },
        (error) => {
          console.error("FAILED...", error);
          setError("Something went wrong, please try again later."); // Show error message
          setIsSent(false);
        }
      );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />

      <div className="p-10 flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-6"
        >
          Send Us a Message
        </motion.h1>

        <p className="text-lg text-gray-300 text-center max-w-2xl mb-6">
          Have questions, feedback, or suggestions? We'd love to hear from you!
          Send us a message and we'll get back to you as soon as possible.
        </p>

        {isSent && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-green-400 font-semibold"
          >
            ✅ Your message has been sent successfully!
          </motion.p>
        )}

        {error && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-red-400 font-semibold"
          >
            ❌ {error}
          </motion.p>
        )}

        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 p-6 rounded-xl shadow-lg w-full max-w-lg"
        >
          <div className="mb-4">
            <label className="block text-gray-400">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 mt-2 rounded bg-gray-700 text-white outline-none"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-400">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 mt-2 rounded bg-gray-700 text-white outline-none"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-400">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full p-2 mt-2 rounded bg-gray-700 text-white outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}


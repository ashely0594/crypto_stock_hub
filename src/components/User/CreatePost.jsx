import React, { useState } from "react";
import { Image, Send } from "lucide-react";

export default function CreatePost() {
  const [postText, setPostText] = useState("");

  const handlePostSubmit = () => {
    if (postText.trim() === "") return;
    console.log("New Post:", postText);
    setPostText(""); 
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
      <div className="flex items-center gap-4">
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
          alt="Your avatar"
          className="w-10 h-10 rounded-full object-cover"
        />
        <input
          type="text"
          placeholder="Share your market insights..."
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
          className="flex-1 bg-gray-100 dark:bg-gray-700 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
        />
      </div>

      {/* Bottom Buttons */}
      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-300 dark:border-gray-600">
        <button className="flex items-center gap-2 text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white">
          <Image size={20} />
          <span>Add Chart/Screenshot</span>
        </button>

        <button
          onClick={handlePostSubmit}
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all"
        >
          <Send size={18} />
          <span>Post</span>
        </button>
      </div>
    </div>
  );
}

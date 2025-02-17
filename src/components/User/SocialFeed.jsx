import React from "react";
import { Sidebar } from "../Home/Sidebar";// If it's in the components folder
import CreatePost from "./CreatePost";
import { Post } from "./Post"; 
import ChatThreads from "./ChatThreads"; 

export default function SocialFeed() {
  return (
    <div className="flex w-full min-h-screen">
      {/* Sidebar Component */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 max-w-3xl mx-auto p-4">
        {/* Create Post Section */}
        <CreatePost />

        {/* Feed of Posts */}
        <div className="space-y-4 mt-6">
          <Post
            author="Alex Thompson"
            avatar="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
            content="Bitcoin just broke through the $45k resistance level! 🚀 The market sentiment seems incredibly bullish right now. What are your thoughts on this momentum?"
            likes={45}
            comments={12}
            timestamp="28m ago"
          />
          <Post
            author="Michael Wei"
            avatar="https://images.unsplash.com/photo-1599566150163-29194dcaad36"
            content="Just analyzed NVIDIA's latest earnings report. Their AI chip demand is through the roof! Expecting strong performance in Q2. Here's the technical analysis I've been working on."
            image="https://images.unsplash.com/photo-1642790106117-e829e14a795f"
            likes={32}
            comments={8}
            timestamp="2h ago"
          />
          <Post
            author="Sarah Martinez"
            avatar="https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
            content="Ethereum's merge to PoS has shown impressive results for energy efficiency. Gas fees are down 70% compared to last quarter. Bullish on ETH's long-term prospects! 📈"
            likes={67}
            comments={15}
            timestamp="4h ago"
          />
        </div>
      </main>

      {/* Chat Threads Sidebar */}
      <ChatThreads />
    </div>
  );
}



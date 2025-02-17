import React, { useEffect, useState } from "react";
import { 
  ChevronRight, ChevronDown, MessageCircle, LayoutGrid, Home, BookOpen, MessageSquare, 
  Users, TrendingUp, Newspaper, Settings, Moon, Sun
} from "lucide-react";
import API from "../../utils/API";
import { Sidebar } from "../Home/Sidebar"; 
import ChatThreads from "./ChatThreads"; 
import CreatePost from "./CreatePost";
import Post from "./Post"; 
import { useNavigate } from "react-router-dom";

export default function SocialFeed() {
  const [posts, setPosts] = useState([]); // Store fetched posts
  const [user, setUser] = useState(null); // Store logged-in user info
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Sidebar toggle
  const [sidebarView, setSidebarView] = useState("threads"); // "threads" | "main"
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve logged-in user from localStorage/sessionStorage
    const loggedUser = JSON.parse(localStorage.getItem("user") || sessionStorage.getItem("user"));
    setUser(loggedUser);

    // Fetch posts from the backend
    API.get("/api/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  // Toggle Dark Mode & Save Preference
  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <div className={`flex w-full min-h-screen ${isDarkMode ? "dark bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
      {/* Sidebar Toggle Button */}
      <div className="absolute top-4 left-4 z-50">
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
          className="bg-gray-700 text-white px-3 py-2 rounded-lg flex items-center"
        >
          {isSidebarOpen ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
        </button>
      </div>

      {/* Sidebar (Extended and Tabs) */}
      {isSidebarOpen && (
        <div className="w-96 bg-gray-900 text-white h-screen flex flex-col">
          {/* Sidebar Navigation Tabs */}
          <div className="flex justify-around border-b border-gray-700 p-3">
            <button 
              onClick={() => setSidebarView("threads")}
              className={`flex items-center gap-2 px-4 py-2 ${sidebarView === "threads" ? "bg-gray-700 rounded-lg" : "hover:bg-gray-800"}`}
            >
              <MessageCircle size={20} /> Chat Threads
            </button>
            <button 
              onClick={() => setSidebarView("main")}
              className={`flex items-center gap-2 px-4 py-2 ${sidebarView === "main" ? "bg-gray-700 rounded-lg" : "hover:bg-gray-800"}`}
            >
              <LayoutGrid size={20} /> Menu
            </button>
          </div>

          {/* Sidebar Views */}
          <div className="flex-1 overflow-auto">
            {sidebarView === "threads" ? (
              <div className="p-4">
                <h2 className="text-lg font-semibold">Chat Threads</h2>
                <ChatThreads />
              </div>
            ) : (
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-4">Menu</h2>
                <button 
                  onClick={() => navigate("/home")}
                  className="flex items-center gap-2 w-full px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600"
                >
                  <Home size={20} /> Dashboard
                </button>
                <div className="mt-4 space-y-2">
                  <MenuItem icon={<Users />} label="Social Feed" />
                  <MenuItem icon={<BookOpen />} label="Resources" />
                  <MenuItem icon={<TrendingUp />} label="Market Trends" />
                  <MenuItem icon={<MessageSquare />} label="AI Chat" />
                  <MenuItem icon={<Newspaper />} label="News" />
                  <MenuItem icon={<Settings />} label="Account Settings" />
                </div>
                <div className="mt-6">
                  <button 
                    onClick={toggleTheme}
                    className="w-full flex items-center gap-2 p-2 rounded-lg hover:bg-gray-800"
                  >
                    {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                    <span>{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 max-w-3xl mx-auto p-4">
        {/* Dashboard Navigation */}
        <div className="mb-4">
          <button 
            onClick={() => navigate("/home")} 
            className="text-blue-500 hover:underline text-lg font-semibold"
          >
            ← Dashboard
          </button>
        </div>

        {/* Logged-in User Info */}
        {user && (
          <div className="flex items-center gap-4 p-4 bg-gray-800 text-white rounded-lg">
            <img
              src="https://via.placeholder.com/50" // Placeholder avatar (replace with real user data)
              alt="Profile"
              className="w-12 h-12 rounded-full object-cover"
            />
            <h2 className="text-lg font-semibold">{user.username}</h2>
          </div>
        )}

        {/* Create Post Section */}
        <CreatePost setPosts={setPosts} />

        {/* Feed of Posts */}
        <div className="space-y-4 mt-6">
          {posts.length > 0 ? (
            posts.map((post) => (
              <Post key={post.id} post={post} setPosts={setPosts} />
            ))
          ) : (
            <p className="text-gray-500 text-center">No posts yet. Be the first to post!</p>
          )}
        </div>
      </main>
    </div>
  );
}

/** Sidebar Menu Items */
const MenuItem = ({ icon, label }) => (
  <button className="w-full flex items-center gap-2 p-2 rounded-lg hover:bg-gray-800">
    {icon}
    <span>{label}</span>
  </button>
);







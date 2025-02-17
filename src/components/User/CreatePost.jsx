import React, { useState } from "react";
import { Image, Send, Trash2, Edit } from "lucide-react";
import API from "../../utils/API";
export default function CreatePost() {
  const [postText, setPostText] = useState("");
  const [posts, setPosts] = useState([]); // Store posts in local state
  const [editingPostId, setEditingPostId] = useState(null);
  const [editedText, setEditedText] = useState("");

  const handlePostSubmit = async () => {
    if (postText.trim() === "") return;

    try {
        const response = await API.post(
          `/api/posts/create?userId=${user.userId}`,  // ✅ Fix: Append `userId` correctly in query param
          {
            title: "User Post", // You can modify this to allow title input
            content: postText,
          }
        );
      
        setPosts((prevPosts) => [response.data, ...prevPosts]);
        setPostText(""); // Clear input after posting
      } catch (error) {
        console.error("Error creating post:", error.response ? error.response.data : error.message);
      }
      
      const postPayload = {
        title: postText.trim() ? postText : "Untitled Post",  // Assign default title if missing
        content: postText,
      };
    
    // Create a new post object
    const newPost = {
      id: Date.now(), // Unique ID
      text: postText,
      timestamp: new Date().toLocaleString(),
    };

    // Append the new post to the list
    setPosts([newPost, ...posts]);
    setPostText(""); // Clear input after posting
  };

  const handleDeletePost = (id) => {
    // Remove post by filtering out the one with the given id
    setPosts(posts.filter((post) => post.id !== id));
  };

  const handleEditPost = (post) => {
    setEditingPostId(post.id);
    setEditedText(post.text);
  };

  const handleSaveEdit = () => {
    setPosts(
      posts.map((post) =>
        post.id === editingPostId ? { ...post, text: editedText } : post
      )
    );
    setEditingPostId(null);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
      {/* Input Section */}
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

      {/* Posts Feed */}
      <div className="mt-6 space-y-4">
        {posts.length === 0 && <p className="text-gray-500 text-center">No posts yet. Be the first to post!</p>}
        {posts.map((post) => (
          <div key={post.id} className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow">
            {editingPostId === post.id ? (
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  value={editedText}
                  onChange={(e) => setEditedText(e.target.value)}
                  className="bg-white dark:bg-gray-600 p-2 rounded border focus:outline-none"
                />
                <button
                  onClick={handleSaveEdit}
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
                >
                  Save
                </button>
              </div>
            ) : (
              <>
                <p className="text-gray-900 dark:text-white">{post.text}</p>
                <span className="text-sm text-gray-500 dark:text-gray-400">{post.timestamp}</span>
              </>
            )}

            {/* Post Actions */}
            <div className="flex items-center gap-3 mt-2">
              <button
                onClick={() => handleEditPost(post)}
                className="text-yellow-500 hover:text-yellow-600 flex items-center gap-1"
              >
                <Edit size={18} />
                <span>Edit</span>
              </button>
              <button
                onClick={() => handleDeletePost(post.id)}
                className="text-red-500 hover:text-red-600 flex items-center gap-1"
              >
                <Trash2 size={18} />
                <span>Delete</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


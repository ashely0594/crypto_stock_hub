import React, { useState } from "react";
import { MessageSquare, ThumbsUp, Trash2, Edit } from "lucide-react";
import API from "../../utils/API";

export default function Post({ post, setPosts, user }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newContent, setNewContent] = useState(post.content);
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(post.likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(isLiked ? likesCount - 1 : likesCount + 1);
  };

  const handleEdit = async () => {
    try {
      const response = await API.put(`/api/posts/edit`, {
        title: post.title,
        content: newContent,
      }, { params: { id: post.id, userId: user.id } });

      setPosts((prevPosts) =>
        prevPosts.map((p) => (p.id === post.id ? { ...p, content: response.data.content } : p))
      );
      setIsEditing(false);
    } catch (error) {
      console.error("Error editing post:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await API.delete(`/api/posts/delete`, { params: { id: post.id, userId: user.id } });
      setPosts((prevPosts) => prevPosts.filter((p) => p.id !== post.id));
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex items-center mb-4">
        <img src={post.user.avatar || "https://via.placeholder.com/50"} alt={post.author} className="w-10 h-10 rounded-full object-cover" />
        <div className="ml-3">
          <h3 className="font-semibold">{post.user.username}</h3>
          <p className="text-sm text-gray-500">{post.timestamp}</p>
        </div>
      </div>

      {isEditing ? (
        <textarea
          className="w-full border rounded p-2"
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
        />
      ) : (
        <p className="mb-4">{post.content}</p>
      )}

      <div className="flex items-center gap-6 text-gray-500">
        <button onClick={handleLike} className={`flex items-center gap-1 ${isLiked ? "text-blue-500" : ""}`}>
          <ThumbsUp size={20} /> {likesCount}
        </button>
        <button className="flex items-center gap-1">
          <MessageSquare size={20} /> {post.comments.length}
        </button>

        {user?.id === post.user?.id && (
          <>
            {isEditing ? (
              <button onClick={handleEdit} className="flex items-center gap-1 text-green-500">
                <Edit size={20} /> Save
              </button>
            ) : (
              <button onClick={() => setIsEditing(true)} className="flex items-center gap-1 text-blue-500">
                <Edit size={20} /> Edit
              </button>
            )}

            <button onClick={handleDelete} className="flex items-center gap-1 text-red-500 ml-auto">
              <Trash2 size={20} /> Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
}


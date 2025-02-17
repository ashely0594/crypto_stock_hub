import React, { useState } from "react";
import { MessageSquare, ThumbsUp, Trash2 } from "lucide-react";

export function Post({ author, avatar, content, image, likes, comments, timestamp }) {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(isLiked ? likesCount - 1 : likesCount + 1);
  };

  return (
    <div className="bg-white rounded-lg shadow p-4">
      {/* Post Header */}
      <div className="flex items-center mb-4">
        <img src={avatar} alt={author} className="w-10 h-10 rounded-full object-cover" />
        <div className="ml-3">
          <h3 className="font-semibold">{author}</h3>
          <p className="text-sm text-gray-500">{timestamp}</p>
        </div>
      </div>

      {/* Post Content */}
      <p className="mb-4">{content}</p>
      {image && (
        <img src={image} alt="Post content" className="rounded-lg mb-4 w-full object-cover max-h-96" />
      )}

      {/* Post Actions */}
      <div className="flex items-center gap-6 text-gray-500">
        <button
          onClick={handleLike}
          className={`flex items-center gap-1 ${isLiked ? "text-blue-500" : ""}`}
        >
          <ThumbsUp size={20} /> {likesCount}
        </button>
        <button className="flex items-center gap-1">
          <MessageSquare size={20} /> {comments}
        </button>
        <button className="flex items-center gap-1 ml-auto">
          <Trash2 size={20} />
        </button>
      </div>
    </div>
  );
}

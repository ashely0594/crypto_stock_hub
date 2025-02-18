// import { useState } from 'react';
// import axios from 'axios';

// const Post = ({ setPosts }) => {
//   const [newPost, setNewPost] = useState({ title: '', content: '' });
//   const [editingPost, setEditingPost] = useState(null);
//   const [error, setError] = useState(null);

//   const user = JSON.parse(localStorage.getItem("user") || sessionStorage.getItem("user")); // ✅ Ensure user is retrieved

//   // ✅ Create new post
//   const handleCreatePost = async (e) => {
//     e.preventDefault();
//     if (!user || !user.userId) {
//       setError("User not found. Please log in.");
//       return;
//     }

//     try {
//       const response = await axios.post(
//         `http://localhost:8080/api/posts/create?userId=${user.userId}`, // ✅ Send userId in query params
//         {
//           title: newPost.title,
//           content: newPost.content,
//         }
//       );

//       setPosts((prevPosts) => [response.data, ...prevPosts]); // ✅ Add new post to state
//       setNewPost({ title: '', content: '' }); // Clear input fields
//       setError(null);
//       console.log('Post created successfully:', response.data);
//     } catch (error) {
//       setError('Error creating post');
//       console.error('Error creating post:', error);
//     }
//   };

//   // ✅ Update post
//   const handleUpdatePost = async (postId) => {
//     if (!user || !user.userId) {
//       setError("User not found. Please log in.");
//       return;
//     }

//     try {
//       const response = await axios.put(
//         `http://localhost:8080/api/posts/edit${postId}?userId=${user.userId}`,
//         {
//           title: editingPost.title,
//           content: editingPost.content,
//         }
//       );

//       setPosts((prevPosts) =>
//         prevPosts.map((post) => (post.id === postId ? response.data : post))
//       );
//       setEditingPost(null);
//       setError(null);
//       console.log('Post updated successfully:', response.data);
//     } catch (error) {
//       setError('Error updating post');
//       console.error('Error updating post:', error);
//     }
//   };

//   // ✅ Delete post
//   const handleDeletePost = async (postId) => {
//     if (!user || !user.userId) {
//       setError("User not found. Please log in.");
//       return;
//     }

//     try {
//       await axios.delete(`http://localhost:8080/api/posts/delete/${postId}?userId=${user.userId}`);
//       setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
//       setError(null);
//       console.log('Post deleted successfully');
//     } catch (error) {
//       setError('Error deleting post');
//       console.error('Error deleting post:', error);
//     }
//   };

//   return (
//     <div className="posts-container">
//       {error && <div className="error-message">{error}</div>}

//       {/* ✅ Create Post Form */}
//       <form onSubmit={handleCreatePost} className="post-form">
//         <input
//           type="text"
//           placeholder="Title"
//           value={newPost.title}
//           onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
//           required
//         />
//         <textarea
//           placeholder="Content"
//           value={newPost.content}
//           onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
//           required
//         />
//         <button type="submit">Create Post</button>
//       </form>
//     </div>
//   );
// };

// export default Post;
import { useState } from "react";
import axios from "axios";

const Post = () => {
  const [newPost, setNewPost] = useState({ title: "", content: "" });
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  // ✅ Get the logged-in user
  const user = JSON.parse(localStorage.getItem("user") || sessionStorage.getItem("user"));

  // ✅ Handle creating a post
  const handleCreatePost = async (e) => {
    e.preventDefault();

    // ✅ Ensure user exists
    if (!user || !user.userId) {
      setError("User not found. Please log in.");
      return;
    }

    try {
      // ✅ Send request to backend
      const response = await axios.post(
        `http://localhost:8080/api/posts/create?userId=${user.userId}`,  // ✅ Send userId in query params
        {
          title: newPost.title,
          content: newPost.content,
        }
      );

      // ✅ Clear form and show success message
      setNewPost({ title: "", content: "" });
      setSuccessMessage("Post created successfully!");
      setError(null);
      console.log("Post stored in database:", response.data);
    } catch (error) {
      setError("Error creating post");
      console.error("Error creating post:", error);
    }
  };

  return (
    <div className="post-container">
      {error && <div className="error-message">{error}</div>}
      {successMessage && <div className="success-message">{successMessage}</div>}

      {/* ✅ Create Post Form */}
      <form onSubmit={handleCreatePost} className="post-form">
        <input
          type="text"
          placeholder="Title"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          required
        />
        <textarea
          placeholder="Content"
          value={newPost.content}
          onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
          required
        />
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default Post;

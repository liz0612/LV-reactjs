import React, { useState } from "react";
import "../style/Post.scss";

function Post() {
  const [posts, setPosts] = useState([
    { id: 1, name: "Lizbeth", message: "Hello!", likes: 0 },
    { id: 2, name: "Vabjol", message: "Great page!", likes: 0 },
    { id: 3, name: "Sergio", message: "I enjoy your page", likes: 0 },
  ]);

  const [formData, setFormData] = useState({ name: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      name: formData.name,
      message: formData.message,
      likes: 0,
    };
    setPosts([newPost, ...posts]);
    setFormData({ name: "", message: "" });
  };

  const handleLike = (id) => {
    const updatedPosts = posts.map((post) =>
      post.id === id ? { ...post, likes: post.likes + 1 } : post
    );
    setPosts(updatedPosts);
  };

  return (
    <div className="post-container">
      <h2>Post a thought</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="NAME"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="message"
          placeholder="What’s on your mind?"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Post</button>
      </form>

      <div className="thoughts">
        {posts.map((post) => (
          <div className="thought" key={post.id}>
            <h3>
              {post.name}{" "}
              <span onClick={() => handleLike(post.id)} className="like">
                ❤️ {post.likes}
              </span>
            </h3>
            <p>{post.message}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Post;
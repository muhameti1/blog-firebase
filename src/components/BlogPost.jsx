import React from "react";

function BlogPost({ post }) {
  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.description}</p>
      <small>By {post.author}</small>
    </div>
  );
}

export default BlogPost;

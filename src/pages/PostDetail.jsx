import React from "react";
import { useParams } from "react-router-dom";
import posts from "../data/posts";

const PostDetail = () => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) return <div className="text-white p-8">Post not found</div>;

  return (
    <div className="bg-gray-900 min-h-screen py-12 px-4 text-white">
      <div className="max-w-3xl mx-auto">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-64 object-cover rounded mb-6"
        />
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-sm text-gray-400 mb-6">{post.date}</p>
        <p className="text-lg leading-relaxed">{post.content}</p>
      </div>
    </div>
  );
};

export default PostDetail;

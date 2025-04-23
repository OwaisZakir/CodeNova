import React from "react";
import Card from "../components/Ui/Card";
import posts from "../data/posts";

const Blogs = () => (
  <div className="bg-gray-900 py-12 px-4">
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-white mb-8 text-center">Blog</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </div>
    </div>
  </div>
);

export default Blogs;

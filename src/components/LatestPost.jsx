import React from "react";
import { Link } from "react-router-dom";
import Card from "./Ui/Card";
import posts from "../data/posts";

const LatestPost = () => {
  const latestPosts = posts.slice(0, 6); // limit to latest 6

  return (
    <section id="latest-posts">
      <div className="bg-gray-900 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-100 mb-8 text-center">
            Latest Posts
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {latestPosts.map((post) => (
              <Card key={post.id} post={post} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/blog">
              <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
                View All
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestPost;

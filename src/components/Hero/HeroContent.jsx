import React from "react";

const HeroContent = () => {
  return (
    <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-gray-100 px-6">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 tracking-wide drop-shadow-lg">
        Elevate Your Coding Journey
      </h1>

      <p className="text-base md:text-lg lg:text-xl mb-8 max-w-2xl md:max-w-3xl mx-auto opacity-90">
        Dive into a world of insightful articles, hands-on tutorials, and
        resources crafted to elevate your development skills.
      </p>

      <a
        href="#latest-posts"
        className="inline-block bg-cyan-400 hover:bg-cyan-500 text-gray-100 py-3 px-8 rounded-lg text-lg md:text-xl font-semibold transition duration-300 transform hover:scale-105 shadow-lg"
      >
        Explore Latest Posts
      </a>
    </div>
  );
};

export default HeroContent;

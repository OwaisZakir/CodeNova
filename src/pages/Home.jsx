import React from "react";
import Hero from "../components/Hero/Hero";

function Home() {
  return (
    <>
      <Hero />
      <div
        id="latest-posts"
        className="home-container h-screen  flex justify-center items-center"
      >
        <p className="text-2xl text-gray-700">
          Latest Posts Section Coming Soon
        </p>
      </div>
    </>
  );
}

export default Home;

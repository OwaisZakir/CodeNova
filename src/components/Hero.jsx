import React from "react";

const Hero = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url("/path/to/your-image.jpg")',
      }}
    >
      {/* Gradient Overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 tracking-wide">
          Elevate Your Coding Journey
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-6 max-w-2xl md:max-w-4xl mx-auto">
          Dive into a world of insightful articles, tutorials, and resources designed to enhance your development skills.
        </p>
        <a
          href="#latest-posts"
          className="bg-cyan-500 hover:bg-cyan-600 text-white py-3 px-8 rounded-lg text-lg md:text-xl font-semibold transition duration-300 transform hover:scale-105"
        >
          Explore Latest Posts
        </a>
      </div>

      {/* SVG Wave Pattern at the bottom for added style */}
      <div className="absolute bottom-0 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full"
          fill="currentColor"
        >
          <path
            fillOpacity="1"
            d="M0,256L48,240C96,224,192,192,288,170.7C384,149,480,139,576,160C672,181,768,235,864,245.3C960,256,1056,224,1152,213.3C1248,203,1344,213,1392,218.7L1440,224V0H1392C1344,0,1248,0,1152,21.3C1056,42,960,128,864,149.3C768,171,672,213,576,224C480,235,384,213,288,213.3C192,213,96,235,48,240L0,256Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";

function Home() {
  return (
    <div>
      <h2 className="text-3xl text-dark dark:text-gray-100">
        Welcome to My Tech Blog
      </h2>
      <p className="text-dark dark:text-gray-300">
        Here you can find the latest news and tutorials in the world of tech.
      </p>
      <p class="font-sans text-gray-800">
        This is a paragraph with Roboto font.
      </p>
      <pre className="font-code bg-gray-800 text-white p-4">
        const helloWorld = {"()"} {"=>"} {console.log("Hello World!")}
      </pre>
      <div className="h-screen"></div>
    </div>
  );
}

export default Home;

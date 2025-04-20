import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  const [darkMode, setDarkMode] = useState(false);

  // Load dark mode preference from localStorage when the app loads
  useEffect(() => {
    if (localStorage.getItem("darkMode") === "true") {
      setDarkMode(true);
    }
  }, []);

  // Toggle dark mode and save preference to localStorage
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", !darkMode); // Save dark mode preference
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen flex flex-col bg-light text-dark dark:bg-gray-900 dark:text-gray-100">
        <Header toggleDarkMode={toggleDarkMode} />
        <main className="container mx-auto flex-1 p-6">
          {/* Render the page-specific content here */}
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;

import { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X, Search, User, LogOut, Sun, Moon } from "lucide-react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Header = ({ darkMode, toggleDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [userDropdown, setUserDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const headerRef = useRef();
  const logoRef = useRef();
  const navRef = useRef();
  const iconsRef = useRef();
  const userMenuRef = useRef();
  const scrollTl = useRef();

  const navigate = useNavigate();
  const location = useLocation();

  // Initial entrance animations
  useGSAP(() => {
    gsap.from(headerRef.current, {
      opacity: 0,
      y: -50,
      duration: 1.2,
      ease: "power3.out",
    });

    gsap.from(logoRef.current, {
      opacity: 0,
      scale: 0.5,
      duration: 1.2,
      ease: "power3.out",
      delay: 0.2,
    });

    gsap.from(navRef.current.children, {
      opacity: 0,
      x: -50,
      duration: 1.2,
      ease: "power3.out",
      delay: 0.4,
      stagger: 0.1,
    });

    gsap.from(iconsRef.current.children, {
      opacity: 0,
      scale: 0.5,
      duration: 1.2,
      ease: "power3.out",
      delay: 0.6,
      stagger: 0.1,
    });
  }, []);

  // Scroll shrink effect with GSAP timeline
  useGSAP(() => {
    scrollTl.current = gsap.timeline({ paused: true });
    scrollTl.current.to(headerRef.current, {
      backgroundColor: "#1f2937",
      height: "60px",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
      backdropFilter: "blur(10px)",
      duration: 0.3,
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (scrolled) {
      scrollTl.current.play();
    } else {
      scrollTl.current.reverse();
    }
  }, [scrolled]);

  // Animate search overlay on open
  useGSAP(() => {
    if (searchOpen) {
      gsap.fromTo(
        ".search-box",
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3, ease: "power2.out" }
      );
    }
  }, [searchOpen]);

  // Close search on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSearchOpen(false);
    };
    if (searchOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [searchOpen]);

  // Close user dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target)) {
        setUserDropdown(false);
      }
    };
    if (userDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [userDropdown]);

  // Close user dropdown on route change
  useEffect(() => {
    setUserDropdown(false);
  }, [location]);

  const handleLogout = () => {
    console.log("Logged out ✅"); // TODO: Replace with actual logout logic
    setUserDropdown(false);
    navigate("/");
  };

  return (
    <header
      ref={headerRef}
      className="text-gray-100 sticky top-0 z-50 py-4 font-sans"
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <Link
          to="/"
          ref={logoRef}
          className="text-2xl font-bold text-cyan-400 hover:text-cyan-500"
        >
          CodeNova
        </Link>

        {/* Desktop Nav */}
        <nav
          ref={navRef}
          className="hidden md:flex items-center space-x-8"
          role="navigation"
          aria-label="Main Navigation"
        >
          {["Home", "Blogs", "About", "Contact"].map((item) => (
            <Link
              key={item}
              to={`/${item === "Home" ? "" : item.toLowerCase()}`}
              className="relative group text-gray-300 hover:text-cyan-400"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}

          {/* Dark/Light Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="text-gray-300 hover:text-cyan-400"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Moon size={22} /> : <Sun size={22} />}
          </button>

          {/* Icons */}
          <div ref={iconsRef} className="flex items-center space-x-5">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-gray-300 hover:text-cyan-400"
              aria-label="Search"
            >
              <Search size={22} />
            </button>

            <div className="relative" ref={userMenuRef}>
              <button
                onClick={() => setUserDropdown(!userDropdown)}
                className="text-gray-300 hover:text-cyan-400"
                aria-label="User Menu"
                aria-haspopup="true"
                aria-expanded={userDropdown}
              >
                <User size={22} />
              </button>

              {userDropdown && (
                <div className="absolute right-0 mt-3 bg-gray-800 border border-gray-700 rounded-lg shadow-lg w-44 py-2 z-50">
                  <button
                    onClick={() => {
                      navigate("/admin/login");
                      setUserDropdown(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-700"
                  >
                    Admin Login
                  </button>
                  <button
                    onClick={() => {
                      console.log("Profile page coming soon!");
                      setUserDropdown(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-700"
                  >
                    Profile
                  </button>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-gray-700"
                  >
                    <LogOut size={18} /> Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-100"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Mobile Menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-gray-800 transform transition-all duration-500"
        >
          <nav
            className="flex flex-col space-y-4 px-4 py-6"
            role="menu"
            aria-label="Mobile Navigation"
          >
            {["Home", "Blogs", "About", "Contact"].map((item) => (
              <Link
                key={item}
                to={`/${item === "Home" ? "" : item.toLowerCase()}`}
                className="hover:text-cyan-400"
                onClick={() => setMenuOpen(false)}
                role="menuitem"
              >
                {item}
              </Link>
            ))}
            <div className="flex space-x-6 pt-4 border-t border-gray-700">
              <button
                onClick={() => {
                  setSearchOpen(true);
                  setMenuOpen(false);
                }}
                className="text-gray-300 hover:text-cyan-400"
                aria-label="Open Search"
              >
                <Search size={24} />
              </button>
              <button
                onClick={() => {
                  navigate("/admin/login");
                  setMenuOpen(false);
                }}
                className="text-gray-300 hover:text-cyan-400"
                aria-label="Admin Login"
              >
                <User size={24} />
              </button>
              <button
                onClick={() => {
                  toggleDarkMode();
                  setMenuOpen(false);
                }}
                className="text-gray-300 hover:text-cyan-400"
                aria-label="Toggle Dark Mode"
              >
                {darkMode ? <Sun size={24} /> : <Moon size={24} />}
              </button>
            </div>
          </nav>
        </div>
      )}

      {/* Search Overlay */}
      {searchOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative w-11/12 max-w-lg transition-all duration-500 search-box">
            <input
              type="text"
              placeholder="Search blogs..."
              className="w-full p-4 rounded-lg bg-gray-800 text-gray-100 outline-none"
              autoFocus
              aria-label="Search Blogs"
            />
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-cyan-400"
              onClick={() => setSearchOpen(false)}
              aria-label="Close Search"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Search, User, LogOut, Sun, Moon } from "lucide-react";
import { gsap } from "gsap";

const Header = ({ darkMode, toggleDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [userDropdown, setUserDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef();
  const logoRef = useRef();
  const navRef = useRef();
  const iconsRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // GSAP animation for header on page load
    gsap.from(headerRef.current, {
      opacity: 0,
      y: -50,
      duration: 1.2,
      ease: "power3.out",
    });

    // GSAP animation for logo on page load
    gsap.from(logoRef.current, {
      opacity: 0,
      scale: 0.5,
      duration: 1.2,
      ease: "power3.out",
      delay: 0.2,
    });

    // GSAP animation for nav links on page load
    gsap.from(navRef.current.children, {
      opacity: 0,
      x: -50,
      duration: 1.2,
      ease: "power3.out",
      delay: 0.4,
      stagger: 0.1,
    });

    // GSAP animation for icons on page load
    gsap.from(iconsRef.current.children, {
      opacity: 0,
      scale: 0.5,
      duration: 1.2,
      ease: "power3.out",
      delay: 0.6,
      stagger: 0.1,
    });
  }, []);

  useEffect(() => {
    if (scrolled) {
      gsap.to(headerRef.current, {
        backgroundColor: "#1f2937",
        height: "60px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
        backdropFilter: "blur(10px)",
        duration: 0.3,
      });
    } else {
      gsap.to(headerRef.current, {
        backgroundColor: "#111827",
        height: "80px",
        boxShadow: "none",
        backdropFilter: "blur(0px)",
        duration: 0.3,
      });
    }
  }, [scrolled]);

  const handleLogout = () => {
    alert("Logged out successfully ✅");
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
        <nav ref={navRef} className="hidden md:flex items-center space-x-8">
          {["Home", "Blogs", "About", "Contact"].map((item) => (
            <Link
              key={item}
              to={`/${item === "Home" ? "" : item.toLowerCase()}`}
              className="relative group text-gray-300 hover:text-cyan-400"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full"></span>
            </Link>
          ))}

          {/* Dark/Light Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="text-gray-300 hover:text-cyan-400"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Sun size={22} /> : <Moon size={22} />}
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

            <div className="relative">
              <button
                onClick={() => setUserDropdown(!userDropdown)}
                className="text-gray-300 hover:text-cyan-400"
                aria-label="User Menu"
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
                      alert("Profile page coming soon!");
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

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-gray-100"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Mobile Menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800 transform transition-all duration-500">
          <nav className="flex flex-col space-y-4 px-4 py-6">
            {["Home", "Blogs", "About", "Contact"].map((item) => (
              <Link
                key={item}
                to={`/${item === "Home" ? "" : item.toLowerCase()}`}
                className="hover:text-cyan-400"
                onClick={() => setMenuOpen(false)}
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
          <div className="relative w-11/12 max-w-lg transition-all duration-500">
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

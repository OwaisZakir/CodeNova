import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Search, User, LogOut } from "lucide-react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [userDropdown, setUserDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef();
  const navigate = useNavigate();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // GSAP onLoad animation
  useGSAP(() => {
    gsap.from(headerRef.current, {
      opacity: 0,
      y: -50, // Slide from top
      duration: 1.2, // Smooth transition
      ease: "power3.out", // Easing function for smoothness
    });
  }, []);

  // GSAP Scroll animation (Background Color & Height change)
  useEffect(() => {
    if (scrolled) {
      gsap.to(headerRef.current, {
        backgroundColor: "#1f2937", // Darker background when scrolled
        height: "60px", // Decrease height
        duration: 0.3, // Smooth transition
      });
    } else {
      gsap.to(headerRef.current, {
        backgroundColor: "#111827", // Original background
        height: "80px", // Original height
        duration: 0.3, // Smooth transition
      });
    }
  }, [scrolled]);

  // Logout Handler
  const handleLogout = () => {
    alert("Logged out successfully ✅");
    setUserDropdown(false);
    navigate("/");
  };

  return (
    <header
      ref={headerRef}
      className={`text-gray-100 sticky top-0 z-50 shadow-lg py-4`} // Removed CSS transition that conflicted
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-cyan-400 hover:text-cyan-500 transition duration-300 transform hover:scale-110"
        >
          CodeNova
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {["Home", "Blogs", "About", "Contact"].map((item) => (
            <Link
              key={item}
              to={`/${item === "Home" ? "" : item.toLowerCase()}`}
              className="relative group text-gray-300 hover:text-cyan-400"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all"></span>
            </Link>
          ))}

          {/* Icons */}
          <div className="flex items-center space-x-5">
            {/* Search Icon */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-gray-300 hover:text-cyan-400 transition transform duration-300 ease-in-out hover:scale-110"
            >
              <Search size={22} />
            </button>

            {/* User Icon */}
            <div className="relative">
              <button
                onClick={() => setUserDropdown(!userDropdown)}
                className="text-gray-300 hover:text-cyan-400 transition transform duration-300 ease-in-out hover:scale-110"
              >
                <User size={22} />
              </button>

              {/* User Dropdown */}
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
            {/* Mobile Icons */}
            <div className="flex space-x-6 pt-4 border-t border-gray-700">
              <button
                onClick={() => {
                  setSearchOpen(true);
                  setMenuOpen(false);
                }}
                className="text-gray-300 hover:text-cyan-400"
              >
                <Search size={24} />
              </button>
              <button
                onClick={() => {
                  navigate("/admin/login");
                  setMenuOpen(false);
                }}
                className="text-gray-300 hover:text-cyan-400"
              >
                <User size={24} />
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
            />
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-cyan-400"
              onClick={() => setSearchOpen(false)}
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

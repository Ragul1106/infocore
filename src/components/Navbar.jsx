import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Courses", path: "/courses" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-gradient-to-r from-blue-950 via-indigo-900 to-black backdrop-blur-lg shadow-2xl sticky top-0 z-50 px-6 md:px-10 py-4 border-b border-white/10">
      <div className="flex justify-between items-center">

        {/* Logo Section */}
        <div className="flex items-center gap-3 cursor-pointer group">
          <img
            src={logo}
            alt="logo"
            className="w-12 h-12 md:w-14 md:h-14 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
          />

          <div>
            <h1 className="text-xl md:text-2xl font-bold text-white transition-all duration-300 group-hover:text-green-400">
              InfiCore
            </h1>

            <p className="text-[10px] md:text-xs text-gray-300 tracking-wide">
              Engineering Infinite Possibilities
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 font-semibold items-center">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="relative text-white hover:text-green-400 transition duration-300 transform hover:scale-110"
            >
              {link.name}

              {/* Animated underline */}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-green-400 to-cyan-400 transition-all duration-300 hover:w-full"></span>
            </Link>
          ))}

        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-white text-3xl transition-transform duration-300 hover:scale-110"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-4 bg-white/10 backdrop-blur-xl border border-white/10 p-5 rounded-xl md:hidden shadow-xl">

          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className="text-white hover:text-green-400 hover:translate-x-2 transition duration-300 font-medium"
            >
              {link.name}
            </Link>
          ))}

          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
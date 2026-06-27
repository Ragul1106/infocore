import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/images/logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Courses", path: "/courses" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-blue-950 via-indigo-900 to-black shadow-xl border-b border-white/10 backdrop-blur-lg">
      <nav className="mx-auto max-w px-6 md:px-10 py-4">
        
        {/* Top Navbar */}
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group flex-shrink-0"
          >
            <img
              src={logo}
              alt="InfiCore Logo"
              className="w-12 h-12 md:w-14 md:h-14 object-contain transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
            />

            <div>
              <h1 className="text-xl md:text-2xl font-bold text-white transition duration-300 group-hover:text-green-400">
                InfiCore
              </h1>

              <p className="text-[10px] md:text-xs text-gray-300 tracking-wide">
                Engineering Infinite Possibilities
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `group relative font-medium transition duration-300 ${
                    isActive
                      ? "text-green-400"
                      : "text-white hover:text-green-400"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}

                    <span
                      className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-green-400 to-cyan-400 transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            type="button"
            aria-label="Toggle Menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-3xl transition-transform duration-300 hover:scale-110"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            menuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-4 bg-white/10 backdrop-blur-xl border border-white/10 p-5 rounded-xl shadow-xl">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `font-medium transition duration-300 ${
                    isActive
                      ? "text-green-400"
                      : "text-white hover:text-green-400 hover:translate-x-2"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>

      </nav>
    </header>
  );
};

export default Navbar;
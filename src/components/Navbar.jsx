import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const linkStyle = (path) =>
    location.pathname === path
      ? "text-blue-400"
      : "text-gray-300 hover:text-blue-400 transition-colors duration-300";

  return (
    <nav className="fixed w-full top-0 z-50 backdrop-blur-xl bg-black/60 border-b border-blue-500/20">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* LOGO */}
        <Link
          to="/"
          className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent hover:from-blue-300 hover:to-cyan-300 transition-all duration-300"
        >
          Supraj
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex space-x-10 text-sm font-medium">
          <Link to="/" className={linkStyle("/")}>Home</Link>
          <a href="/#about" className="text-gray-300 hover:text-blue-400 transition-colors">About</a>
          <a href="/#skills" className="text-gray-300 hover:text-blue-400 transition-colors">Skills</a>
          <a href="/#projects" className="text-gray-300 hover:text-blue-400 transition-colors">Projects</a>
          <a href="/#certifications" className="text-gray-300 hover:text-blue-400 transition-colors">Certifications</a>
          <Link to="/resume" className={linkStyle("/resume")}>Resume</Link>
          <a href="/#contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</a>
        </div>

        {/* SOCIAL ICONS */}
        <div className="hidden md:flex space-x-6 text-xl text-gray-400">
          <a
            href="https://github.com/SuprajReddy15"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 transition-colors hover:scale-110 transform"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/thamadapally-supraj-reddy-b5356b370/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 transition-colors hover:scale-110 transform"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-gray-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-black/80 border-t border-blue-500/20">
          <div className="flex flex-col space-y-4 px-6 py-4 text-sm">
            <Link to="/" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-blue-400">Home</Link>
            <a href="/#about" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-blue-400">About</a>
            <a href="/#skills" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-blue-400">Skills</a>
            <a href="/#projects" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-blue-400">Projects</a>
            <a href="/#certifications" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-blue-400">Certifications</a>
            <Link to="/resume" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-blue-400">Resume</Link>
            <a href="/#contact" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-blue-400">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

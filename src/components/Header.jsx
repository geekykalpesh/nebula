import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl bg-black/20 border-b border-white/5">
      <nav className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8 flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 group-hover:scale-110 transition-transform duration-500">
            <div className="w-3 h-3 bg-white rounded-full opacity-90"></div>
            <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          <span className="font-light text-xl tracking-wide text-white group-hover:text-white/80 transition-colors">
            Nebula Films
          </span>
        </a>

        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-12 text-sm font-light text-white/70">
          <li>
            <a href="#work" className="hover:text-white transition-colors duration-300 relative group">
              Work
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
          <li>
            <a href="#process" className="hover:text-white transition-colors duration-300 relative group">
              Process
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-white transition-colors duration-300 relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
        </ul>

        {/* CTA */}
        <div className="flex items-center gap-6">
          <button className="hidden sm:block text-sm font-light text-white/70 hover:text-white transition-colors">
            Sign In
          </button>
          <button className="px-6 py-2.5 bg-white text-black rounded-full text-sm font-medium hover:bg-white/90 transition-all duration-300 hover:scale-105">
            Get Started
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;

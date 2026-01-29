import React, { useState, useEffect } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-none">
      <header 
        className={`pointer-events-auto transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] 
          ${scrolled 
            ? "w-[min(90vw,60rem)] rounded-full bg-black/60 backdrop-blur-xl border border-[var(--border-subtle)] shadow-[0_8px_30px_rgb(0,0,0,0.12)] py-3 px-6" 
            : "w-full max-w-7xl bg-transparent border-transparent py-6 px-8"
          }
        `}
      >
        <nav className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <span className={`font-display font-medium text-xl tracking-tight text-[var(--text-primary)] group-hover:text-white/80 transition-colors ${scrolled ? 'text-lg' : ''}`}>
              Nebula<span className="font-light opacity-70">Films</span>
            </span>
          </a>

          {/* Navigation */}
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--text-secondary)]">
            {['Work', 'Process', 'About'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="hover:text-[var(--text-primary)] transition-colors duration-300 relative group py-2">
                  {item}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[var(--text-primary)]/50 rounded-full group-hover:w-1/2 transition-all duration-300"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <button className="hidden sm:block text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors">
              Sign In
            </button>
            <button className="px-5 py-2.5 bg-[var(--text-primary)] text-black rounded-full text-sm font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] hover:shadow-lg hover:shadow-white/10">
              Get Started
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;

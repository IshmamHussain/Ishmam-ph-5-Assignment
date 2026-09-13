import { useState } from "react";

const links = ["Home", "Technologies", "Projects", "About", "Contact"];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 text-slate-700"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  // Close (X) icon when menu is open
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" strokeLinecap="round" />
                    <line x1="6" y1="6" x2="18" y2="18" strokeLinecap="round" />
                  </>
                ) : (
                  // Hamburger icon when closed
                  <>
                    <line x1="4" y1="7" x2="20" y2="7" strokeLinecap="round" />
                    <line x1="4" y1="12" x2="20" y2="12" strokeLinecap="round" />
                    <line x1="4" y1="17" x2="20" y2="17" strokeLinecap="round" />
                  </>
                )}
              </svg>
            </button>

            <a href="#home" className="hidden lg:flex items-center gap-2">
              <span className="brand-gradient-bg w-9 h-9 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                DS
              </span>
              <span className="text-xl font-bold">
                Dev <span className="brand-gradient-text">Stack</span>
              </span>
            </a>
          </div>

          <a href="#home" className="flex lg:hidden items-center gap-2">
            <span className="brand-gradient-bg w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-xs">
              DS
            </span>
            <span className="text-lg font-bold">
              Dev <span className="brand-gradient-text">Stack</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <li key={link}>
                <a
                  href={"#" + link.toLowerCase()}
                  className="text-slate-600 hover:text-pink-600 transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <button className="text-sm sm:text-base text-slate-700 hover:text-pink-600 transition-colors">
              Sign In
            </button>
            <button className="brand-gradient-bg text-white text-sm sm:text-base px-4 sm:px-6 py-2 rounded-full font-medium">
              Sign Up
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <ul className="lg:hidden pb-4 flex flex-col gap-3 border-t border-slate-100 pt-4">
            {links.map((link) => (
              <li key={link}>
                <a
                  href={"#" + link.toLowerCase()}
                  onClick={() => setMenuOpen(false)}
                  className="block text-slate-600 hover:text-pink-600"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
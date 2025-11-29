import React, { useState } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../ThemeContext';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold text-black dark:text-white transition-colors">
              Dua Shakir
            </h1>

            <button
              className="lg:hidden p-2 z-50 relative text-gray-900 dark:text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X /> : <Menu />}
            </button>

            {/* Desktop Menu */}
            <div className="hidden lg:flex lg:items-center lg:gap-10">
              <ul className="flex flex-row gap-10 font-medium">
                <li>
                  <a href="#hero" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#work" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition">
                    Work
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition">
                    Contact
                  </a>
                </li>
              </ul>

              {/* Desktop Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? (
                  <Moon size={20} className="text-gray-700 dark:text-gray-300" />
                ) : (
                  <Sun size={20} className="text-gray-700 dark:text-gray-300" />
                )}
              </button>

              <a
                href="/assets/documents/CV.pdf"
                download="Dua_Shakir_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition flex items-center gap-2"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-60 bg-white dark:bg-gray-900 shadow-2xl transform transition-transform duration-300 ease-in-out z-40 lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full justify-between py-6 px-5">
          <div className="pt-12 space-y-6">
            <ul className="flex flex-col gap-4 text-gray-600 dark:text-gray-300">
              <li>
                <a
                  href="#about"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-black dark:hover:text-white transition block"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-black dark:hover:text-white transition block"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-black dark:hover:text-white transition block"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#work"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-black dark:hover:text-white transition block"
                >
                  Work
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-black dark:hover:text-white transition block"
                >
                  Contact
                </a>
              </li>
            </ul>

            <hr className="border-gray-200 dark:border-gray-700" />

            <div className="space-y-4">
              {/* Mobile Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className="w-full flex items-center justify-between py-3 px-4 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition bg-gray-50 dark:bg-gray-800 rounded-lg"
              >
                <span>Switch Theme</span>
                {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
              </button>

              <a
                href="/assets/documents/CV.pdf"
                download="Dua_Shakir_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-6 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition flex items-center justify-center gap-2"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
}

export default Navbar;
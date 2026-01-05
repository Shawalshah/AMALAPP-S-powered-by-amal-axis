import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext.jsx';
import amalLogo from '../assets/Logo Amal Apps.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Left: Logo */}
        <Link to="/" className="z-50 inline-flex items-center">
          <img src={amalLogo} alt="Amal Apps" className="h-16 w-auto object-contain" />
        </Link>

        {/* Center: Floating Nav / CTA Stack */}
        <div className={`hidden md:flex items-center gap-8 px-8 py-3 rounded-full backdrop-blur-md border border-black/10 dark:border-white/10 transition-all duration-300 ${
          isScrolled ? 'bg-white/70 dark:bg-black/50 shadow-lg' : 'bg-white/30 dark:bg-transparent'
        }`}>
           <nav className="flex items-center gap-6">
             <a href="#about" className="text-sm font-medium text-black/70 dark:text-white/80 hover:text-black dark:hover:text-white transition-colors">About</a>
             <a href="#work" className="text-sm font-medium text-black/70 dark:text-white/80 hover:text-black dark:hover:text-white transition-colors">Work</a>
             <a href="#why-us" className="text-sm font-medium text-black/70 dark:text-white/80 hover:text-black dark:hover:text-white transition-colors">Why Us</a>
           </nav>
        </div>

        {/* Right: Theme Toggle + Contact */}
        <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2.5 rounded-full border border-black/20 dark:border-white/20 bg-black/5 dark:bg-white/10 backdrop-blur-sm hover:bg-black/10 dark:hover:bg-white/20 transition-all"
            >
              {theme === 'dark' ? (
                <Sun size={18} className="text-black dark:text-white" />
              ) : (
                <Moon size={18} className="text-black dark:text-white" />
              )}
            </button>
            <Link 
              to="/contact" 
              className="px-6 py-2.5 rounded-full bg-black dark:bg-white text-white dark:text-black font-semibold text-sm hover:bg-black/90 dark:hover:bg-white/90 transition-all hover:scale-105"
            >
              Contact
            </Link>
        </div>

        {/* Mobile: Theme Toggle + Menu Button */}
        <div className="md:hidden z-50 flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-full border border-black/20 dark:border-white/20 bg-black/5 dark:bg-white/10 backdrop-blur-sm"
          >
            {theme === 'dark' ? (
              <Sun size={20} className="text-black dark:text-white" />
            ) : (
              <Moon size={20} className="text-black dark:text-white" />
            )}
          </button>
          <button 
            className="p-2 text-black dark:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-0 left-0 w-full h-screen bg-white dark:bg-black flex flex-col items-center justify-center gap-8 md:hidden"
        >
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl text-black dark:text-white font-medium">About</a>
          <a href="#work" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl text-black dark:text-white font-medium">Work</a>
          <a href="#why-us" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl text-black dark:text-white font-medium">Why Us</a>
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="px-8 py-3 rounded-full bg-black dark:bg-white text-white dark:text-black font-semibold text-lg">
            Contact Us
          </Link>
        </motion.div>
      )}
    </header>
  );
};

export default Header;

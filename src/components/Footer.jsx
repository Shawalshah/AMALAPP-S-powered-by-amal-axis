import React from 'react';
import { Link } from 'react-router-dom';
import amalLogo from '../assets/Logo Amal Apps.png';

const Footer = () => {
  return (
    <footer className="py-8 sm:py-10 md:py-12 bg-white dark:bg-black border-t border-zinc-100 dark:border-zinc-900">
      <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
        <div className="inline-flex items-center">
          <img src={amalLogo} alt="Amal Apps" className="h-16 w-auto object-contain" />
        </div>
        
        <div className="flex items-center gap-5 sm:gap-8 text-xs sm:text-sm text-zinc-500">
          <Link to="/privacy" className="hover:text-black dark:hover:text-white transition-colors">Privacy</Link>
          <Link to="/terms" className="hover:text-black dark:hover:text-white transition-colors">Terms</Link>
        </div>
        
        <div className="text-xs sm:text-sm text-zinc-400 text-center">
          &copy; {new Date().getFullYear()} Amal Apps. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

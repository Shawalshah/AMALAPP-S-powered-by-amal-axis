import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 bg-zinc-50 dark:bg-black flex items-center justify-center">
      <div className="max-w-4xl w-full text-center">
        <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold mb-5 sm:mb-6 md:mb-8 text-black dark:text-white tracking-tighter">
          Have an idea? Let’s build it with <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500"> AI.</span>
        </h2>
        
        <Link to="/contact" className="inline-flex items-center gap-2 sm:gap-3 px-5 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5 bg-black dark:bg-white text-white dark:text-black rounded-full font-bold text-sm sm:text-base md:text-lg lg:text-xl hover:scale-105 transition-transform duration-300">
          Let's Get Build It <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </Link>
      </div>
    </section>
  );
};

export default CTA;

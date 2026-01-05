import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-black text-black dark:text-white px-4 sm:px-6">
      {/* Abstract AI Background Animation */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-purple-600/30 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[40%] left-[30%] w-[40%] h-[40%] bg-indigo-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      
      <div className="relative z-10 container mx-auto text-center flex flex-col items-center gap-5 sm:gap-6 md:gap-8 py-20 sm:py-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-r from-black via-black to-black/60 dark:from-white dark:via-white dark:to-white/60">
            We build AI-powered products that <span className="italic">think</span>, <span className="italic">learn</span> & scale.
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl text-black/60 dark:text-white/60 px-2 sm:px-0"
        >
          <p>
            Transforming visionary ideas into intelligent reality. We combine cutting-edge generative AI with robust engineering to deliver software that evolves with your business.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <Link to="/contact" className="group relative inline-block px-6 py-3 sm:px-8 sm:py-4 bg-black dark:bg-white text-white dark:text-black font-bold rounded-full text-base sm:text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
            <span className="relative z-10">Let's Build It</span>
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-800 to-zinc-900 dark:from-blue-100 dark:to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-black/40 dark:text-white/40"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-black/40 dark:from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;

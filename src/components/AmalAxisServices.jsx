import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Sparkles, Cpu, Globe } from 'lucide-react';

const services = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "BUILD",
    description: "MVP in 100 hours. Agile workflows that accelerate your time to market."
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "BOTS",
    description: "Voice + Chat AI. Seamlessly integrate cutting-edge AI into your app."
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "AUTOMATE",
    description: "End-to-end workflows. Automation that saves time and reduces errors."
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "VISION",
    description: "Computer vision AI. Advanced visual solutions that see and understand."
  }
];

const AmalAxisServices = () => {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 sm:w-72 h-48 sm:h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Floating Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <div className="mb-10 sm:mb-12 md:mb-16 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 sm:mb-8"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-xs sm:text-sm text-white/80 font-medium">Powered by Amal Axis</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 tracking-tight"
          >
            Amal Apps Powered by <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Amal Axis</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/70 text-sm sm:text-base md:text-lg"
          >
            Building intelligent applications with cutting-edge technology
          </motion.p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl lg:rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              
              <div className="relative z-10">
                <div className="mb-3 sm:mb-4 md:mb-6 p-2 sm:p-2.5 md:p-3 bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl w-fit text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-1.5 sm:mb-2 md:mb-3 text-white group-hover:text-cyan-400 transition-colors leading-tight">
                  {service.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-white/60 group-hover:text-white/80 leading-relaxed transition-colors">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmalAxisServices;

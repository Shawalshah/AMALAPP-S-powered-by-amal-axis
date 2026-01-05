import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Layers, Shield, HeartHandshake, Eye, Zap, Cpu, Palette } from 'lucide-react';

const features = [
  {
    icon: <Clock className="w-6 h-6" />,
    title: "On-Time Delivery",
    description: "We respect deadlines and deliver high-quality code on schedule."
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Scalable Architecture",
    description: "Built on robust foundations that grow with your user base."
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Bank-Grade Security",
    description: "Enterprise-level security to keep your data safe."
  },
  {
    icon: <HeartHandshake className="w-6 h-6" />,
    title: "24/7 Support",
    description: "Dedicated support ensuring your app runs smoothly."
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: "Full Transparency",
    description: "Clear communication throughout the development lifecycle."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Rapid Development",
    description: "Agile workflows that accelerate your time-to-market."
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "AI Integration",
    description: "Seamlessly integrate cutting-edge AI into your app."
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Product-First Design",
    description: "Clean, conversion-focused UI that feels premium and stays effortless to use."
  }
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-16 sm:py-20 md:py-24 bg-zinc-100 dark:bg-black text-black dark:text-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-10 sm:mb-12 md:mb-16 text-center max-w-2xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 tracking-tight"
          >
            Why Businesses <span className="text-zinc-500">Choose Us.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 text-sm sm:text-base md:text-lg"
          >
            We don't just build apps; we build value.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl lg:rounded-3xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-600 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              
              <div className="relative z-10">
                <div className="mb-3 sm:mb-4 md:mb-6 p-2 sm:p-2.5 md:p-3 bg-zinc-100 dark:bg-zinc-800 rounded-lg sm:rounded-xl w-fit text-black dark:text-white group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-1.5 sm:mb-2 md:mb-3 text-zinc-900 dark:text-zinc-100 group-hover:text-black dark:group-hover:text-white transition-colors leading-tight">
                  {feature.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-500 group-hover:text-zinc-700 dark:group-hover:text-zinc-400 leading-relaxed transition-colors">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

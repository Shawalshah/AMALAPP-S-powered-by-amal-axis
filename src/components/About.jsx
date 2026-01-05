import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code2, Rocket, Workflow } from 'lucide-react';

const features = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Thinking Apps",
    description: "We design apps that think, learn and adapt to user behavior in real-time."
  },
  {
    icon: <Workflow className="w-8 h-8" />,
    title: "Generative Automation",
    description: "Leveraging Generative AI to automate workflows and personalize user experiences."
  },
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "Hybrid Logic",
    description: "Combining advanced AI Logic with robust real-world software development."
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Production Ready",
    description: "Building pre-production ready scalable applications from day one."
  }
];

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 bg-zinc-50 dark:bg-zinc-950">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16 items-start">
          <div className="w-full lg:w-1/3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-black dark:text-white">
              Redefining <br />
              <span className="text-zinc-400">Digital Intelligence.</span>
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
              At Amal Apps, we don't just write code; we architect intelligence. Our mission is to bridge the gap between traditional software and the cognitive capabilities of modern AI, creating products that are not just tools, but partners in your growth.
            </p>
          </div>

          <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-white dark:bg-zinc-900 shadow-sm border border-zinc-100 dark:border-zinc-800 hover:shadow-md transition-shadow"
              >
                <div className="mb-3 sm:mb-4 text-black dark:text-white p-2.5 sm:p-3 bg-zinc-100 dark:bg-zinc-800 w-fit rounded-lg sm:rounded-xl">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-black dark:text-white">{feature.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

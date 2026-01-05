import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Email",
      detail: "hello@amalaxis.ai",
      link: "mailto:hello@amalaxis.ai"
    },
    {
      icon: <Phone className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Phone",
      detail: "+1 800-460-8571",
      link: "tel:+18004608571"
    }
  ];

  return (
    <div className="bg-white dark:bg-black min-h-screen text-black dark:text-white">
      <Header />
      
      <main className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20">
        {/* Hero Section */}
        <div className="container mx-auto px-4 sm:px-6 mb-12 sm:mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-tight">
              Let's Build <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">Together</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Have a project in mind? We'd love to hear about it. Get in touch and let's create something amazing.
            </p>
          </motion.div>
        </div>

        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-zinc-50 dark:bg-zinc-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center gap-3 mb-6 sm:mb-8">
                  <div className="p-2.5 sm:p-3 bg-zinc-100 dark:bg-zinc-800 rounded-xl">
                    <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-black dark:text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black dark:text-white">
                      Send us a message
                    </h2>
                    <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
                      We'll get back to you within 24 hours
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm sm:text-base font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-sm sm:text-base text-black dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm sm:text-base font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-sm sm:text-base text-black dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm sm:text-base font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                      Company (Optional)
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-sm sm:text-base text-black dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm sm:text-base font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us about your project..."
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-sm sm:text-base text-black dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 sm:gap-3 px-6 py-4 sm:py-5 bg-black dark:bg-white text-white dark:text-black rounded-xl font-bold text-sm sm:text-base hover:scale-[1.02] transition-transform duration-300"
                  >
                    <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6 sm:space-y-8"
            >
              {/* Contact Cards */}
              <div className="space-y-4 sm:space-y-5">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="p-5 sm:p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2.5 sm:p-3 bg-zinc-100 dark:bg-zinc-800 rounded-xl text-black dark:text-white flex-shrink-0">
                        {info.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm sm:text-base font-bold text-zinc-500 dark:text-zinc-400 mb-1">
                          {info.title}
                        </h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-base sm:text-lg font-semibold text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors break-all"
                          >
                            {info.detail}
                          </a>
                        ) : (
                          <p className="text-base sm:text-lg font-semibold text-black dark:text-white">
                            {info.detail}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pakistan Office */}
              <div className="p-6 sm:p-8 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                <h3 className="text-xs sm:text-sm font-bold text-zinc-400 dark:text-zinc-500 mb-2 uppercase tracking-wider">
                  🇵🇰 Pakistan Office
                </h3>
                <div className="space-y-1 text-sm sm:text-base text-zinc-700 dark:text-zinc-300">
                  <p>Alpha 15, Office # F03</p>
                  <p>NASTP Gate 5, Chaklala Road</p>
                  <p>Rawalpindi, Pakistan</p>
                </div>
              </div>

              {/* California Office */}
              <div className="p-6 sm:p-8 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                <h3 className="text-xs sm:text-sm font-bold text-zinc-400 dark:text-zinc-500 mb-2 uppercase tracking-wider">
                  🇺🇸 California Office
                </h3>
                <div className="space-y-1 text-sm sm:text-base text-zinc-700 dark:text-zinc-300">
                  <p>15995 Brownstone Ave</p>
                  <p>Lathrop, California 95330</p>
                  <p>United States</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;

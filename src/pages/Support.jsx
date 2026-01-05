import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowLeft, Mail, MessageCircle, Clock, Shield, HelpCircle, FileText } from 'lucide-react';

const supportData = {
  "amal-app": {
    name: "Amal APP",
    email: "support@amalapps.com",
    description: "Get help with Amal APP - your productivity and tools companion."
  },
  "feel-pro": {
    name: "Feel PRO",
    email: "support@amalapps.com",
    description: "Get help with Feel PRO - your health and wellness companion."
  },
  "guess-chat": {
    name: "Guess Chat",
    email: "support@amalapps.com",
    description: "Get help with Guess Chat - your social gaming experience."
  },
  "kids-school": {
    name: "Kids School",
    email: "support@amalapps.com",
    description: "Get help with Kids School - educational app for young learners."
  },
  "kids-drawing": {
    name: "Kids Drawing",
    email: "support@amalapps.com",
    description: "Get help with Kids Drawing - creative drawing app for kids."
  },
  "review-2025": {
    name: "Review 2025",
    email: "support@amalapps.com",
    description: "Get help with Review 2025 - business review platform."
  }
};

const supportFeatures = [
  {
    icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: "Email Support",
    description: "Reach out via email for detailed assistance"
  },
  {
    icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: "24-48 Hour Response",
    description: "We respond to all queries within 24-48 hours"
  },
  {
    icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: "Privacy Protected",
    description: "Your data and conversations are secure"
  },
  {
    icon: <HelpCircle className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: "FAQ & Guides",
    description: "Access helpful resources and tutorials"
  }
];

const Support = () => {
  const { slug } = useParams();
  const app = supportData[slug];

  if (!app) {
    return (
      <div className="min-h-screen flex items-center justify-center text-black dark:text-white bg-white dark:bg-black">
        App not found
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-black min-h-screen text-black dark:text-white">
      <Header />
      
      <main className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 container mx-auto">
        <Link 
          to={`/project/${slug}`} 
          className="inline-flex items-center gap-2 text-sm sm:text-base text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white mb-6 sm:mb-8 transition-colors"
        >
          <ArrowLeft size={18} className="sm:w-5 sm:h-5" /> Back to {app.name}
        </Link>
        
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            {app.name} <span className="text-zinc-400">Support</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            {app.description}
          </p>
        </div>

        {/* Support Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12 md:mb-16">
          {supportFeatures.map((feature, index) => (
            <div 
              key={index}
              className="p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800"
            >
              <div className="mb-3 sm:mb-4 p-2 sm:p-2.5 bg-zinc-100 dark:bg-zinc-800 rounded-lg w-fit text-black dark:text-white">
                {feature.icon}
              </div>
              <h3 className="text-sm sm:text-base font-bold mb-1 sm:mb-2 text-black dark:text-white">
                {feature.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Contact Form Section */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-zinc-50 dark:bg-zinc-900 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 border border-zinc-200 dark:border-zinc-800">
            <div className="flex items-center gap-3 mb-5 sm:mb-6">
              <div className="p-2.5 sm:p-3 bg-zinc-100 dark:bg-zinc-800 rounded-xl">
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-black dark:text-white" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-black dark:text-white">
                  Contact Support
                </h2>
                <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
                  We're here to help you
                </p>
              </div>
            </div>

            <form className="space-y-4 sm:space-y-5">
              <div>
                <label className="block text-xs sm:text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5 sm:mb-2">
                  Your Name
                </label>
                <input 
                  type="text" 
                  placeholder="Enter your name"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-sm sm:text-base text-black dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5 sm:mb-2">
                  Email Address
                </label>
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-sm sm:text-base text-black dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5 sm:mb-2">
                  Subject
                </label>
                <select 
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-sm sm:text-base text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                  <option value="">Select a topic</option>
                  <option value="bug">Bug Report</option>
                  <option value="feature">Feature Request</option>
                  <option value="account">Account Issue</option>
                  <option value="billing">Billing Question</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5 sm:mb-2">
                  Message
                </label>
                <textarea 
                  rows={4}
                  placeholder="Describe your issue or question..."
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-sm sm:text-base text-black dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                />
              </div>

              <button 
                type="submit"
                className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-black dark:bg-white text-white dark:text-black rounded-lg sm:rounded-xl font-bold text-sm sm:text-base hover:scale-[1.02] transition-transform duration-300"
              >
                Send Message
              </button>
            </form>

            <div className="mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-zinc-200 dark:border-zinc-800">
              <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 text-center">
                Or email us directly at{' '}
                <a 
                  href={`mailto:${app.email}`} 
                  className="text-blue-500 hover:text-blue-600 font-medium"
                >
                  {app.email}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Privacy Note */}
        <div className="mt-8 sm:mt-12 text-center">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-zinc-400">
            <FileText className="w-4 h-4" />
            <span>Your information is protected by our Privacy Policy</span>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Support;

import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Shield, Lock, Eye, Database, UserCheck, FileText } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="bg-white dark:bg-black min-h-screen text-black dark:text-white">
      <Header />
      
      <main className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 sm:mb-12"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400">
              Last updated: January 5, 2026
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="prose prose-zinc dark:prose-invert max-w-none"
          >
            <div className="space-y-8 sm:space-y-10">
              {/* Introduction */}
              <section>
                <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  At Amal Apps (powered by Amal Axis), we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
                </p>
              </section>

              {/* Information We Collect */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-zinc-100 dark:bg-zinc-800 rounded-lg">
                    <Database className="w-5 h-5 text-black dark:text-white" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold">Information We Collect</h2>
                </div>
                <div className="space-y-4 text-zinc-700 dark:text-zinc-300">
                  <div>
                    <h3 className="font-semibold text-black dark:text-white mb-2">Personal Information</h3>
                    <p>We may collect personal information that you provide to us, including but not limited to your name, email address, phone number, and company information when you contact us or use our services.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black dark:text-white mb-2">Usage Data</h3>
                    <p>We automatically collect certain information when you visit our website, including your IP address, browser type, operating system, and browsing behavior.</p>
                  </div>
                </div>
              </section>

              {/* How We Use Your Information */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-zinc-100 dark:bg-zinc-800 rounded-lg">
                    <UserCheck className="w-5 h-5 text-black dark:text-white" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold">How We Use Your Information</h2>
                </div>
                <ul className="space-y-2 text-zinc-700 dark:text-zinc-300 list-disc list-inside">
                  <li>To provide and maintain our services</li>
                  <li>To communicate with you about your inquiries and projects</li>
                  <li>To improve our services and develop new features</li>
                  <li>To send you updates, marketing communications, and promotional materials</li>
                  <li>To comply with legal obligations and protect our rights</li>
                </ul>
              </section>

              {/* Data Security */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-zinc-100 dark:bg-zinc-800 rounded-lg">
                    <Shield className="w-5 h-5 text-black dark:text-white" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold">Data Security</h2>
                </div>
                <p className="text-zinc-700 dark:text-zinc-300">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
                </p>
              </section>

              {/* Data Sharing */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-zinc-100 dark:bg-zinc-800 rounded-lg">
                    <Eye className="w-5 h-5 text-black dark:text-white" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold">Data Sharing and Disclosure</h2>
                </div>
                <p className="text-zinc-700 dark:text-zinc-300 mb-3">
                  We do not sell your personal information. We may share your information with:
                </p>
                <ul className="space-y-2 text-zinc-700 dark:text-zinc-300 list-disc list-inside">
                  <li>Service providers who assist us in operating our business</li>
                  <li>Legal authorities when required by law</li>
                  <li>Business partners with your consent</li>
                </ul>
              </section>

              {/* Your Rights */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-zinc-100 dark:bg-zinc-800 rounded-lg">
                    <Lock className="w-5 h-5 text-black dark:text-white" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold">Your Rights</h2>
                </div>
                <p className="text-zinc-700 dark:text-zinc-300 mb-3">
                  You have the right to:
                </p>
                <ul className="space-y-2 text-zinc-700 dark:text-zinc-300 list-disc list-inside">
                  <li>Access and receive a copy of your personal information</li>
                  <li>Correct inaccurate or incomplete information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Object to processing of your personal information</li>
                </ul>
              </section>

              {/* Changes to Policy */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-zinc-100 dark:bg-zinc-800 rounded-lg">
                    <FileText className="w-5 h-5 text-black dark:text-white" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold">Changes to This Policy</h2>
                </div>
                <p className="text-zinc-700 dark:text-zinc-300">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </section>

              {/* Contact */}
              <section className="pt-6 border-t border-zinc-200 dark:border-zinc-800">
                <h2 className="text-xl sm:text-2xl font-bold mb-4">Contact Us</h2>
                <p className="text-zinc-700 dark:text-zinc-300 mb-3">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <div className="space-y-2 text-zinc-700 dark:text-zinc-300">
                  <p>Email: <a href="mailto:hello@amalaxis.ai" className="text-blue-600 dark:text-blue-400 hover:underline">hello@amalaxis.ai</a></p>
                  <p>Phone: <a href="tel:+18004608571" className="text-blue-600 dark:text-blue-400 hover:underline">+1 800-460-8571</a></p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Privacy;

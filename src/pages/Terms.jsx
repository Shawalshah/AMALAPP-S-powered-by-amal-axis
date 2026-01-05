import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FileText, CheckCircle, XCircle, AlertCircle, Scale, RefreshCw } from 'lucide-react';

const Terms = () => {
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
              Terms of Service
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
                  Please read these Terms of Service carefully before using Amal Apps services. By accessing or using our services, you agree to be bound by these Terms.
                </p>
              </section>

              {/* Acceptance of Terms */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-zinc-100 dark:bg-zinc-800 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-black dark:text-white" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold">1. Acceptance of Terms</h2>
                </div>
                <p className="text-zinc-700 dark:text-zinc-300">
                  By accessing or using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use our services.
                </p>
              </section>

              {/* Description of Services */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-zinc-100 dark:bg-zinc-800 rounded-lg">
                    <FileText className="w-5 h-5 text-black dark:text-white" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold">2. Description of Services</h2>
                </div>
                <p className="text-zinc-700 dark:text-zinc-300">
                  Amal Apps (powered by Amal Axis) provides AI-powered application development services, including but not limited to MVP development, chatbot solutions, automation workflows, and computer vision AI. Our services are designed to help businesses transform their ideas into functional applications.
                </p>
              </section>

              {/* User Responsibilities */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-zinc-100 dark:bg-zinc-800 rounded-lg">
                    <AlertCircle className="w-5 h-5 text-black dark:text-white" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold">3. User Responsibilities</h2>
                </div>
                <p className="text-zinc-700 dark:text-zinc-300 mb-3">
                  You are solely responsible for:
                </p>
                <ul className="space-y-2 text-zinc-700 dark:text-zinc-300 list-disc list-inside">
                  <li>All content you provide to us for project development</li>
                  <li>Ensuring your use of our services complies with all applicable laws</li>
                  <li>Maintaining the confidentiality of your account credentials</li>
                  <li>Obtaining necessary licenses and permissions for your projects</li>
                </ul>
              </section>

              {/* Intellectual Property */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-zinc-100 dark:bg-zinc-800 rounded-lg">
                    <Scale className="w-5 h-5 text-black dark:text-white" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold">4. Intellectual Property Rights</h2>
                </div>
                <div className="space-y-3 text-zinc-700 dark:text-zinc-300">
                  <p>
                    Upon full payment for services, you will own the intellectual property rights to the deliverables we create specifically for your project.
                  </p>
                  <p>
                    Amal Apps retains ownership of all proprietary tools, frameworks, and methodologies used in providing our services.
                  </p>
                </div>
              </section>

              {/* Payment Terms */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-zinc-100 dark:bg-zinc-800 rounded-lg">
                    <RefreshCw className="w-5 h-5 text-black dark:text-white" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold">5. Payment Terms</h2>
                </div>
                <div className="space-y-3 text-zinc-700 dark:text-zinc-300">
                  <p>
                    Payment terms will be specified in your project agreement. All fees are non-refundable unless otherwise specified in writing.
                  </p>
                  <p>
                    We reserve the right to suspend or terminate services if payment is not received according to the agreed terms.
                  </p>
                </div>
              </section>

              {/* Limitation of Liability */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-zinc-100 dark:bg-zinc-800 rounded-lg">
                    <XCircle className="w-5 h-5 text-black dark:text-white" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold">6. Limitation of Liability</h2>
                </div>
                <p className="text-zinc-700 dark:text-zinc-300">
                  To the maximum extent permitted by law, Amal Apps shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly. Our services are provided "as is" and "as available" without warranties of any kind.
                </p>
              </section>

              {/* Termination */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-zinc-100 dark:bg-zinc-800 rounded-lg">
                    <XCircle className="w-5 h-5 text-black dark:text-white" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold">7. Termination</h2>
                </div>
                <p className="text-zinc-700 dark:text-zinc-300">
                  We may terminate or suspend your access to our services immediately, without prior notice, for any reason, including if you breach these Terms. Upon termination, your right to use our services will immediately cease.
                </p>
              </section>

              {/* Changes to Terms */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-zinc-100 dark:bg-zinc-800 rounded-lg">
                    <RefreshCw className="w-5 h-5 text-black dark:text-white" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold">8. Changes to Terms</h2>
                </div>
                <p className="text-zinc-700 dark:text-zinc-300">
                  We may modify these Terms at any time. If we make material changes, we will notify you by email or by posting a notice on our website. Your continued use of our services after any such changes constitutes your acceptance of the new Terms.
                </p>
              </section>

              {/* Governing Law */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-zinc-100 dark:bg-zinc-800 rounded-lg">
                    <Scale className="w-5 h-5 text-black dark:text-white" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold">9. Governing Law</h2>
                </div>
                <p className="text-zinc-700 dark:text-zinc-300">
                  These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law provisions.
                </p>
              </section>

              {/* Contact */}
              <section className="pt-6 border-t border-zinc-200 dark:border-zinc-800">
                <h2 className="text-xl sm:text-2xl font-bold mb-4">Contact Information</h2>
                <p className="text-zinc-700 dark:text-zinc-300 mb-3">
                  If you have any questions about these Terms, please contact us:
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

export default Terms;

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Download, Send, MapPin } from 'lucide-react';
import { APP_CONFIG, ANIMATION_VARIANTS } from '../../utils/constants';

const Contact: React.FC = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = `${APP_CONFIG.backendUrl}/api/download-cv`;
    link.download = 'CV_Abdsamad.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleEmailClick = () => {
    window.open(`mailto:${APP_CONFIG.email}`, '_blank');
  };

  const handleGithubClick = () => {
    window.open(APP_CONFIG.github, '_blank');
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={ANIMATION_VARIANTS.fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-dark dark:text-primary-light mb-6">
            Get In <span className="bg-gradient-to-r from-accent-blue to-blue-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-lg text-neutral-gray dark:text-gray-400 max-w-2xl mx-auto">
            Feel free to reach out for collaborations, opportunities, or just to say hello!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold text-primary-dark dark:text-primary-light mb-8">
                Let's Connect
              </h3>

              <div className="space-y-6">
                {/* Email */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  onClick={handleEmailClick}
                  className="card group cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg group-hover:bg-accent-blue dark:group-hover:bg-blue-700 transition-colors">
                      <Mail className="w-6 h-6 text-accent-blue dark:text-blue-400 group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-grow">
                      <div className="font-medium text-primary-dark dark:text-primary-light mb-1">
                        Email
                      </div>
                      <div className="text-neutral-gray dark:text-gray-400 group-hover:text-accent-blue dark:group-hover:text-blue-400 transition-colors">
                        {APP_CONFIG.email}
                      </div>
                    </div>
                    <Send className="w-5 h-5 text-neutral-gray dark:text-gray-400 group-hover:text-accent-blue transition-colors" />
                  </div>
                </motion.div>

                {/* GitHub */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  onClick={handleGithubClick}
                  className="card group cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gray-100 dark:bg-gray-700/50 rounded-lg group-hover:bg-gray-800 dark:group-hover:bg-gray-600 transition-colors">
                      <Github className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-grow">
                      <div className="font-medium text-primary-dark dark:text-primary-light mb-1">
                        GitHub
                      </div>
                      <div className="text-neutral-gray dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                        github.com/0samad
                      </div>
                    </div>
                    <div className="w-5 h-5 flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-neutral-gray dark:text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </div>
                </motion.div>

                {/* Location */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg"
                >
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <MapPin className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <div className="font-medium text-primary-dark dark:text-primary-light mb-1">
                      Location
                    </div>
                    <div className="text-neutral-gray dark:text-gray-400">
                      Available for Remote Work
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col justify-center"
            >
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-primary-dark dark:text-primary-light mb-4">
                  Ready to Collaborate?
                </h3>
                <p className="text-neutral-gray dark:text-gray-400 mb-8">
                  I'm always interested in hearing about new opportunities, exciting projects, or just connecting with fellow developers and data enthusiasts.
                </p>

                {/* Download CV Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleDownloadCV}
                  className="btn-primary w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 text-lg"
                >
                  <Download size={20} />
                  Download My CV
                </motion.button>

                {/* Quick Contact Actions */}
                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex flex-wrap gap-4 justify-center">
                    <button
                      onClick={handleEmailClick}
                      className="flex items-center gap-2 px-4 py-2 text-sm text-accent-blue dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
                    >
                      <Mail size={16} />
                      Send Email
                    </button>
                    <button
                      onClick={handleGithubClick}
                      className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50 rounded-lg transition-colors"
                    >
                      <Github size={16} />
                      View GitHub
                    </button>
                  </div>
                </div>
              </div>

              {/* Availability Status */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-6 text-center"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-full">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-green-700 dark:text-green-300">
                    Available for Opportunities
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
import React from 'react';
import { Download, ArrowDown } from 'lucide-react';
import { HERO_CONTENT, APP_CONFIG } from '../../utils/constants';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = `${APP_CONFIG.backendUrl}/api/download-cv`;
    link.download = 'CV_Abdsamad.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleScrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-100/50 dark:from-gray-900/50 dark:to-blue-900/20" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300/20 dark:bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-300/20 dark:bg-indigo-600/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Greeting */}
            <p className="text-lg md:text-xl text-neutral-gray dark:text-gray-400 mb-4 font-medium">
              {HERO_CONTENT.greeting}
            </p>

            {/* Name */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-dark dark:text-primary-light mb-6">
              <span className="bg-gradient-to-r from-accent-blue to-blue-600 bg-clip-text text-transparent">
                {HERO_CONTENT.name}
              </span>
            </h1>

            {/* Title */}
            <p className="text-xl md:text-2xl lg:text-3xl text-neutral-gray dark:text-gray-300 mb-8 font-semibold">
              {HERO_CONTENT.title}
            </p>
          </motion.div>

          {/* Introduction text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-12"
          >
            <div className="max-w-3xl mx-auto">
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed whitespace-pre-line">
                {HERO_CONTENT.introduction}
              </p>
            </div>
          </motion.div>

          {/* Call-to-action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            {HERO_CONTENT.ctaButtons.map((button, index) => (
              <button
                key={index}
                onClick={() =>
                  button.href.startsWith('#')
                    ? handleScrollToSection(button.href)
                    : handleDownloadCV()
                }
                className={`${
                  button.primary
                    ? 'btn-primary'
                    : 'btn-secondary'
                } px-8 py-4 text-lg font-medium min-w-[160px] flex items-center justify-center gap-2`}
              >
                {button.primary && <Download size={20} />}
                {button.label}
              </button>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <button
              onClick={() => handleScrollToSection('#skills')}
              className="text-neutral-gray dark:text-gray-400 hover:text-accent-blue dark:hover:text-blue-400 transition-colors animate-bounce"
              aria-label="Scroll to next section"
            >
              <ArrowDown size={24} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
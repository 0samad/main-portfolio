import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, ExternalLink } from 'lucide-react';
import { EDUCATION, ANIMATION_VARIANTS } from '../../utils/constants';

const Education: React.FC = () => {
  const getIcon = (type: string) => {
    if (type.includes('Certificate')) return Award;
    return GraduationCap;
  };

  const getTypeColor = (type: string) => {
    if (type.includes('Certificate')) return 'text-green-600 dark:text-green-400';
    return 'text-blue-600 dark:text-blue-400';
  };

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900/50">
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
            Education & <span className="bg-gradient-to-r from-accent-blue to-blue-600 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="text-lg text-neutral-gray dark:text-gray-400 max-w-2xl mx-auto">
            Continuous learning through formal education and industry-recognized certifications
          </p>
        </motion.div>

        {/* Timeline/ Cards */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={ANIMATION_VARIANTS.staggerChildren}
            className="space-y-8"
          >
            {EDUCATION.map((cert, index) => {
              const Icon = getIcon(cert.type);
              const iconColor = getTypeColor(cert.type);

              return (
                <motion.div
                  key={index}
                  variants={ANIMATION_VARIANTS.slideUp}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="card relative">
                    {/* Timeline indicator */}
                    <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-accent-blue to-blue-600 hidden md:block" />

                    <div className="flex items-start gap-6">
                      {/* Icon */}
                      <div className={`p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg flex-shrink-0 relative z-10`}>
                        <Icon className={`w-6 h-6 ${iconColor}`} />
                      </div>

                      {/* Content */}
                      <div className="flex-grow">
                        {/* Title */}
                        <h3 className="text-xl font-semibold text-primary-dark dark:text-primary-light mb-2 group-hover:text-accent-blue dark:group-hover:text-blue-400 transition-colors">
                          {cert.title}
                        </h3>

                        {/* Provider */}
                        <div className="flex items-center gap-4 mb-3">
                          <span className="text-accent-blue dark:text-blue-400 font-medium">
                            {cert.provider}
                          </span>
                          <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700/50 rounded-full text-sm text-neutral-gray dark:text-gray-400">
                            {cert.type}
                          </span>
                        </div>

                        {/* Additional info */}
                        <div className="flex items-center text-sm text-neutral-gray dark:text-gray-400">
                          <Award className="w-4 h-4 mr-2" />
                          Professional Development
                        </div>
                      </div>

                      {/* External link indicator */}
                      <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ExternalLink className="w-5 h-5 text-neutral-gray dark:text-gray-400" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Skills Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16"
          >
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-semibold text-primary-dark dark:text-primary-light mb-6">
                Learning Focus Areas
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                    <GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="text-sm font-medium text-primary-dark dark:text-primary-light">
                    Data Science
                  </div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Award className="w-8 h-8 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="text-sm font-medium text-primary-dark dark:text-primary-light">
                    Analytics
                  </div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Calendar className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div className="text-sm font-medium text-primary-dark dark:text-primary-light">
                    Programming
                  </div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                    <ExternalLink className="w-8 h-8 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div className="text-sm font-medium text-primary-dark dark:text-primary-light">
                    Web Dev
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
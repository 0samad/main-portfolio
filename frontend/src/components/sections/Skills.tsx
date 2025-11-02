import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS_CATEGORIES, ANIMATION_VARIANTS } from '../../utils/constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={ANIMATION_VARIANTS.fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-dark dark:text-primary-light mb-6">
            Skills & <span className="bg-gradient-to-r from-accent-blue to-blue-600 bg-clip-text text-transparent">Tech Stack</span>
          </h2>
          <p className="text-lg text-neutral-gray dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and the technologies I work with
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={ANIMATION_VARIANTS.staggerChildren}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {SKILLS_CATEGORIES.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={ANIMATION_VARIANTS.slideUp}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="card group cursor-default">
                {/* Category header */}
                <div className="flex items-center mb-6">
                  <div className="w-2 h-8 bg-accent-blue rounded-full mr-4" />
                  <h3 className="text-xl font-semibold text-primary-dark dark:text-primary-light">
                    {category.title}
                  </h3>
                </div>

                {/* Skills grid */}
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05
                      }}
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: 'rgba(59, 130, 246, 0.1)',
                      }}
                      className="bg-gray-100 dark:bg-gray-700/50 rounded-lg p-3 text-center transition-all duration-200 group-hover:shadow-md"
                    >
                      <span className="text-sm font-medium text-primary-dark dark:text-primary-light group-hover:text-accent-blue dark:group-hover:text-blue-400 transition-colors">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
              4+ Programming Languages
            </span>
            <span className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
              Data Analysis Tools
            </span>
            <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
              Web Development
            </span>
            <span className="px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full text-sm font-medium">
              Design Software
            </span>
            <span className="px-4 py-2 bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 rounded-full text-sm font-medium">
              Multilingual
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
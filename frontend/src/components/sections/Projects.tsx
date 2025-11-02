import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Database, Code, BarChart3, TrendingUp, Target } from 'lucide-react';
import { PROJECTS, ANIMATION_VARIANTS } from '../../utils/constants';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'data' | 'coding'>('all');

  const filteredProjects = {
    all: [...PROJECTS.dataScience, ...PROJECTS.coding],
    data: PROJECTS.dataScience,
    coding: PROJECTS.coding,
  };

  const getProjectIcon = (focus: string) => {
    if (focus.toLowerCase().includes('data') || focus.toLowerCase().includes('analytics')) {
      return BarChart3;
    }
    if (focus.toLowerCase().includes('ml') || focus.toLowerCase().includes('prediction')) {
      return TrendingUp;
    }
    if (focus.toLowerCase().includes('database')) {
      return Database;
    }
    return Code;
  };

  const ProjectCard: React.FC<{ project: any; index: number }> = ({ project, index }) => {
    const Icon = getProjectIcon(project.focus);

    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{ y: -5 }}
        className="card group cursor-pointer"
      >
        <div className="h-full flex flex-col">
          {/* Header with icon */}
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg group-hover:bg-accent-blue dark:group-hover:bg-blue-700 transition-colors">
              <Icon className="w-6 h-6 text-accent-blue dark:text-blue-400 group-hover:text-white transition-colors" />
            </div>
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs font-medium text-neutral-gray dark:text-gray-400">
              {Array.isArray(project.tools) ? project.tools[0] : project.tools.split(',')[0]}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-semibold text-primary-dark dark:text-primary-light mb-3 group-hover:text-accent-blue dark:group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>

          {/* Goal */}
          <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
            {project.goal}
          </p>

          {/* Tools */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {Array.isArray(project.tools)
                ? project.tools.map((tool: string, toolIndex: number) => (
                    <span
                      key={toolIndex}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700/50 rounded text-xs font-medium text-gray-700 dark:text-gray-300"
                    >
                      {tool}
                    </span>
                  ))
                : project.tools.split(',').map((tool: string, toolIndex: number) => (
                    <span
                      key={toolIndex}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700/50 rounded text-xs font-medium text-gray-700 dark:text-gray-300"
                    >
                      {tool.trim()}
                    </span>
                  ))
              }
            </div>
          </div>

          {/* Focus area */}
          <div className="flex items-center text-sm text-neutral-gray dark:text-gray-400">
            <Target className="w-4 h-4 mr-2" />
            {project.focus}
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="projects" className="py-20">
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
            Featured <span className="bg-gradient-to-r from-accent-blue to-blue-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-neutral-gray dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my data science and coding projects demonstrating technical skills and problem-solving abilities
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {[
            { key: 'all', label: 'All Projects', count: 14 },
            { key: 'data', label: 'Data Science', count: PROJECTS.dataScience.length },
            { key: 'coding', label: 'Coding Projects', count: PROJECTS.coding.length },
          ].map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key as 'all' | 'data' | 'coding')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeFilter === filter.key
                  ? 'bg-accent-blue text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {filter.label}
              <span className="ml-2 px-2 py-1 bg-white/20 rounded-full text-xs">
                {filter.count}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects[activeFilter].map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex flex-wrap justify-center gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-blue mb-1">14</div>
              <div className="text-sm text-neutral-gray dark:text-gray-400">Total Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-1">7</div>
              <div className="text-sm text-neutral-gray dark:text-gray-400">Data Science</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-1">7</div>
              <div className="text-sm text-neutral-gray dark:text-gray-400">Coding Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-1">15+</div>
              <div className="text-sm text-neutral-gray dark:text-gray-400">Technologies</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
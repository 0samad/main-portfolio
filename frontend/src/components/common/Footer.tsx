import React from 'react';
import { Github, Mail, ArrowUp } from 'lucide-react';
import { APP_CONFIG } from '../../utils/constants';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Main content */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">
              {APP_CONFIG.name}
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Computer Science Student & Data Enthusiast passionate about building innovative solutions and exploring the intersection of data science and web development.
            </p>

            {/* Social links */}
            <div className="flex justify-center gap-6 mb-8">
              <a
                href={APP_CONFIG.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors group"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a
                href={`mailto:${APP_CONFIG.email}`}
                className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors group"
                aria-label="Email Contact"
              >
                <Mail className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              {/* Copyright */}
              <div className="text-gray-400 text-sm">
                © {currentYear} {APP_CONFIG.name}. All rights reserved.
              </div>

              {/* Scroll to top */}
              <button
                onClick={scrollToTop}
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors text-sm text-gray-400 hover:text-white"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-4 h-4" />
                Back to Top
              </button>
            </div>

            {/* Attribution */}
            <div className="text-center mt-6 text-xs text-gray-500">
              Built with React, TypeScript & TailwindCSS
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
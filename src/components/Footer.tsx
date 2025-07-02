import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="footer-gradient border-t border-slate-700 py-8 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <Logo size="sm" className="mr-3" />
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
              CnT AI
            </span>
          </div>
          <p className="text-gray-400 mb-4">
            Transforming businesses through intelligent automation solutions.
          </p>
          <div className="flex justify-center items-center space-x-6 text-sm text-gray-500 flex-wrap">
            <span>© 2025 CnT AI. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <Link 
              to="/privacy-policy" 
              className="hover:text-purple-400 transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <span>•</span>
            <Link 
              to="/terms-of-service" 
              className="hover:text-purple-400 transition-colors duration-200"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../../../components/Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <Logo size="sm" className="mr-3" />
            <span className="text-xl font-bold bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
              CnT AI
            </span>
          </div>
          <p className="text-gray-400 mb-4">
            Трансформираме бизниси преку интелигентни решенија за автоматизација.
          </p>
          <div className="flex justify-center items-center space-x-6 text-sm text-gray-500 flex-wrap">
            <span>© 2026 CnT AI. Сите права задржани.</span>
            <span className="hidden sm:inline">•</span>
            <Link 
              to="/mk/privacy-policy" 
              className="hover:text-sky-400 transition-colors duration-200"
            >
              Политика за Приватност
            </Link>
            <span>•</span>
            <Link 
              to="/mk/terms-of-service" 
              className="hover:text-sky-400 transition-colors duration-200"
            >
              Услови за Користење
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
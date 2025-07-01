import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../Logo';
import { useTranslation } from '../../translations';

export const FooterMK: React.FC = () => {
  const t = useTranslation('mk');

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
            {t.footer.tagline}
          </p>
          <div className="flex justify-center items-center space-x-6 text-sm text-gray-500 flex-wrap">
            <span>{t.footer.copyright}</span>
            <span className="hidden sm:inline">•</span>
            <Link 
              to="/mk/privacy-policy" 
              className="hover:text-sky-400 transition-colors duration-200"
            >
              {t.footer.privacyPolicy}
            </Link>
            <span>•</span>
            <Link 
              to="/mk/terms-of-service" 
              className="hover:text-sky-400 transition-colors duration-200"
            >
              {t.footer.termsOfService}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
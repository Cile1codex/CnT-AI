import React from 'react';
import { useLanguage } from '../hooks/useLanguage';

export const LanguageSwitcher: React.FC = () => {
  const { currentLanguage, switchLanguage } = useLanguage();

  const handleLanguageSwitch = () => {
    const targetLanguage = currentLanguage === 'en' ? 'mk' : 'en';
    switchLanguage(targetLanguage);
  };

  return (
    <button
      onClick={handleLanguageSwitch}
      className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 border border-slate-600/50 hover:border-slate-500/50"
      aria-label={currentLanguage === 'en' ? 'Switch to Macedonian' : 'Switch to English'}
    >
      <span className="text-lg">
        {currentLanguage === 'en' ? '🇲🇰' : '🇬🇧'}
      </span>
      <span className="text-sm font-medium text-gray-300">
        {currentLanguage === 'en' ? 'Македонски' : 'English'}
      </span>
    </button>
  );
};
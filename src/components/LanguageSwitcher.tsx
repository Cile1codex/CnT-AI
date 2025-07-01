import React, { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

export const LanguageSwitcher: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Determine current language based on URL
  const currentLang = location.pathname.startsWith('/mk') ? 'mk' : 'en';

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const switchLanguage = (lang: 'en' | 'mk') => {
    const currentPath = location.pathname;
    
    if (lang === 'mk' && !currentPath.startsWith('/mk')) {
      // Switch to Macedonian
      navigate('/mk' + currentPath);
    } else if (lang === 'en' && currentPath.startsWith('/mk')) {
      // Switch to English
      const englishPath = currentPath.replace('/mk', '') || '/';
      navigate(englishPath);
    }
    
    setIsOpen(false);
  };

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'mk', name: 'Македонски', flag: '🇲🇰' }
  ];

  const currentLanguage = languages.find(lang => lang.code === currentLang);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-sky-500/50"
      >
        <span className="text-lg">{currentLanguage?.flag}</span>
        <span className="hidden sm:inline">{currentLanguage?.name}</span>
        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-slate-800 border border-slate-700 rounded-lg shadow-lg z-50">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => switchLanguage(language.code as 'en' | 'mk')}
              className={`w-full flex items-center space-x-3 px-4 py-3 text-sm hover:bg-slate-700 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg ${
                currentLang === language.code 
                  ? 'text-sky-400 bg-slate-700/50' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <span className="text-lg">{language.flag}</span>
              <span>{language.name}</span>
              {currentLang === language.code && (
                <div className="ml-auto w-2 h-2 bg-sky-400 rounded-full"></div>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
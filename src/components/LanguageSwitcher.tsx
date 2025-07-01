import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface Language {
  code: string;
  name: string;
  flag: string;
}

const languages: Language[] = [
  { code: 'en', name: 'English', flag: '/flags/gb.svg' },
  { code: 'mk', name: 'Македонски', flag: '/flags/mk.svg' },
];

export const LanguageSwitcher: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('en');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if Google Translate has set a language cookie
    const cookies = document.cookie.split(';');
    const googtransCookie = cookies.find(cookie => cookie.trim().startsWith('googtrans='));
    
    if (googtransCookie) {
      const langCode = googtransCookie.split('/')[2];
      if (langCode && languages.find(lang => lang.code === langCode)) {
        setCurrentLang(langCode);
      }
    }

    // Close dropdown when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const changeLanguage = (langCode: string) => {
    if (langCode === currentLang) {
      setIsOpen(false);
      return;
    }

    // Set Google Translate cookies
    const cookieValue = `/auto/${langCode}`;
    document.cookie = `googtrans=${cookieValue};path=/`;
    document.cookie = `googtrans=${cookieValue};domain=.${window.location.hostname};path=/`;
    
    setCurrentLang(langCode);
    setIsOpen(false);
    
    // Reload page to apply translation
    window.location.reload();
  };

  const currentLanguage = languages.find(lang => lang.code === currentLang) || languages[0];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 transition-colors duration-200 border border-slate-600/50"
        aria-label="Select language"
      >
        <img
          src={currentLanguage.flag}
          alt={currentLanguage.name}
          className="w-5 h-5 rounded-full object-cover"
        />
        <span className="text-sm font-medium text-gray-300 hidden sm:inline">
          {currentLanguage.code.toUpperCase()}
        </span>
        <ChevronDown 
          className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`} 
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-slate-800 border border-slate-600 rounded-lg shadow-lg z-50">
          <div className="py-1">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => changeLanguage(language.code)}
                className={`w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-slate-700 transition-colors duration-200 ${
                  currentLang === language.code ? 'bg-slate-700 text-sky-400' : 'text-gray-300'
                }`}
              >
                <img
                  src={language.flag}
                  alt={language.name}
                  className="w-5 h-5 rounded-full object-cover"
                />
                <span className="text-sm font-medium">{language.name}</span>
                {currentLang === language.code && (
                  <div className="ml-auto w-2 h-2 bg-sky-400 rounded-full"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface Language {
  code: string;
  name: string;
  flag: string;
}

const languages: Language[] = [
  {
    code: 'en',
    name: 'English',
    flag: 'https://images.pexels.com/photos/7919/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=32&h=24&fit=crop', // UK flag placeholder
  },
  {
    code: 'mk',
    name: 'Македонски',
    flag: 'https://images.pexels.com/photos/7919/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=32&h=24&fit=crop', // Macedonian flag placeholder
  },
];

// Custom flag components using CSS to create flag designs
const UKFlag: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`relative ${className}`} style={{ width: '24px', height: '18px' }}>
    <div className="absolute inset-0 bg-blue-600 rounded-sm"></div>
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-full h-0.5 bg-white"></div>
    </div>
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-0.5 h-full bg-white"></div>
    </div>
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-full h-0.5 bg-red-600"></div>
    </div>
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-0.5 h-full bg-red-600"></div>
    </div>
  </div>
);

const MacedonianFlag: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`relative ${className}`} style={{ width: '24px', height: '18px' }}>
    <div className="absolute inset-0 bg-red-600 rounded-sm"></div>
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-6 h-6 border-2 border-yellow-400 rounded-full bg-transparent"></div>
    </div>
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
    </div>
  </div>
);

export const LanguageSwitcher: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  // Function to trigger Google Translate
  const changeLanguage = (language: Language) => {
    setCurrentLanguage(language);
    setIsOpen(false);

    // Trigger Google Translate
    const googleTranslateCombo = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (googleTranslateCombo) {
      googleTranslateCombo.value = language.code;
      googleTranslateCombo.dispatchEvent(new Event('change'));
    } else {
      // Fallback: try to find and trigger the translate element
      setTimeout(() => {
        const translateElement = document.querySelector('.goog-te-combo') as HTMLSelectElement;
        if (translateElement) {
          translateElement.value = language.code;
          translateElement.dispatchEvent(new Event('change'));
        }
      }, 1000);
    }
  };

  const renderFlag = (language: Language) => {
    if (language.code === 'en') {
      return <UKFlag className="flag-icon" />;
    } else if (language.code === 'mk') {
      return <MacedonianFlag className="flag-icon" />;
    }
    return null;
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Current Language Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-sky-500/50 transition-all duration-300 hover:bg-slate-700/50 group"
        aria-label="Change language"
      >
        {renderFlag(currentLanguage)}
        <ChevronDown 
          className={`h-4 w-4 text-gray-300 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`} 
        />
      </button>

      {/* Dropdown Menu */}
      <div
        className={`absolute top-full right-0 mt-2 w-48 bg-slate-800 border border-slate-700 rounded-lg shadow-xl backdrop-blur-sm transition-all duration-200 z-50 ${
          isOpen 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <div className="py-2">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => changeLanguage(language)}
              className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-slate-700/50 transition-colors duration-200 ${
                currentLanguage.code === language.code 
                  ? 'bg-sky-500/20 text-sky-300' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {renderFlag(language)}
              <span className="font-medium">{language.name}</span>
              {currentLanguage.code === language.code && (
                <div className="ml-auto w-2 h-2 bg-sky-400 rounded-full"></div>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
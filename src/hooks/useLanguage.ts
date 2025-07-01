import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export type Language = 'en' | 'mk';

export const useLanguage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Determine current language from URL
  const getCurrentLanguage = (): Language => {
    return location.pathname.startsWith('/mk') ? 'mk' : 'en';
  };

  const [currentLanguage, setCurrentLanguage] = useState<Language>(getCurrentLanguage());

  useEffect(() => {
    setCurrentLanguage(getCurrentLanguage());
  }, [location.pathname]);

  const switchLanguage = (targetLanguage: Language) => {
    const currentPath = location.pathname;
    let newPath: string;

    if (targetLanguage === 'mk') {
      // Switch to Macedonian
      if (currentPath.startsWith('/mk')) {
        return; // Already on Macedonian version
      }
      newPath = currentPath === '/' ? '/mk' : `/mk${currentPath}`;
    } else {
      // Switch to English
      if (!currentPath.startsWith('/mk')) {
        return; // Already on English version
      }
      newPath = currentPath.replace('/mk', '') || '/';
    }

    // Add fade transition
    document.body.style.opacity = '0';
    setTimeout(() => {
      navigate(newPath);
      document.body.style.opacity = '1';
    }, 300);
  };

  const getAlternateUrl = (language: Language) => {
    const currentPath = location.pathname;
    const baseUrl = 'https://cnt-ai.com';
    
    if (language === 'mk') {
      if (currentPath.startsWith('/mk')) {
        return `${baseUrl}${currentPath}`;
      }
      return currentPath === '/' ? `${baseUrl}/mk` : `${baseUrl}/mk${currentPath}`;
    } else {
      if (!currentPath.startsWith('/mk')) {
        return `${baseUrl}${currentPath}`;
      }
      return `${baseUrl}${currentPath.replace('/mk', '') || '/'}`;
    }
  };

  return {
    currentLanguage,
    switchLanguage,
    getAlternateUrl,
  };
};
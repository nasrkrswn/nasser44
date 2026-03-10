import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations } from './translations';

type Language = 'en' | 'ar';
type Translations = typeof translations.en;

interface LanguageContextType {
  language: Language;
  t: Translations;
  toggleLanguage: () => void;
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem('language') as Language;
      if (savedLang && (savedLang === 'en' || savedLang === 'ar')) {
        setLanguage(savedLang);
      } else {
        const browserLang = navigator.language.startsWith('ar') ? 'ar' : 'en';
        setLanguage(browserLang);
      }
    } catch (error) {
      console.warn('localStorage is not available', error);
      const browserLang = navigator.language.startsWith('ar') ? 'ar' : 'en';
      setLanguage(browserLang);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    try {
      localStorage.setItem('language', language);
    } catch (error) {
      console.warn('localStorage is not available', error);
    }
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  const t = translations[language];
  const dir = language === 'ar' ? 'rtl' : 'ltr';

  return (
    <LanguageContext.Provider value={{ language, t, toggleLanguage, dir }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

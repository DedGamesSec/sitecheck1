import React, { createContext, useContext, useState } from 'react';
import { LanguageCode, detectBrowserLanguage } from './languages';
import { translations } from './translations';
import { pageNames } from './dicts/pageNames';
import type { Translations } from './types';

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<LanguageCode>(() => {
    const saved = localStorage.getItem('trustnode_lang') as LanguageCode;
    if (saved && translations[saved]) {
      return saved;
    }
    return 'ru';
  });

  const setLanguage = (lang: LanguageCode) => {
    if (translations[lang]) {
      setLanguageState(lang);
      localStorage.setItem('trustnode_lang', lang);
    }
  };

  const t: Translations = {
    ...(translations[language] || translations['ru']),
    pageNames: pageNames[language] || pageNames.ru,
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const useTranslation = useLanguage;


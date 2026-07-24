import React, { createContext, useContext, useState, useEffect } from 'react';

interface EcoModeContextType {
  ecoMode: boolean;
  toggleEcoMode: () => void;
}

const EcoModeContext = createContext<EcoModeContextType | undefined>(undefined);

export const EcoModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [ecoMode, setEcoMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('trustnode_eco');
    if (saved !== null) {
      return saved === 'true';
    }
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  const toggleEcoMode = () => {
    setEcoMode((prev) => {
      const next = !prev;
      localStorage.setItem('trustnode_eco', String(next));
      return next;
    });
  };

  useEffect(() => {
    if (ecoMode) {
      document.documentElement.classList.add('eco-mode');
    } else {
      document.documentElement.classList.remove('eco-mode');
    }
  }, [ecoMode]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = (event: MediaQueryListEvent) => {
      if (localStorage.getItem('trustnode_eco') !== null) return;
      setEcoMode(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <EcoModeContext.Provider value={{ ecoMode, toggleEcoMode }}>
      {children}
    </EcoModeContext.Provider>
  );
};

export const useEcoMode = () => {
  const context = useContext(EcoModeContext);
  if (!context) {
    throw new Error('useEcoMode must be used within an EcoModeProvider');
  }
  return context;
};

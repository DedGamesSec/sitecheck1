import React, { createContext, useContext, useState, useEffect } from 'react';

interface SeniorModeContextType {
  seniorMode: boolean;
  toggleSeniorMode: () => void;
}

const SeniorModeContext = createContext<SeniorModeContextType | undefined>(undefined);

export const SeniorModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [seniorMode, setSeniorMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('trustnode_senior');
    if (saved !== null) {
      return saved === 'true';
    }
    return false;
  });

  const toggleSeniorMode = () => {
    setSeniorMode((prev) => {
      const next = !prev;
      localStorage.setItem('trustnode_senior', String(next));
      return next;
    });
  };

  useEffect(() => {
    if (seniorMode) {
      document.documentElement.classList.add('senior-mode');
    } else {
      document.documentElement.classList.remove('senior-mode');
    }
  }, [seniorMode]);

  return (
    <SeniorModeContext.Provider value={{ seniorMode, toggleSeniorMode }}>
      {children}
    </SeniorModeContext.Provider>
  );
};

export const useSeniorMode = () => {
  const context = useContext(SeniorModeContext);
  if (!context) {
    throw new Error('useSeniorMode must be used within a SeniorModeProvider');
  }
  return context;
};

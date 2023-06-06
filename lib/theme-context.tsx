'use client';

import React, { ReactNode, useContext, useEffect, useState } from 'react';

interface State {
  mode: 'dark' | 'light';
}

const ThemeContext = React.createContext<State | any>('light');

export const ThemeProvider: React.FC<{ children?: ReactNode }> = (props) => {
  const [theme, setTheme] = useState<'dark' | 'light'>();

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.theme = 'light';
    }
  }, [theme]);

  useEffect(() => {
    const initialTheme = localStorage.theme === 'dark' ? 'dark' : 'light';

    setTheme(initialTheme);
  }, []);

  const value = {
    theme,
    setTheme,
  };

  return <ThemeContext.Provider value={value} {...props} />;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error(`useTheme must be used within a UIProvider`);
  }
  return context;
};

export const ManagedUIContext: React.FC<{ children?: ReactNode }> = ({
  children,
}) => <ThemeProvider>{children}</ThemeProvider>;

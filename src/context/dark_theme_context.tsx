import React, {
  createContext, useState, useEffect, useCallback, useMemo, useContext,
} from 'react';
import { light, dark } from '@styles/themes';
import { ThemeProvider } from 'styled-components';

const initialValue = {
  darkTheme: false,
  toggleDarkTheme: () => {},
};

const DarkThemeContext = createContext(initialValue);

const DarkThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [mounted, setMounted] = useState(false);

  const theme = darkTheme ? dark : light;

  useEffect(() => {
    const doesUserPrefersDarkTheme = (): boolean => {
      const savedTheme = localStorage.getItem('theme');

      if (savedTheme) {
        return savedTheme === 'dark';
      }

      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    };

    if (doesUserPrefersDarkTheme()) {
      setDarkTheme(true);
    }

    setMounted(true);
  }, []);

  useEffect(() => {
    if (darkTheme) {
      localStorage.setItem('theme', 'dark');
      return;
    }
    localStorage.setItem('theme', 'light');
  }, [darkTheme]);

  const toggleDarkTheme = useCallback(() => {
    setDarkTheme((state) => !state);
  }, []);

  const value = useMemo(() => ({
    darkTheme,
    toggleDarkTheme,
  }), [darkTheme, toggleDarkTheme]);

  if (!mounted) {
    return null;
  }

  return (
    <DarkThemeContext.Provider value={value}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </DarkThemeContext.Provider>
  );
};

export const useDarkThemeContext = () => useContext(DarkThemeContext);

export default DarkThemeContextProvider;

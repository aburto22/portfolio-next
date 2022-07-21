import { useState, useCallback, useEffect } from 'react';

const useDarkTheme = () => {
  const [darkTheme, setDarkTheme] = useState(false);

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
  }, [setDarkTheme]);

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

  return { darkTheme, toggleDarkTheme };
};

export default useDarkTheme;

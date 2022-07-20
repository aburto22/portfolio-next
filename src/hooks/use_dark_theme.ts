import { useState, useCallback, useEffect } from 'react';

const useDarkTheme = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    const doesUsePrefersDarkTheme = (): boolean => {
      const savedTheme = localStorage.getItem('theme');

      if (savedTheme) {
        return savedTheme === 'dark';
      }

      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    };

    if (doesUsePrefersDarkTheme()) {
      setDarkTheme(true);
    }
  }, [setDarkTheme]);

  const toggleDarkTheme = useCallback(() => {
    if (darkTheme) {
      localStorage.setItem('theme', 'light');
      setDarkTheme(false);
      return;
    }
    localStorage.setItem('theme', 'dark');
    setDarkTheme(true);
  }, [darkTheme]);

  return { darkTheme, toggleDarkTheme };
};

export default useDarkTheme;

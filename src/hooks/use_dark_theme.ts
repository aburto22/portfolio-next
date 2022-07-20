import { useState, useCallback } from 'react';

const useDarkTheme = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleDarkTheme = useCallback(() => {
    setDarkTheme((state) => !state);
  }, []);

  return { darkTheme, toggleDarkTheme };
};

export default useDarkTheme;

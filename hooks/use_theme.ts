import { useState, useEffect } from 'react';

const checkSystemPreferenceAndSetTheme = (
  setDarkTheme: React.Dispatch<React.SetStateAction<boolean | undefined>>,
) => {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    setDarkTheme(true);
    return;
  }
  setDarkTheme(false);
};

const useDarkTheme = (): [
  boolean | undefined,
  React.Dispatch<React.SetStateAction<boolean | undefined>>,
] => {
  const [darkTheme, setDarkTheme] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const themeLocalStorage: string | undefined = localStorage.theme;

    if (!themeLocalStorage) {
      checkSystemPreferenceAndSetTheme(setDarkTheme);
      return;
    }

    if (themeLocalStorage === 'dark') {
      setDarkTheme(true);
      return;
    }

    setDarkTheme(false);
  }, []);

  return [darkTheme, setDarkTheme];
};

export default useDarkTheme;

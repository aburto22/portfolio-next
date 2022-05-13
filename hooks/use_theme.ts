import { useState, useEffect } from 'react';

const checkSystemPreferenceAndSetTheme = (setDarkTheme: React.Dispatch<React.SetStateAction<boolean | undefined>>) => {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return setDarkTheme(true)
  }
  setDarkTheme(false);
}

const useDarkTheme = (): [boolean | undefined, React.Dispatch<React.SetStateAction<boolean | undefined>>] => {
  const [darkTheme, setDarkTheme] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const themeLocalStorage: string | undefined = localStorage.theme;
    if (!themeLocalStorage) {
      return checkSystemPreferenceAndSetTheme(setDarkTheme);
    }
    if (themeLocalStorage === 'dark') {
      return setDarkTheme(true);
    }
    setDarkTheme(false);

  }, [])

  return [darkTheme, setDarkTheme];
}

export default useDarkTheme;

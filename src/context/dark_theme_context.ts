import { createContext } from 'react';

const initialValue = {
  darkTheme: false,
  toggleDarkTheme: () => {},
};

const DarkThemeContext = createContext(initialValue);

export default DarkThemeContext;

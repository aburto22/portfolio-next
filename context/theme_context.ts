import React, { createContext} from 'react';

type IThemeContext = [boolean | undefined, React.Dispatch<React.SetStateAction<boolean | undefined>>]

const ThemeContext = createContext([false, () => {}] as IThemeContext);

export default ThemeContext;

import { useMemo } from 'react';
import type { AppProps } from 'next/app';
import ScrollContext from '@context/scroll_context';
import DarkThemeContext from '@context/dark_theme_context';
import useScroll from '@hooks/use_scroll';
import useDarkTheme from '@hooks/use_dark_theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@styles/globals';
import { light, dark } from '@styles/themes';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const scrollValue = useScroll();
  const { darkTheme, toggleDarkTheme } = useDarkTheme();

  const theme = darkTheme ? dark : light;

  const darkThemeContextValue = useMemo(() => ({
    darkTheme,
    toggleDarkTheme,
  }), [darkTheme, toggleDarkTheme]);

  return (
    <ScrollContext.Provider value={scrollValue}>
      <ThemeProvider theme={theme}>
        <DarkThemeContext.Provider value={darkThemeContextValue}>
          <GlobalStyle />
          <Component {...pageProps} />
        </DarkThemeContext.Provider>
      </ThemeProvider>
    </ScrollContext.Provider>
  );
};

export default MyApp;

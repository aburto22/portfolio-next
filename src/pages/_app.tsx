import type { AppProps } from 'next/app';
import ScrollContext from '@context/scroll_context';
import DarkThemeContextProvider from '@context/dark_theme_context';
import useScroll from '@hooks/use_scroll';
import GlobalStyle from '@styles/globals';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const scrollValue = useScroll();

  return (
    <ScrollContext.Provider value={scrollValue}>
      <DarkThemeContextProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </DarkThemeContextProvider>
    </ScrollContext.Provider>
  );
};

export default MyApp;

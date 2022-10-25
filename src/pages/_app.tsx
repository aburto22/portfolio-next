import type { AppProps } from 'next/app';
import ScrollContextProvider from '@context/scroll_context';
import DarkThemeContextProvider from '@context/dark_theme_context';
import GlobalStyle from '@styles/globals';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ScrollContextProvider>
    <DarkThemeContextProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </DarkThemeContextProvider>
  </ScrollContextProvider>
);

export default MyApp;

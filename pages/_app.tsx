import type { AppProps } from 'next/app';
import useTheme from '../hooks/use_theme';
import ScrollContext from '../context/scroll_context';
import ThemeContext from '../context/theme_context';
import useScroll from '../hooks/use_scroll';
import '../styles/globals.scss';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const scrollValue = useScroll();
  const themeValue = useTheme();

  return (
    <ScrollContext.Provider value={scrollValue}>
      <ThemeContext.Provider value={themeValue}>
        <Component {...pageProps} />
      </ThemeContext.Provider>
    </ScrollContext.Provider>
  );
};

export default MyApp;

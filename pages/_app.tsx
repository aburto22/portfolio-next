import { useEffect } from 'react';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import useTheme from '../hooks/use_theme';
import ScrollContext from '../context/scroll_context';
import ThemeContext from '../context/theme_context';
import useScroll from '../hooks/use_scroll';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { isScrolling, activateScrollingDelay } = useScroll();
  const themeValue = useTheme();

  return (
    <ScrollContext.Provider value={{ isScrolling, activateScrollingDelay }}>
      <ThemeContext.Provider value={themeValue}>
        <Component {...pageProps} />
      </ThemeContext.Provider>
    </ScrollContext.Provider>
  )
}

export default MyApp

import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '@store';
import ScrollContext from '@context/scroll_context';
import useScroll from '@hooks/use_scroll';
import GlobalStyle from '@styles/globals';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const scrollValue = useScroll();

  return (
    <ScrollContext.Provider value={scrollValue}>
      <Provider store={store}>
        <GlobalStyle />
        <Component {...pageProps} />
      </Provider>
    </ScrollContext.Provider>
  );
};

export default MyApp;

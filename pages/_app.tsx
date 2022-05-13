import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import ScrollContext from '../context/scroll_context';
import useScroll from '../hooks/use_scroll';
import store from '../store';
import '../styles/globals.scss';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const scrollValue = useScroll();

  return (
    <ScrollContext.Provider value={scrollValue}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ScrollContext.Provider>
  );
};

export default MyApp;

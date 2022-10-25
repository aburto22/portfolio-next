import React, {
  useRef, useMemo, useCallback, useContext,
} from 'react';

interface IScrollContext {
  isScrolling: React.MutableRefObject<boolean>;
  activateScrollingDelay: () => void;
}

const ScrollContext = React.createContext({} as IScrollContext);

const ScrollContextProvider = ({ children }: { children: React.ReactNode }) => {
  const isScrolling = useRef(false);

  const activateScrollingDelay = useCallback(() => {
    isScrolling.current = !isScrolling.current;
    setTimeout(() => {
      isScrolling.current = false;
    }, 600);
  }, []);

  const value = useMemo(() => ({
    isScrolling,
    activateScrollingDelay,
  }), [activateScrollingDelay]);

  return (
    <ScrollContext.Provider value={value}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScrollContext = () => useContext(ScrollContext);

export default ScrollContextProvider;

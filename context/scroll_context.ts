import React from 'react';

interface IScrollContext {
  isScrolling: React.MutableRefObject<boolean>;
  activateScrollingDelay: () => void;
}

const ScrollContext = React.createContext({} as IScrollContext);

export default ScrollContext;

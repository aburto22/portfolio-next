import { useRef } from 'react';

const useScroll = () => {
  const isScrolling = useRef(false);

  const activateScrollingDelay = () => {
    isScrolling.current = !isScrolling.current;
    setTimeout(() => {
      isScrolling.current = false;
    }, 600);
  };

  return { isScrolling, activateScrollingDelay };
};

export default useScroll;

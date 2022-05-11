import { useRef } from "react";

export default function useScroll() {
  const isScrolling = useRef(false);

  function activateScrollingDelay() {
    isScrolling.current = !isScrolling.current;
    setTimeout(() => {
      isScrolling.current = false;
    }, 600);
  }

  return { isScrolling, activateScrollingDelay };
}

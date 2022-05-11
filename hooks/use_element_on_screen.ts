import { useState, useRef, useContext } from "react";
import useSwr from 'swr';
import ScrollContext from "../context/scroll_context";

export default function useElementOnScreen(
  options = {
    root: null,
    rootMargin: "0px",
    threshold: 0,
  }
) {
  const [isShowing, setIsShowing] = useState(false);
  const ref = useRef();
  const { isScrolling } = useContext(ScrollContext);

  useSwr(() => {
    function handleIntersect(entries) {
      if (entries[0].isIntersecting) {
        if (isScrolling.current) {
          setTimeout(() => setIsShowing(true), 250);
        } else {
          setIsShowing(true);
        }
      }
    }

    const observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return [ref, isShowing];
}

import React, { useState, useEffect, useContext } from 'react';
import ScrollContext from '@context/scroll_context';

interface ScrollButtonProps {
  target: string;
  className: string;
  children: React.ReactNode;
}

const ScrollButton = ({ target, className = '', children }: ScrollButtonProps) => {
  const [anchor, setAnchor] = useState<Element | null>(null);
  const { activateScrollingDelay } = useContext(ScrollContext);

  useEffect(() => {
    setAnchor(document.querySelector(`#${target}`));
  }, [target]);

  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();

    if (!anchor) {
      return;
    }

    anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
    activateScrollingDelay();
  };

  return (
    <button type="button" className={className} onClick={handleClick}>
      {children}
    </button>
  );
};

export default ScrollButton;

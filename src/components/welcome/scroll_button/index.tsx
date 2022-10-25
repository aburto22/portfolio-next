import React, { useState, useEffect } from 'react';
import { useScrollContext } from '@context/scroll_context';
import * as styles from './styles';

interface ScrollButtonProps {
  target: string;
  children: React.ReactNode;
  isShowing: boolean;
}

const WithScroll = ({ target, children, isShowing }: ScrollButtonProps) => {
  const [anchor, setAnchor] = useState<Element | null>(null);
  const { activateScrollingDelay } = useScrollContext();

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
    <styles.ButtonPrimary onClick={handleClick} isShowing={isShowing}>
      {children}
    </styles.ButtonPrimary>
  );
};

export default WithScroll;

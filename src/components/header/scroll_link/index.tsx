import React, { useState, useEffect, useContext } from 'react';
import ScrollContext from '@context/scroll_context';
import * as styles from './styles';

interface ScrollLinkProps {
  name: string;
  target: string;
  setIsNavShowing: React.Dispatch<React.SetStateAction<boolean>>;
}

const ScrollLink = ({ name, target, setIsNavShowing }: ScrollLinkProps) => {
  const [anchor, setAnchor] = useState<Element | null>(null);
  const { activateScrollingDelay } = useContext(ScrollContext);

  useEffect(() => {
    setAnchor(document.querySelector(`#${target}`));
  }, [target]);

  const handleClick = (event: React.SyntheticEvent) => {
    if (!anchor) {
      return;
    }

    event.preventDefault();
    activateScrollingDelay();
    anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });

    if (setIsNavShowing) {
      setIsNavShowing(false);
    }
  };

  return (
    <styles.LinkItem>
      <styles.Underline />
      <styles.Link
        href={`#${anchor}`}
        onClick={handleClick}
      >
        {name}
      </styles.Link>
    </styles.LinkItem>
  );
};

export default ScrollLink;

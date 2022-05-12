import React, { useState, useEffect, useContext } from 'react';
import ScrollContext from '../../../context/scroll_context';
import ThemeContext from '../../../context/theme_context';
import styles from './styles.module.scss';

interface ScrollLinkProps {
  name: string;
  target: string;
  setIsNavShowing: React.Dispatch<React.SetStateAction<boolean>>;
}

const ScrollLink = ({ name, target, setIsNavShowing }: ScrollLinkProps) => {
  const [anchor, setAnchor] = useState<Element | null>(null);
  const { activateScrollingDelay } = useContext(ScrollContext);
  const [darkTheme] = useContext(ThemeContext);

  useEffect(() => {
    setAnchor(document.querySelector(`#${target}`));
  }, [target]);

  const handleClick = (event: React.SyntheticEvent) => {
    if (!anchor) {
      return;
    }

    event.preventDefault();
    activateScrollingDelay();
    anchor.scrollIntoView({ behavior: "smooth", block: "start" });

    if (setIsNavShowing) {
      setIsNavShowing(false);
    }
  }

  return (
    <li className={styles.linkItem}>
      <div className={styles.underline} />
      <a
        href={`#${anchor}`}
        className={`${styles.link} ${darkTheme && styles.linkDark}`}
        onClick={handleClick}
      >
        {name}
      </a>
    </li>
  );
}

ScrollLink.defaultProps = {
  setIsNavShowing: undefined,
};

export default ScrollLink;
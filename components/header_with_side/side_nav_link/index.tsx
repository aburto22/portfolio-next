import React, { useState, useEffect, useContext } from 'react';
import ThemeContext from '../../../context/theme_context';
import styles from './styles.module.scss';

interface SideNavLinkProps {
  name: string;
  target: string;
}

const SideNavLink = ({ name, target }: SideNavLinkProps) => {
  const [anchor, setAnchor] = useState<Element | null>(null);
  const [darkTheme] = useContext(ThemeContext);

  useEffect(() => {
    setAnchor(document.querySelector(target));
  }, [target]);

  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();

    if (!anchor) {
      return;
    }

    anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <li className={`${styles.linkItem} ${darkTheme && styles.linkItemDark}`}>
      <a
        href={target}
        className={styles.link}
        onClick={handleClick}
      >
        {name}
      </a>
    </li>
  );
};

export default SideNavLink;

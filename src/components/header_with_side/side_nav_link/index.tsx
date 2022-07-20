import React, { useState, useEffect } from 'react';
import { useAppSelector } from '@hooks/use_redux';
import styles from './styles.module.scss';

interface SideNavLinkProps {
  name: string;
  target: string;
}

const SideNavLink = ({ name, target }: SideNavLinkProps) => {
  const [anchor, setAnchor] = useState<Element | null>(null);
  const darkTheme = useAppSelector((state) => state.darkTheme);

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

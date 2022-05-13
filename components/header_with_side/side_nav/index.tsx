import React, { useEffect, useRef, useContext } from 'react';
import ThemeContext from '../../../context/theme_context';
import SideNavLink from '../side_nav_link';
import DarkToggle from '../../dark_toggle';
import styles from './styles.module.scss';
import { IAnchor } from '../../../types';

interface SideNavProps {
  anchors: IAnchor[];
  isSideShowing: boolean;
  setIsSideShowing: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideNav = ({ anchors, isSideShowing, setIsSideShowing }: SideNavProps) => {
  const navRef = useRef<HTMLElement>(null);
  const [darkTheme] = useContext(ThemeContext);

  useEffect(() => {
    const closeMenu = (event: MouseEvent) => {

      const element = event.currentTarget as Element;

      if (element.tagName === 'A') {
        return setIsSideShowing(false);
      }

      if (navRef.current && !navRef.current.contains(element)) {
        setIsSideShowing(false);
      }
    }

    if (isSideShowing) {
      window.addEventListener('click', closeMenu);
    } else {
      window.removeEventListener('click', closeMenu);
    }

    return () => window.removeEventListener('click', closeMenu);
  }, [isSideShowing, setIsSideShowing]);

  const AnchorsComponent = anchors.map((anchor) => (
    <SideNavLink name={anchor.name} target={anchor.target} key={anchor.name} />
  ));

  return (
    <aside
      className={`${styles.sideMenu} ${darkTheme && styles.sideMenuDark} ${isSideShowing && styles.sideMenuShowing}`}
      ref={navRef}
    >
      <h2 className={`${styles.title} ${darkTheme && styles.titleDark}`}>
        Content
      </h2>
      <ul>{AnchorsComponent}</ul>
      <div className={styles.darkToggleContainer}>
        <DarkToggle />
      </div>
    </aside>
  );
}

export default SideNav;

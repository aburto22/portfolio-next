import React, { useRef, useContext } from 'react';
import ThemeContext from '../../../context/theme_context';
import SideNavLink from '../side_nav_link';
import DarkToggle from '../../dark_toggle';
import styles from './styles.module.scss';
import { IAnchor } from '../../../types';

interface SideNavProps {
  anchors: IAnchor[];
  isSideShowing: boolean;
}

const SideNav = ({ anchors, isSideShowing }: SideNavProps) => {
  const navRef = useRef<HTMLElement>(null);
  const [darkTheme] = useContext(ThemeContext);

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

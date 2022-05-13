import React, { useState, useContext } from 'react';
import Link from 'next/link';
import ThemeContext from '../../context/theme_context';
import * as ROUTES from '../../data/routes.json';
import DarkToggle from '../dark_toggle';
import SideNav from './side_nav';
import Svg from '../svg';
import styles from './styles.module.scss';
import { IAnchor } from '../../types';

interface HeaderSimpleProps {
  anchors: IAnchor[]
}

const HeaderWithSide = ({ anchors }: HeaderSimpleProps) => {
  const [isSideShowing, setIsSideShowing] = useState(false);
  const [darkTheme] = useContext(ThemeContext);

  function handleToggle() {
    setIsSideShowing(true);
  }

  return (
    <>
      <header className={`${styles.header} ${darkTheme && styles.headerDark}`}>
        <nav className={`${styles.nav} ${darkTheme && styles.navDark}`}>
          <ul className={styles.navList}>
            <li className={styles.logoItem}>
              <Link href={ROUTES.home}>
                <a className={styles.logoLink}>
                  Alejandro Aburto S.
                </a>
              </Link>
            </li>
            <li className={styles.darkToggleContainer}>
              <DarkToggle />
            </li>
            <li
              className={`${styles.buttonItem} ${isSideShowing && styles.buttonItemHidden}`}
            >
              <button
                type="button"
                onClick={handleToggle}
                className={styles.button}
                aria-label="open menu"
              >
                <Svg name="menu" className={styles.buttonSvg} />
              </button>
            </li>
            <li
              className={`${styles.buttonItem} ${!isSideShowing && styles.buttonItemHidden}`}
            >
              <button
                type="button"
                onClick={handleToggle}
                className={styles.button}
                aria-label="close menu"
              >
                <Svg name="close" className={styles.buttonSvg} />
              </button>
            </li>
          </ul>
        </nav>
      </header>
      {anchors && (
        <SideNav
          anchors={anchors}
          isSideShowing={isSideShowing}
          setIsSideShowing={setIsSideShowing}
        />
      )}
    </>
  );
}

export default HeaderWithSide;

HeaderWithSide.defaultProps = {
  anchors: [],
};

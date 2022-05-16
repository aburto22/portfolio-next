import { useState } from 'react';
import { useAppSelector } from '../../hooks/use_redux';
import Svg from '../svg';
import ScrollLink from './scroll_link';
import DarkToggle from '../dark_toggle';
import styles from './styles.module.scss';

const Header = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);
  const darkTheme = useAppSelector((state) => state.darkTheme);

  const handleToggle = () => setIsNavShowing((val) => !val);

  const handleHome = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <header className={`${styles.header} ${darkTheme && styles.headerDark}`}>
      <nav className={styles.nav}>
        <button
          type="button"
          onClick={handleHome}
          className={styles.logoButton}
        >
          Alejandro Aburto S.
        </button>
        <ul
          className={`${styles.navLinksContainer} ${isNavShowing && styles.navLinksContainerShowing} ${darkTheme && styles.navLinksContainerDark}`}
        >
          <li className={styles.closeButtonItem}>
            <button
              type="button"
              className={styles.closeButton}
              onClick={handleToggle}
              aria-label="close menu"
            >
              <Svg name="close" className={styles.closeButtonSvg} />
            </button>
          </li>
          <ScrollLink
            name="Projects"
            target="projects"
            setIsNavShowing={setIsNavShowing}
          />
          <ScrollLink
            name="About Me"
            target="about-me"
            setIsNavShowing={setIsNavShowing}
          />
          <ScrollLink
            name="Contact"
            target="contact"
            setIsNavShowing={setIsNavShowing}
          />
          <li className={styles.darkToggleItem}>
            <DarkToggle />
          </li>
        </ul>
        <button
          type="button"
          onClick={handleToggle}
          className={styles.openButton}
          aria-label="open menu"
        >
          <Svg name="menu" className={styles.openButtonSvg} />
        </button>
      </nav>
    </header>
  );
};

export default Header;

import { useState, useContext } from 'react';
import Svg from '../svg';
import ScrollLink from './scroll_link';
import DarkToggle from '../dark_toggle';
import ThemeContext from '../../context/theme_context';
import styles from './styles.module.scss';

const Header = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);
  const [darkTheme] = useContext(ThemeContext);

  const handleToggle = () => setIsNavShowing((val) => !val);

  const handleHome = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <header className={`${styles.header} ${darkTheme && styles.headerDark}`}>
      <nav className={`${styles.nav} ${darkTheme && styles.navDark}`}>
        <ul className={styles.navList}>
          <li className={styles.logoItem}>
            <button
              type="button"
              onClick={handleHome}
              className={styles.logoButton}
            >
              Alejandro Aburto S.
            </button>
          </li>
          <li className={styles.navLinksItem}>
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
          </li>
          <li className={styles.openButtonItem}>
            <button
              type="button"
              onClick={handleToggle}
              className={styles.openButton}
              aria-label="open menu"
            >
              <Svg name="menu" className={styles.openButtonSvg} />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

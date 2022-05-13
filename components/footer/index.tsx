import { useContext } from 'react';
import Svg from "../svg/";
import Form from "./form";
import ThemeContext from "../../context/theme_context";
import styles from './styles.module.scss';
import styleUtils from '../../styles/utils.module.scss';

interface FooterProps {
  sidebar: boolean;
}

const Footer = ({ sidebar }: FooterProps) => {
  const [darkTheme] = useContext(ThemeContext);

  return (
    <>
      {sidebar && <div className={styleUtils.asidePlaceholder} />}
      <footer
        className={`${styles.footer} ${darkTheme && styles.footerDark}`}
      >
        <div className={styles.footerContainer}>
          <Form />
          <div className={styles.footerLegend}>
            <div className={styles.footerIconsContainer}>
              <a
                href="mailto:aburto22@gmail.com"
                aria-label="Send me an email"
                className={styles.footerIcon}
              >
                <Svg name="mail" className={styles.svgLarge} />
              </a>
              <a
                href="https://github.com/aburto22"
                aria-label="My git-hub page"
                target="_blank"
                rel="noreferrer"
                className={styles.footerIcon}
              >
                <Svg name="github" className={styles.svgSmall} />
              </a>
              <a
                href="https://linkedin.com/in/alejandroaburtos/"
                aria-label="My linkedin page"
                target="_blank"
                rel="noreferrer"
                className={styles.footerIcon}
              >
                <Svg name="linkedin" className={styles.svgLarge} />
              </a>
              <a
                href="https://www.freecodecamp.org/aburto22"
                aria-label="My freeCodeCamp page"
                target="_blank"
                rel="noreferrer"
                className={styles.footerIcon}
              >
                <Svg name="freeCodeCamp" className={styles.svgLarge} />
              </a>
            </div>
            <p className={styles.footerText}>Created by Alejandro Aburto S.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

Footer.defaultProps = {
  sidebar: false,
};

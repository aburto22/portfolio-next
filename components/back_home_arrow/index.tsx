import React, { useContext } from 'react';
import ThemeContext from '../../context/theme_context';
import Link from 'next/link'
import Svg from '../svg';
import * as ROUTES from '../../data/routes';
import styles from './styles.module.scss';

const BackHomeArrow = () => {
  const [darkTheme] = useContext(ThemeContext);

  return (
    <div className={styles.container}>
      <Link href={ROUTES.HOME}>
        <a className={`${styles.link} ${darkTheme && styles.linkDark}`}>
          <Svg name="arrowLeft" className={styles.svg} />
          Go back to main page
        </a>
      </Link>
      <hr className={`${styles.line} ${darkTheme && styles.lineDark}`} />
    </div>
  );
}

export default BackHomeArrow;

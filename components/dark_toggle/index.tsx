import { useContext } from 'react';
import Svg from '../svg';
import ThemeContext from '../../context/theme_context';
import styles from './styles.module.scss';

const DarkToggle = () => {
  const [darkTheme, setDarkTheme] = useContext(ThemeContext);

  const handleDark = () => {
    if (darkTheme) {
      localStorage.theme = 'light';
      return setDarkTheme(false);
    }
    localStorage.theme = 'dark';
    return setDarkTheme(true);
  };

  return (
    <button
      type="button"
      onClick={handleDark}
      className={styles.toggler}
      aria-label="toggle dark theme"
    >
      <div className={`${styles.container} ${darkTheme && styles.containerDark}`}>
        {darkTheme ? (
          <Svg name="moon" className={styles.svg} stroke={2} />
        ) : (
          <Svg name="sun" className={styles.svg} stroke={2} />
        )}
      </div>
    </button>
  );
};

export default DarkToggle;

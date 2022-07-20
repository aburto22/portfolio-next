import { useContext } from 'react';
import Svg from '@components/svg';
import DarkThemeContext from '@context/dark_theme_context';
import styles from './styles.module.scss';

const DarkToggle = () => {
  const { darkTheme, toggleDarkTheme } = useContext(DarkThemeContext);

  const handleDark = () => {
    toggleDarkTheme();
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

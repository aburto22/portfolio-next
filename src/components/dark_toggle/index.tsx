import Svg from '@components/svg';
import { useAppSelector, useAppDispatch } from '@hooks/use_redux';
import { setTheme } from '@slices/dark_theme';
import styles from './styles.module.scss';

const DarkToggle = () => {
  const darkTheme = useAppSelector((state) => state.darkTheme);
  const dispatch = useAppDispatch();

  const handleDark = () => {
    if (darkTheme) {
      return dispatch(setTheme(false));
    }
    return dispatch(setTheme(true));
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

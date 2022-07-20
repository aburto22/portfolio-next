import { useContext } from 'react';
import Svg from '@components/svg';
import DarkThemeContext from '@context/dark_theme_context';
import * as styles from './styles';

const DarkToggle = () => {
  const { darkTheme, toggleDarkTheme } = useContext(DarkThemeContext);

  const handleDark = () => {
    toggleDarkTheme();
  };

  return (
    <styles.Button
      type="button"
      onClick={handleDark}
      aria-label="toggle dark theme"
    >
      <styles.Container darkTheme={darkTheme}>
        <styles.SvgIcon>
          {darkTheme ? (
            <Svg name="moon" stroke={2} />
          ) : (
            <Svg name="sun" stroke={2} />
          )}
        </styles.SvgIcon>
      </styles.Container>
    </styles.Button>
  );
};

export default DarkToggle;

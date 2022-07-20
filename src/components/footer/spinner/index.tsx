import { useAppSelector } from '@hooks/use_redux';
import styles from './styles.module.scss';

const Spinner = () => {
  const darkTheme = useAppSelector((state) => state.darkTheme);

  return (
    <div className={styles.spinnerContainer}>
      <div className={`${styles.spinner} ${darkTheme && styles.spinnerDark}`} />
    </div>
  );
};

export default Spinner;

import Link from 'next/link';
import { useAppSelector } from '@hooks/use_redux';
import Svg from '@components/svg';
import ROUTES from '@data/routes.json';
import styles from './styles.module.scss';

const BackHomeArrow = () => {
  const darkTheme = useAppSelector((state) => state.darkTheme);

  return (
    <div className={styles.container}>
      <Link href={ROUTES.home}>
        <a className={`${styles.link} ${darkTheme && styles.linkDark}`}>
          <Svg name="arrowLeft" className={styles.svg} />
          Go back to main page
        </a>
      </Link>
      <hr className={`${styles.line} ${darkTheme && styles.lineDark}`} />
    </div>
  );
};

export default BackHomeArrow;

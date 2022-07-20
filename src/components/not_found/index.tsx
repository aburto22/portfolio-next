import { useAppSelector } from '@hooks/use_redux';
import BackHomeArrow from '@components/back_home_arrow';
import styles from './styles.module.scss';

const About = () => {
  const darkTheme = useAppSelector((state) => state.darkTheme);

  return (
    <section className={`${styles.section} ${darkTheme && styles.sectionDark}`}>
      <BackHomeArrow />
      <article className={styles.content}>
        <h1 className={styles.title}>404 - Not Found</h1>
        <p className={styles.description}>The page you are trying to access doesn&apos;t exists.</p>
      </article>
    </section>
  );
};

export default About;

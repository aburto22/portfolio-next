import { useAppSelector } from '@hooks/use_redux';
import useElementOnScreen from '@hooks/use_element_on_screen';
import ScrollButton from '@components/welcome/scroll_button';
import styleUtils from '@styles/utils.module.scss';
import styles from './styles.module.scss';

const Welcome = () => {
  const darkTheme = useAppSelector((state) => state.darkTheme);
  const [ref, isShowing] = useElementOnScreen<HTMLDivElement>();

  return (
    <section className={styles.section}>
      <span id="home" className={styles.anchor} />
      <div
        className={styles.container}
        ref={ref}
      >
        <h1
          className={`${styles.title} ${isShowing && styles.showing}`}
        >
          Hi, I am Alejandro
          {' '}
          <span className={styles.titleHand}>👋</span>
          ,
        </h1>
        <p
          className={`${styles.subTitle} ${isShowing && styles.showing}`}
        >
          Full-Stack JavaScript developer
        </p>
        <p
          className={`${styles.text} ${isShowing && styles.showing}`}
        >
          My aim is to build simple and elegant apps with no distractions, so
          users focus on what it is most relevant.
        </p>
        <div className={styles.buttonContainer}>
          <ScrollButton
            target="projects"
            className={`${styleUtils.buttonPrimary} ${darkTheme && styleUtils.buttonDark} ${styles.buttonPrimary} ${isShowing && styles.showing}`}
          >
            View my projects
          </ScrollButton>
          <a
            href="mailto:aburto22@gmail.com"
            className={`${styleUtils.buttonSecondary} ${darkTheme && styleUtils.buttonDark} ${styles.buttonSecondary} ${isShowing && styles.showing}`}
          >
            Email me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Welcome;

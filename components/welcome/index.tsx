import React, { useContext } from 'react';
import useElementOnScreen from '../../hooks/use_element_on_screen';
import ScrollButton from './scroll_button';
import styles from './styles.module.scss';
import styleUtils from '../../styles/utils.module.scss';
import ThemeContext from '../../context/theme_context';

const Welcome = () => {
  const [darkTheme] = useContext(ThemeContext);
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
          Hi, I am Alejandro <span className={styles.titleHand}>👋</span>,
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
}

export default Welcome;

import React, { useContext } from 'react';
import Link from 'next/link';
import ThemeContext from '../../context/theme_context';
import TechIcon from '../tech_icon';
import ICONS from '../../data/icons.json';
import useElementOnScreen from '../../hooks/use_element_on_screen';
import * as ROUTES from '../../data/routes';
import styles from './styles.module.scss';
import { IIcon } from '../../types';

const MainAbout = () => {
  const [refText, isShowingText] = useElementOnScreen<HTMLDivElement>();
  const [refFront, isShowingFront] = useElementOnScreen<HTMLUListElement>();
  const [refBack, isShowingBack] = useElementOnScreen<HTMLUListElement>();
  const [refGeneral, isShowingGeneral] = useElementOnScreen<HTMLUListElement>();
  const [darkTheme] = useContext(ThemeContext);

  const createIcon = (icon: IIcon, i: number) => {
    let transitionDelay = `${i * 100}ms`;

    let isShowing: boolean;
    if (icon.category === 'front-end') {
      isShowing = isShowingFront;
    } else if (icon.category === 'back-end') {
      isShowing = isShowingBack;
    } else {
      isShowing = isShowingGeneral;
    }

    return (
      <li
        key={icon.name}
        className={`${styles.iconItem} ${isShowing && styles.showing}`}
        style={{transitionDelay}}
      >
        <TechIcon icon={icon} tooltip />
      </li>
    );
  };

  const IconsFrontEndComponents = ICONS.filter(
    (icon) => icon.category === 'front-end'
  ).map(createIcon);

  const IconsBackEndComponents = ICONS.filter(
    (icon) => icon.category === 'back-end'
  ).map(createIcon);

  const IconsGeneralComponents = ICONS.filter(
    (icon) => icon.category === 'general'
  ).map(createIcon);

  return (
    <section className={styles.section}>
      <span id="about-me" className={styles.anchor} />
      <div className={styles.container} ref={refText}>
        <h1 className={styles.title}>About Me</h1>
        <p className={`${styles.contentText} ${isShowingText && styles.showing}`}>
          Hi, my name is Alejandro, and I am a Full-Stack JavaScript
          developer. I enjoy working on the back-end as much as on the
          front-end.
        </p>
        <p className={`${styles.contentText} ${styles.lastContentText} ${isShowingText && styles.showing}`}>
          I am familiar with the following technologies, and I am always
          looking forward to learn more:
        </p>
        <h2 className={styles.subTitle}>Front-end</h2>
        <ul
          className={styles.iconContainer}
          ref={refFront}
        >
          {IconsFrontEndComponents}
        </ul>
        <h2 className={styles.subTitle}>Back-end</h2>
        <ul
          className={styles.iconContainer}
          ref={refBack}
        >
          {IconsBackEndComponents}
        </ul>
        <h2 className={styles.subTitle}>Other</h2>
        <ul
          className={styles.iconContainer}
          ref={refGeneral}
        >
          {IconsGeneralComponents}
        </ul>
        <Link href={ROUTES.ABOUT_ME}>
          <a
            className={`${styles.link} ${darkTheme && styles.linkDark}`}
          >
            Click here to learn a little bit more about me
          </a>
        </Link>
      </div>
    </section>
  );
}

export default MainAbout;
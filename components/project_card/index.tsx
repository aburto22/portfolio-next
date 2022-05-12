import React, { useContext } from 'react';
import ThemeContext from '../../context/theme_context';
import ICONS from '../../data/icons';
import Image from 'next/image';
import TechIcon from '../tech_icon';
import useElementOnScreen from '../../hooks/use_element_on_screen';
import { IProject } from '../../types';
import styles from './styles.module.scss';
import styleUtils from '../../styles/utils.module.scss'

interface ProjectCardProps {
  project: IProject;
  size: string;
}

const ProjectCard = ({ project, size }: ProjectCardProps) => {
  const { name, img, description, page, technologies, link, github } = project;
  const [ref, isShowing] = useElementOnScreen<HTMLLIElement>();
  const [darkTheme] = useContext(ThemeContext);

  const IconComponents = ICONS.filter((icon) =>
    technologies.includes(icon.icon)
  ).map((icon) => (
    <li key={icon.name} className={styles.iconItem}>
      <TechIcon icon={icon} tooltip />
    </li>
  ));

  return (
    <li
      className={`${styles.projectCard} ${darkTheme && styles.projectCardDark} ${size} ${isShowing && styles.showing}`}
      ref={ref}
    >
      <h2 className={styles.title}>{name}</h2>
      <div className={styles.imageContainer}>
        <Image
          src={`/images/projects/${img}`}
          alt={description}
          layout="fill"
        />
      </div>
      <div className={`${styles.projectContent} ${darkTheme && styles.projectContentDark}`}>
        <a
          href={link}
          className={styles.contentTitle}
          target="_blank"
          rel="noreferrer"
        >
          {name}
        </a>
        <p className={styles.contentLabel}>
          Description:
        </p>
        <p className={styles.contentDescription}>{description}</p>
        <p className={styles.contentLabel}>Technologies:</p>
        <ul className={styles.contentIconsContainer}>
          {IconComponents}
        </ul>
        <div className={styles.contentButtonContainer}>
          <a href={link} className={`${styleUtils.buttonPrimary} ${styles.buttonPrimaryLayout}`}>
            Live
          </a>
          <a href={github} className={`${styleUtils.buttonSecondary} ${styles.buttonSecondaryLayout}`}>
            Repo
          </a>
        </div>
      </div>
    </li>
  );
}

export default ProjectCard;

ProjectCard.defaultProps = {
  size: styles.defaultSize,
};

import React, { useContext } from 'react';
import Link from 'next/link';
import ThemeContext from '../../context/theme_context';
import ProjectCard from '../project_card';
import PROJECTS from '../../data/projects';
import * as ROUTES from '../../data/routes';
import Text from '../text';
import useElementOnScreen from '../../hooks/use_element_on_screen';
import styles from './styles.module.scss';

export default function Projects() {
  const [darkTheme] = useContext(ThemeContext);
  const [ref, isShowing] = useElementOnScreen<HTMLDivElement>();

  const MainProjectsComponent = PROJECTS.filter(
    (project) => project.category === 'main'
  ).map((project) => (
    <ProjectCard
      key={project.name}
      project={project}
      size={styles.mainProjectSize}
    />
  ));

  return (
    <section className={`${styles.section} ${darkTheme && styles.sectionDark}`}>
      <span id="projects" className={styles.anchor} />
      <div className={styles.container}>
        <h1 className={styles.title}>Projects</h1>
        <div
          className={`${styles.content} ${isShowing && styles.showing}`}
          ref={ref}
        >
          <Text>
            A list of my most relevant projects. If you want to see more,{" "}
            <Link href={ROUTES.ALL_PROJECTS}>
              <a
                className={`${styles.link} ${darkTheme && styles.linkDark}`}
              >
                click here to view all my projects
              </a>
            </Link>
            .
          </Text>
        </div>
        <div className={styles.projectContainer}>
          <ul className={styles.projectList}>
            {MainProjectsComponent}
          </ul>
        </div>
      </div>
    </section>
  );
}

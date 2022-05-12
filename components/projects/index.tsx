import React, { useState, useContext } from 'react';
import ThemeContext from '../../context/theme_context';
import Text from '../text';
import BackHomeArrow from '../back_home_arrow';
import IconsFilter from './icons_filter';
import PROJECTS from '../../data/projects.json';
import ProjectCard from '../project_card';
import styles from './styles.module.scss'
import { IProject } from '../../types';

export default function About() {
  const [filter, setFilter] = useState('');
  const [darkTheme] = useContext(ThemeContext);

  const ProjectList = PROJECTS.filter((project: IProject) =>
    filter ? project.technologies.includes(filter) : true
  ).map((project) => <ProjectCard key={project.name} project={project} />);

  return (
    <section className={`${styles.section} ${darkTheme && styles.sectionDark}`}>
      <BackHomeArrow />
      <h1 className={styles.title}>All projects</h1>
      <div className={styles.description}>
        <div className={styles.textContainer}>
          <Text>
            Here are all my projects, large and small. Feel free to check
            them out. Use the filter option to only display projects using a
            specific technology.
          </Text>
        </div>
        <div className={styles.filterContainer}>
          <IconsFilter filter={filter} setFilter={setFilter} />
        </div>
      </div>
      <ul className={styles.projectList}>{ProjectList}</ul>
      <BackHomeArrow />
    </section>
  );
}

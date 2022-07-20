import React, { useState } from 'react';
import { useAppSelector } from '@hooks/use_redux';
import Text from '@components/text';
import BackHomeArrow from '@components/back_home_arrow';
import ProjectCard from '@components/project_card';
import { IProject } from '@types';
import IconsFilter from '@components/projects/icons_filter';
import styles from './styles.module.scss';

interface ProjectsProps {
  projects: IProject[];
}

const Projects = ({ projects }: ProjectsProps) => {
  const [filter, setFilter] = useState('');
  const darkTheme = useAppSelector((state) => state.darkTheme);

  const ProjectList = projects
    .filter((project) => (filter ? project.technologies.includes(filter) : true))
    .map((project) => <ProjectCard key={project.name} project={project} />);

  const allProjectsIcons = projects
    .map((p) => p.technologies)
    .flat()
    .filter((tech, i, arr) => arr.indexOf(tech) === i);

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
          <IconsFilter filter={filter} setFilter={setFilter} icons={allProjectsIcons} />
        </div>
      </div>
      <ul className={styles.projectList}>{ProjectList}</ul>
      <BackHomeArrow />
    </section>
  );
};

export default Projects;

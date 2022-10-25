import React, { useState } from 'react';
import Text from '@components/text';
import BackHomeArrow from '@components/back_home_arrow';
import ProjectCard from '@components/project_card';
import { IProject } from '@types';
import IconsFilter from '@components/projects/icons_filter';
import * as styles from './styles';

interface ProjectsProps {
  projects: IProject[];
}

const Projects = ({ projects }: ProjectsProps) => {
  const [filter, setFilter] = useState('');

  const ProjectList = projects
    .filter((project) => (filter ? project.technologies.includes(filter) : true))
    .map((project) => <ProjectCard key={project.name} project={project} />);

  const allProjectsIcons = projects
    .map((p) => p.technologies)
    .flat()
    .filter((tech, i, arr) => arr.indexOf(tech) === i);

  return (
    <styles.Main>
      <styles.Section>
        <BackHomeArrow />
        <styles.Title>All projects</styles.Title>
        <styles.Description>
          <styles.TextContainer>
            <Text>
              Here are all my projects, large and small. Feel free to check
              them out. Use the filter option to only display projects using a
              specific technology.
            </Text>
          </styles.TextContainer>
          <styles.FilterContainer>
            <IconsFilter filter={filter} setFilter={setFilter} usedIcons={allProjectsIcons} />
          </styles.FilterContainer>
        </styles.Description>
        <styles.ProjectList>{ProjectList}</styles.ProjectList>
        <BackHomeArrow />
      </styles.Section>
    </styles.Main>
  );
};

export default Projects;

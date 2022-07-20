import Link from 'next/link';
import ProjectCard from '@components/project_card';
import ROUTES from '@data/routes.json';
import Text from '@components/text';
import useElementOnScreen from '@hooks/use_element_on_screen';
import type { IProject } from '@types';
import * as styles from './styles';

interface ProjectsProps {
  projects: IProject[];
}

const Projects = ({ projects }: ProjectsProps) => {
  const [ref, isShowing] = useElementOnScreen<HTMLDivElement>();

  const MainProjectsComponent = projects
    .filter((project) => project.isMainProject)
    .map((project) => (
      <ProjectCard
        key={project.name}
        project={project}
        isMain
      />
    ));

  return (
    <styles.Section>
      <styles.Anchor id="projects" />
      <styles.Container>
        <styles.Title>Projects</styles.Title>
        <styles.Content
          isShowing={isShowing}
          ref={ref}
        >
          <Text>
            A list of my most relevant projects. If you want to see more,
            {' '}
            <Link href={ROUTES.allProjects} passHref>
              <styles.Link href="dummy">
                click here to view all my projects
              </styles.Link>
            </Link>
            .
          </Text>
        </styles.Content>
        <styles.ProjectContainer>
          <styles.ProjectList>
            {MainProjectsComponent}
          </styles.ProjectList>
        </styles.ProjectContainer>
      </styles.Container>
    </styles.Section>
  );
};

export default Projects;

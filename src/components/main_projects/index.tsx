import Link from 'next/link';
import { useAppSelector } from '../../hooks/use_redux';
import ProjectCard from '../project_card';
import ROUTES from '../../../data/routes.json';
import Text from '../text';
import useElementOnScreen from '../../hooks/use_element_on_screen';
import { IProject } from '../../types';
import styles from './styles.module.scss';

interface ProjectsProps {
  projects: IProject[];
}

const Projects = ({ projects }: ProjectsProps) => {
  const darkTheme = useAppSelector((state) => state.darkTheme);
  const [ref, isShowing] = useElementOnScreen<HTMLDivElement>();

  const MainProjectsComponent = projects
    .filter((project) => project.isMainProject)
    .map((project) => (
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
            A list of my most relevant projects. If you want to see more,
            {' '}
            <Link href={ROUTES.allProjects}>
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
};

export default Projects;

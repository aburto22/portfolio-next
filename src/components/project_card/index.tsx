import Image from 'next/image';
import TechIcon from '@components/tech_icon';
import useElementOnScreen from '@hooks/use_element_on_screen';
import { IProject } from '@types';
import { useIconsContext } from '@context/icons_context';
import * as styles from './styles';

interface ProjectCardProps {
  project: IProject;
  isMain?: boolean;
}

const ProjectCard = ({ project, isMain = false }: ProjectCardProps) => {
  const icons = useIconsContext();
  const {
    name, image, description, technologies, liveUrl, githubUrl,
  } = project;
  const [ref, isShowing] = useElementOnScreen<HTMLLIElement>();

  const IconComponents = icons
    .filter((icon) => technologies.includes(icon.iconName))
    .map((icon) => (
      <styles.IconItem key={icon.name}>
        <TechIcon icon={icon} tooltip />
      </styles.IconItem>
    ));

  return (
    <styles.ProjectCard
      isShowing={isShowing}
      isMain={isMain}
      ref={ref}
    >
      <styles.Title>{name}</styles.Title>
      <Image
        src={image.src}
        alt={description}
        width={image.width || 375}
        height={image.height || 500}
        priority
      />
      <styles.ProjectContent>
        <styles.ContentTitle
          href={liveUrl}
          target="_blank"
          rel="noreferrer"
        >
          {name}
        </styles.ContentTitle>
        <styles.ContentLabel>
          Description:
        </styles.ContentLabel>
        <styles.ContentDescription>{description}</styles.ContentDescription>
        <styles.ContentLabel>Technologies:</styles.ContentLabel>
        <styles.ContentIconsContainer>
          {IconComponents}
        </styles.ContentIconsContainer>
        <styles.ContentButtonContainer>
          <styles.ButtonPrimary href={liveUrl}>
            Live
          </styles.ButtonPrimary>
          <styles.ButtonSecondary href={githubUrl}>
            Repo
          </styles.ButtonSecondary>
        </styles.ContentButtonContainer>
      </styles.ProjectContent>
    </styles.ProjectCard>
  );
};

export default ProjectCard;

ProjectCard.defaultProps = {
  isMain: false,
};

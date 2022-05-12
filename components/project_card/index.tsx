import React from 'react';
import ICONS from '../../data/icons';
import Image from 'next/image';
import TechIcon from './tech_icon';
import useElementOnScreen from '../../hooks/use_element_on_screen';
import { IProject } from '../../types';
import styles from './styles.module.scss';

interface ProjectCardProps {
  project: IProject;
  maxHeight: string;
  maxWidth: string;
}

const ProjectCard = ({ project, maxHeight, maxWidth }: ProjectCardProps) => {
  const { name, img, description, page, technologies, link, github } = project;
  const [ref, isShowing] = useElementOnScreen<HTMLLIElement>();

  const IconComponents = ICONS.filter((icon) =>
    technologies.includes(icon.icon)
  ).map((icon) => (
    <li key={icon.name}>
      <TechIcon icon={icon} className="h-7 w-7" tooltip />
    </li>
  ));

  return (
    <li
      className={`bg-white dark:bg-gray-dark-bg ${maxHeight} ${maxWidth} flex ${
        isShowing ? "opacity-100" : "opacity-0"
      } flex-col items-center justify-center overflow-hidden relative w-full transition-opacity duration-700 m-2 project`}
      ref={ref}
    >
      <h2 className="opacity-0 absolute">{name}</h2>
      <Image
        src={`/images/projects/${img}`}
        alt={description}
        className="max-w-full order-first border-4 border-transparent"
      />
      <div className="absolute w-full h-full bg-white dark:bg-gray-dark-bg flex flex-col p-4 items-center justify-center top-full transition-all project-content">
        <a
          href={link}
          className="text-xl my-2 text-center font-bold"
          target="_blank"
          rel="noreferrer"
        >
          {name}
        </a>
        <p className="text-center text-xs font-bold mb-1 mt-auto">
          Description:
        </p>
        <p className="text-center mb-2 text-sm">{description}</p>
        <p className="text-center text-xs font-bold mb-1 mt-2">Technologies:</p>
        <ul className="flex flex-row justify-center items-center flex-wrap mb-2">
          {IconComponents}
        </ul>
        {page && (
          <a
            href={page}
            className="hover:text-blue-hover underline my-4 text-blue-link dark:text-blue-link-dark dark:hover:text-blue-hover"
          >
            Learn more about this project
          </a>
        )}
        <div className="mt-auto mb-4 flex items-center justify-around w-full">
          <a href={link} className="button-primary w-full ml-4 mr-2">
            Live
          </a>
          <a href={github} className="button-secondary w-full ml-2 mr-4">
            Repo
          </a>
        </div>
      </div>
    </li>
  );
}

export default ProjectCard;

ProjectCard.defaultProps = {
  maxHeight: "max-h-93",
  maxWidth: " max-w-68",
};

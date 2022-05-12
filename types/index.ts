export interface IProject {
  name: string;
  img: string;
  description: string;
  page?: string;
  technologies: string[];
  link: string;
  github: string;
}

export interface IIcon {
  name: string;
  icon: string;
  alt: string;
  category: string;
  filter: boolean;
}

export interface IAnchor {
  name: string;
  target: string;
}
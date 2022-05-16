import store from '../store';

interface IImage {
  contentType?: string;
  height?: number;
  width?: number;
  src: string;
  name?: string;
}

export interface IProject {
  name: string;
  image: IImage;
  description: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  isMainProject: boolean;
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

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

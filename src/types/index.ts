import * as Contentful from 'contentful';

interface IImage {
  contentType?: string;
  height?: number;
  width?: number;
  src: string;
  name?: string;
}
export interface IAnchor {
  name: string;
  target: string;
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

export interface TypeProjectInfoFields {
  name: Contentful.EntryFields.Symbol;
  description: Contentful.EntryFields.Text;
  technologies: Contentful.EntryFields.Object;
  liveUrl: Contentful.EntryFields.Symbol;
  githubUrl: Contentful.EntryFields.Symbol;
  isMainProject: Contentful.EntryFields.Boolean;
  image: Contentful.Asset;
}

export interface IIcon {
  name: string;
  iconName: string;
  alt: string;
  category: string;
  icon: IImage;
}

export interface TypeIconInfoFields {
  name: Contentful.EntryFields.Symbol;
  icon: Contentful.Asset;
  iconName: Contentful.EntryFields.Symbol;
  alt: Contentful.EntryFields.Symbol;
  category: Contentful.EntryFields.Symbol;
}

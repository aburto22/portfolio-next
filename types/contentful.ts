import * as Contentful from 'contentful';

export interface TypeProjectInfoFields {
  name: Contentful.EntryFields.Symbol;
  description: Contentful.EntryFields.Text;
  technologies: Contentful.EntryFields.Object;
  liveUrl: Contentful.EntryFields.Symbol;
  githubUrl: Contentful.EntryFields.Symbol;
  isMainProject: Contentful.EntryFields.Boolean;
  image: Contentful.Asset;
}

export type TypeProjectInfo = Contentful.Entry<TypeProjectInfoFields>;

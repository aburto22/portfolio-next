import type { IProject, TypeProjectInfoFields } from '@types';
import client from './contentful';

export const getProjects = async (): Promise<IProject[]> => {
  const entries = await client.getEntries<TypeProjectInfoFields>({
    content_type: 'projectInfo',
  });

  const projects = entries.items.map((item) => item.fields);

  return projects.map((p) => {
    const image = {
      name: p.image.fields.title,
      width: p.image.fields.file.details.image?.width || 0,
      height: p.image.fields.file.details.image?.height || 0,
      contentType: p.image.fields.file.contentType,
      src: `https:${p.image.fields.file.url}?w=350`,
    };

    return {
      ...p,
      image,
    };
  });
};

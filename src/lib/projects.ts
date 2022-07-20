import { createClient } from 'contentful';
import type { IProject, TypeProjectInfoFields } from '@types';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
});

export const getProjects = async (): Promise<IProject[]> => {
  const entries = await client.getEntries<TypeProjectInfoFields>();

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

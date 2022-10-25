import type { IIcon, TypeIconInfoFields } from '@types';
import client from './contentful';

export const getIcons = async (): Promise<IIcon[]> => {
  const entries = await client.getEntries<TypeIconInfoFields>({
    content_type: 'technology',
  });

  const icons = entries.items.map((item) => item.fields);

  return icons.map((ic) => {
    const icon = {
      name: ic.icon.fields.title,
      width: ic.icon.fields.file.details.image?.width || 72,
      height: ic.icon.fields.file.details.image?.height || 72,
      contentType: ic.icon.fields.file.contentType,
      src: `https:${ic.icon.fields.file.url}?w=72`,
    };

    return {
      ...ic,
      icon,
    };
  });
};

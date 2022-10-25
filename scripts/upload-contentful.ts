import * as contentful from 'contentful-management';
import dotenv from 'dotenv';
import icons from '../data/icons.json';

dotenv.config({
  path: '.env.local'
});

const accessToken = process.env.CONTENTFUL_CONTENT_MANAGEMENT;

if (!accessToken) {
  throw new Error('Contentful access token required');
}

const client = contentful.createClient({
  accessToken,
});

const spaceId = process.env.CONTENTFUL_SPACE_ID

if (!spaceId) {
  throw new Error('Contentful space id required');
}

const uploadContent = async () => {
  const space = await client.getSpace(spaceId);
  const env = await space.getEnvironment('master');

  const { items } = await env.getAssets();
  const assets = items.map((i) => ({
    id: i.sys.id,
    title: i.fields.title['en-US'],
  }));

  const iconsWithId = icons.map((icon) => {
    const asset = assets.find((a) => a.title === icon.icon);

    if (!asset) {
      throw new Error('Icon not found for ' + icon.name);
    }

    return {
      ...icon,
      iconName: icon.icon,
      assetId: asset.id,
    }
  });

  for (const icon of iconsWithId) {
    await env.createEntry('technology', {
      fields: {
        name: {
          'en-US': icon.name,
        },
        iconName: {
          'en-US': icon.iconName,
        },
        alt: {
          'en-US': icon.alt,
        },
        category: {
          'en-US': icon.category,
        },
        filter: {
          'en-US': icon.filter,
        },
        icon: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Asset',
              id: icon.assetId
            }
          }
        }
      }
    });
  }
}

uploadContent();
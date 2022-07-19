const { createClient } = require('contentful-management');
const PROJECTS = require('../data/projects.json');
require('dotenv').config({ path: '.env.local' });

const addProjects = async () => {
  const client = createClient({
    accessToken: process.env.CONTENTFUL_CONTENT_MANAGEMENT,
  });
  
  const environment = await client.getSpace(process.env.CONTENTFUL_SPACE_ID)
    .then((space) => space.getEnvironment('master'));
  
  try {
    for (const project of PROJECTS) {
      const entry = await environment.createEntry('projectInfo', {
        fields: {
          name: {
            'en-US': project.name,
          },
          description: {
            'en-US': project.description,
          },
          technologies: {
            'en-US': project.technologies,
          },
          liveUrl: {
            'en-US': project.liveUrl,
          },
          githubUrl: {
            'en-US': project.githubUrl,
          },
          isMainProject: {
            'en-US': project.category === 'main',
          },
        }
      });
    
      console.log(entry);
    }
  } catch (err) {
    console.error(err);
  }
}

addProjects();

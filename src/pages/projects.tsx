import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '@components/layout';
import HeaderWithSide from '@components/header_with_side';
import Projects from '@components/projects';
import { IIcon, IProject } from '@types';
import { getProjects } from '@lib/projects';
import { getIcons } from '@lib/icons';
import IconsContext from '@context/icons_context';

interface ProjectsPageProps {
  projects: IProject[];
  icons: IIcon[];
}

const ProjectsPage: NextPage<ProjectsPageProps> = ({ projects, icons }) => (
  <IconsContext.Provider value={icons}>
    <Layout Header={<HeaderWithSide />}>
      <Head>
        <title>Alejandro Aburto S.</title>
      </Head>
      <Projects projects={projects} />
    </Layout>
  </IconsContext.Provider>
);

export const getStaticProps = async () => {
  const projects = await getProjects();
  const icons = await getIcons();

  return {
    props: {
      projects,
      icons,
    },
  };
};

export default ProjectsPage;

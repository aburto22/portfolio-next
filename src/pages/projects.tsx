import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/layout';
import HeaderWithSide from '../components/header_with_side';
import Projects from '../components/projects';
import { IProject } from '../types';
import { getProjects } from '../lib/projects';

interface ProjectsPageProps {
  projects: IProject[];
}

const ProjectsPage: NextPage<ProjectsPageProps> = ({ projects }) => (
  <Layout Header={<HeaderWithSide />}>
    <Head>
      <title>Alejandro Aburto S.</title>
    </Head>
    <Projects projects={projects} />
  </Layout>
);

export const getStaticProps = async () => {
  const projects = await getProjects();

  return {
    props: {
      projects,
    },
  };
};

export default ProjectsPage;

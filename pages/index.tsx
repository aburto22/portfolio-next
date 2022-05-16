import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/layout';
import Header from '../components/header';
import Welcome from '../components/welcome';
import MainProjects from '../components/main_projects';
import MainAbout from '../components/main_about';
import { getProjects } from '../lib/projects';
import { IProject } from '../types';

interface HomePageProps {
  projects: IProject[];
}

const HomePage: NextPage<HomePageProps> = ({ projects }) => (
  <Layout Header={<Header />}>
    <Head>
      <title>Alejandro Aburto S.</title>
    </Head>
    <Welcome />
    <MainProjects projects={projects} />
    <MainAbout />
  </Layout>
);

export default HomePage;

export const getStaticProps = async () => {
  const projects = await getProjects();

  return {
    props: {
      projects,
    },
  };
};

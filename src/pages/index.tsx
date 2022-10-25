import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '@components/layout';
import Header from '@components/header';
import Welcome from '@components/welcome';
import MainProjects from '@components/main_projects';
import MainAbout from '@components/main_about';
import { getProjects } from '@lib/projects';
import { getIcons } from '@lib/icons';
import type { IProject, IIcon } from '@types';
import IconsContext from '@context/icons_context';

interface HomePageProps {
  projects: IProject[];
  icons: IIcon[];
}

const HomePage: NextPage<HomePageProps> = ({ projects, icons }) => (
  <IconsContext.Provider value={icons}>
    <Layout Header={<Header />}>
      <main>
        <Head>
          <title>Alejandro Aburto S.</title>
        </Head>
        <Welcome />
        <MainProjects projects={projects} />
        <MainAbout />
      </main>
    </Layout>
  </IconsContext.Provider>
);

export default HomePage;

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

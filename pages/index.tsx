import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/layout';
import Header from '../components/header';
import Welcome from '../components/welcome';
import MainProjects from '../components/main_projects';
import MainAbout from '../components/main_about';

const HomePage: NextPage = () => (
  <Layout Header={<Header />}>
    <Head>
      <title>Alejandro Aburto S.</title>
    </Head>
    <Welcome />
    <MainProjects />
    <MainAbout />
  </Layout>
);

export default HomePage;

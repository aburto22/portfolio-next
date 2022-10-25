import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '@components/layout';
import HeaderWithSide from '@components/header_with_side';
import AboutMe from '@components/about_me';
import ABOUT_ANCHORS from '@data/about_anchors.json';

const AboutMePage: NextPage = () => (
  <Layout Header={<HeaderWithSide anchors={ABOUT_ANCHORS} />} sidebar>
    <main>
      <Head>
        <title>Alejandro Aburto S.</title>
      </Head>
      <AboutMe />
    </main>
  </Layout>
);

export default AboutMePage;

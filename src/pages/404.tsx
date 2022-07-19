import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/layout';
import NotFound from '../components/not_found';
import HeaderWithSide from '../components/header_with_side';

const NotFoundPage: NextPage = () => (
  <Layout Header={<HeaderWithSide />}>
    <Head>
      <title>Alejandro Aburto S.</title>
    </Head>
    <NotFound />
  </Layout>
);

export default NotFoundPage;

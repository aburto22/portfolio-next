import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/layout'
import AboutMe from '../components/about_me';

const AboutMePage: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Alejandro Aburto S.</title>
      </Head>
      <AboutMe />
    </Layout>
  )
}

export default AboutMePage

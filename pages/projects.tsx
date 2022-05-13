import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/layout'
import HeaderWithSide from '../components/header_with_side';
import Projects from '../components/projects';

const ProjectsPage: NextPage = () => {
  return (
    <Layout Header={<HeaderWithSide />}>
      <Head>
        <title>Alejandro Aburto S.</title>
      </Head>
      <Projects />
    </Layout>
  )
}

export default ProjectsPage

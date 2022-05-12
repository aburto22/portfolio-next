import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/layout'
import Projects from '../components/projects';

const ProjectsPage: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Alejandro Aburto S.</title>
      </Head>
      <Projects />
    </Layout>
  )
}

export default ProjectsPage

import Intro from '../components/intro'
import ProjectList from '../components/project-list'
import Layout from '../components/layout'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex-1">
      <Intro></Intro>
      <ProjectList></ProjectList>
    </div>
  )
}

// Render layout per-page
Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
      <div className="text-center leading-tight mb-6">
        <Link
          href="/legal-notice"
          className="font-semibold text-purple-500 hover:text-purple-700 md:text-sm"
        >
          Legal notice &<br className="md:hidden" /> data privacy
        </Link>
      </div>
    </Layout>
  )
}

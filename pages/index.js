import About from '../components/about'
import ProjectList from '../components/project-list'
import PageLayout from '../components/page-layout'

export default function Home() {
  return (
    <>
      <PageLayout>
        <About />
      </PageLayout>
      <ProjectList />
    </>
  )
}

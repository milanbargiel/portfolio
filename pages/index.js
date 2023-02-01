import About from '../components/about'
import ProjectList from '../components/project-list'
import Page from '../components/page'

export default function Home() {
  return (
    <div className="flex-1">
      <Page>
        <About />
      </Page>
      <ProjectList />
    </div>
  )
}

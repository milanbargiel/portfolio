import About from '../components/about'
import Header from '../components/header'
import ProjectList from '../components/project-list'
import TextColumn from '../components/text-column'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout variant="dark">
      <TextColumn>
        <Header />
        <About />
      </TextColumn>
      <ProjectList />
    </Layout>
  )
}

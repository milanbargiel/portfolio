import About from '../components/about'
import Header from '../components/header'
import ProjectList from '../components/project-list'
import TextColumn from '../components/text-column'

export default function Home() {
  return (
    <>
      <TextColumn>
        <Header />
        <About />
      </TextColumn>
      <ProjectList />
    </>
  )
}

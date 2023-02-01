import About from '../components/about'
import ProjectList from '../components/project-list'
import TextColumn from '../components/text-column'

export default function Home() {
  return (
    <>
      <TextColumn>
        <About />
      </TextColumn>
      <ProjectList />
    </>
  )
}

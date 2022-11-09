import Intro from '../components/intro'
import ProjectList from '../components/project-list'
import FooterButton from '../components/footer-button'

export default function Home() {
  return (
    <div className="container mx-auto max-w-4xl">
      <Intro></Intro>
      <ProjectList></ProjectList>
      <FooterButton href="/legal-notice">
        Legal notice &<br /> data privacy
      </FooterButton>
    </div>
  )
}

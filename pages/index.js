import Intro from '../components/intro'
import ProjectList from '../components/project-list'
import FooterButton from '../components/footer-button'

export default function Home() {
  return (
    <div>
      <Intro></Intro>
      <ProjectList></ProjectList>
      <FooterButton href="/legal-notice">
        Legal notice &<br /> data privacy
      </FooterButton>
    </div>
  )
}

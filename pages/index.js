import IntroBold from '../components/intro-bold'
import ProjectList from '../components/project-list'
import FooterButton from '../components/footer-button'
import Layout from '../components/layout'

export default function Home() {
  return (
    <div className="container mx-auto max-w-4xl">
      <IntroBold></IntroBold>
      <ProjectList></ProjectList>
    </div>
  )
}

// Render layout per-page
Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
      <FooterButton href="/legal-notice">
        Legal notice &<br /> data privacy
      </FooterButton>
    </Layout>
  )
}

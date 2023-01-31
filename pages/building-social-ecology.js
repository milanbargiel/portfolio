import Page from '../components/page'
import Layout from '../components/layout'

export default function BuildingSocialEcology() {
  return (
    <div className="flex-1">
      <Page>A living archive of socio-ecological building design patterns</Page>
    </div>
  )
}

// Render layout per-page
BuildingSocialEcology.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

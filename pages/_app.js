import '../styles/globals.css'
import Layout from '../components/layout'

export default function MyApp({ Component, pageProps }) {
  return (
    // Single Shared Layout with Custom App
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

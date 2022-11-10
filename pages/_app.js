import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(<Component {...pageProps} />)
}

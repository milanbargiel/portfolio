import '../styles/globals.css'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Milan Bargiel – Product & Web Developer</title>
        <meta
          name="description"
          content="The Portfolio and Work Archive of Creative Technologist Milan Bargiel."
        />
        <meta property="og:title" content="Milan Bargiel" />
        <meta
          property="og:description"
          content="The Portfolio and Work Archive of Creative Technologist Milan Bargiel."
        />
        <meta
          property="og:image"
          content="https://www.milanbargiel.com/milanbargiel-webpage-og.jpg"
        />
        <meta property="og:url" content="https://www.milanbargiel.com/" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

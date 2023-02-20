import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <div>
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
      <main className="px-4 container mx-auto min-h-screen flex flex-col md:px-8">
        {children}
      </main>
    </div>
  )
}

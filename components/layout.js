import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Milan Bargiel – building digital things</title>
        <meta
          name="description"
          content="The Portfolio and Work Archive of Product Owner and Creative Technologist Milan Bargiel."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto max-w-6xl min-h-screen flex flex-col">
        {children}
      </main>
    </div>
  )
}

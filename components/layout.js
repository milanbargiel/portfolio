import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <div className="bg-[#1f1d25] text-white">
      <Head>
        <title>Milan Bargiel – building digital things</title>
        <meta
          name="description"
          content="The Portfolio and Work Archive of Product Owner and Creative Technologist Milan Bargiel."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="px-4 container mx-auto min-h-screen flex flex-col md:px-8">
        {children}
      </main>
    </div>
  )
}

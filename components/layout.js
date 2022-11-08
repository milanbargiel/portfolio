import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Milan Bargiel – building digital things</title>
        <meta
          name="description"
          content="The Portfolio and Work Archive of Product Owner and Creative Technologist Milan Bargiel."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{children}</main>
    </div>
  )
}

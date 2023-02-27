import Layout from '../../components/layout'
import Header from '../../components/header'
import TextColumn from '../../components/text-column'
import Image from '../../components/image'
import Footer from '../../components/footer'
import Link from '../../components/link'

// Load images
import zonBrowser from '../../public/zon-browser.png'
import commentsRollout from '../../public/comments-roll-out.png'

export async function getStaticProps() {
  return { props: { isDark: false } }
}

const Kulturgenerator = () => {
  return (
    <Layout>
      <TextColumn>
        <Header />
        <h1 className="text-5xl mb-12">
          A database that stores more than 10.000 comments a day
        </h1>
      </TextColumn>
      <TextColumn>
        <p className="mb-4 text-gray-700 text-lg">
          In 2019, news media ZEIT ONLINE replaced its legacy comments database
          with a lightweight, flexible, and scalable system that is orchestrated
          in the cloud.
        </p>
        <p className="mb-4 text-gray-700 text-lg">
          In this project, I took the role of a technical product owner together
          with my colleague{' '}
          <Link
            href="https://www.zeit.de/autoren/S/Thomas_Strothjohann/index"
            variant="underline-dark"
          >
            Thomas Strothjohann
          </Link>
          . Our responsibility was to represent the perspective of moderators,
          users and the newsroom in the development process and to set up an
          agile practice that works well for the team of engineers.
        </p>
        <p className="mb-4 text-gray-700 text-lg">
          The challenge was to exchange databases during live operations. As the
          comment sections are a major feature of{' '}
          <Link href="https://www.zeit.de/" variant="underline-dark">
            www.zeit.de
          </Link>{' '}
          we could not afford longer periods of downtime.
        </p>
        <p className="mb-16 text-gray-700 text-lg">
          Thanks to a sophisticated sync between the old database and the new
          one, we were able to switch systems without hardly anyone noticing.
          Reconnecting a service deeply intertwined with the basic functioning
          of the news web page was an inspiring challenge.
        </p>
      </TextColumn>
      <div className="mb-16 md:flex md:flex-wrap md:flex-row md:gap-16">
        <div className="basis-1/4">
          <Image
            src={zonBrowser}
            alt="Screenshot from the Kulturgenerator App"
            className="mb-6"
          />
        </div>
        <div className="basis-1/3">
          <Image
            src={commentsRollout}
            className="drop-shadow-sm rounded-lg"
            alt="The dashboard of the database during roll-out"
            caption="CPU-utilisation of the database during roll-out."
          />
        </div>
      </div>
      <Footer variant="project" />
    </Layout>
  )
}

export default Kulturgenerator

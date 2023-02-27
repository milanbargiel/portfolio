import Layout from '../../components/layout'
import Header from '../../components/header'
import TextColumn from '../../components/text-column'
import KulturgeneratorLogos from '../../components/kulturgenerator-logos'
import Image from '../../components/image'
import Footer from '../../components/footer'
import Link from '../../components/link'

// Load images
import kulturgeneratorScreen from '../../public/kulturgenerator/kulturgenerator-screen.png'
import kulturgeneratorPoster from '../../public/kulturgenerator/kulturgenerator-cologne-street.jpg'
import kulturgeneratorCMS from '../../public/kulturgenerator/kulturgenerator-cms.png'

export async function getStaticProps() {
  return { props: { isDark: false } }
}

const Kulturgenerator = () => {
  return (
    <Layout>
      <TextColumn>
        <Header />
        <h1 className="text-6xl mb-12">A solidaric online art gallery </h1>
      </TextColumn>
      <div className="mb-16 md:flex md:flex-wrap md:flex-row md:gap-16">
        <div className="basis-1/4">
          <Image
            src={kulturgeneratorScreen}
            alt="Screenshot from the Kulturgenerator App"
            className="mb-6"
          />
        </div>
        <div className="basis-1/2">
          <Image
            src={kulturgeneratorPoster}
            alt="Screenshot from the Kulturgenerator App"
            caption="Advertisement for the Kulturgenerator in the city of Cologne © Ludwig Lederer"
          />
        </div>
      </div>
      <TextColumn>
        <p className="mb-4 text-gray-700 text-lg">
          The <i>kulturgenerator</i> is a generative redistribution machine, an
          experiment, and a online shop that existed during the first year of
          the COVID pandemic. It aimed at increasing the visibility of the
          cultural scene in times of quarantine by providing artists with a{' '}
          <Link
            href="https://www.ksta.de/kultur-medien/kulturgenerator-online-galerie-soll-kuenstlern-in-der-krise-helfen-157774"
            variant="underline-dark"
          >
            digital tool <span>↗</span>
          </Link>{' '}
          to generate income on their own
        </p>
        <p className="mb-4 text-gray-700 text-lg">
          Together with friends and partners from the cultural scene of Cologne
          I co-founded the digital gallery. I contributed to the design as well
          as the web development of the application.
        </p>
        <p className="mb-4 text-gray-700 text-lg">
          The basic functioning is simple. Artists sell their work in a web
          shop. They can decide if they want to contribute 50 or 100 percent of
          their revenue to a solidaric &quot;money pool&quot; that at the end of
          a round is distributed evenly amongst all participants.
        </p>
        <p className="mb-4 text-gray-700 text-lg">
          In two rounds we received 291 artworks and experiences from diverse
          artists and institutions including the Opera of Cologne, the Cologne
          Philharmonic Orchestra, the MAKK (Museum of Applied Arts) and the
          Wallraf-Richartz-Museum.
        </p>
        <p className="mb-12 text-gray-700 text-lg">
          The platform is a collaboration between the Cultural Council of
          Cologne, Niehler Freiheit e.V., and the art center Wachsfabrik.
        </p>
        <KulturgeneratorLogos />
      </TextColumn>
      <div className="mb-24">
        <Image
          src={kulturgeneratorCMS}
          alt="Screenshot from the Kulturgenerator App"
          className="md:w-2/3 border border-gray-300 rounded-xl"
          caption="Screenshot of the custom backend built with the Headless-CMS Strapi."
        />
      </div>
      <Footer variant="project" />
    </Layout>
  )
}

export default Kulturgenerator

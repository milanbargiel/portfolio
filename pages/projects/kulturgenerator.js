import Layout from '../../components/layout'
import Header from '../../components/header'
import TextColumn from '../../components/text-column'
import KulturgeneratorLogos from '../../components/kulturgenerator-logos'
import Image from '../../components/image'

// Load images
import kulturgeneratorScreen from '../../public/kulturgenerator/kulturgenerator-screen.png'
import kulturgeneratorPoster from '../../public/kulturgenerator/kulturgenerator-cologne-street.jpg'
import kulturgeneratorCMS from '../../public/kulturgenerator/kulturgenerator-cms.png'

const Kulturgenerator = () => {
  return (
    <Layout variant="light">
      <TextColumn>
        <Header />
        <h1 className="text-4xl mb-12">
          Blueprint for a solidaric Online art gallery{' '}
        </h1>
      </TextColumn>
      <div className="mb-16 md:flex md:flex-wrap md:flex-row md:gap-16">
        <div className="basis-1/4">
          <Image
            src={kulturgeneratorScreen}
            alt="Screenshot from the Kulturgenerator App"
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
        <p className="mb-4 text-gray-700">
          The kulturgenerator is a generative redistribution machine, an
          experiment, and a online shop that existed during the first year of
          the COVID pandemic. It aimed at increasing the visibility of the
          cultural scene in times of quarantine and providing artists with a
          tool to generate income on their own.
        </p>
        <p className="mb-4 text-gray-700">
          Together with friends and partners from the cultural scene in Cologne
          I co-founded the digital gallery.
        </p>
        <p className="mb-4 text-gray-700">
          The kulturgenerator generates revenues based on a round-based
          principle. Artists sell their work in a virtual gallery. They can
          decide if they want to contribute 50 or 100 percent of the selling
          price to a &quot;money pool&quot;. At the end of a round the money
          pool is distributed evenly amongst all participants.
        </p>
        <p className="mb-4 text-gray-700">
          In two rounds more than 19.000 € were generated. The shop received 291
          artworks and experiences from diverse artists and institutions
          including the Opera of Cologne, the Cologne Philharmonic Orchestra,
          the MAKK (Museum of Applied Arts) and the Wallraf-Richartz-Museum.
        </p>
        <p className="mb-4 text-gray-700">
          By using gamification the gallery engaged users while exploring the
          offerings. The key feature of the shop was a moving banner that
          prominently showed the current monetary value of the fund. As soon as
          an artwork was sold, micro animations visualized the increase of the
          account balances and by doing so nudged the user to buy more art.
        </p>
        <p className="mb-4 text-gray-700">
          In this project I worked with web developer Moritz Pflüger in
          implementing the backend of the online shop. We decided to build a
          shop system from scratch, as we did not find a solution that was
          tailored to our specific (legal) requirements.
        </p>
        <p className="mb-4 text-gray-700">
          Features of the web shop were invoice generation, payments and e-mail
          notifications. Choosing the Jamstack (Nuxt.js, Strapi Headless-CMS) to
          implement these features was a good decision, as it gave us the
          flexibility to combine different micro-services such as PayPal for
          payments.
        </p>
        <p className="mb-12 text-gray-700">
          The platform is a collaboration between the Cultural Council of
          Cologne, Niehler Freiheit e.V., and the art center Wachsfabrik.
        </p>
        <KulturgeneratorLogos />
      </TextColumn>
      <div className="mb-24">
        <Image
          src={kulturgeneratorCMS}
          alt="Screenshot from the Kulturgenerator App"
          className="w-2/3 drop-shadow-xl"
        />
      </div>
    </Layout>
  )
}

export default Kulturgenerator

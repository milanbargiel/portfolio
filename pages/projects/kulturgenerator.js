import Layout from '../../components/layout'
import Header from '../../components/header'
import TextColumn from '../../components/text-column'
import Row from '../../components/row'
import Column from '../../components/column'
import Image from '../../components/image'

// Load logos
import kulturrat from '../../public/kulturgenerator/kulturrat.svg'
import kulturamt from '../../public/kulturgenerator/kulturamt.svg'
import rheinergie from '../../public/kulturgenerator/rheinenergie.svg'
import niehlerFreiheit from '../../public/kulturgenerator/niehlerfreiheit.svg'
import wachsfabrik from '../../public/kulturgenerator/wachsfabrik.svg'

const Kulturgenerator = () => {
  return (
    <Layout variant="light">
      <TextColumn>
        <Header />
        <h1 className="text-3xl mb-8">
          Blueprint for a solidaric Online art gallery{' '}
        </h1>
        <p className="mb-4 text-gray-700 text-sm">
          The kulturgenerator is a generative redistribution machine, an
          experiment, and a online shop that existed during the first year of
          the COVID pandemic. It aimed at increasing the visibility of the
          cultural scene in times of quarantine and providing artists with a
          tool to generate income on their own.
        </p>
        <p className="mb-4 text-gray-700 text-sm">
          Together with friends and partners from the cultural scene in Cologne
          I co-founded the digital gallery.
        </p>
        <p className="mb-4 text-gray-700 text-sm">
          The kulturgenerator generates revenues based on a round-based
          principle. Artists sell their work in a virtual gallery. They can
          decide if they want to contribute 50 or 100 percent of the selling
          price to a &quot;money pool&quot;. At the end of a round the money
          pool is distributed evenly amongst all participants.
        </p>
        <p className="mb-4 text-gray-700 text-sm">
          In two rounds more than 19.000 € were generated. The shop received 291
          artworks and experiences from diverse artists and institutions
          including the Opera of Cologne, the Cologne Philharmonic Orchestra,
          the MAKK (Museum of Applied Arts) and the Wallraf-Richartz-Museum.
        </p>
        <p className="mb-4 text-gray-700 text-sm">
          By using gamification the gallery engaged users while exploring the
          offerings. The key feature of the shop was a moving banner that
          prominently showed the current monetary value of the fund. As soon as
          an artwork was sold, micro animations visualized the increase of the
          account balances and by doing so nudged the user to buy more art.
        </p>
        <p className="mb-4 text-gray-700 text-sm">
          In this project I worked with web developer Moritz Pflüger in
          implementing the backend of the online shop. We decided to build a
          shop system from scratch, as we did not find a solution that was
          tailored to our specific (legal) requirements.
        </p>
        <p className="mb-4 text-gray-700 text-sm">
          Features of the web shop were invoice generation, payments and e-mail
          notifications. Choosing the Jamstack (Nuxt.js, Strapi Headless-CMS) to
          implement these features was a good decision, as it gave us the
          flexibility to combine different micro-services such as PayPal for
          payments.
        </p>
        <p className="mb-12 text-gray-700 text-sm">
          The platform is a collaboration between the Cultural Council of
          Cologne, Niehler Freiheit e.V., and the art center Wachsfabrik.
        </p>
        <div className="w-1/2 mb-24">
          <Row className="mb-8 items-center">
            <Column>
              <Image
                src={kulturrat}
                alt="Logo of the Cultural Council Cologne"
                className="w-12"
              />
            </Column>
            <Column>
              <Image
                src={wachsfabrik}
                alt="Logo of the cultural center Wachsfabrik"
                className="w-16"
              />
            </Column>
            <Column>
              <Image
                src={niehlerFreiheit}
                alt="Logo of the Cultural Center Niehler Freiheit"
                className="w-48"
              />
            </Column>
          </Row>
          <Row className="items-center w-2/3">
            <Column>
              <Image
                src={kulturamt}
                alt="Logo of the Cultural Office from Cologne"
                className="w-20"
              />
            </Column>
            <Column>
              <Image
                src={rheinergie}
                alt="Logo of the Rheinenergie Foundation"
              />
            </Column>
          </Row>
        </div>
      </TextColumn>
    </Layout>
  )
}

export default Kulturgenerator

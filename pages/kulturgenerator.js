import Link from '../components/link'
import Image from 'next/image'
import Layout from '../components/layout'
import kulturgeneratorOutside from '../public/kulturgenerator-cologne-street.jpg'
import kulturgeneratorApp from '../public/kulturgenerator.png'

export default function Home() {
  return (
    <div className="px-5 py-12 md:pb-24 mx-auto max-w-4xl">
      <Link href="/" className="inline-block leading-snug mb-20">
        <h1 className="font-bold">Milan Bargiel</h1>
        <span className="text-gray-500 mb-4">Product & web developer</span>
      </Link>
      <h2 className="text-3xl leading-tight mb-16 max-w-2xl md:text-5xl">
        Blueprint for a virtual art gallery in times of quarantine and isolation
      </h2>
      <div className="md:flex md:mb-12">
        <Image
          src={kulturgeneratorApp}
          alt="Screenshot from the kulturgenerator online gallery"
          className="border border-gray-400 rounded -rotate-6 mb-8 drop-shadow-sm md:mr-36 md:flex-1"
        ></Image>
        <div className="flex flex-col justify-center p-8 md:p-0 md:w-1/2">
          <Image
            src={kulturgeneratorOutside}
            alt="Billboard from the online art gallery in the streets of Cologne, Germany"
            className="rounded mb-1"
          ></Image>
          <div className="text-xs">
            Poster advertising for the Kulturgenerator in the city of Cologne.
            Photocredits: Ludwig Lederer
          </div>
        </div>
      </div>
      <div className="max-w-2xl md:text-lg">
        <p className="mb-6">
          The &#8220;kulturgenerator&#8221; is a generative redistribution
          machine, an experiment, and a virtual store that existed in the city
          of Cologne during the first year of the COVID pandemic. Contributions
          from artists and cultural workers were brought into the virtual space
          (a web shop) to increase the visibility of the scene in times of
          isolation and quarantine.
        </p>
        <p className="mb-6">
          The concept of the digital platform is based on a circular,
          round-based principle. Established artists and newcomers sell their
          work in a virtual gallery. They can decide if they want to contribute
          50 or 100 percent of their selling price to a &#8220;money
          pool&#8221;, that at the end of a round is distributed amongst all
          participants.
        </p>
        <p className="mb-6">
          I was part of the product team together with designers Ludwig Lederer
          and Katherina Gorodynska that developed the user interactions and the
          web page for the online gallery. We used gamification to make the
          gallery a delight to use. The key feature of the shop was a moving
          banner that prominently showed the current monetary value of the money
          pool that is share between all participants. As soon as an artwork was
          sold, micro animations visualized the increase of the account balances
          to represent the new state of the fund.
        </p>
        <p className="mb-6">
          Besides being part of the product team, I worked with Moritz Pflüger
          in implementing the front- and the backend of the online shop. We
          decided to build a shop system from scratch, as we did not find a
          solution that was tailored to our specific requirements.
        </p>
        <p className="mb-6">
          The platform is a collaboration between the Cultural Council of
          Cologne, Niehler Freiheit e.V., and the art center Wachsfabrik.
          Read&nbsp;
          <Link
            href="https://www.ksta.de/kultur/-kulturgenerator--wie-solidaritaet-unter-kunstschaffenden-funktionieren-kann-38201176?cb=1666700185340&"
            variant="underline"
          >
            this article
          </Link>
          &nbsp;to find out more about the project.
        </p>
      </div>
    </div>
  )
}

// Render layout per-page
Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
      <div className="text-center leading-tight mb-5">
        <Link
          href="/legal-notice"
          className="font-semibold text-gray-500 hover:text-gray-700"
        >
          Legal notice &<br className="md:hidden" /> data privacy
        </Link>
      </div>
    </Layout>
  )
}

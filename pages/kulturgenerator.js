import Link from 'next/link'
import Layout from '../components/layout'

export default function Home() {
  return (
    <div className="px-5 py-12">
      <Link href="/" className="inline-block leading-snug mb-20">
        <h1 className="font-bold">Milan Bargiel</h1>
        <span className="text-gray-500 mb-4">Product & web developer</span>
      </Link>
      <h2 className="text-2xl mb-12">
        Blueprint for a virtual art gallery in times of quarantine and isolation
      </h2>
      <p className="mb-6">
        The &#8220;kulturgenerator&#8221; is a generative redistribution
        machine, an experiment, and a virtual store that existed in the city of
        Cologne during the first year of the COVID pandemic. Contributions from
        artists and cultural workers were brought into the virtual space (a web
        shop) to increase the visibility of the scene in times of isolation and
        quarantine.
      </p>
      <p className="mb-6">
        The concept of the digital platform is based on a circular, round-based
        principle. Established artists and newcomers sell their work in a
        virtual gallery. They can decide if they want to contribute 50 or 100
        percent of their selling price to a &#8220;money pool&#8221;, that at
        the end of a round is distributed amongst all participants.
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
        Besides being part of the product team, I worked with Moritz Pflüger in
        implementing the front- and the backend of the online shop. We decided
        to build a shop system from scratch, as we did not find a solution that
        was tailored to our specific requirements.
      </p>
      <p className="mb-6">
        The platform is a collaboration between the Cultural Council of Cologne,
        Niehler Freiheit e.V., and the art center Wachsfabrik.
      </p>
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

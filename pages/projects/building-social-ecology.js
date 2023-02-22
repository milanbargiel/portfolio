import Image from '../../components/image'
import Header from '../../components/header'
import TextColumn from '../../components/text-column'
import Link from '../../components/link'
import Layout from '../../components/layout'
import Footer from '../../components/footer'

// Load Images
import bsePic1 from '../../public/buildingsocialecology-1.png'
import bsePic2 from '../../public/buildingsocialecology-2.png'
import bsePic3 from '../../public/buildingsocialecology-3.png'
import bsePic4 from '../../public/buildingsocialecology-4.png'
import bsePic5 from '../../public/buildingsocialecology-5.png'

export async function getStaticProps() {
  return { props: { isDark: true } }
}

export default function BuildingSocialEcology() {
  return (
    <Layout>
      <TextColumn>
        <Header />
        <h1 className="text-6xl mb-12">
          An archive for social-ecological design patterns
        </h1>
        {/* <p className="mb-4 text-gray-300 text-lg">
          Cities and buildings can be described through interacting, overlapping
          and mutually influencing patterns. Building Social Ecology is a
          research project from the University of Applied Sciences in Potsdam
          and Nova Cvernovka, a cultural center in Bratislava, that showcases
          best practices for sustainable buildings, inspired by the pattern
          language of architect Cristopher Alexander.
        </p>
        <p className="mb-4 text-gray-300 text-lg">
          The project is funded by the{' '}
          <Link
            href="https://www.dbu.de/123artikel39116_2430.html"
            className="text-gray-300 text-lg"
            variant="underline-white"
          >
            Deutsche Bundesstiftung Umwelt
          </Link>
          . I helped the team with designing the projects website. We worked
          together on on a new platform where they can publish and archive their
          research more easily.
        </p> */}
        <Link
          href="https://www.buildingsocialecology.org/"
          className="text-gray-300 text-lg"
          variant="underline-white"
        >
          www.buildingsocialecology.org <span>↗</span>
        </Link>
      </TextColumn>
      <div className="my-24">
        {/* A flex grid. Flex-basis 100 tells the elements take full row width
        Flex-1 tells the item to shrink in size if necessary */}
        <div className="md:flex md:flex-wrap md:flex-row md:gap-16">
          <div className="basis-full mb-8 md:mb-0 md:flex-1">
            <Image
              src={bsePic1}
              className="drop-shadow-sm border border-black rounded-lg"
              alt="Detail view of buildingsocialecology.org"
            />
          </div>
          <div className="basis-full mb-8 md:mb-0 md:flex-1">
            <Image
              src={bsePic2}
              alt="Moodboard"
              className="hidden md:block"
              caption="Moodboard to collect inspiration for the interface"
            />
          </div>
        </div>
        {/* Another flex row */}
        <div className="md:mt-16 md:flex md:flex-wrap md:flex-row md:gap-16">
          <div className="basis-full mb-8 md:mb-0 md:flex-1">
            <Image
              src={bsePic3}
              className="drop-shadow-sm border border-black rounded-lg"
              alt="Moodboard"
            />
          </div>
          <div className="basis-full mb-8 md:mb-0 md:flex-1">
            <Image
              src={bsePic4}
              className="drop-shadow-sm border border-black rounded-lg"
              alt="Moodboard"
            />
          </div>
          <div className="basis-full mb-8 md:mb-0 md:flex-1">
            <Image
              src={bsePic5}
              className="drop-shadow-sm border border-black rounded-lg"
              alt="Moodboard"
            />
          </div>
        </div>
      </div>
      <Footer variant="project" />
    </Layout>
  )
}

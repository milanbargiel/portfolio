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

export default function BuildingSocialEcology() {
  return (
    <Layout variant="light">
      <TextColumn>
        <Header />
        <h1 className="text-4xl mb-8">
          An archive of socio-ecological design patterns for sustainable
          construction
        </h1>
        <p className="mb-4 text-gray-700">
          Building Social Ecology showcases sustainable design patterns for
          architects, residents and city developers in Europe.
        </p>
        <p className="mb-4 text-gray-700">
          In this DBU-funded (Deutsche Bundesstiftung Umwelt) research project I
          helped a team from the University of Applied Sciences in Potsdam and a
          cultural center in Bratislava with designing the projects website. We
          worked together on on a new platform where they can publish and
          archive research more easily.
        </p>
        <p className="mb-4 text-gray-700">
          My process included conducting workshops with the project partners,
          collecting visual inspiration in a moodboard, building wireframes and
          designing the interface of the application in Figma.
        </p>
        <p className="mb-4 text-gray-700">
          For the implementation I developed a custom theme in WordPress.
        </p>
        <Link
          href="https://www.buildingsocialecology.org/"
          className="text-gray-700"
          variant="underline-dark"
        >
          www.buildingsocialecology.org <span>↗</span>
        </Link>
      </TextColumn>
      <div className="my-24">
        {/* A flex grid. Flex-basis 100 tells the elements take full row width
        Flex-1 tells the item to shrink in size if necessary */}
        <div className="md:flex md:flex-wrap md:flex-row md:gap-16">
          <div className="basis-full md:flex-1">
            <Image
              src={bsePic1}
              className="drop-shadow-xl"
              alt="Detail view of buildingsocialecology.org"
            />
          </div>
          <div className="basis-full md:flex-1">
            <Image src={bsePic2} alt="Moodboard" />
          </div>
        </div>
        {/* Another flex row */}
        <div className="mt-16 md:flex md:flex-wrap md:flex-row md:gap-16">
          <div className="basis-full md:flex-1">
            <Image src={bsePic3} className="drop-shadow-xl" alt="Moodboard" />
          </div>
          <div className="basis-full md:flex-1">
            <Image src={bsePic4} className="drop-shadow-xl" alt="Moodboard" />
          </div>
          <div className="basis-full md:flex-1">
            <Image src={bsePic5} className="drop-shadow-xl" alt="Moodboard" />
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  )
}

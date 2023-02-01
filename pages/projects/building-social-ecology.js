import Header from '../../components/header'
import TextColumn from '../../components/text-column'
import Link from '../../components/link'

export default function BuildingSocialEcology() {
  return (
    <>
      <TextColumn variant="project">
        <Header />
        <h1 className="text-3xl mb-8">
          A living archive of socio-ecological design patterns
        </h1>
        <p className="mb-4 text-gray-300 text-sm">
          Building Social Ecology showcases sustainable design patterns for
          architects, residents and city developers in Europe.
        </p>
        <p className="mb-4 text-gray-300 text-sm">
          In this DBU-funded (Deutsche Bundesstiftung Umwelt) research project I
          helped a team from the University of Applied Sciences in Potsdam and a
          cultural center in Bratislava with designing the projects website. We
          worked together on on a new platform where they can publish and
          archive research more easily.
        </p>
        <p className="mb-4 text-gray-300 text-sm">
          My process included conducting workshops with the project partners,
          collecting visual inspiration in a moodboard, building wireframes and
          designing the interface of the application in Figma.
        </p>
        <p className="mb-4 text-gray-300 text-sm">
          For the implementation I developed a custom theme in WordPress.
        </p>
        <Link
          href="https://www.buildingsocialecology.org/"
          className="text-gray-300 text-sm"
          variant="underline-white"
        >
          www.buildingsocialecology.org
        </Link>
      </TextColumn>
    </>
  )
}

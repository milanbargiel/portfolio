import Project from '../components/project'
import bsePic from '../public/buildingsocialecology.png'
import kulturgeneratorPic from '../public/kulturgenerator/kulturgenerator.png'
import commentsPic from '../public/zon-browser.png'
import Link from '../components/link'

export default function ProjectList() {
  return (
    <div>
      <div className="my-24 text-black md:flex md:flex-wrap">
        <Project
          roles={['Product Owner', 'User Experience']}
          title="Reimagining a digital tool for the moderation of comments at ZEIT ONLINE"
        >
          <p className="mb-4">
            Comment sections are an essential feature of online news media{' '}
            <Link href="https://www.zeit.de/" variant="underline-dark">
              www.zeit.de
            </Link>
            . They allow people to exchange ideas, engage in discussions and
            express their thoughts about what is going on in the world.
          </p>
          <p className="mb-4">
            To keep comment sections a safe space, the professional team of
            moderators at ZEIT ONLINE needed a new tool that reduced the
            complexity of former workflows and provides a seamless moderation
            experience.
          </p>
          <p className="mb-4">
            In this project, I took the role of a product owner together with
            the former head of product at ZEIT ONLINE Michael Schultheiss. By
            conducting workshops with moderators, prototyping and continuous
            user testing, we were able to give shape to the tool while actually
            building it.
          </p>
          <div className="mt-8">
            <Link
              href="https://blog.zeit.de/dev/design-thinking/"
              variant="underline-dark"
              className="font-semibold"
            >
              View case
            </Link>
          </div>
        </Project>
        <Project
          roles={['Interface Design', 'Web Development']}
          title="An archive of socio-ecological design patterns for architects, city developers and residents"
          image={bsePic}
          imageAlt="Screenshot of buildingsocialecology.org"
          imageStyles="rounded-md drop-shadow-sm border border-gray-700 hover:cursor-pointer"
          imageLink="projects/building-social-ecology"
          color="#07D070"
        ></Project>
        <Project
          roles={['Technical Product Owner']}
          title="A database that stores more than 10.000 comments a day"
        >
          <p className="mb-4">
            In 2019, news media ZEIT ONLINE replaced its legacy comments
            database with a lightweight, flexible, and scalable system that is
            orchestrated in the cloud.
          </p>
          <p className="mb-4">
            As a technical product owner my role was to represent the
            perspective of users, moderators, and the newsroom in the
            development of the database. Together with my colleague{' '}
            <Link
              href="https://www.zeit.de/autoren/S/Thomas_Strothjohann/index"
              variant="underline-dark"
            >
              Thomas Strothjohann
            </Link>
            , I set up an agile practice and defined the qualities of the
            database in user stories.
          </p>
          <p className="mb-4">
            Reconnecting a service deeply intertwined with the basic functioning
            of the news web page was an inspiring challenge.
          </p>
        </Project>
        <Project
          roles={['Co-Founder']}
          title="A solidaric art gallery in times of quarantine and isolation"
          image={kulturgeneratorPic}
          imageAlt="Screenshot from the kulturgenerator web interface"
          imageStyles="my-4 ml-2 w-2/3 -rotate-6 rounded-md md:w-3/5 2xl:w-4/5 drop-shadow-sm"
          imageLink="/projects/kulturgenerator"
          color="#FFEFE2"
        ></Project>
      </div>
    </div>
  )
}

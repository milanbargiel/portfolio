import Project from '../components/project'
import bsePic from '../public/buildingsocialecology.png'
import kulturgeneratorPic from '../public/kulturgenerator.png'
import Link from '../components/link'

export default function ProjectList() {
  return (
    <div>
      <div className="mb-24 text-black md:flex md:flex-wrap">
        <Project
          roles={['Product Owner']}
          title="A lightweight, scalable database that stores more than 10.000 comments a day"
        >
          <p className="mb-4">
            In 2020, the news website ZEIT ONLINE replaced its Drupal-based
            comments database with a lightweight, flexible and scalable system
            that stores more than 10.000 new comments each day.
          </p>
          <p className="mb-4">
            As a product owner I set up an agile development process and defined
            the new database’s qualities in user stories.
          </p>
          <p className="mb-4">
            The challenge was to exchange databases during live operations.
            Working in the invisible and reconnecting a service deeply
            intertwined with the basic functioning of the news web page was an
            inspiring challenge.
          </p>
        </Project>
        <Project
          roles={['Design', 'Development']}
          title="An archive of socio-ecological design patterns for architects, city developers and residents"
          image={bsePic}
          imageAlt="Screenshot of buildingsocialecology.org"
          imageStyles="rounded-md drop-shadow-sm border border-gray-700"
          color="#07D070"
        ></Project>
        <Project
          roles={['Product Owner', 'Usability Engineering']}
          title="A digital tool for moderation at ZEIT ONLINE"
        >
          <p className="mb-4">
            Comment sections are an essential feature of the online news media
            ZEIT ONLINE. They allow readers to exchange ideas, engage in
            discussions and react to stories. To help the team of professional
            moderators to do their job and keep comment sections a safe space, a
            new tool was needed that reduced the complexity of former workflows.
          </p>
          <p className="mb-4">
            The goal was to completely rebuild the application so that
            moderators have a delightful tool to work with. Our team aimed at
            building a solution that allows for a seamless moderation
            experience. It was a fascinating project and I learned a lot about
            agile development.
          </p>
          <div className="mt-4">
            <Link
              href="https://blog.zeit.de/dev/design-thinking/"
              variant="underline"
              className="inline-block text-sm"
            >
              View case
            </Link>
          </div>
        </Project>
        <Project
          roles={['Service Design', 'Development']}
          title="Kulturgenerator: A solidaric art gallery in times of quarantine and isolation"
          image={kulturgeneratorPic}
          imageAlt="Screenshot from the kulturgenerator web interface"
          imageStyles="my-4 ml-2 w-2/3 -rotate-6 rounded-md md:w-4/5 drop-shadow-sm"
          color="#FFEFE2"
        ></Project>
      </div>
    </div>
  )
}

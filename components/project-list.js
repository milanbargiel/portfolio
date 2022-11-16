import Project from '../components/project'
import bsePic from '../public/buildingsocialecology.png'
import kulturgeneratorPic from '../public/kulturgenerator.png'

export default function ProjectList() {
  return (
    <div>
      <div className="mb-24 md:flex md:flex-wrap">
        <Project
          roles={['Editorial Product Development']}
          title="A lightweight, scalable database that stores more than 10.000 comments a day"
        >
          In 2020, the news website ZEIT ONLINE replaced its Drupal-based
          comments database with a lightweight, flexible and scalable system
          that stores more than 10.000 new comments each day. As a product
          owner, I was part of the team that set up an agile development process
          and defined the new database’s qualities in user stories. Thanks to a
          sophisticated sync between the old and the new database we were able
          to switch systems without hardly anyone noticing.
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
          roles={['Editorial Product Development', 'Prototyping']}
          title="A digital tool for moderation at ZEIT ONLINE"
        >
          Comment sections are an essential feature of the online news media
          ZEIT ONLINE. They allow readers to exchange ideas, engage in
          discussions and react to stories. To help the team of professional
          moderators to do their job and keep comment sections a safe space, a
          new tool was needed that reduced the complexity of former workflows.
          In this project I took the role of a product owner. A high-fidelity
          prototype helped us to test our assumptions before actually
          implementing the solution.
        </Project>
        <Project
          roles={['Product Design', 'Development']}
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

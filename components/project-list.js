import Project from '../components/project'
import commentsPic from '../public/comments-database.svg'
import bsePic from '../public/buildingsocialecology.png'
import zocaPic from '../public/zoca.png'
import kulturgeneratorPic from '../public/kulturgenerator-cologne-street.jpg'

export default function ProjectList() {
  return (
    <div className="px-2 mb-24 md:px-0">
      <Project
        roles={['Editorial Product Development']}
        title="A lightweight, scalable database that stores more than 10.000 comments each day"
        image={commentsPic}
        imageAlt="Comments database"
        imageStyles="w-20 ml-16 md:w-24 md:ml-0 md:mr-12 rotate-1 drop-shadow-apricot"
        linkText="View case"
      >
        In 2020, the news website ZEIT ONLINE replaced its Drupal-based comments
        database with a lightweight, flexible and scalable system that stores
        more than 10.000 new comments each day. As a product owner, I set up an
        agile development process and defined the new database’s qualities in
        user stories.
      </Project>
      <Project
        roles={['Design', 'Development']}
        title="An archive of socio-ecological design patterns for architects, city developers and residents"
        image={bsePic}
        imageAlt="Screenshot of buildingsocialecology.org"
        imageStyles="rounded-md drop-shadow-apricot"
        variant="wide-image"
        linkText="Visit website"
      >
        A team of researchers from the University of Applied Sciences Potsdam in
        collaboration with the cultural center Nová Cvernovka in Bratislava
        investigated design patterns for socio-ecological buildings in Europe. I
        worked with them to build a web page that showcases key findings and
        that is easily maintainable.
      </Project>
      <Project
        roles={['Editorial Product Development', 'Prototyping']}
        title="A digital tool for the moderation of comments at ZEIT ONLINE"
        image={zocaPic}
        imageAlt="Example comments sections from ZEIT ONLINE"
        imageStyles="rounded-md w-3/4 rotate-1 drop-shadow-apricot"
        linkText="View case"
        link="https://blog.zeit.de/dev/design-thinking/"
      >
        Comments are an essential feature of the online news media ZEIT ONLINE.
        They allow readers to exchange ideas, engage in discussions and react to
        stories. To help the team of professional moderators to keep comment
        sections a safe space, a new tool was designed that reduced the
        complexity of former workflows.
      </Project>
      <Project
        roles={['Product Design', 'Development']}
        title="Blueprint for a solidaric art gallery in times of quarantine and isolation"
        image={kulturgeneratorPic}
        imageAlt="Poster from the online art gallery in the streets of Cologne, Germany"
        imageStyles="ml-2 w-2/3 -rotate-6 rounded-md md:w-4/5 drop-shadow-apricot"
        linkText="View case"
      >
        The &#8220;kulturgenerator&#8221; was a virtual store that existed in
        the city of Cologne during the first year of the COVID pandemic. It was
        a platform that allowed artists to collaboratively feed a money pool
        that at the end of a round was distributed evenly amongst all
        participants. I was part of the product team that ideated the concept of
        the online gallery and that implemented the web shop from scratch.
      </Project>
    </div>
  )
}

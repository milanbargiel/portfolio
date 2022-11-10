import Project from '../components/project'
import commentsPic from '../public/comments-database.svg'
import bsePic from '../public/buildingsocialecology.png'
import zocaPic from '../public/zoca.png'
import kulturgeneratorPic from '../public/kulturgenerator-cologne-street.jpg'

export default function ProjectList() {
  return (
    <div className="px-2 md:p-0">
      <Project
        roles={['Editorial Product Development']}
        title="A lightweight, scalable database that stores more than 10.000 comments each day"
        image={commentsPic}
        imageAlt="Comments database"
        imageStyles="w-20 ml-12 drop-shadow-sm md:w-24 md:pt-12 md:ml-4"
      >
        In 2020, the news website ZEIT ONLINE replaced its Drupal-based comments
        database with a lightweight, flexible and scalable system that stores
        more than 10.000 new comments each day. As a product owner, I set up an
        agile development process and defined the new database’s qualities in
        user stories.
      </Project>
      <Project
        roles={['Interface Design', 'Web Development']}
        title="Sustainable design patterns for architects, project developers and residents"
        image={bsePic}
        imageAlt="Screenshot of buildingsocialecology.org"
      >
        A team of researchers from the University of Applied Sciences Potsdam in
        collaboration with the cultural center Nová Cvernovka in Bratislava
        investigated design patterns for socio-ecological buildings in Europe. I
        worked with them to build a web page that showcases key findings and
        that is easily maintainable.
      </Project>
      <Project
        roles={['Editorial Product Development', 'Usability Engineering']}
        title="A digital tool for the moderation of comments at ZEIT ONLINE"
        image={zocaPic}
        imageAlt="Example comments sections from ZEIT ONLINE"
        imageStyles="w-3/5 rounded-md border border-gray-400"
      >
        Comments are an essential feature of the German online news platform.
        They allow readers to exchange ideas, engage in discussion and react to
        stories. To help the team of moderators to keep comment sections a safe
        space, a new tool was designed that reduced the complexity of former
        workflows.
      </Project>
      <Project
        roles={['Product Design', 'Web Development']}
        title="Blueprint for a solidaric art gallery in times of quarantine and isolation"
        image={kulturgeneratorPic}
        imageAlt="Poster from the online art gallery in the streets of Cologne, Germany"
        imageStyles="ml-2 w-1/2 -rotate-6 rounded-md md:w-2/3"
      >
        The &#8220;kulturgenerator&#8221; was a virtual store that existed in
        the city of Cologne during the first year of the COVID pandemic. It was
        a platform that allowed artists to collaboratively feed a money pool
        that at the end of a round was distributed evenly amongst all
        participants. I was part of the product team that developed the concept
        of the web shop and the online gallery.
      </Project>
    </div>
  )
}

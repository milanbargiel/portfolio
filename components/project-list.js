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
        title="A lightweight, scalable database that stores more than 10.000 comments a day"
        image={commentsPic}
        imageAlt="Comments database"
        imageStyles="hidden md:inline-block md:w-28 md:ml-0 md:mr-12 md:mt-8 rotate-1 drop-shadow-apricot"
      >
        In 2020, the news website ZEIT ONLINE replaced its Drupal-based comments
        database with a scalable system that stores more than 10.000 new
        comments a day. As a product owner, I managed an agile development
        process and defined the new database’s qualities in user stories.
        <br />
        <br />
        Thanks to a sync between the old database and the new one, we were able
        to switch systems without hardly anyone noticing. Working in the
        invisible and reconnecting a technology deeply intertwined within the
        basic functioning of ZEIT ONLINE was an inspiring challenge.
      </Project>
      <Project
        roles={['Design', 'Development']}
        title="An archive of socio-ecological design patterns for architects, city developers and residents"
        image={bsePic}
        imageAlt="Screenshot of buildingsocialecology.org"
        imageStyles="rounded-md drop-shadow-apricot"
        variant="wide-image"
        linkText="Visit website"
        href="https://www.buildingsocialecology.org/"
      >
        A team of researchers from the University of Applied Sciences Potsdam in
        collaboration with the cultural center Nová Cvernovka in Bratislava
        investigated design patterns for socio-ecological buildings in Europe. I
        worked with them to build a web page that showcases best practices for
        the building sector and that is easily maintainable.
      </Project>
      <Project
        roles={['Editorial Product Development', 'Prototyping']}
        title="A digital tool for the moderation of comments at ZEIT ONLINE"
        image={zocaPic}
        imageAlt="Example comments sections from ZEIT ONLINE"
        imageStyles="rounded-md w-3/4 rotate-1 drop-shadow-apricot"
        linkText="View case"
        href="https://blog.zeit.de/dev/design-thinking/"
      >
        Comment sections are an essential feature of the online news media ZEIT
        ONLINE. They allow readers to exchange ideas, engage in discussions and
        react to stories. To help the team of professional moderators to do
        their job and keep comment sections a safe space, a new tool was needed
        that reduced the complexity of former workflows. In this project I took
        the role of a product owner.
      </Project>
      <Project
        roles={['Product Design', 'Development']}
        title="Blueprint for a solidaric art gallery in times of quarantine and isolation"
        image={kulturgeneratorPic}
        imageAlt="Poster from the online art gallery in the streets of Cologne, Germany"
        imageStyles="ml-2 w-2/3 -rotate-6 rounded-md md:w-4/5 drop-shadow-apricot"
        linkText="Read newspaper article"
        href="https://www.ksta.de/kultur-medien/kulturgenerator-online-galerie-soll-kuenstlern-in-der-krise-helfen-157774"
      >
        The &#8220;kulturgenerator&#8221; was a virtual store that existed in
        the city of Cologne during the first year of the COVID pandemic from
        2020 to 2021. The digital platform allowed artists to collaboratively
        sell their work and feed a solidaric money pool that at the end of each
        round was distributed evenly amongst all participants. <br /> <br />I
        was part of the design team that developed the concept of the gallery
        and that implemented the web shop from scratch.
      </Project>
    </div>
  )
}

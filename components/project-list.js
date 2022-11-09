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
        description="In 2020, the news website ZEIT ONLINE replaced its Drupal-based comments database with a lightweight, flexible and scalable system that stores more than 10.000 new comments each day. As a product owner, I set up an agile development process and defined the new database’s qualities in user stories."
        wideTextBox={true}
        image={commentsPic}
        imageAlt="Comments database"
        imageStyles="w-20 ml-12 drop-shadow-sm md:w-24 md:pt-12"
      ></Project>
      <Project
        roles={['Interface Design', 'Web Development']}
        title="An archive of socio-ecological design patterns for architects, city developers and residents"
        description="Building Social Ecology showcases design patterns for socio-ecological buildings in Europe and shall serves as a source of inspiration for architects, project developers and residents."
        image={bsePic}
        imageAlt="Screenshot of buildingsocialecology.org"
      ></Project>
      <Project
        roles={['Editorial Product Development', 'Usability Engineering']}
        title="A digital tool for the moderation of comments at ZEIT ONLINE"
        description="Comments are a crucial feature of the new web page. They enrich the discussion, are often complex and allow readers to engage with stories. The goal was to completely rebuild the old interface so that moderators have a delightful tool to work with."
        image={zocaPic}
        imageAlt="Example comments sections from ZEIT ONLINE"
        imageStyles="w-3/5 rounded-md border border-gray-400"
      ></Project>
      <Project
        roles={['Product Design', 'Web Development']}
        title="Blueprint for a virtual art gallery in times of quarantine and isolation"
        description="The &#8220;kulturgenerator&#8221; is a generative redistribution machine, an experiment, and a virtual store that existed in the city of Cologne during the first year of the COVID pandemic."
        wideTextBox={true}
        image={kulturgeneratorPic}
        imageAlt="Poster from the online art gallery in the streets of Cologne, Germany"
        imageStyles="ml-2 w-1/2 -rotate-6 rounded-md"
      ></Project>
    </div>
  )
}

import Intro from '../components/intro'
import Project from '../components/project'

export default function Home() {
  return (
    <div>
      <Intro></Intro>
      <div className="px-2">
        <Project
          roles="Editorial Product Development"
          title="A lightweight, scalable database that stores more than 10.000 comments each day"
          description="In 2020, the news website ZEIT ONLINE replaced its Drupal-based comments database with a lightweight, flexible and scalable system that stores more than 10.000 new comments each day. As a product owner, I set up an agile development process and defined the new database’s qualities in user stories."
          imageURL="/comments-database.svg"
        ></Project>
      </div>
    </div>
  )
}

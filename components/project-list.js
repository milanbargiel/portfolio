import Project from '../components/project'
import bsePic from '../public/buildingsocialecology.png'
import kulturgeneratorPic from '../public/kulturgenerator.png'
import styles from '../styles/Slider.module.css'

export default function ProjectList() {
  return (
    <div className="md:flex md:mb-36 md:h-[30rem] md:max-w-4xl md:mx-auto">
      <div className="mx-4 mb-24 md:flex md:m-0 md:mr-10 md:w-1/2 md:relative md:h-full">
        <Project
          roles={['Editorial Product Development']}
          title="A lightweight, scalable database that stores more than 10.000 comments a day"
          className={styles.slide}
        >
          In 2020, the news website ZEIT ONLINE replaced its Drupal-based
          comments database with a lightweight, flexible and scalable system
          that stores more than 10.000 new comments each day. As a product
          owner, I set up an agile development process and defined the new
          database’s qualities in user stories.
        </Project>
        <Project
          roles={['Product Design', 'Development']}
          title="Kulturgenerator: A solidaric art gallery in times of quarantine and isolation"
          image={kulturgeneratorPic}
          imageAlt="Screenshot from the kulturgenerator web interface"
          imageStyles="my-4 ml-2 w-2/3 -rotate-6 rounded-md md:w-4/5 drop-shadow-sm"
          color="#FFEFE2"
          className={styles.slide}
        ></Project>
        <Project
          roles={['Design', 'Development']}
          title="An archive of socio-ecological design patterns for architects, city developers and residents"
          image={bsePic}
          imageAlt="Screenshot of buildingsocialecology.org"
          imageStyles="rounded-md drop-shadow-sm border border-gray-700"
          color="#07D070"
          className={styles.slide}
        ></Project>
        <Project
          roles={['Editorial Product Development', 'Prototyping']}
          title="A digital tool for the moderation of comments at ZEIT ONLINE"
          className={styles.slide}
        >
          Comment sections are an essential feature of the online news media
          ZEIT ONLINE. They allow readers to exchange ideas, engage in
          discussions and react to stories. To help the team of professional
          moderators to do their job and keep comment sections a safe space, a
          new tool was needed that reduced the complexity of former workflows.
          In this project I took the role of a product owner.
        </Project>
      </div>
      {/* Desktop navigation */}
      <div className="hidden md:flex md:ml-10 md:w-1/2">
        <ul className="self-end">
          <li className={`${styles.project} ${styles.projectActive} mb-7`}>
            <button className="font-semibold text-xl text-left">
              Comments database
            </button>
          </li>
          <li className={`${styles.project} mb-7`}>
            <button className="font-semibold text-xl text-left">
              Kulturgenerator
            </button>
          </li>
          <li className={`${styles.project} mb-7`}>
            <button className="font-semibold text-xl text-left">
              A digital tool for the moderation of comments at ZEIT ONLINE
            </button>
          </li>
          <li className={`${styles.project} mb-7`}>
            <button className="font-semibold text-xl text-left">
              Building Social Ecology
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}

import Link from './link'

export default function About() {
  return (
    <div className="md:text-lg">
      <div className="mb-12 text-gray-300">
        <h2 className="font-semibold mb-4 text-white">About</h2>Curious problem
        solver with a specialization in web technologies, research and UX
        design. Works at the intersection between engineering and design. I
        speak German, English, Spanish and some Portuguese and Dutch. Former
        editorial product owner at&nbsp;
        <Link
          variant="underline-white"
          href="https://www.zeit.de/autoren/B/Milan_Bargiel/index"
        >
          ZEIT ONLINE
        </Link>
        . Find some selected projects below.
      </div>
      <h2 className="font-semibold mb-4">Contact</h2>
      <div className="text-gray-500 md:basis-2/4">Email</div>
      <Link
        href="mailto:milanbargiel@pm.me"
        className="inline-block text-gray-300 mb-4"
        variant="underline-white"
      >
        milanbargiel@pm.me
      </Link>
      <div className="text-gray-500 md:basis-2/4">LinkedIn</div>
      <Link
        href="https://www.linkedin.com/in/milanbargiel"
        className="inline-block text-gray-300"
        variant="underline-white"
      >
        @milanbargiel
      </Link>
    </div>
  )
}

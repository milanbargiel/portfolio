import Link from '../components/link'

export default function Intro() {
  return (
    <div className="my-12 md:text-lg md:mx-8 md:mb-20 md:w-2/3 lg:w-3/5 xl:w-1/2 2xl:w-2/5">
      <Link href="/">
        <h1 className="font-semibold">Milan Bargiel</h1>
      </Link>
      <div className="text-gray-700 mb-24">Digital Product & Web Developer</div>
      <div className="mb-12">
        <h2 className="font-semibold mb-4">About</h2>I am a Product and Web
        Developer living and working in Berlin, Germany. Former Editorial
        Product Owner at&nbsp;
        <Link
          variant="underline"
          href="https://www.zeit.de/autoren/B/Milan_Bargiel/indexhttps://www.zeit.de/autoren/B/Milan_Bargiel/index"
        >
          ZEIT ONLINE
        </Link>
        . My professional experience spans disciplines across Product,
        Frontend-Engineering, and User Experience. Find some selected projects
        below.
      </div>
      <h2 className="font-semibold mb-4">Contact</h2>
      <div className="text-gray-500 md:basis-2/4">Email</div>
      <Link
        href="mailto:mail@milanbargiel.com"
        className="inline-block mb-4"
        variant="underline"
      >
        milanbargiel@pm.me
      </Link>
      <div className="text-gray-500 md:basis-2/4">LinkedIn</div>
      <Link
        href="https://www.linkedin.com/in/milanbargiel"
        className="inline-block mb-4"
        variant="underline"
      >
        @milanbargiel
      </Link>
    </div>
  )
}

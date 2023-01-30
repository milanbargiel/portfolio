import Link from '../components/link'

export default function Intro() {
  return (
    <div className="my-12 md:text-lg md:mx-8 md:mb-20 md:w-2/3 lg:w-3/5 xl:w-1/2 2xl:w-2/5">
      <Link href="/">
        <h1 className="font-semibold">Milan Bargiel</h1>
      </Link>
      <div className="text-gray-500 mb-24">Digital Product & Web Developer</div>
      <div className="mb-12 text-gray-300">
        <h2 className="font-semibold mb-4 text-white">About</h2>I am a product
        owner, web developer and designer living and working in Berlin, Germany.
        Former editorial product developer at&nbsp;
        <Link
          variant="underline-white"
          href="https://www.zeit.de/autoren/B/Milan_Bargiel/indexhttps://www.zeit.de/autoren/B/Milan_Bargiel/index"
        >
          ZEIT ONLINE
        </Link>
        . I am interested in UX design, research and building digital things.
        Find some selected projects below.
      </div>
      <h2 className="font-semibold mb-4">Contact</h2>
      <div className="text-gray-500 md:basis-2/4">Email</div>
      <Link
        href="mailto:mail@milanbargiel.com"
        className="inline-block text-gray-300 mb-4"
        variant="underline-white"
      >
        milanbargiel@pm.me
      </Link>
      <div className="text-gray-500 md:basis-2/4">LinkedIn</div>
      <Link
        href="https://www.linkedin.com/in/milanbargiel"
        className="inline-block text-gray-300 mb-4"
        variant="underline-white"
      >
        @milanbargiel
      </Link>
    </div>
  )
}

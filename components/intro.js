import Link from 'next/link'

export default function Intro() {
  return (
    <div className="mx-6 my-12 md:mb-20 md:mx-8 md:w-2/3">
      <Link href="/" className="inline-block mb-20">
        <h1 className="font-bold">Milan Bargiel</h1>
        <span className="text-gray-500 mb-4">Product & web developer</span>
      </Link>
      <div className="mb-14">
        <h2 className="font-bold mb-4">About</h2>I am a product designer and web
        developer living and working in Berlin, Germany. Former editorial
        product developer at ZEIT ONLINE I am currently looking for a job. I am
        interested in UX design, research and building digital things. Find some
        selected projects below.
      </div>
      <h2 className="font-bold mb-4">Contact</h2>
      <div className="flex flex-col md:flex-row md:flex-wrap">
        <div className="text-gray-500 md:basis-1/4">Email</div>
        <div className="md:basis-3/4">
          <a
            className="mb-4 inline-block hover:text-purple-700 md:m-0 md:after:basis-1/3 after:content-['']"
            href="mailto:mail@milanbargiel.com"
          >
            milanbargiel@pm.me
          </a>
        </div>
        <div className="text-gray-500 md:basis-1/4">LinkedIn</div>
        <div className="md:basis-3/4">
          <a
            className="hover:text-purple-700"
            target="_blank"
            href="https://www.linkedin.com/in/milanbargiel"
            rel="noopener noreferrer"
          >
            @milanbargiel
          </a>
        </div>
      </div>
    </div>
  )
}

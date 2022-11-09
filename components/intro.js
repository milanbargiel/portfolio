import Link from 'next/link'

export default function Intro() {
  return (
    <div className="px-6 py-12">
      <Link href="/" className="inline-block font-bold mb-20">
        <h1>Milan Bargiel</h1>
        <span className="text-gray-500 mb-4">Product & web developer</span>
      </Link>
      <div className="mb-14">
        <h2 className="font-bold mb-4">About</h2>I am a product designer and web
        developer living and working in Berlin, Germany. Former editorial
        product developer at ZEIT ONLINE I am currently looking for a job. I am
        interested in UX design, research and building digital things. Find some
        selected projects below.
      </div>
      <div>
        <h2 className="font-bold mb-4">Contact</h2>
        <div className="mb-4">
          <span className="text-gray-500">Email</span>
          <br />
          <a
            className="underline hover:text-pharlap-700"
            href="mailto:mail@milanbargiel.com"
          >
            milanbargiel@pm.me
          </a>
        </div>
        <div>
          <span className="text-gray-500">LinkedIn</span>
          <br />
          <a
            className="underline hover:text-pharlap-700"
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

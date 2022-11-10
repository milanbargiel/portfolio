import Link from 'next/link'

export default function Intro() {
  return (
    <div>
      <nav className="container nav mx-auto py-5 px-7 flex-1">
        <ul className="flex gap-12 justify-end font-bold">
          <li className="text-purple-500 hover:text-purple-700">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/milan-bargiel-9946b0226/"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li className="text-purple-500 hover:text-purple-700">
            <a
              target="_blank"
              href="https://github.com/milanbargiel"
              rel="noreferrer"
            >
              github
            </a>
          </li>
        </ul>
      </nav>
      <div class="container mx-auto max-w-2xl text-center text-3xl pt-12 pb-20 px-3 md:p-20">
        Hello, my name is Milan Bargiel. <br class="hidden md:inline" />I am a
        product owner and creative technologist based in Berlin. Find some
        selected projects below. I am interested in UX design, research and
        building digital things. For inquiries write an e-mail to:{' '}
        <a
          class="underline hover:text-pharlap-700"
          href="mailto:mail@milanbargiel.com"
        >
          milanbargiel@pm.me
        </a>
      </div>
    </div>
  )
}

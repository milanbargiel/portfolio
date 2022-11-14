export default function Intro() {
  return (
    <div className="mx-auto max-w-2xl text-2xl leading-snug font-medium pt-12 pb-20 px-3 md:text-3xl md:text-center md:pt-20 md:pb-32 md:px-16">
      Hi, my name is Milan Bargiel. <br className="hidden md:inline" />I am a
      product designer and web developer living and working in Berlin, former
      editorial product developer at&nbsp;
      <a
        href="https://www.zeit.de/autoren/B/Milan_Bargiel/index"
        target="_blank"
        rel="noreferrer"
        className="underline underline-offset-4 decoration-1 decoration-gray-700 hover:decoration-2 hover:transition-all hover:duration-150"
      >
        ZEIT ONLINE
      </a>
      . I am interested in UX design, research and building digital things. Find
      some selected projects below.
      <span className="hidden md:inline">
        {' '}
        For inquiries contact:&nbsp;
        <br />
        <a
          className="underline underline-offset-4 decoration-1 decoration-gray-700 hover:decoration-2 hover:transition-all hover:duration-150"
          href="mailto:mail@milanbargiel.com"
        >
          milanbargiel@pm.me
        </a>{' '}
      </span>
    </div>
  )
}

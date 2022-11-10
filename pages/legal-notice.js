import FooterButton from '../components/footer-button'

export default function LegalNotice() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="text-xl font-medium container mx-auto max-w-2xl text-center flex-1">
        <div className="py-12 px-3 md:p-20">
          <p className="mb-5">
            Milan Bargiel
            <br />
            Hauptstraße 36
            <br />
            10827 Berlin
          </p>
          <a
            href="mailto:milanbargiel@pm.me"
            className="underline mb-5 inline-block hover:text-purple-700"
          >
            milanbargiel@pm.me
          </a>
          <p className="mb-5">
            Data Protection Policy (GDPR)
            <br />
            This website does not collect, store or process Personally
            Identifiable Information (PII). This website does not require the
            use of cookies.
          </p>
          <p className="mb-5">
            Third Party Inclusion
            <br />
            This website is hosted by Github using Github Pages. The Github
            Global Privacy Practices are available&nbsp;
            <a
              href="https://docs.github.com/en/github/site-policy/global-privacy-practices"
              target="_blank"
              className="underline hover:text-pharlap-700"
              rel="noreferrer"
            >
              here
            </a>
            .
          </p>
        </div>
      </div>
      <FooterButton href="/">
        Return to
        <br /> homepage
      </FooterButton>
    </div>
  )
}

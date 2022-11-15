import Link from '../components/link'
import Layout from '../components/layout'

export default function LegalNotice() {
  return (
    <div className="py-12 px-4 text-lg font-semibold leading-snug container mx-auto max-w-2xl text-center flex-1 md:py-24">
      <p className="mb-6">
        Milan Bargiel
        <br />
        Hauptstraße 36
        <br />
        10827 Berlin
      </p>
      <Link
        href="mailto:milanbargiel@pm.me"
        variant="underline"
        className="mb-6 inline-block"
      >
        milanbargiel@pm.me
      </Link>
      <p className="mb-6">
        Data Protection Policy (GDPR)
        <br />
        This website does not collect, store or process Personally Identifiable
        Information (PII). This website does not require the use of cookies.
      </p>
      <p className="mb-6">
        Third Party Inclusion
        <br />
        This website is hosted by Github using Github Pages. The Github Global
        Privacy Practices are available&nbsp;
        <Link
          href="https://docs.github.com/en/github/site-policy/global-privacy-practices"
          variant="underline"
        >
          here
        </Link>
        .
      </p>
    </div>
  )
}

// Render layout per-page
LegalNotice.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
      <div className="text-center leading-tight mb-6">
        <Link
          href="/"
          className="font-semibold text-purple-500 hover:text-purple-700 md:text-sm"
        >
          Return to <br className="md:hidden" />
          homepage
        </Link>
      </div>
    </Layout>
  )
}

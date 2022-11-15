import Link from 'next/link'
import Layout from '../components/layout'

export default function LegalNotice() {
  return (
    <div className="text-lg font-semibold leading-snug container mx-auto max-w-2xl text-center flex-1">
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
          className="underline underline-offset-2 mb-5 inline-block decoration-1 decoration-gray-700 hover:decoration-2 hover:transition-all hover:duration-150"
        >
          milanbargiel@pm.me
        </a>
        <p className="mb-5">
          Data Protection Policy (GDPR)
          <br />
          This website does not collect, store or process Personally
          Identifiable Information (PII). This website does not require the use
          of cookies.
        </p>
        <p className="mb-5">
          Third Party Inclusion
          <br />
          This website is hosted by Github using Github Pages. The Github Global
          Privacy Practices are available&nbsp;
          <a
            href="https://docs.github.com/en/github/site-policy/global-privacy-practices"
            target="_blank"
            className="underline underline-offset-2 decoration-1 decoration-gray-700 hover:decoration-2 hover:transition-all hover:duration-150"
            rel="noreferrer"
          >
            here
          </a>
          .
        </p>
      </div>
    </div>
  )
}

// Render layout per-page
LegalNotice.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
      <div className="text-center leading-tight mb-5">
        <Link
          href="/"
          className="font-semibold text-purple-500 hover:text-purple-700"
        >
          Return to <br className="md:hidden" />
          homepage
        </Link>
      </div>
    </Layout>
  )
}

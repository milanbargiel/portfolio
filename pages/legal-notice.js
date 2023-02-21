import Link from '../components/link'
import Layout from '../components/layout'
import Footer from '../components/footer'

export async function getStaticProps() {
  return { props: { isDark: true } }
}

export default function LegalNotice() {
  return (
    <Layout>
      <div className="py-12 px-4 text-lg font-semibold text-gray-200 leading-snug container mx-auto max-w-2xl text-center flex-1 md:py-18 2xl:py-24 md:text-xl">
        <p className="mb-6">
          Milan Bargiel
          <br />
          Product & Web Developer
        </p>
        <p className="mb-6">
          Hauptstraße 36
          <br />
          10827 Berlin
          <br />
          Germany
        </p>
        <Link
          href="mailto:milanbargiel@pm.me"
          variant="underline-white"
          className="mb-6 inline-block"
        >
          milanbargiel@pm.me
        </Link>
        <p className="mb-6">
          Data Protection Policy (GDPR)
          <br />
          This website does not collect, store or process Personally
          Identifiable Information (PII). This website does not require the use
          of cookies.
        </p>
        <p className="mb-6">
          Third Party Inclusion
          <br />
          This website is hosted by the external hosting service&nbsp;
          <Link href="https://www.netlify.com/" variant="underline-white">
            Netlify
          </Link>
          . Netlify stores the IP addresses of site visitors in log files for no
          more than 30 days. This data processing is necessary according to
          Netlify for the provision and security of the web offer and its
          improvement. Their privacy practices can be found&nbsp;
          <Link
            href="https://www.netlify.com/gdpr-ccpa/"
            variant="underline-white"
          >
            here
          </Link>
          .
        </p>
      </div>
      <Footer variant="legal" />
    </Layout>
  )
}

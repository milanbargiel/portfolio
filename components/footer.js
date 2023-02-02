import Link from './link'

const Footer = () => {
  return (
    <>
      <div className="text-center w-80 mx-auto">
        <div className="text-[#B1AFDC] font-semibold mb-2">
          Like what you see?
        </div>
        <div className="mb-6 font-semibold leading-tight">
          Let’s work together! Get in touch by{' '}
          <Link
            href="https://www.linkedin.com/in/milanbargiel"
            variant="underline-dark"
          >
            LinkedIn
          </Link>{' '}
          or by{' '}
          <Link href="mailto:milanbargiel@pm.me" variant="underline-dark">
            E-Mail
          </Link>
          .
        </div>
        <Link href="/" className="text-[#0006F6]">
          (go back)
        </Link>
      </div>
      <div className="text-xs text-gray-600 mt-4 mb-2">
        © Milan Bargiel 2023 | 
        <Link href="/legal-notice" className="hover:text-black">
          Imprint & Privacy
        </Link>
      </div>
    </>
  )
}

export default Footer

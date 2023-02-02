import Link from './link'

const Footer = ({ variant }) => {
  let showBackLink, underlineVariant

  switch (variant) {
    case 'home':
      underlineVariant = 'underline-white'
      break
    case 'project':
      showBackLink = true
      underlineVariant = 'underline-dark'
      break
  }

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
            variant={underlineVariant}
          >
            LinkedIn
          </Link>{' '}
          or by{' '}
          <Link href="mailto:milanbargiel@pm.me" variant={underlineVariant}>
            E-Mail
          </Link>
          .
        </div>
        {/* Only show backlink for the project variant */}
        {showBackLink && (
          <Link href="/" className="text-[#0006F6]">
            (go back)
          </Link>
        )}
      </div>
      <div className="text-center text-xs text-gray-500 mt-10 mb-1">
        <Link href="/legal-notice">Imprint & Privacy</Link>
      </div>
    </>
  )
}

export default Footer

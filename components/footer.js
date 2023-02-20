import Link from './link'

const Footer = ({ variant }) => {
  let showBackLink, legalLinkClasses

  switch (variant) {
    case 'home':
      legalLinkClasses = 'font-semibold text-purple-700 hover:text-purple-500'
      break
    case 'project':
      legalLinkClasses =
        'text-xs font-semibold text-gray-700 hover:text-gray-500'
      showBackLink = true
      break
  }

  return (
    <div className="text-center w-80 mx-auto mb-6">
      {/* Only show backlink for the project variant */}
      {showBackLink && (
        <div className="mb-6 font-semibold leading-tight">
          <Link href="/" className="text-[#0006F6]">
            (go back)
          </Link>
        </div>
      )}
      <Link className={legalLinkClasses} href="/legal-notice">
        Legal notice &amp;
        <br class="md:hidden" /> data privacy
      </Link>
    </div>
  )
}

export default Footer

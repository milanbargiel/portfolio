import Link from './link'

const Footer = ({ variant }) => {
  let showBackLink, showLegalLink, showCopyright

  switch (variant) {
    case 'home':
      showLegalLink = true
      break
    case 'project':
      showBackLink = true
      showCopyright = true
      showLegalLink = true
      break
    case 'legal':
      showBackLink = true
      showCopyright = true
      break
  }

  return (
    <div className="text-center w-80 mx-auto mb-4">
      {/* Only show backlink for the project variant */}
      {showBackLink && (
        <div className="mb-8 font-semibold leading-tight">
          <Link href="/" className="text-purple-700 hover:text-purple-500">
            (Go back)
          </Link>
        </div>
      )}
      {variant === 'home' && (
        <Link
          className="font-semibold text-purple-700 hover:text-purple-500 leading-none"
          href="/legal-notice"
        >
          Legal notice & data privacy
        </Link>
      )}
      {variant === 'legal' && (
        <div className="text-xs font-semibold text-gray-600 leading-none">
          © 2023
        </div>
      )}
      {variant === 'project' && (
        <div className="text-xs font-semibold text-gray-600 leading-none">
          © 2023 |
          <Link className="hover:text-gray-500" href="/legal-notice">
             Legal notice
          </Link>{' '}
        </div>
      )}
    </div>
  )
}

export default Footer

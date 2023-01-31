/* A link wrapper that creates regular anchor tags with target _blank for external links */

import PropTypes from 'prop-types'
import NextLink from 'next/link'

function Link({ href, className, children, variant }) {
  // Create styles for the link variant
  let customClasses = className ? className : ''

  switch (variant) {
    case 'underline':
      customClasses = `underline underline-offset-3 decoration-1 decoration-gray-400 over:transition-all hover:decoration-gray-900 hover:decoration-2 hover:duration-150 ${customClasses}`
      break
    case 'project-link':
      customClasses = `underline font-semibold text-sm underline-offset-2 decoration-1 text-gray-600 decoration-gray-400 hover:text-black hover:transition-all hover:decoration-black hover:duration-150 ${customClasses}`
      break
  }

  const externalLink = href.includes('https')

  if (externalLink) {
    return (
      <a className={customClasses} href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    )
  } else {
    return (
      <NextLink href={href} className={customClasses}>
        {children}
      </NextLink>
    )
  }
}

// Check properties for correct variant names
Link.propTypes = {
  variant: PropTypes.oneOf(['underline-white', 'project-link']),
}

export default Link

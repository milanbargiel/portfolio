/* A link wrapper that creates regular anchor tags with target _blank for external links */

import PropTypes from 'prop-types'
import NextLink from 'next/link'

function Link({ href, className, children, variant }) {
  let classes
  const isExternal = href.includes('https')

  // Create styles for the link variant
  switch (variant) {
    case 'underline':
      classes =
        'underline underline-offset-2 decoration-1 decoration-gray-700 hover:decoration-2 hover:transition-all hover:duration-150'
      break
    default:
      classes = className ? className : ''
  }

  if (isExternal) {
    return (
      <a className={classes} href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    )
  } else {
    return (
      <NextLink href={href} className={classes}>
        {children}
      </NextLink>
    )
  }
}

// Check properties for correct variant names
Link.propTypes = {
  variant: PropTypes.oneOf(['underline']),
}

export default Link

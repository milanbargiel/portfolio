/* A link wrapper that creates regular anchor tags with target _blank for external links */
import NextLink from 'next/link'

function Link({ href, children, className, variant }) {
  // Add classes if set in parent component
  let classes = className ? className : ''

  // Define common classes for link underlines
  const underlineCLasses =
    'underline underline-offset-2 decoration-1 hover:transition-all hover:duration-150'

  switch (variant) {
    case 'underline-white':
      classes += ` ${underlineCLasses} decoration-gray-500 hover:text-white hover:decoration-white`
      break
    case 'underline-dark':
      classes += ` ${underlineCLasses} decoration-gray-400 hover:text-black hover:decoration-black`
      break
  }

  // If the link is external render a normal anchor tag
  // Otherwise use the next-link component
  const externalLink = href.includes('https')

  if (externalLink) {
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

export default Link

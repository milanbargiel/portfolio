/* A link wrapper that creates regular anchor tags with target _blank for external links */

import NextLink from 'next/link'

export default function Link({ href, className, children }) {
  const isExternal = href.includes('https')

  if (isExternal) {
    return (
      <a
        className={className ? className : ''}
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        {children}
      </a>
    )
  } else {
    return (
      <NextLink href={href} className={className ? className : ''}>
        {children}
      </NextLink>
    )
  }
}

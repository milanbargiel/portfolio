/* An image wrapper that creates images with a link on demand */

import Link from '../components/link'
import NextImage from 'next/image'
import PropTypes from 'prop-types'

function Image({ src, alt, className, href }) {
  // Create image
  const image = (
    <NextImage
      src={src}
      className={className ? className : ''}
      alt={alt ? alt : ''}
    />
  )

  // Wrap it in a Link component if there is a link
  if (href) {
    return <Link href={href}>{image}</Link>
  }

  return image
}

// Check required properties
Image.propTypes = {
  src: PropTypes.object.isRequired,
}

export default Image

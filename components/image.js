/* An image wrapper that creates images with link on demand */

import Link from '../components/link'
import NextImage from 'next/image'
import PropTypes from 'prop-types'

function Image({ src, alt, className, href }) {
  const image = (
    <NextImage
      src={src}
      className={className ? className : ''}
      alt={alt ? alt : ''}
    />
  )

  if (href) {
    return <Link href={href}>{image}</Link>
  }

  return image
}

// Check required properties
Image.propTypes = {
  src: PropTypes.string.isRequired,
}

export default Image

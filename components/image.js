/* An image wrapper that creates images with a link on demand */

import Link from '../components/link'
import NextImage from 'next/image'
import PropTypes from 'prop-types'

function Image({ src, alt, className, href, caption }) {
  const isSVG = src.src.split('.').pop() === 'svg'

  // Create image
  let image = (
    <NextImage
      src={src}
      placeholder={isSVG ? 'empty' : 'blur'} // Only apply placeholder blur effect to non vector based images
      className={className ? className : ''}
      alt={alt ? alt : ''}
    />
  )

  // Add caption if it exists
  if (caption) {
    image = (
      <>
        {image}
        <div className="text-xs mt-1 leading-snug">{caption}</div>
      </>
    )
  }

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

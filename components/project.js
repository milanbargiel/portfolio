import Image from '../components/image'
import Tags from '../components/tags'

export default function Project(props) {
  // Object destructuring
  const {
    color,
    roles,
    className,
    title,
    image,
    imageAlt,
    imageStyles,
    imageLink,
    children,
  } = props

  // Choose custom color for project card if specified
  const backgroundColor = color ? color : '#f6f6f6'

  return (
    <article
      className={`drop-shadow-sm px-4 pt-12 pb-4 mb-8 rounded-lg md:pt-24 md:px-8 md:mr-12 md:mb-12 lg:w-5/12 2xl:w-[26rem] md:relative ${
        className ? className : ''
      }`}
      style={{ backgroundColor }}
    >
      <Tags roles={roles} />
      <h3 className="mb-8 text-2xl leading-tight">{title}</h3>
      {image && (
        <Image
          src={image}
          alt={imageAlt}
          className={imageStyles}
          href={imageLink ? imageLink : ''} // Add image link if there is one
        ></Image>
      )}
      <div className="text-sm mb-8">{children}</div>
    </article>
  )
}

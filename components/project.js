import Image from 'next/image'
import PropTypes from 'prop-types'

export default function Project(props) {
  // Create HTML li items from props.roles array
  const roleItems = props.roles.map((role, index) => (
    <li key={index}>{role}</li>
  ))

  // Create layout width classes
  const contentWidth =
    props.variant === 'wide-image' ? 'md:w-5/12' : 'md:w-7/12'
  const imgWidth = props.variant === 'wide-image' ? 'md:w-7/12' : 'md:w-5/12'

  return (
    <article className="drop-shadow-sm px-4 pt-8 pb-4 mb-12 rounded-lg bg-apricot md:px-8 md:pb-8 md:pt-12 md:flex">
      <div className={`md:flex md:flex-col md:mr-10 ${contentWidth}`}>
        <ul className="text-xs mb-6 leading-normal">{roleItems}</ul>
        <h3
          className={`mb-8 text-2xl leading-tight font-medium hover:cursor-pointer ${
            props.variant === 'wide-image' ? 'md:w-5/6' : 'md:w-5/6'
          }`}
        >
          {props.title}
        </h3>
        <div className="text-xs mb-6">{props.children}</div>
        <a class="inline-block text-xs underline hover:cursor-pointer hover:decoration-1 hover:transition-all hover:duration-150">
          {props.linkText}
        </a>
      </div>
      <div
        className={`md:flex md:items-center md:justify-center md:ml-10 ${imgWidth}`}
      >
        <Image
          className={props.imageStyles}
          src={props.image}
          alt={props.imageAlt}
        />
      </div>
    </article>
  )
}

// Validate variant input
Project.propTypes = {
  variant: PropTypes.arrayOf(PropTypes.oneOf(['wide-image'])),
}

import Image from 'next/image'
import PropTypes from 'prop-types'

export default function Project(props) {
  // Create HTML li items from props.roles array
  const roleItems = props.roles.map((role, index) => (
    <li key={index}>{role}</li>
  ))

  // Create layout width classes
  const contentWidth =
    props.variant === 'wide-image' ? 'md:w-6/12' : 'md:w-7/12'
  const imgWidth = props.variant === 'wide-image' ? 'md:w-6/12' : 'md:w-5/12'

  return (
    <a href="#" className="group">
      <article className="px-4 pt-8 pb-4 mb-12 rounded-lg bg-apricot md:px-8 md:pb-8 md:pt-12 md:flex">
        <div className={`md:flex md:flex-col md:mr-10 ${contentWidth}`}>
          <ul className="text-xs mb-6 leading-normal md:order-last md:mb-0">
            {roleItems}
          </ul>
          <h3
            className={`mb-8 text-xl leading-snug font-medium ${
              props.variant === 'wide-image' ? 'md:w-5/6' : 'md:w-5/6'
            }`}
          >
            {props.title}
          </h3>
          <div className="text-sm mb-10">{props.children}</div>
        </div>
        <div
          className={`md:flex md:items-center md:justify-center md:ml-10 ${imgWidth}`}
        >
          <Image
            className={
              props.imageStyles
                ? props.imageStyles
                : 'rounded-md border border-gray-400 drop-shadow-sm'
            }
            src={props.image}
            alt={props.imageAlt}
          />
        </div>
      </article>
    </a>
  )
}

// Validate variant input
Project.propTypes = {
  variant: PropTypes.arrayOf(PropTypes.oneOf(['wide-image'])),
}

import Image from 'next/image'
import Link from '../components/link'

export default function Project(props) {
  // Choose custom color for project card if specified
  const backgroundColor = props.color ? props.color : '#f6f6f6'

  // Create HTML li items from props.roles array
  const roleItems = props.roles.map((role, index) => (
    <li key={index} className="text-purple-700">
      {role}
    </li>
  ))

  return (
    <article
      className="drop-shadow-sm px-4 pt-8 pb-4 mb-8 rounded-lg md:mb-12 md:px-8 md:pb-8 md:pt-12 md:flex"
      style={{ backgroundColor }}
    >
      <div className="md:flex md:flex-col md:mr-10">
        <ul className="text-sm mb-6 leading-normal">{roleItems}</ul>
        <h3 className="mb-8 text-xl leading-snug md:w-5/6">{props.title}</h3>
        <div className="mb-8 md:mb-6 md:text-sm">{props.children}</div>
        <div>
          {props.href && props.linkText && (
            <Link
              className="hidden md:inline-block text-xs underline underline-offset-2 decoration-1 decoration-gray-700 font-medium hover:cursor-pointer hover:decoration-2"
              href={props.href}
            >
              {props.linkText}
            </Link>
          )}
        </div>
      </div>
      <div className="md:flex md:items-center md:justify-center md:ml-10">
        <Image
          className={props.imageStyles}
          src={props.image}
          alt={props.imageAlt}
        />
      </div>
    </article>
  )
}

import Image from 'next/image'

export default function Project(props) {
  // Choose custom color for project card if specified
  const backgroundColor = props.color ? props.color : '#f6f6f6'

  // Create HTML li items from props.roles array
  const roleItems = props.roles.map((role, index) => (
    <li key={index}>{role}</li>
  ))

  return (
    <article
      className={`drop-shadow-sm px-4 pt-12 pb-4 mb-8 rounded-lg md:rounded-md ${
        props.className ? props.className : ''
      }`}
      style={{ backgroundColor }}
    >
      <h3 className="mb-8 text-2xl leading-tight">{props.title}</h3>
      <div className="text-sm mb-8">{props.children}</div>
      {props.image && (
        <div className="mb-8 overflow-hidden">
          <Image
            className={props.imageStyles}
            src={props.image}
            alt={props.imageAlt}
          />
        </div>
      )}
      <ul className="text-sm mb-4 leading-normal">{roleItems}</ul>
    </article>
  )
}

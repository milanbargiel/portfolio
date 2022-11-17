import Image from '../components/image'

export default function Project(props) {
  // Choose custom color for project card if specified
  const backgroundColor = props.color ? props.color : '#f6f6f6'

  // Create HTML li items from props.roles array
  const roleItems = props.roles.map((role, index) => (
    <li key={index}>{role}</li>
  ))

  return (
    <article
      className={`drop-shadow-sm px-4 pt-12 pb-4 mb-8 rounded-lg md:px-8 md:mr-12 md:mb-12 md:w-5/12 2xl:w-[26rem] ${
        props.className ? props.className : ''
      }`}
      style={{ backgroundColor }}
    >
      <ul className="text-sm mb-4 leading-normal">{roleItems}</ul>

      <h3 className="mb-8 text-2xl leading-tight">{props.title}</h3>
      {props.image && (
        <Image
          src={props.image}
          alt={props.imageAlt}
          className={props.imageStyles}
          href={props.imageLink ? props.imageLink : ''} // Add image link if there is one
        ></Image>
      )}
      <div className="text-sm mb-8">{props.children}</div>
    </article>
  )
}

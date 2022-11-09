import Image from 'next/image'

export default function Project(props) {
  // Create HTML li items from props.roles array
  const roleItems = props.roles.map((role) => <li key={role.id}>{role}</li>)

  return (
    <article className="px-3 pt-8 pb-8 mb-12 rounded-md bg-apricot md:px-8">
      <ul className="text-xs mb-6 leading-normal">{roleItems}</ul>
      <h3 className="text-2xl mb-8">{props.title}</h3>
      <div className="text-sm mb-10">{props.description}</div>
      <Image
        className={
          props.imageStyles
            ? props.imageStyles
            : 'rounded-md border border-gray-400'
        }
        src={props.image}
        alt={props.imageAlt}
      />
    </article>
  )
}

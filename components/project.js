import Image from 'next/image'

export default function Project(props) {
  // Create HTML li items from props.roles array
  const roleItems = props.roles.map((role) => <li key={role.id}>{role}</li>)

  return (
    <article className="px-4 pt-8 pb-4 bg-apricot">
      <ul className="text-xs mb-4 leading-normal">{roleItems}</ul>
      <h3 className="text-xl mb-4">{props.title}</h3>
      <div className="text-sm mb-8">{props.description}</div>
      <Image className="ml-12" src={props.image} alt={props.imageAlt} />
    </article>
  )
}

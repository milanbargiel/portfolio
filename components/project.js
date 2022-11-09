import Image from 'next/image'

export default function Project(props) {
  // Create HTML li items from props.roles array
  const roleItems = props.roles.map((role) => <li key={role.id}>{role}</li>)

  return (
    <article className="px-4 pt-8 pb-4 mb-12 rounded-md bg-apricot md:px-8 md:pb-8 md:pt-10 md:flex">
      <div
        className={`md:flex md:flex-col md:mr-8 ${
          props.wideTextBox ? 'md:w-7/12' : 'md:w-1/2'
        }`}
      >
        <ul className="text-sm mb-6 leading-normal md:order-last md:mb-0">
          {roleItems}
        </ul>
        <h3 className="text-2xl leading-tight mb-8 md:w-4/5">{props.title}</h3>
        <div className="mb-10">{props.description}</div>
      </div>
      <div
        className={`md:flex md:items-center md:justify-center md:ml-4 ${
          props.wideTextBox ? 'md:w-5/12' : 'md:w-1/2'
        }`}
      >
        <Image
          className={
            props.imageStyles
              ? props.imageStyles
              : 'rounded-md border border-gray-400'
          }
          src={props.image}
          alt={props.imageAlt}
        />
      </div>
    </article>
  )
}

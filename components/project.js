import Image from 'next/image'

export default function Project(props) {
  // Create HTML li items from props.roles array
  const roleItems = props.roles.map((role, index) => (
    <li key={index}>{role}</li>
  ))

  return (
    <article className="px-4 pt-8 pb-4 mb-12 rounded-md bg-apricot md:px-8 md:pb-8 md:pt-10 md:flex">
      <div className="md:flex md:flex-col md:mr-8 md:w-3/5">
        <ul className="text-xs mb-6 leading-normal md:order-last md:mb-0">
          {roleItems}
        </ul>
        <a href="#" className="mb-8 md:w-4/5">
          <h3 className="text-2xl leading-tight font-medium underline underline-offset-4 decoration-0 decoration-gray-700 hover:decoration-1 hover:transition-all hover:duration-150 hover:decoration-gray-500">
            {props.title}
          </h3>
        </a>
        <div className="text-sm mb-10">{props.description}</div>
      </div>
      <div className="md:flex md:items-center md:justify-center md:ml-8 md:w-2/5">
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

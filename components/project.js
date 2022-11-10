import Image from 'next/image'

export default function Project(props) {
  // Create HTML li items from props.roles array
  const roleItems = props.roles.map((role, index) => (
    <li key={index}>{role}</li>
  ))

  return (
    <a href="#" className="group">
      <article className="px-4 pt-8 pb-4 mb-12 rounded-md bg-apricot md:px-8 md:pb-8 md:pt-10 md:flex">
        <div className="md:flex md:flex-col md:mr-8 md:w-3/5">
          <ul className="text-xs mb-6 leading-normal md:order-last md:mb-0">
            {roleItems}
          </ul>
          <h3 className="mb-8 text-2xl leading-tight font-medium md:w-4/5">
            {props.title}
          </h3>
          <div className="text-sm mb-10">{props.children}</div>
        </div>
        <div className="md:flex md:items-center md:justify-center md:ml-8 md:w-2/5">
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

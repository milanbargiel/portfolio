import Image from 'next/image'

export default function Project(props) {
  return (
    <article className="px-4 pt-8 pb-4 bg-apricot">
      <div className="text-xs mb-4">{props.roles}</div>
      <h3 className="text-xl mb-4">{props.title}</h3>
      <div className="text-sm mb-8">{props.description}</div>
      <Image
        className="ml-12"
        src={props.imageURL}
        alt="Comments database"
        width={94}
        height={150}
      />
    </article>
  )
}

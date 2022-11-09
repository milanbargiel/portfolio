import Image from 'next/image'

export default function Project(props) {
  console.log(props.image)
  return (
    <article className="px-4 pt-8 pb-4 bg-apricot">
      <div className="text-xs mb-4">{props.roles}</div>
      <h3 className="text-xl mb-4">{props.title}</h3>
      <div className="text-sm mb-8">{props.description}</div>
      <Image className="ml-12" src={props.image} alt={props.imageAlt} />
    </article>
  )
}

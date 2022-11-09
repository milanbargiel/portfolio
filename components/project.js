export default function Project(props) {
  return (
    <div className="px-4">
      {props.roles}
      {props.title}
      {props.description}
      {props.imageURL}
    </div>
  )
}

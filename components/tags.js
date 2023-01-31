const Tags = ({ roles }) => {
  // Create HTML li items from roles array
  const roleItems = roles.map((role, index) => <li key={index}>{role}</li>)

  return (
    // Use absolute positioning so that the tags of cards are always on the same height
    <ul className="text-xs mb-8 md:leading-normal md:absolute md:top-10">
      {roleItems}
    </ul>
  )
}

export default Tags

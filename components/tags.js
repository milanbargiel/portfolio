export default function Tags({ roles }) {
  // Create HTML li items from roles array
  const tags = roles.map((role, index) => (
    <li
      key={index}
      className="inline-block px-2 mr-2 text-xs border border-slate-700 rounded-xl"
    >
      {role}
    </li>
  ))

  return <ul className="mb-8 md:top-2">{tags}</ul>
}

export default function Header() {
  return (
    <nav className="py-5 px-7 flex-1">
      <ul className="flex gap-12 justify-end font-bold">
        <li className="text-purple-500 hover:text-purple-700">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/milan-bargiel-9946b0226/"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li className="text-purple-500 hover:text-purple-700">
          <a
            target="_blank"
            href="https://github.com/milanbargiel"
            rel="noreferrer"
          >
            github
          </a>
        </li>
      </ul>
    </nav>
  )
}

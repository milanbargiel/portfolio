export default function Header() {
  return (
    <nav className="py-5 px-3 flex-1">
      <ul className="flex gap-10 md:justify-end">
        <li>
          <a
            className="font-semibold leading-none text-gray-500 hover:text-gray-700 hover:transition-all"
            target="_blank"
            href="https://www.linkedin.com/in/milan-bargiel-9946b0226/"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            className="font-semibold leading-none text-gray-500 hover:text-gray-700"
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

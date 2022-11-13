export default function Header() {
  return (
    <nav className="py-6 px-7 flex-1 md:py-4 md:px-0">
      <ul className="flex gap-12 md:justify-end font-semibold">
        <li className="text-gray-500 hover:text-gray-700 md:text-gray-500 md:hover:text-gray-700">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/milan-bargiel-9946b0226/"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li className="text-gray-500 hover:text-gray-700 md:text-gray-500 md:hover:text-gray-700">
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

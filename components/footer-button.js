import Link from 'next/link'

export default function Intro(props) {
  return (
    <div className="text-center leading-tight mb-6 md:mb-4">
      <Link
        href={props.href}
        className="font-semibold text-gray-500 hover:text-gray-700 md:text-gray-500 md:hover:text-gray-700"
      >
        {props.children}
      </Link>
    </div>
  )
}

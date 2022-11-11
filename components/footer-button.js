import Link from 'next/link'

export default function Intro(props) {
  return (
    <div className="text-center leading-tight mb-6 md:mb-4">
      <Link
        href={props.href}
        className="font-medium text-purple-500 hover:text-purple-700"
      >
        {props.children}
      </Link>
    </div>
  )
}

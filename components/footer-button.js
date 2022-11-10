import Link from 'next/link'

export default function Intro(props) {
  return (
    <div className="text-center mb-6 leading-tight">
      <Link
        href={props.href}
        className="font-medium text-purple-500 hover:text-purple-700"
      >
        {props.children}
      </Link>
    </div>
  )
}

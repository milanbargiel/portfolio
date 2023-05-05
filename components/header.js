import Link from '../components/link'

const Header = () => {
  return (
    <div className="my-12 md:mb-24">
      <Link href="/">
        <h1 className="font-semibold md:text-lg">Milan Bargiel</h1>
      </Link>
      <div className="text-gray-500 mb-12 md:text-lg">Product Engineer</div>
    </div>
  )
}

export default Header

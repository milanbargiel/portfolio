import Link from '../components/link'

const Header = () => {
  return (
    <>
      <Link href="/">
        <h1 className="font-semibold md:text-lg">Milan Bargiel</h1>
      </Link>
      <div className="text-gray-500 mb-24 md:text-lg">
        Product & Web Developer
      </div>
    </>
  )
}

export default Header

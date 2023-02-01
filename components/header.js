import Link from '../components/link'

const Header = () => {
  return (
    <div className="my-12 md:mx-8 md:mt-16 ">
      <Link href="/">
        <h1 className="font-semibold md:text-lg">Milan Bargiel</h1>
      </Link>
      <div className="text-gray-500 mb-12 md:text-lg">
        Product & Web Developer
      </div>
    </div>
  )
}

export default Header

// A component for longer text layout
import Header from './header'

const PageLayout = ({ children, className }) => {
  return (
    <div
      className={`my-12 md:mx-8 md:mb-20 md:mt-16 md:w-2/3 lg:w-3/5 xl:w-1/2 2xl:w-2/5 ${className}`}
    >
      <Header />
      {children}
    </div>
  )
}

export default PageLayout

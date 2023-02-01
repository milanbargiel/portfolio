const Row = ({ children, className }) => {
  return (
    <div className={`md:flex md:flex-wrap md:flex-row md:gap-16 ${className}`}>
      {children}
    </div>
  )
}

export default Row

const Column = ({ children, className }) => {
  return <div className={`basis-full md:flex-1 ${className}`}>{children}</div>
}

export default Column

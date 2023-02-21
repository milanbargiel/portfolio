const TextColumn = ({ children, variant }) => {
  let classes = 'md:mx-8 md:w-2/3 lg:w-3/5 xl:w-1/2 2xl:w-2/5'

  switch (variant) {
    // Make text columns a bit smaller for projects
    case 'project':
      classes = classes + ' ' + 'pr-24'
      break
  }

  return <div className={classes}>{children}</div>
}

export default TextColumn

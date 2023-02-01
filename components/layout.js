export default function Layout({ children, variant }) {
  let classes = 'px-4 container mx-auto min-h-screen flex flex-col md:px-8'

  switch (variant) {
    // Choose background color
    case 'dark':
      classes = classes + ' ' + 'dark-mode'
      break
    case 'light':
      classes = classes + ' ' + 'light-mode'
      break
  }

  return <main className={classes}>{children}</main>
}

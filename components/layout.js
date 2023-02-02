export default function Layout({ children, variant }) {
  let modeClass

  switch (variant) {
    // Choose background color
    case 'dark':
      modeClass = 'dark-mode'
      break
    case 'light':
      modeClass = 'light-mode'
      break
  }

  return (
    <main className={modeClass}>
      <div className="px-4 container mx-auto min-h-screen flex flex-col md:px-8">
        {children}
      </div>
    </main>
  )
}

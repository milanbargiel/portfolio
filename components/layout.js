export default function Layout({ children }) {
  return (
    <main>
      <div className="px-4 container mx-auto min-h-screen flex flex-col md:px-8">
        {children}
      </div>
    </main>
  )
}

function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-4 flex items-center justify-between rounded-full bg-white/70 backdrop-blur shadow px-4 py-2">
          <a href="#" className="font-extrabold tracking-tight text-amber-900 text-lg">Autumn Isles</a>
          <nav className="hidden md:block">
            <ul className="flex items-center gap-6 text-amber-900/80">
              <li><a href="#books" className="hover:text-amber-900">Books</a></li>
              <li><a href="#lore" className="hover:text-amber-900">Lore</a></li>
              <li><a href="#blog" className="hover:text-amber-900">Blog</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar

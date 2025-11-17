import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Books from './components/Books'
import Lore from './components/Lore'
import Blog from './components/Blog'

function App() {
  return (
    <div className="min-h-screen bg-white text-amber-900">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <Books />
        <Lore />
        <Blog />
      </main>
      <footer className="py-10 text-center text-amber-800/70">
        © {new Date().getFullYear()} Autumn Isles — Fantasy, folklore, and stories.
      </footer>
    </div>
  )
}

export default App

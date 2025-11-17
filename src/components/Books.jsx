import { useEffect, useState } from 'react'

const API_URL = import.meta.env.VITE_BACKEND_URL

function Books() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await fetch(`${API_URL}/api/books?featured=true`)
        const data = await res.json()
        setBooks(Array.isArray(data) ? data : [])
      } catch (e) {
        setBooks([])
      }
    }
    fetchBooks()
  }, [])

  return (
    <section id="books" className="relative py-16 md:py-24 bg-amber-50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl md:text-4xl font-bold text-amber-900">Featured Books</h2>
          <a href="#" className="text-amber-700 hover:text-amber-800">View all</a>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.length === 0 && (
            <div className="col-span-full text-amber-900/70">No books yet. Add some to the database to see them here.</div>
          )}
          {books.map((b) => (
            <article key={b.id} className="bg-white/70 backdrop-blur rounded-xl shadow p-4 hover:shadow-md transition border border-amber-100">
              <div className="aspect-[3/4] w-full rounded-lg bg-gradient-to-br from-amber-100 to-amber-200 overflow-hidden">
                {b.cover_url && (
                  <img src={b.cover_url} alt={b.title} className="w-full h-full object-cover" />
                )}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-amber-900">{b.title}</h3>
              {b.subtitle && <p className="text-amber-900/70">{b.subtitle}</p>}
              <p className="mt-2 text-sm text-amber-900/80 line-clamp-3">{b.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {b.tags?.slice(0,3).map((t) => (
                  <span key={t} className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">{t}</span>
                ))}
              </div>
              {b.buy_link && (
                <a href={b.buy_link} target="_blank" rel="noreferrer" className="mt-4 inline-block text-sm text-white bg-amber-700 hover:bg-amber-800 px-3 py-1.5 rounded-md">Buy</a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Books

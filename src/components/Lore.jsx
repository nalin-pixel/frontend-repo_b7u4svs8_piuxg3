import { useEffect, useState } from 'react'

const API_URL = import.meta.env.VITE_BACKEND_URL

function Lore() {
  const [lore, setLore] = useState([])

  useEffect(() => {
    const fetchLore = async () => {
      try {
        const res = await fetch(`${API_URL}/api/lore?limit=6`)
        const data = await res.json()
        setLore(Array.isArray(data) ? data : [])
      } catch (e) {
        setLore([])
      }
    }
    fetchLore()
  }, [])

  return (
    <section id="lore" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl md:text-4xl font-bold text-amber-900">Lore Compendium</h2>
          <a href="#" className="text-amber-700 hover:text-amber-800">Explore all</a>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {lore.length === 0 && (
            <div className="col-span-full text-amber-900/70">No lore entries yet. Add some to the database to see them here.</div>
          )}
          {lore.map((entry) => (
            <article key={entry.id} className="bg-white/70 backdrop-blur rounded-xl shadow p-5 border border-amber-100">
              <h3 className="text-lg font-semibold text-amber-900">{entry.title}</h3>
              {entry.region && <p className="text-sm text-amber-900/70">{entry.region}</p>}
              {entry.image_url && (
                <img src={entry.image_url} alt="" className="mt-3 w-full h-40 object-cover rounded-lg" />
              )}
              <p className="mt-3 text-sm text-amber-900/80 line-clamp-4">{entry.excerpt || entry.content}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {entry.tags?.slice(0,3).map((t) => (
                  <span key={t} className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Lore

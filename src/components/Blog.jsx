import { useEffect, useState } from 'react'

const API_URL = import.meta.env.VITE_BACKEND_URL

function Blog() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(`${API_URL}/api/posts?published=true&limit=3`)
        const data = await res.json()
        setPosts(Array.isArray(data) ? data : [])
      } catch (e) {
        setPosts([])
      }
    }
    fetchPosts()
  }, [])

  return (
    <section id="blog" className="py-16 md:py-24 bg-amber-50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl md:text-4xl font-bold text-amber-900">Latest from the Blog</h2>
          <a href="#" className="text-amber-700 hover:text-amber-800">Read more</a>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.length === 0 && (
            <div className="col-span-full text-amber-900/70">No posts yet. Publish some to see them here.</div>
          )}
          {posts.map((p) => (
            <article key={p.id} className="bg-white/70 backdrop-blur rounded-xl shadow p-5 border border-amber-100">
              {p.cover_url && (
                <img src={p.cover_url} alt="" className="w-full h-40 object-cover rounded-lg" />
              )}
              <h3 className="mt-3 text-lg font-semibold text-amber-900">{p.title}</h3>
              <p className="text-sm text-amber-900/70">{p.author || 'By the Author'}</p>
              <p className="mt-2 text-sm text-amber-900/80 line-clamp-3">{p.excerpt || p.content}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags?.slice(0,3).map((t) => (
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

export default Blog

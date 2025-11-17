import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/h75h3nFN5UbmqiLU/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-5xl px-6 w-full">
          <div className="backdrop-blur-md/40 bg-white/30 rounded-xl p-6 md:p-10 shadow-xl">
            <h1 className="text-3xl md:text-6xl font-extrabold tracking-tight text-amber-900 drop-shadow-sm">
              Tales from the Floating Isles
            </h1>
            <p className="mt-4 text-amber-900/80 md:text-lg">
              Fantasy novels, folklore, and worldbuilding notes from an autumn-tinted realm.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#books" className="inline-flex items-center gap-2 rounded-full bg-amber-600 hover:bg-amber-700 text-white px-5 py-2 transition">
                Explore Books
              </a>
              <a href="#lore" className="inline-flex items-center gap-2 rounded-full bg-white/80 hover:bg-white text-amber-900 px-5 py-2 transition">
                Read the Lore
              </a>
              <a href="#blog" className="inline-flex items-center gap-2 rounded-full bg-amber-900/90 hover:bg-amber-900 text-white px-5 py-2 transition">
                Visit the Blog
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />
    </section>
  )
}

export default Hero
export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-50 via-white to-amber-50" />
      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
            Nasi Lemak
            <span className="block text-emerald-700">The Soul of Malaysian Comfort Food</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Explore the fragrant rice dish cooked in creamy coconut milk, served with spicy sambal and an array of tasty accompaniments. Dive into its components, variations, cultural roots, and where to taste the best plates.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/main-components" className="px-5 py-2.5 rounded-md bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition">Explore Components</a>
            <a href="/where-to-find" className="px-5 py-2.5 rounded-md bg-amber-100 text-amber-900 font-semibold hover:bg-amber-200 transition">Find a Plate</a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square rounded-2xl bg-white shadow-xl border border-emerald-100 p-4">
            <img src="https://images.unsplash.com/photo-1648788767168-aa2df5105037?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxOYXNpJTIwbGVtYWslMjBwbGF0ZXxlbnwwfDB8fHwxNzYzMzYwNTY1fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Nasi lemak plate" className="w-full h-full object-cover rounded-xl" />
          </div>
        </div>
      </div>
    </section>
  )
}

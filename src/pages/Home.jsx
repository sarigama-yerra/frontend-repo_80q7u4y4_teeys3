import Hero from '../components/Hero'

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-6">
        {[{
          title: 'Main Components',
          desc: 'Rice, sambal, crunchy anchovies, peanuts, egg, cucumber — and often a protein like fried chicken or rendang.',
          href: '/main-components',
        }, {
          title: 'Variations',
          desc: 'Regional takes from Malaysia, Singapore, Indonesia and beyond with unique toppings and flavors.',
          href: '/variations',
        }, {
          title: 'Cultural Significance',
          desc: 'From breakfast staple to national icon — discover its role in daily life and festivals.',
          href: '/cultural-significance',
        }].map((c) => (
          <a key={c.title} href={c.href} className="group rounded-xl border bg-white hover:shadow-lg transition p-6">
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-emerald-700">{c.title}</h3>
            <p className="mt-2 text-gray-600">{c.desc}</p>
            <span className="mt-3 inline-block text-emerald-700 font-semibold">Learn more →</span>
          </a>
        ))}
      </section>
      <section className="max-w-6xl mx-auto px-4 pb-16 grid md:grid-cols-3 gap-6">
        {[{
          title: 'Where to Find',
          desc: 'From bustling kopitiams and night markets to modern cafés and roadside stalls.',
          href: '/where-to-find',
        }, {
          title: 'Unique Features',
          desc: 'Banana leaf wrapping, sambal complexities, and the perfect balance of sweet, salty, spicy, and rich.',
          href: '/unique-features',
        }, {
          title: 'Test Backend',
          desc: 'Verify the server and database connection used in this environment.',
          href: '/test',
        }].map((c) => (
          <a key={c.title} href={c.href} className="group rounded-xl border bg-white hover:shadow-lg transition p-6">
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-emerald-700">{c.title}</h3>
            <p className="mt-2 text-gray-600">{c.desc}</p>
            <span className="mt-3 inline-block text-emerald-700 font-semibold">Explore →</span>
          </a>
        ))}
      </section>
    </main>
  )
}

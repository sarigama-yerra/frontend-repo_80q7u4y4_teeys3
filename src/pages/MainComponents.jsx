export default function MainComponents() {
  const components = [
    { name: 'Coconut Rice (Nasi)', desc: 'Steamed rice cooked with coconut milk, pandan leaves, and a pinch of salt for fragrance and richness.' },
    { name: 'Sambal', desc: 'A spicy chili paste, sweet and smoky with shallots, anchovies, tamarind, and sometimes palm sugar.' },
    { name: 'Ikan Bilis & Peanuts', desc: 'Crispy fried anchovies and roasted peanuts for salty crunch.' },
    { name: 'Egg', desc: 'Usually hard-boiled, sometimes fried or a soft-centered telur mata kerbau.' },
    { name: 'Cucumber', desc: 'Cool, fresh slices to balance heat and richness.' },
    { name: 'Protein', desc: 'Common choices include fried chicken, ayam rendang, sambal sotong, or beef rendang.' },
    { name: 'Banana Leaf', desc: 'Often used as a base or wrapper, adding aroma and presentation charm.' },
  ]

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <header className="mb-8">
        <h1 className="text-3xl font-extrabold text-gray-900">Main Components</h1>
        <p className="mt-2 text-gray-600">The classic anatomy of a well-balanced plate.</p>
      </header>
      <div className="grid md:grid-cols-2 gap-6">
        {components.map((c) => (
          <div key={c.name} className="rounded-xl border bg-white p-6">
            <h3 className="text-lg font-semibold text-emerald-700">{c.name}</h3>
            <p className="mt-2 text-gray-700">{c.desc}</p>
          </div>
        ))}
      </div>
    </main>
  )
}

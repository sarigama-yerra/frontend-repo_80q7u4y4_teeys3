export default function UniqueFeatures() {
  const features = [
    { title: 'Banana Leaf Wrapping', desc: 'Adds aroma, keeps the rice warm, and makes it portable and eco-friendly.' },
    { title: 'Balance of Flavors', desc: 'A harmony of spicy, sweet, salty, creamy, and fresh that satisfies every craving.' },
    { title: 'Sambal Personalities', desc: 'Every stall has its signature sambal — from smoky anchovy to sweet-onion or fiery belacan.' },
    { title: 'Anytime Meal', desc: 'Breakfast to supper — it fits every hour and occasion.' },
    { title: 'Customization', desc: 'Mix and match proteins and sides to suit your taste and mood.' },
  ]

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <header className="mb-8">
        <h1 className="text-3xl font-extrabold text-gray-900">Unique Features</h1>
        <p className="mt-2 text-gray-600">What makes nasi lemak stand out in the world of comfort food.</p>
      </header>
      <div className="grid md:grid-cols-2 gap-6">
        {features.map(f => (
          <div key={f.title} className="rounded-xl border bg-white p-6">
            <h3 className="text-lg font-semibold text-emerald-700">{f.title}</h3>
            <p className="mt-2 text-gray-700">{f.desc}</p>
          </div>
        ))}
      </div>
    </main>
  )
}

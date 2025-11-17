export default function Variations() {
  const variations = [
    {
      title: 'Traditional',
      details: 'Classic combo with coconut rice, sambal, ikan bilis, peanuts, egg, and cucumber. Often wrapped in banana leaf.',
    },
    {
      title: 'Nasi Lemak Ayam Goreng',
      details: 'Paired with spiced fried chicken; crispy skin and juicy meat complement the sambal heat.',
    },
    {
      title: 'Nasi Lemak Rendang',
      details: 'Rich, slow-cooked beef or chicken rendang adds depth and fragrance to the plate.',
    },
    {
      title: 'Nasi Lemak Sotong',
      details: 'Sambal squid brings a chewy, spicy-sweet profile that seafood lovers adore.',
    },
    {
      title: 'Regional Takes',
      details: 'Singapore’s cleaner sambal, Indonesian variations with different chilies, and modern café interpretations.',
    },
  ]

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <header className="mb-8">
        <h1 className="text-3xl font-extrabold text-gray-900">Variations</h1>
        <p className="mt-2 text-gray-600">From humble stalls to gourmet plates, discover the many faces of nasi lemak.</p>
      </header>
      <div className="grid md:grid-cols-2 gap-6">
        {variations.map(v => (
          <div key={v.title} className="rounded-xl border bg-white p-6">
            <h3 className="text-lg font-semibold text-emerald-700">{v.title}</h3>
            <p className="mt-2 text-gray-700">{v.details}</p>
          </div>
        ))}
      </div>
    </main>
  )
}

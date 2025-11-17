export default function WhereToFind() {
  const places = [
    { name: 'Roadside Stalls', desc: 'Early-morning vendors offering classic banana-leaf packets at unbeatable prices.' },
    { name: 'Kopitiams & Mamak', desc: 'Casual eateries across Malaysia and Singapore serving hearty plates all day.' },
    { name: 'Night Markets (Pasar Malam)', desc: 'Vibrant evening markets where you can sample different sambals and sides.' },
    { name: 'Modern Cafés', desc: 'Creative spins with free-range eggs, artisanal sambal, and specialty coffee pairings.' },
    { name: 'Famous Spots', desc: 'Iconic names like Village Park (MY), Boon Lay Power Nasi Lemak (SG), and local legends in each town.' },
  ]

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <header className="mb-8">
        <h1 className="text-3xl font-extrabold text-gray-900">Where to Find</h1>
        <p className="mt-2 text-gray-600">From humble stalls to destination eateries, here’s where to hunt down great nasi lemak.</p>
      </header>
      <div className="grid md:grid-cols-2 gap-6">
        {places.map(p => (
          <div key={p.name} className="rounded-xl border bg-white p-6">
            <h3 className="text-lg font-semibold text-emerald-700">{p.name}</h3>
            <p className="mt-2 text-gray-700">{p.desc}</p>
          </div>
        ))}
      </div>
    </main>
  )
}

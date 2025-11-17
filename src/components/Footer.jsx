export default function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-gray-600 flex flex-col md:flex-row gap-3 items-center justify-between">
        <p>© {new Date().getFullYear()} Nasi Lemak Guide</p>
        <p className="text-gray-500">Crafted with love for coconut rice and sambal.</p>
      </div>
    </footer>
  )
}

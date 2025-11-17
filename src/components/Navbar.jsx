import { Link, NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/main-components', label: 'Main Components' },
  { to: '/variations', label: 'Variations' },
  { to: '/cultural-significance', label: 'Cultural Significance' },
  { to: '/where-to-find', label: 'Where to Find' },
  { to: '/unique-features', label: 'Unique Features' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="font-extrabold text-xl text-emerald-700">
          Nasi Lemak
        </Link>
        <button className="sm:hidden p-2 rounded-md hover:bg-gray-100" onClick={() => setOpen(!open)} aria-label="Toggle Navigation">
          <Menu className="h-6 w-6" />
        </button>
        <nav className="hidden sm:flex gap-4">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'bg-emerald-100 text-emerald-800' : 'text-gray-700 hover:text-emerald-700 hover:bg-emerald-50'}`}
              end={item.to === '/'}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
      {open && (
        <div className="sm:hidden border-t border-gray-200">
          <nav className="px-4 py-2 grid gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) => `block px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-emerald-100 text-emerald-800' : 'text-gray-700 hover:text-emerald-700 hover:bg-emerald-50'}`}
                end={item.to === '/'}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

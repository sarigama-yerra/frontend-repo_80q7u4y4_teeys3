import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-emerald-50 via-white to-amber-50">
      <Navbar />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  )
}

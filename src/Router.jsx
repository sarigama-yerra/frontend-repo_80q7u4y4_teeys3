import { Routes, Route } from 'react-router-dom'
import App from './App'
import Test from './Test'
import MainComponents from './pages/MainComponents'
import Variations from './pages/Variations'
import CulturalSignificance from './pages/CulturalSignificance'
import WhereToFind from './pages/WhereToFind'
import UniqueFeatures from './pages/UniqueFeatures'

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/test" element={<Test />} />
      <Route path="/main-components" element={<MainComponents />} />
      <Route path="/variations" element={<Variations />} />
      <Route path="/cultural-significance" element={<CulturalSignificance />} />
      <Route path="/where-to-find" element={<WhereToFind />} />
      <Route path="/unique-features" element={<UniqueFeatures />} />
    </Routes>
  )
}

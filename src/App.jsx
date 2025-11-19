import { useEffect, useMemo, useState } from 'react'
import Hero from './components/Hero'
import Categories from './components/Categories'
import ProductGrid from './components/ProductGrid'
import Header from './components/Header'

function App() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState()

  const backend = useMemo(() => import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000', [])

  const fetchProducts = async () => {
    setLoading(true)
    try {
      const params = new URLSearchParams()
      if (query) params.set('q', query)
      if (category) params.set('category', category)
      const res = await fetch(`${backend}/api/products?${params.toString()}`)
      const data = await res.json()
      setItems(data)
    } catch (e) {
      setItems([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, category])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <Header />
      <Hero onSearch={setQuery} />
      <div className="mt-2">
        <Categories selected={category} onSelect={setCategory} />
        <ProductGrid items={items} loading={loading} />
      </div>
      <footer className="mt-16 border-t border-white/10 py-10 text-center text-slate-400">
        © {new Date().getFullYear()} Bookish Atelier • Read comfortably, study beautifully
      </footer>
    </div>
  )
}

export default App

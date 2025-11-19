export default function ProductGrid({ items, loading }) {
  if (loading) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-6 mt-8">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="aspect-[3/4] rounded-2xl bg-white/5 border border-white/10 animate-pulse" />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-6 mt-8">
      {items.map((p) => (
        <div key={p.id} className="group rounded-2xl bg-white/5 border border-white/10 overflow-hidden backdrop-blur hover:border-indigo-400/50 transition">
          <div className="aspect-[4/3] bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center text-5xl">
            {p.image ? (
              <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
            ) : (
              <span className="text-white/40">🛍️</span>
            )}
          </div>
          <div className="p-4">
            <h3 className="text-white font-medium line-clamp-2">{p.title}</h3>
            <p className="text-slate-400 text-sm line-clamp-2 mt-1">{p.description}</p>
            <div className="flex items-center justify-between mt-3">
              <span className="text-indigo-300 font-semibold">${p.price.toFixed(2)}</span>
              <button className="px-3 py-1.5 rounded-lg bg-indigo-500/90 hover:bg-indigo-400 text-white text-xs font-medium transition">Add to cart</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

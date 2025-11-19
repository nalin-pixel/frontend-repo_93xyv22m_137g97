import { Search } from "lucide-react";

export default function Hero({ onSearch }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.15),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(56,189,248,0.15),transparent_40%)]" />
      <div className="relative py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white drop-shadow">Bookish Atelier</h1>
            <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
              An online nook for readers. Browse curated books, cozy merchandise, study utilities, and campus snacks.
            </p>
            <div className="mt-8 max-w-xl mx-auto">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur rounded-xl border border-white/10 p-2">
                <Search className="w-5 h-5 text-slate-300 ml-2" />
                <input
                  onChange={(e) => onSearch(e.target.value)}
                  placeholder="Search books, pens, totes, cookies..."
                  className="flex-1 bg-transparent outline-none placeholder:text-slate-400 text-white py-2"
                />
                <button className="px-4 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-400 text-white text-sm font-medium transition">Search</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

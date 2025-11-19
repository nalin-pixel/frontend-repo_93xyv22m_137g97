import { ShoppingCart, Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-slate-900/70 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-indigo-500 grid place-items-center text-white font-bold">ba</div>
          <div>
            <p className="text-white font-semibold leading-tight">Bookish Atelier</p>
            <p className="text-xs text-slate-400 -mt-0.5">Books • Merch • Study • Snacks</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-200 text-sm">Sign in</button>
          <button className="relative px-3 py-1.5 rounded-lg bg-indigo-500 hover:bg-indigo-400 text-white text-sm flex items-center gap-2">
            <ShoppingCart className="w-4 h-4" />
            Cart
            <span className="absolute -top-1 -right-1 bg-white text-indigo-600 text-[10px] font-bold rounded-full w-5 h-5 grid place-items-center">0</span>
          </button>
          <button className="ml-2 p-2 rounded-lg bg-white/5 text-slate-200 hover:bg-white/10">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}

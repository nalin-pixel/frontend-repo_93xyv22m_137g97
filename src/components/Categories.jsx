const categories = [
  { slug: "books", name: "Books", emoji: "📚" },
  { slug: "merch", name: "Merch", emoji: "👜" },
  { slug: "study", name: "Study Utilities", emoji: "✏️" },
  { slug: "snacks", name: "Snacks", emoji: "🍪" },
];

export default function Categories({ selected, onSelect }) {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="flex gap-3 overflow-x-auto pb-2 -mx-2 px-2">
        {categories.map((c) => (
          <button
            key={c.slug}
            onClick={() => onSelect(c.slug)}
            className={`shrink-0 px-4 py-2 rounded-full border text-sm transition ${
              selected === c.slug
                ? "bg-indigo-500/90 border-indigo-400 text-white"
                : "bg-white/5 border-white/10 text-slate-200 hover:bg-white/10"
            }`}
          >
            <span className="mr-2">{c.emoji}</span>
            {c.name}
          </button>
        ))}
      </div>
    </div>
  );
}

import { useState } from 'react';

function ProductCard({ product }) {
    const [isFavorite, setIsFavorite] = useState(false);
  return (
    <article className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      <img
        className="h-56 w-full object-cover"
        src={product.image}
        alt={product.title}
      />
      <div className="flex items-center justify-between gap-4 p-5">
        <h2 className="text-lg font-semibold text-slate-900">{product.title}</h2>
        <p className="shrink-0 text-lg font-bold text-indigo-600">{product.price}</p>
        <button onClick={() => setIsFavorite(!isFavorite)}>
          {isFavorite ? '❤️' : '🤍'}
        </button>
      </div>
    </article>
  )
}

export default ProductCard

import ProductCard from './ProductCard'

function ProductList({ products }) {
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-6 py-12 sm:px-8 lg:py-16">
      <header className="mb-10">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-indigo-600">
          Collection
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
          Featured products
        </h1>
      </header>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      </div>
    </main>
  )
}

export default ProductList

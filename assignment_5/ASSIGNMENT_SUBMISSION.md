# React REST Component Assignment

## Component Submitted

The submitted component is `App.jsx`. It requests products from the Fake Store API and passes the returned data to the `ProductList` component.

```jsx
import { useEffect, useState } from 'react'
import ProductList from './ProductList'

function App() {
	const [products, setProducts] = useState([])

	useEffect(() => {
		let ignore = false

		fetch('https://fakestoreapi.com/products')
			.then((res) => res.json())
			.then((data) => {
				if (!ignore) setProducts(data)
			})

		return () => {
			ignore = true
		}
	}, [])

	return <ProductList products={products} />
}

export default App
```

## Supporting Component

`ProductList.jsx` renders the products in a responsive grid and sends each product to `ProductCard`.

```jsx
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
```

## Behavior

- On mount, `App` fetches product data from `https://fakestoreapi.com/products`.
- The response data is stored in React state.
- `ProductList` displays the products in a responsive layout.
- The effect cleanup prevents a state update after the component is unmounted.

## Prompt Transcript

### User prompt

> Build a small React component that consumes a REST endpoint using an AI coding assistant. The component should fetch products and display them in a product list. Submit the component and the prompt transcript.

### AI assistant response

The component can use `useState` to store the products and `useEffect` to fetch them from the Fake Store API when the component mounts. After the request succeeds, the products can be passed to `ProductList`, which renders each item with `ProductCard`.

### User prompt

> Create the assignment submission Markdown file with the submitted component and the prompt transcript.

### AI assistant action

Created `assignment 5/ASSIGNMENT_SUBMISSION.md` with the submitted `App` component, the supporting `ProductList` component, a behavior summary, and this prompt transcript.

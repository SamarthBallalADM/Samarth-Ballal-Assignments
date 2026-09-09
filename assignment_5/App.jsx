import { useEffect, useState } from 'react'
import ProductList from './components/ProductList'

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

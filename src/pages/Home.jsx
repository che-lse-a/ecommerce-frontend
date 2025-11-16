import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import productsData from '../data/products'

export default function Home({ addToCart }){
  const [products, setProducts] = useState([])

  useEffect(()=>{
    // by default use local sample data; if VITE_API_URL is set, you can implement fetch there
    setProducts(productsData)
  },[])

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Featured Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map(p=> <ProductCard key={p.id} p={p} onAdd={addToCart} />)}
      </div>
    </div>
  )
}

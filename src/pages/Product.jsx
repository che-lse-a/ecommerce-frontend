import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import productsData from '../data/products'

export default function Product({ addToCart }){
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [qty, setQty] = useState(1)

  useEffect(()=>{
    const p = productsData.find(x=>x.id===id)
    setProduct(p || null)
  },[id])

  if(!product) return <p>Product not found</p>

  return (
    <div className="bg-white rounded-lg shadow p-6 flex gap-6">
      <img src={product.image} alt={product.name} className="w-1/3 h-80 object-cover rounded"/>
      <div className="flex-1">
        <h2 className="text-2xl font-bold">{product.name}</h2>
        <p className="text-gray-600 mt-2">{product.category} • KSh {product.price}</p>
        <p className="mt-4 text-gray-700">{product.description}</p>
        <div className="mt-6 flex items-center gap-4">
          <input type="number" min="1" value={qty} onChange={e=>setQty(Number(e.target.value))} className="w-20 border rounded p-2"/>
          <button onClick={()=>addToCart(product, qty)} className="bg-blue-600 text-white px-4 py-2 rounded">Add to cart</button>
        </div>
      </div>
    </div>
  )
}

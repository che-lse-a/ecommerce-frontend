import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard({ p, onAdd }){
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <Link to={`/product/${p.id}`} className="block">
        <img src={p.image} alt={p.name} className="w-full h-48 object-cover"/>
      </Link>
      <div className="p-4">
        <h3 className="font-semibold text-lg">{p.name}</h3>
        <p className="text-sm text-gray-500">{p.category}</p>
        <div className="mt-2 flex items-center justify-between">
          <span className="font-bold text-lg">KSh {p.price}</span>
          <button onClick={()=>onAdd(p)} className="bg-blue-600 text-white px-3 py-1 rounded">Add</button>
        </div>
      </div>
    </div>
  )
}

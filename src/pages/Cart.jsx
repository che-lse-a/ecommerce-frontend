import React from 'react'
import { Link } from 'react-router-dom'

export default function Cart({ cart, updateQty, removeFromCart }){
  const subtotal = cart.reduce((s,i)=> s + i.price * i.qty, 0)
  if(!cart.length) return <div><h3 className="text-xl">Your cart is empty</h3><Link to='/' className="text-blue-600">Continue shopping</Link></div>
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      <div className="space-y-4">
        {cart.map(item=> (
          <div key={item.id} className="flex items-center bg-white p-4 rounded shadow">
            <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded"/>
            <div className="ml-4 flex-1">
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-gray-500">KSh {item.price}</p>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={()=> updateQty(item.id, Math.max(1, item.qty-1)) } className="px-3 py-1 border rounded">-</button>
              <span>{item.qty}</span>
              <button onClick={()=> updateQty(item.id, item.qty+1)} className="px-3 py-1 border rounded">+</button>
            </div>
            <div className="ml-6">
              <button onClick={()=> removeFromCart(item.id) } className="text-red-600">Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 p-4 bg-white rounded shadow flex justify-between items-center">
        <div><span className="text-gray-600">Subtotal</span><div className="text-2xl font-bold">KSh {subtotal.toFixed(2)}</div></div>
        <Link to="/checkout"><button className="bg-green-600 text-white px-4 py-2 rounded">Proceed to Checkout</button></Link>
      </div>
    </div>
  )
}

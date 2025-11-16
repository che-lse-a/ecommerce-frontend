import React, { useState } from 'react'
import api from '../utils/api'
import { useNavigate } from 'react-router-dom'

export default function Checkout({ cart, clearCart }){
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const placeOrder = async ()=>{
    if(!cart.length) return
    setLoading(true)
    try{
      const order = { items: cart.map(i=>({ product: i.id, qty: i.qty })), total: cart.reduce((s,i)=>s+i.price*i.qty,0) }
      // if VITE_API_URL is set and your backend endpoint exists, this will post to it
      await api.post('/api/orders', order)
      clearCart()
      navigate('/')
    }catch(err){
      setError('Order failed — using demo mode')
      // for demo, clear cart
      clearCart()
      navigate('/')
    }finally{ setLoading(false) }
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      {error && <p className="text-red-600">{error}</p>}
      <button onClick={placeOrder} disabled={loading} className="bg-blue-600 text-white px-4 py-2 rounded">{loading? 'Placing...':'Place Order'}</button>
    </div>
  )
}

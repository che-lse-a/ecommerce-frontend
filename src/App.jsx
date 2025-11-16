import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Login from './pages/Login'
import Navbar from './components/Navbar'

export default function App(){
  const [cart, setCart] = useState(()=>{
    try { return JSON.parse(localStorage.getItem('cart')) || [] } catch { return [] }
  })

  useEffect(()=>{ localStorage.setItem('cart', JSON.stringify(cart)) }, [cart])

  const addToCart = (product, qty=1)=>{
    setCart(prev=>{
      const found = prev.find(p=>p.id===product.id)
      if(found) return prev.map(p=>p.id===product.id?{...p, qty: p.qty+qty}:p)
      return [...prev, {...product, qty}]
    })
  }

  const updateQty = (id, qty)=> setCart(prev=> prev.map(p=> p.id===id?{...p, qty}:p))
  const removeFromCart = (id)=> setCart(prev=> prev.filter(p=>p.id!==id))
  const clearCart = ()=> setCart([])

  return (
    <div className="min-h-screen">
      <Navbar count={cart.reduce((s,p)=>s+p.qty,0)} />
      <main className="container mx-auto p-6">
        <Routes>
          <Route path='/' element={<Home addToCart={addToCart} />} />
          <Route path='/product/:id' element={<Product addToCart={addToCart} />} />
          <Route path='/cart' element={<Cart cart={cart} updateQty={updateQty} removeFromCart={removeFromCart} />} />
          <Route path='/checkout' element={<Checkout cart={cart} clearCart={clearCart} />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </main>
    </div>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({ count=0 }){
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link to="/" className="text-2xl font-bold text-gray-800">Shoply</Link>
        <nav className="space-x-4">
          <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
          <Link to="/cart" className="text-gray-600 hover:text-gray-900">Cart <span className="bg-blue-500 text-white rounded-full px-2 ml-1">{count}</span></Link>
          <Link to="/login" className="text-gray-600 hover:text-gray-900">Login</Link>
        </nav>
      </div>
    </header>
  )
}

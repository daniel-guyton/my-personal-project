import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Cart from './Cart'
import Home from './Home'
import getProducts from '../api/index'
import { CartProvider } from '../context/cart.context'

const App = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts()
      .then((product) => {
        return setProducts(product)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  return (
    <CartProvider>
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Home products={products} />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </div>
    </CartProvider>
  )
}
export default App

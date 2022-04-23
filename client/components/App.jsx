import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Cart from './Cart'
import Home from './Home'
import About from './About'
import getProducts from '../api/index'
import Products from './Products'

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
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/shop" element={<Products products={products} />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </div>
  )
}
export default App

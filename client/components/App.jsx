import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Checkout from './Checkout'
import Home from './Home'
import getProducts from '../api/index'

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
    <>
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Home products={products} />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
        </Routes>
      </div>
    </>
  )
}
export default App

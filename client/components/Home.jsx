import React from 'react'
import Header from './Header'
import Products from './Products'
const Home = (props) => {
  return (
    <>
      <div>
        <Header />
      </div>
      <h1 className="shop">Shop</h1>
      <div className="products">
        <Products products={props.products} />
      </div>
    </>
  )
}

export default Home

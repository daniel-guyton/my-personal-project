import React from 'react'
import Header from './Header'
import About from './About'
import Products from './Products'
const Home = (props) => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <About />
      </div>
      <div className="products">
        <Products products={props.products} />
      </div>
    </>
  )
}

export default Home

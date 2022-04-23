import React from 'react'
import Product from './Product'
import Header from './Header'
import { useDispatch } from 'react-redux'
import { addToCart } from '../actions'

export default function Products(props) {
  const dispatch = useDispatch()

  const handleAddItem = (product) => {
    dispatch(addToCart(product))
  }

  return (
    <>
      <Header />
      <h1 className="shop">Shop</h1>
      <div className="products">
        {props.products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddItem={handleAddItem}
          />
        ))}
      </div>
    </>
  )
}

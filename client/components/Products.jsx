import React from 'react'
import Product from './Product'
import Header from './Header'
import { useDispatch } from 'react-redux'
import { addToCart } from '../actions'
import { useNavigate } from 'react-router'

export default function Products(props) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleAddItem = (product) => {
    dispatch(addToCart(product))
  }
  const handleNavigate = () => navigate('/additem')

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
      <div className="addproduct">
        <button className="additem" onClick={handleNavigate}>
          Add a product
        </button>
      </div>
    </>
  )
}

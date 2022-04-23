import React from 'react'
import Header from './Header'
import { twoDecimalPlaces } from './helpers'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { updateCartQuantity, deleteCartItem } from '../actions'
export default function Cart() {
  const navigate = useNavigate()
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  const handleChange = (itemId, quantity) => {
    dispatch(updateCartQuantity(itemId, quantity))
  }

  const handleNavigate = () => navigate('/shop')

  const handleDelete = (itemId) => {
    dispatch(deleteCartItem(itemId))
  }

  return (
    <>
      <Header />
      <h3>Your Cart</h3>
      {cart.items.map((item) => (
        <div key={item.id} className="cart-items">
          <img className="cart-images" src={item.img}></img>
          <div className="item-content">
            <h4>{item.name}</h4>
            <p>
              Price: {`$${twoDecimalPlaces(item.price * item.quantity)} NZD`}
            </p>
            <div className="quantity-box">
              <p>Quantity:</p>
              <div className="quantity">
                <input
                  type="number"
                  min={1}
                  max={100}
                  value={item.quantity}
                  onChange={(e) => handleChange(item.id, e.target.value)}
                ></input>
              </div>
            </div>
          </div>
          <div className="remove-item">
            <button onClick={() => handleDelete(item.id)}>X</button>
          </div>
        </div>
      ))}
      <div className="total-button">
        <h4>Total: {`$${twoDecimalPlaces(cart.totalPrice)} NZD`}</h4>
        <button className="proceed">Proceed to checkout</button>
        <button className="continue" onClick={handleNavigate}>
          Continue Shopping
        </button>
      </div>
    </>
  )
}

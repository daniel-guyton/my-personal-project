import React from 'react'
import { useCart } from '../context/cart.context'
import Header from './Header'

export default function Cart() {
  const cartItems = useCart()
  const { cart, setCart } = cartItems
  console.log(cart)

  const handleChange = (itemId, quantity) => {
    setCart((prevNewCartData) => {
      const updatedItems = prevNewCartData.items.map((item) => {
        if (item.id === itemId) {
          item.quantity = parseInt(quantity)
        }
        return item
      })
      return {
        ...prevNewCartData,
        items: updatedItems,
        totalPrice: updatedItems.reduce(
          (totalPrice, updatedCartItem) =>
            totalPrice + updatedCartItem.price * updatedCartItem.quantity,
          0
        ),
        totalItems: updatedItems.reduce(
          (total, updatedCartItem) => total + updatedCartItem.quantity,
          0
        ),
      }
    })
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
            <p>Price: {`$${item.price * item.quantity}`} NZD</p>
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
        </div>
      ))}
      <div className="total-button">
        <h4>Total: {`$${cart.totalPrice}`}</h4>
        <button>Proceed to checkout</button>
      </div>
    </>
  )
}

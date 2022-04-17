import React from 'react'
import { useCart } from '../context/cart.context'
import Header from './Header'
import { getTotalPricesAndItems, twoDecimalPlaces } from './helpers'
import { useNavigate } from 'react-router-dom'

export default function Cart() {
  const navigate = useNavigate()
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
        ...getTotalPricesAndItems(updatedItems),
      }
    })
  }

  const handleNavigate = () => navigate('/shop')

  const handleDelete = (itemId) => {
    const cartItems = [...cart.items]
    //findIndex of the item you clicked
    const indexOfCartItemToBeRemoved = cartItems.findIndex(
      (cartItem) => cartItem.id === itemId
    )
    //if index doesnt exist exit
    if (indexOfCartItemToBeRemoved < 0) return
    //remove item at index
    cartItems.splice(indexOfCartItemToBeRemoved, 1)
    //setcart to updated cartItems and change total price based on cart items
    setCart({ items: cartItems, ...getTotalPricesAndItems(cartItems) })
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

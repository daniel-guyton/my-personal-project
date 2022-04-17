import React from 'react'
import { HiShoppingCart } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { useCart } from '../context/cart.context'
const Header = () => {
  const { cart } = useCart()
  return (
    <>
      <div className="navbar">
        <h1>Shop</h1>
        <div>
          <ul className="nav-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="cart">
                <div>
                  <div>
                    <span className="cart-count">{cart.totalItems}</span>
                  </div>
                  <HiShoppingCart className="shop-icon" />
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <style jsx="true">
        {`
          h1 {
            padding: 10px;
            font-weight: 700;
          }
        `}
      </style>
    </>
  )
}

export default Header

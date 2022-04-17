import React from 'react'
import { HiShoppingCart } from 'react-icons/hi'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/cart.context'
const Header = () => {
  const navigate = useNavigate()
  const { cart } = useCart()

  const handleNavigate = () => navigate('/cart')
  return (
    <>
      <div className="navbar">
        <img className="logo" src="/images/chadclothing.png"></img>
        <div>
          <ul className="nav-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <div onClick={handleNavigate} className="cart-icon">
                <div>
                  <span className="cart-count">{cart.totalItems}</span>
                </div>
                <HiShoppingCart className="shop-icon" />
              </div>
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

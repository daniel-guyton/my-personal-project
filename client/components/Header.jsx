import React from 'react'
import { HiShoppingCart } from 'react-icons/hi'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <>
      <div className="navbar">
        <h1>Shop</h1>
        <div>
          <ul className="nav-list">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <Link to="checkout">
                <HiShoppingCart className="shop-icon" />
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

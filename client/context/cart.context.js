import React, { useState } from 'react'

const CartContext = React.createContext({})

const CartProvider = (props) => {
  const [cart, setCart] = useState({ items: [], totalPrice: 0, totalItems: 0 })

  return <CartContext.Provider value={{ cart, setCart }} {...props} />
}

const useCart = () => React.useContext(CartContext)

export { CartProvider, useCart, CartContext }

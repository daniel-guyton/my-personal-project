import React from 'react'
import useSessionState from '../hooks/session.hook'

const CartContext = React.createContext({})

const CartProvider = (props) => {
  const [cart, setCart] = useSessionState('cart', {
    items: [],
    totalPrice: 0,
    totalItems: 0,
  })

  return <CartContext.Provider value={{ cart, setCart }} {...props} />
}

const useCart = () => React.useContext(CartContext)

export { CartProvider, useCart, CartContext }

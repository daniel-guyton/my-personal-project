import React from 'react'
import Product from './Product'
import { useCart } from '../context/cart.context'

export default function Products(props) {
  const { setCart } = useCart()

  const handleAddItem = (e) => {
    setCart((prevNewCartData) => {
      const items = [...prevNewCartData.items]

      const updatedItems = items.map((item) => {
        if (item.id === e.id) {
          item.quantity += 1
        }
        return item
      })
      if (!updatedItems.some((item) => item.id === e.id)) {
        updatedItems.push({ ...e, quantity: 1 })
      }
      return {
        items: [...updatedItems],
        totalPrice: prevNewCartData.totalPrice + e.price,
        totalItems: prevNewCartData.totalItems + 1,
      }
    })
  }

  return (
    <>
      {props.products.map((product) => (
        <Product
          key={product.id}
          product={product}
          handleAddItem={handleAddItem}
        />
      ))}
    </>
  )
}

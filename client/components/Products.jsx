import React from 'react'
import Product from './Product'
import Header from './Header'
import { useCart } from '../context/cart.context'
import { getTotalPricesAndItems } from './helpers'
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
        ...getTotalPricesAndItems(updatedItems),
      }
    })
  }

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
    </>
  )
}

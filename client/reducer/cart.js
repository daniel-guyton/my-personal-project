import { ADD_TO_CART, UPDATE_CART_QUANTITY, DELETE_CART_ITEM } from '../actions'
import { getTotalPricesAndItems } from '../components/helpers'

const intialState = {
  items: [],
  totalPrice: 0,
  totalItems: 0,
}

function addToCart(state = intialState, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      const items = state.items.map((item) => ({ ...item }))

      const updatedItems = items.map((item) => {
        if (item.id === action.payload.item.id) {
          item.quantity += 1
        }
        return item
      })

      if (!updatedItems.some((item) => item.id === action.payload.item.id)) {
        updatedItems.push({ ...action.payload.item, quantity: 1 })
      }

      return {
        ...state,
        items: updatedItems,
        ...getTotalPricesAndItems(updatedItems),
      }
    }

    case UPDATE_CART_QUANTITY: {
      const items = state.items.map((item) => ({ ...item }))

      const updatedItems = items.map((item) => {
        if (item.id === action.payload.item.id) {
          item.quantity = parseInt(action.payload.item.quantity)
        }
        return item
      })
      return {
        ...state,
        items: updatedItems,
        ...getTotalPricesAndItems(updatedItems),
      }
    }

    case DELETE_CART_ITEM: {
      const cartItems = state.items.map((item) => ({ ...item }))
      //findIndex of the item you clicked
      const indexOfCartItemToBeRemoved = cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      )
      //if index doesnt exist exit
      if (indexOfCartItemToBeRemoved < 0) return
      //remove item at index
      cartItems.splice(indexOfCartItemToBeRemoved, 1)
      //setcart to updated cartItems and change total price based on cart items
      return { items: cartItems, ...getTotalPricesAndItems(cartItems) }
    }
    default: {
      return state
    }
  }
}

export default addToCart

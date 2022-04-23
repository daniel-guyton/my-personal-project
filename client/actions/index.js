export const ADD_TO_CART = 'cart/add'
export const UPDATE_CART_QUANTITY = 'cart/update'
export const DELETE_CART_ITEM = 'cart/delete'
export const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: { item },
})

export const updateCartQuantity = (itemId, quantity) => ({
  type: UPDATE_CART_QUANTITY,
  payload: { item: { id: itemId, quantity } },
})

export const deleteCartItem = (itemId) => ({
  type: DELETE_CART_ITEM,
  payload: { id: itemId },
})

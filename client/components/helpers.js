export const getTotalPricesAndItems = (cartItems) => ({
  totalPrice: cartItems.reduce(
    (totalPrice, updatedCartItem) =>
      //price calculated based on the price of the item multiplied by the quantity
      //and then added to acc
      totalPrice + updatedCartItem.price * updatedCartItem.quantity,
    0
  ),
  totalItems: cartItems.reduce(
    // add quanity of all items to acc
    (total, updatedCartItem) => total + updatedCartItem.quantity,
    0
  ),
})

export const twoDecimalPlaces = (number) => {
  return parseFloat(number).toFixed(2)
}

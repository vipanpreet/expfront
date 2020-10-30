export const addItemToCart = (cartItems, cartItemToAdd) => {
  const storeId = Date.now();

  return {
    ...cartItems,
    [storeId]: { ...cartItemToAdd, storeId },
  };
};

export const clearItemFromCart = (cartItems, cartItemToRemove) => {
  const { [cartItemToRemove.storeId]: removedCartItem, ...newCartItems } = {
    ...cartItems,
  };
  return newCartItems;
};

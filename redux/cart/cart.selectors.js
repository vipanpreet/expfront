import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector([selectCart], cart =>
  Object.values(cart.cartItems)
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.length
);



import {
  CART_ADD_REQUEST,
  CART_ADD_SUCCESS,
  CART_ADD_FAIL,
  CART_GET_REQUEST,
  CART_GET_SUCCESS,
  CART_GET_FAIL
} from './cart.types';

const cartReducer = (state = { cartList : []}, action) => {
  switch (action.type) {
    case CART_ADD_REQUEST:
      return {
        ...state,loading: true
      };
    case CART_ADD_SUCCESS:
      return {
        loading: false, cartList : action.payload
      };
    case CART_ADD_FAIL:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};

export default cartReducer;

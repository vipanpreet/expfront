import {
  CART_ADD_REQUEST,
  CART_ADD_SUCCESS,
  CART_ADD_FAIL,
  CART_GET_REQUEST,
  CART_GET_SUCCESS,
  CART_GET_FAIL,
} from "./cart.types";

// getting the cart items from the local storage
if (typeof window !== "undefined") {
  var cartData = JSON.parse(localStorage.getItem("cart"));
}

const INITIAL_STATE = {
  loading: false,
  cartItems: cartData == "undefined" ? [] : cartData,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CART_ADD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CART_ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        cartList: action.payload,
      };
    case CART_ADD_FAIL:
      return {
        ...state,
        loading: false,
      };
    case CART_GET_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CART_GET_SUCCESS:
      return {
        ...state,
        loading: false,
        cartItems: action.payload,
      };
    case CART_GET_FAIL:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default cartReducer;

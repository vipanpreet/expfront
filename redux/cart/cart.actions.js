import {
  CART_ADD_REQUEST,
  CART_ADD_SUCCESS,
  CART_ADD_FAIL,
  CART_GET_REQUEST,
  CART_GET_SUCCESS,
  CART_GET_FAIL,
} from "./cart.types";
import axios from "axios";
import { setAlert } from "../Alert/alert.actions";

export const addItem = (cart) => async (dispatch, getState) => {
  try {
    dispatch({ type: CART_ADD_REQUEST });
    const {
      login: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: userInfo.token,
      },
    };
    const { data } = await axios.post(
      `https://arktasticbackend.herokuapp.com/api/user/cart`,
      { cart },
      config
    );
    dispatch({
      type: CART_ADD_SUCCESS,
      payload: cart,
    });

    // emptying the localstorage and then populating with new cart array
    localStorage.removeItem("cart");
    localStorage.setItem("cart", JSON.stringify(cart));

    dispatch(setAlert("Product Added to Cart", "success", 2500));
  } catch (error) {
    dispatch({
      type: CART_ADD_FAIL,
      payload:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.msg,
    });
  }
};

export const getCartItems = () => async (dispatch, useState) => {
  try {
    dispatch({ type: CART_GET_REQUEST });
    const {
      login: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: userInfo.token,
      },
    };

    const { data } = await axios.get(
      `https://arktasticbackend.herokuapp.com/api/user/cart`,
      config
    );
    dispatch({
      type: CART_GET_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CART_GET_FAIL,
      payload:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.msg,
    });
  }
};

import {
  CART_ADD_REQUEST,
  CART_ADD_SUCCESS,
  CART_ADD_FAIL,
  CART_GET_REQUEST,
  CART_GET_SUCCESS,
  CART_GET_FAIL,
} from "./cart.types";
import axios from "axios";
import { BACK_URI } from "../../config/keys";
import _ from "lodash";

export const addItem = (cart) => async (dispatch, getState) => {
  try {
    const {
      auth: { userInfo },
    } = getState();
    if (_.isEmpty(userInfo)) {
      return;
    }
    dispatch({ type: CART_ADD_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: userInfo.token,
      },
    };
    const { data } = await axios.post(
      `${BACK_URI}/api/user/cart`,
      { cart },
      config
    );
    // calling this action to get all the items saved in the DB
    dispatch(getCartItems());
    dispatch({
      type: CART_ADD_SUCCESS,
      payload: data,
    });
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

export const getCartItems = () => async (dispatch, getState) => {
  try {
    const {
      auth: { userInfo },
    } = getState();
    if (_.isEmpty(userInfo)) {
      localStorage.removeItem("cart");
      return;
    }
    dispatch({ type: CART_GET_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: userInfo.token,
      },
    };

    const { data } = await axios.get(`${BACK_URI}/api/user/cart`, config);

    dispatch({
      type: CART_GET_SUCCESS,
      payload: data,
    });

    // emptying the localstorage and then populating with new cart array
    localStorage.removeItem("cart");
    localStorage.setItem("cart", JSON.stringify(data));
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

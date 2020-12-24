import axios from "axios";
import { BACK_URI } from "../../config/keys";
import {
  PRODUCTS_LIST_REQUEST,
  PRODUCTS_LIST_SUCCESS,
  PRODUCTS_LIST_FAIL,
  SEARCH_LIST_REQUEST,
  SEARCH_LIST_SUCCESS,
  SEARCH_LIST_FAIL,
  REVIEW_ADD_REQUEST,
  REVIEW_ADD_FAIL,
  REVIEW_ADD_SUCCESS,
  PRODUCT_GET_REQUEST,
  PRODUCT_GET_SUCCESS,
  PRODUCT_GET_FAIL,
} from "./products.types";
import { removeAlert, setAlert } from "../Alert/alert.actions";

export const productList = (
  category,
  subcategory,
  q,
  type,
  department,
  pageNumber,
  sortBy,
  sortDirection
) => async (dispatch) => {
  var response = {};
  try {
    !sortBy && (sortBy = "");
    !sortDirection && (sortDirection = "");
    !pageNumber && (pageNumber = "");
    !category && (category = "");
    !subcategory && (subcategory = "");
    !q && (q = "");
    !type && (type = "");
    !department && (department = "");
    dispatch({ type: PRODUCTS_LIST_REQUEST });

    if (subcategory && subcategory.length > 3) {
      response = await axios.get(
        `${BACK_URI}/api/products/all/${category}/${subcategory}?q=${q}&type=${type}&department=${department}&pagenumber=${pageNumber}&sortby=${sortBy}&sortdirection=${sortDirection}`
      );
    } else {
      response = await axios.get(
        `${BACK_URI}/api/products/all/${category}?q=${q}&type=${type}&department=${department}&pagenumber=${pageNumber}&sortby=${sortBy}&sortdirection=${sortDirection}`
      );
    }

    dispatch({
      type: PRODUCTS_LIST_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch(removeAlert());

    dispatch({
      type: PRODUCTS_LIST_FAIL,
      payload:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.msg,
    });
  }
};

export const getSearchList = (query) => async (dispatch) => {
  try {
    dispatch({ type: SEARCH_LIST_REQUEST });
    const { data } = await axios.get(`${BACK_URI}/api/search/${query}`);

    dispatch({
      type: SEARCH_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SEARCH_LIST_FAIL,
      payload:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.msg,
    });
  }
};

export const addRating = (id, rating, comment) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({ type: REVIEW_ADD_REQUEST });

    const {
      auth: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: userInfo.token,
      },
    };
    const { data } = await axios.post(
      `${BACK_URI}/api/products/${id}/reviews`,
      { rating, comment },
      config
    );
    // calling this action to get all the items saved in the DB

    dispatch({
      type: REVIEW_ADD_SUCCESS,
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: REVIEW_ADD_FAIL,
      payload:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.msg,
    });
  }
};

export const getSingleProduct = (productId) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_GET_REQUEST });

    const { data } = await axios.get(
      `${BACK_URI}/api/products/single/${productId}`
    );

    dispatch({
      type: PRODUCT_GET_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_GET_FAIL,
      payload:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.msg,
    });
  }
};

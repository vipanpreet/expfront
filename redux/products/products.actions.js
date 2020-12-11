import axios from "axios";
import {
  PRODUCTS_LIST_REQUEST,
  PRODUCTS_LIST_SUCCESS,
  PRODUCTS_LIST_FAIL,
  SEARCH_LIST_REQUEST,
  SEARCH_LIST_SUCCESS,
  SEARCH_LIST_FAIL,
} from "./products.types";
import { removeAlert, setAlert } from "../Alert/alert.actions";

export const productList = (
  category,
  subcategory,
  q,
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
    dispatch({ type: PRODUCTS_LIST_REQUEST });

    if (subcategory && subcategory.length > 3) {
      response = await axios.get(
        `https://arktasticbackend.herokuapp.com/api/products/all/${category}/${subcategory}?q=${q}&pagenumber=${pageNumber}&sortby=${sortBy}&sortdirection=${sortDirection}`
      );
    } else {
      response = await axios.get(
        `https://arktasticbackend.herokuapp.com/api/products/all/${category}?q=${q}&pagenumber=${pageNumber}&sortby=${sortBy}&sortdirection=${sortDirection}`
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
    const { data } = await axios.get(
      `https://arktasticbackend.herokuapp.com/api/search/${query}`
    );

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

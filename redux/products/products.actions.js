import axios from "axios";
import {
  PRODUCTS_LIST_REQUEST,
  PRODUCTS_LIST_SUCCESS,
  PRODUCTS_LIST_FAIL,
} from "./products.types";
import { removeAlert, setAlert } from "../Alert/alert.actions";

export const productList = (
  category,
  subcategory,
  pageNumber,
  sortBy,
  sortDirection
) => async (dispatch) => {
  var response = {};
  try {
    var isSub;
    !sortBy && (sortBy = "");
    !sortDirection && (sortDirection = "");
    !pageNumber && (pageNumber = "");
    if (subcategory > 0 && subcategory < 2) {
      isSub = false;
    }
    if (subcategory > 3 && subcategory < 18) {
      isSub = true;
    }
    dispatch({ type: PRODUCTS_LIST_REQUEST });

    if (subcategory != undefined && !isSub) {
      response = await axios.get(
        `https://arktasticbackend.herokuapp.com/api/products/all/${category}/${subcategory}?pagenumber=${pageNumber}&sortby=${sortBy}&sortdirection=${sortDirection}`
      );
    } else {
      response = await axios.get(
        `https://arktasticbackend.herokuapp.com/api/products/all/${category}?pagenumber=${pageNumber}&sortby=${sortBy}&sortdirection=${sortDirection}`
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

export default productList;

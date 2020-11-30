import axios from "axios";
import {
  CATEGORY_LIST_REQUEST,
  CATEGORY_LIST_SUCCESS,
  CATEGORY_LIST_FAIL,
  SUBCATEGORY_LIST_REQUEST,
  SUBCATEGORY_LIST_SUCCESS,
  SUBCATEGORY_LIST_FAIL,
  CATEGORY_STATE_SAVE,
  SUBCATEGORY_STATE_SAVE,
} from "./category.types";

export const listCategories = () => async (dispatch) => {
  try {
    dispatch({ type: CATEGORY_LIST_REQUEST });
    const { data } = await axios.get(
      `https://arktasticbackend.herokuapp.com/api/category/`
    );
    dispatch({
      type: CATEGORY_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CATEGORY_LIST_FAIL,
      payload:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.msg,
    });
  }
};

export const listSubCategories = (slug) => async (dispatch) => {
  try {
    dispatch({ type: SUBCATEGORY_LIST_REQUEST });
    const { data } = await axios.get(
      `https://arktasticbackend.herokuapp.com/api/category/subcategories/${slug}`
    );
    dispatch({
      type: SUBCATEGORY_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SUBCATEGORY_LIST_FAIL,
      payload:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.msg,
    });
  }
};

export const saveCategoryState = (category) => ({
  type: CATEGORY_STATE_SAVE,
  payload: category,
});

export const saveSubCategoryState = (subCategory) => ({
  type: SUBCATEGORY_STATE_SAVE,
  payload: subCategory,
});

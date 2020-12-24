import {
  CATEGORY_LIST_REQUEST,
  CATEGORY_LIST_SUCCESS,
  CATEGORY_LIST_FAIL,
  SUBCATEGORY_LIST_REQUEST,
  SUBCATEGORY_LIST_SUCCESS,
  SUBCATEGORY_LIST_FAIL,
  SUBCATEGORY_STATE_REMOVE
} from "./category.types";

export const categoryListReducer = (state = { categories: [] }, action) => {
  switch (action.type) {
    case CATEGORY_LIST_REQUEST:
      return { ...state, loading: true, categories: [] };
    case CATEGORY_LIST_SUCCESS:
      return { ...state, loading: false, categories: action.payload };
    case CATEGORY_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const subCategoryListReducer = (
  state = { subcategories: [] },
  action
) => {
  switch (action.type) {
    case SUBCATEGORY_LIST_REQUEST:
      return { ...state, loading: true, subcategories: [] };
    case SUBCATEGORY_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        subcategories: action.payload,
      };
    case SUBCATEGORY_LIST_FAIL:
      return { loading: false, error: action.payload };

    case SUBCATEGORY_STATE_REMOVE:
    return { ...state,subcategories: [] }

    default:
      return state;
  }
};

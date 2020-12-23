import {
  PRODUCTS_LIST_REQUEST,
  PRODUCTS_LIST_SUCCESS,
  PRODUCTS_LIST_FAIL,
  SEARCH_LIST_REQUEST,
  SEARCH_LIST_SUCCESS,
  SEARCH_LIST_FAIL,
  SEARCH_LIST_CLEAR,
  REVIEW_ADD_REQUEST,
  REVIEW_ADD_FAIL,
  REVIEW_ADD_SUCCESS,
} from "./products.types";

export const productsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCTS_LIST_REQUEST:
      return { ...state, loading: true, products: [] };
    case PRODUCTS_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload.products,
        pages: action.payload.pages,
        page: action.payload.page,
      };
    case PRODUCTS_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };

    case SEARCH_LIST_REQUEST:
      return { ...state, searchLoading: true, search: [] };

    case SEARCH_LIST_SUCCESS:
      return {
        ...state,
        searchLoading: false,
        search: action.payload,
      };
    case SEARCH_LIST_FAIL:
      return { ...state, searchLoading: false, error: action.payload };
    case SEARCH_LIST_CLEAR:
      return { ...state, searchLoading: false, search: [] };

    case REVIEW_ADD_REQUEST:
      return { ...state, loading: true, search: [], error: "" };

    case REVIEW_ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload,
        error: "",
      };
    case REVIEW_ADD_FAIL:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

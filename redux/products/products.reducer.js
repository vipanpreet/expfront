import {
  PRODUCTS_LIST_REQUEST,
  PRODUCTS_LIST_SUCCESS,
  PRODUCTS_LIST_FAIL,
  SEARCH_LIST_REQUEST,
  SEARCH_LIST_SUCCESS,
  SEARCH_LIST_FAIL,
  SEARCH_LIST_CLEAR,
} from "./products.types";

export const productsListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCTS_LIST_REQUEST:
      return { loading: true, products: [] };
    case PRODUCTS_LIST_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        pages: action.payload.pages,
        page: action.payload.page,
      };
    case PRODUCTS_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const searchListReducer = (state = { search: [] }, action) => {
  switch (action.type) {
    case SEARCH_LIST_REQUEST:
      return { loading: true, search: [] };
    case SEARCH_LIST_SUCCESS:
      return {
        loading: false,
        search: action.payload,
      };
    case SEARCH_LIST_FAIL:
      return { loading: false, error: action.payload };
    case SEARCH_LIST_CLEAR:
      return { loading: false, search: [] };
    default:
      return state;
  }
};

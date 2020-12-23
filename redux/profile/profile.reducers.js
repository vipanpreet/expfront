import {
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAIL,
  PROFILE_CREATE_REQUEST,
  PROFILE_CREATE_SUCCESS,
  PROFILE_CREATE_FAIL,
  WISHLIST_ADD_REQUEST,
  WISHLIST_ADD_SUCCESS,
  WISHLIST_ADD_FAIL,
  WISHLIST_DELETE_REQUEST,
  WISHLIST_DELETE_SUCCESS,
  WISHLIST_DELETE_FAIL,
} from "./profile.types";

if (typeof window !== "undefined") {
  var profileFromStorage = localStorage.getItem("profile")
    ? JSON.parse(localStorage.getItem("profile"))
    : null;
}
const INITIAL_STATE = {
  loading: false,
  error: "",
  messageWishlist: "",
  success: false,
  profile: {},
};
if (profileFromStorage) {
  INITIAL_STATE.profile = profileFromStorage;
}
export const profileGetReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PROFILE_REQUEST || WISHLIST_ADD_REQUEST || WISHLIST_DELETE_REQUEST:
      return { ...state, loading: true, success: false };
    case GET_PROFILE_SUCCESS:
      return {
        loading: false,
        profile: action.payload,
        success: true,
      };
    case GET_PROFILE_FAIL || WISHLIST_ADD_FAIL || WISHLIST_DELETE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        success: false,
      };
    case WISHLIST_ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        messageWishlist: action.payload,
        success: false,
      };
    case WISHLIST_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        messageWishlist: action.payload,
        success: false,
      };

    default:
      return state;
  }
};

export const profileCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PROFILE_CREATE_REQUEST:
      return { loading: true, ...state };
    case PROFILE_CREATE_SUCCESS:
      return {
        loading: false,
        message: action.payload,
      };
    case PROFILE_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

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
} from "./profile.types";

if (typeof window !== "undefined") {
  var profileFromStorage = localStorage.getItem("profile")
    ? JSON.parse(localStorage.getItem("profile"))
    : null;
}

export const profileGetReducer = (
  state = { profile: profileFromStorage },
  action
) => {
  switch (action.type) {
    case GET_PROFILE_REQUEST || WISHLIST_ADD_REQUEST:
      return { loading: true, ...state };
    case GET_PROFILE_SUCCESS:
      return {
        loading: false,
        profile: action.payload,
        success: true,
      };
    case GET_PROFILE_FAIL || WISHLIST_ADD_FAIL:
      return { ...state, loading: false, error: action.payload };
    case WISHLIST_ADD_SUCCESS:
      return { ...state, loading: false, messageWishlist: action.payload };
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

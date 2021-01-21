import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_FORGOT_REQUEST,
  USER_FORGOT_SUCCESS,
  USER_FORGOT_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_RESET_REQUEST,
  USER_RESET_SUCCESS,
  USER_RESET_FAIL,
  USER_LOGOUT,
  TOKEN_LOADING,
  TOKEN_VERIFIED,
  TOKEN_NOTVERIFIED,
} from "./auth.types.js";

if (typeof window !== "undefined") {
  var userInfoFromStorage = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;
}

const INITIAL_STATE = {
  loading: false,
  error: "",
  message: "",
  forgotmessage: "",
  userInfo: {},
};
// if (userInfoFromStorage) {
//   INITIAL_STATE.userInfo = userInfoFromStorage;
// }
export const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload,
        error: "",
      };
    case USER_REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        message: "",
      };

    case USER_FORGOT_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case USER_FORGOT_SUCCESS:
      return {
        ...state,
        loading: false,
        forgotmessage: action.payload,
        error: "",
      };
    case USER_FORGOT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        forgotmessage: "",
      };
    case USER_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
        userInfo: {},
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        userInfo: action.payload,
        error: "",
      };
    case USER_LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        userInfo: {},
      };

    case TOKEN_LOADING:
      return {
        ...state,
        loading: true,
      };
    case TOKEN_VERIFIED:
      return {
        ...state,
        loading: false,
        message: action.payload,
        error: "",
      };
    case TOKEN_NOTVERIFIED:
      return {
        ...state,
        loading: false,
        message: "",
        error: action.payload,
      };
    case USER_RESET_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_RESET_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload,
        error: "",
      };
    case USER_RESET_FAIL:
      return {
        ...state,
        loading: false,
        message: "",
        error: action.payload,
      };
    case USER_LOGOUT:
      return { ...state, userInfo: {} };
    default:
      return state;
  }
};

export default authReducer;

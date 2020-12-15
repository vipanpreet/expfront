import loginActionTypes from "./login.types";

if (typeof window !== "undefined") {
  var userInfoFromStorage = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;
}

const INITIAL_STATE = {
  loading: false,
  userInfo: {},
  error: "",
  message: "",
};
if (userInfoFromStorage) {
  INITIAL_STATE.userInfo = userInfoFromStorage;
}
export const userLoginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case loginActionTypes.USER_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
        userInfo: {},
      };
    case loginActionTypes.USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        userInfo: action.payload,
        error: "",
      };
    case loginActionTypes.USER_LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        userInfo: {},
      };

    case loginActionTypes.TOKEN_LOADING:
      return {
        ...state,
        loading: true,
      };
    case loginActionTypes.TOKEN_VERIFIED:
      return {
        ...state,
        loading: false,
        message: action.payload,
        error: "",
      };
    case loginActionTypes.TOKEN_NOTVERIFIED:
      return {
        ...state,
        loading: false,
        message: "",
        error: action.payload,
      };
    case loginActionTypes.USER_LOGOUT:
      return { ...state, userInfo: {} };
    default:
      return state;
  }
};

export default userLoginReducer;

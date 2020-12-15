import registerActionTypes from "./register.types";

const {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
} = registerActionTypes;

const INITIAL_STATE = {
  loading: false,
  error: "",
  message: "",
};

export const userRegisterReducer = (state = INITIAL_STATE, action) => {
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
    default:
      return state;
  }
};

export default userRegisterReducer;

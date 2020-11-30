import loginActionTypes from "./login.types";
import axios from "axios";

const {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  TOKEN_LOADING,
  TOKEN_VERIFIED,
  TOKEN_NOTVERIFIED,
} = loginActionTypes;

export const login = (email, password) => async (dispatch) => {
  try {
    // dispatching action to display loader
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      "http://localhost:5000/api/auth/login",
      { email, password },
      config
    );

    // calling the success action to set state
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.msg,
    });
  }
};
export const confirmUser = (token) => async (dispatch) => {
  try {
    // dispatching action to display loader
    dispatch({
      type: TOKEN_LOADING,
    });

    const { data } = await axios.get(
      `http://localhost:5000/api/auth/confirmation/${token}`
    );
    dispatch({
      type: TOKEN_VERIFIED,
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: TOKEN_NOTVERIFIED,
      payload:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.msg,
    });
  }
};

export const logout = () => (dispatch) => {
  dispatch({ type: USER_LOGOUT });
};

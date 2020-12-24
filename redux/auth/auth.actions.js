import axios from "axios";
import { BACK_URI } from "../../config/keys";
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

import { setAlert, removeAlert } from "../Alert/alert.actions";

export const register = (email, firstName, lastName, password) => async (
  dispatch
) => {
  try {
    // dispatching action to display loader
    dispatch({
      type: USER_REGISTER_REQUEST,
    });
    dispatch(setAlert(" ", "loading"));
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `${BACK_URI}/api/auth/register`,
      { email, firstName, lastName, password },
      config
    );

    // calling the success action to set state
    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data.message,
    });
    dispatch(setAlert("Registeration Done", "success", 4500));
  } catch (error) {
    dispatch(removeAlert());

    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.msg,
    });
  }
};

export const login = (email, password) => async (dispatch) => {
  try {
    // dispatching action to display loader
    dispatch({
      type: USER_LOGIN_REQUEST,
    });
    dispatch(setAlert("Getting into your Account", "loading"));

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      `${BACK_URI}/api/auth/login`,
      { email, password },
      config
    );

    // calling the success action to set state
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });
    sessionStorage.setItem("userInfo", JSON.stringify(data));
    dispatch(removeAlert());
  } catch (error) {
    dispatch(removeAlert());

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
      `${BACK_URI}/api/auth/confirmation/${token}`
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
  localStorage.removeItem("userInfo");
};

export const forgot = (email) => async (dispatch) => {
  try {
    // dispatching action to display loader
    dispatch({
      type: USER_FORGOT_REQUEST,
    });
    dispatch(setAlert("sending reset link", "loading"));
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "${BACK_URI}/api/auth/forgot",
      { email },
      config
    );

    dispatch({
      type: USER_FORGOT_SUCCESS,
      payload: data.message,
    });
    dispatch(setAlert("RESET LINK SENT", "success", 3000));
  } catch (error) {
    dispatch(setAlert(" ", "loading", 200));
    dispatch({
      type: USER_FORGOT_FAIL,
      payload:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.msg,
    });
  }
};

export const reset = (token, password) => async (dispatch) => {
  try {
    // dispatching action to display loader
    dispatch(setAlert(" ", "loading"));

    dispatch({
      type: USER_RESET_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      `${BACK_URI}/api/auth/reset/${token}`,
      {
        password,
      },
      config
    );
    dispatch({
      type: USER_RESET_SUCCESS,
      payload: data.message,
    });
    dispatch(setAlert("PASSWORD CHANGED SUCCESSFULLY", "success", 3000));
  } catch (error) {
    dispatch(removeAlert());
    dispatch({
      type: USER_RESET_FAIL,
      payload:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.msg,
    });
  }
};

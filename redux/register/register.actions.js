import registerActionTypes from "./register.types";
import axios from "axios";

const {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
} = registerActionTypes;
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
      "http://localhost:5000/api/auth/register",
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
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.msg,
    });
  }
};

import registerActionTypes from "./register.types";
import axios from "axios";

const {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
} = registerActionTypes;

export const register = (email, firstName, lastName, password) => async (
  dispatch
) => {
  try {
    // dispatching action to display loader
    dispatch({
      type: USER_REGISTER_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "https://arktasticbackend.herokuapp.com/api/auth/register",
      { email, firstName, lastName, password },
      config
    );

    // calling the success action to set state
    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data.message,
    });
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

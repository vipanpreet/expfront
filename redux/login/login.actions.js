import loginActionTypes from "./login.types";
import axios from "axios";

export const loggedIn = (status) => ({
  type: loginActionTypes.LOGGEDIN,
  payload: status,
});

export const login = (email, password) => async (dispatch) => {
  console.log("in the actions");
  console.log(email, password);
  try {
    // dispatching action to display loader
    dispatch({
      type: loginActionTypes.USER_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    };
    const { data } = await axios.post(
      "https://arktasticbackend.herokuapp.com/api/auth/login",
      config
    );

    // calling the success action to set state
    dispatch({
      type: loginActionTypes.USER_LOGIN_SUCCESS,
      payload: data,
    });
  } catch (error) {}
};

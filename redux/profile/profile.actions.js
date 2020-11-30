//  Need to do changes for this ..copy pasted for the time being

import axios from "axios";
import {
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAIL,
  PROFILE_CREATE_REQUEST,
  PROFILE_CREATE_SUCCESS,
  PROFILE_CREATE_FAIL,
} from "./profile.types";

export const getProfile = () => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_PROFILE_REQUEST });
    const {
      login: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: userInfo.token,
      },
    };
    console.log(userInfo);
    const { data } = await axios.get(
      `https://arktasticbackend.herokuapp.com/api/user/profile/`,
      config
    );
    dispatch({
      type: GET_PROFILE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_PROFILE_FAIL,
      payload:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.msg,
    });
  }
};

export const createProfile = (profile) => async (dispatch, getState) => {
  try {
    dispatch({ type: PROFILE_CREATE_REQUEST });
    const {
      login: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: userInfo.token,
      },
    };

    const { data } = await axios.post(
      `https://arktasticbackend.herokuapp.com/api/user/profile/`,
      profile,
      config
    );
    console.log(profile);
    dispatch({
      type: PROFILE_CREATE_SUCCESS,
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: PROFILE_CREATE_FAIL,
      payload:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.msg,
    });
  }
};

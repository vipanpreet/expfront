import axios from "axios";
import { BACK_URI } from "../../config/keys";
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
  WISHLIST_DELETE_REQUEST,
  WISHLIST_DELETE_SUCCESS,
  WISHLIST_DELETE_FAIL,
  WISHLIST_GET_REQUEST,
  WISHLIST_GET_SUCCESS,
  WISHLIST_GET_FAIL,
} from "./profile.types";
import { setAlert } from "../Alert/alert.actions";

export const getProfile = () => async (dispatch, getState) => {
  try {
    const {
      auth: { userInfo },
    } = getState();
    if (_.isEmpty(userInfo)) {
      return;
    }

    dispatch({ type: GET_PROFILE_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: userInfo.token,
      },
    };

    const { data } = await axios.get(`${BACK_URI}/api/user/profile/`, config);
    dispatch({
      type: GET_PROFILE_SUCCESS,
      payload: data,
    });
    localStorage.removeItem("profile");
    localStorage.setItem("profile", JSON.stringify(data));
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
    const {
      auth: { userInfo },
    } = getState();
    if (_.isEmpty(userInfo)) {
      return;
    }
    dispatch({ type: PROFILE_CREATE_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: userInfo.token,
      },
    };

    const { data } = await axios.post(
      `${BACK_URI}/api/user/profile/`,
      profile,
      config
    );

    dispatch({
      type: PROFILE_CREATE_SUCCESS,
      payload: data.message,
    });
    dispatch(setAlert("Profile Updated", "success", 2500));
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

export const addItemWishlist = (id) => async (dispatch, getState) => {
  try {
    const {
      auth: { userInfo },
    } = getState();
    if (_.isEmpty(userInfo)) {
      return;
    }
    dispatch({ type: WISHLIST_ADD_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: userInfo.token,
      },
    };

    const { data } = await axios.post(
      `${BACK_URI}/api/user/wishlist`,
      { productId: id },
      config
    );

    dispatch({
      type: WISHLIST_ADD_SUCCESS,
      payload: data.msg,
    });
    // dispatch(getItemWishlist());
    dispatch(getProfile());
    // need to check the message as... message can be " product already exist"
    dispatch(setAlert("Product Wishlisted", "success", 2500));
  } catch (error) {
    {
      dispatch({
        type: WISHLIST_ADD_FAIL,
        payload:
          error.response && error.response.data.msg
            ? error.response.data.msg
            : error.msg,
      });
    }
  }
};

export const deleteItemWishlist = (id) => async (dispatch, getState) => {
  try {
    const {
      auth: { userInfo },
    } = getState();
    if (_.isEmpty(userInfo)) {
      return;
    }
    dispatch({
      type: WISHLIST_DELETE_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: userInfo.token,
      },
    };
    const { data } = await axios.delete(
      `${BACK_URI}/api/user/wishlist/${id}`,
      config
    );
    dispatch({
      type: WISHLIST_DELETE_SUCCESS,
      payload: data.message,
    });
  } catch (error) {
    {
      dispatch({
        type: WISHLIST_DELETE_FAIL,
        payload:
          error.response && error.response.data.msg
            ? error.response.data.msg
            : error.msg,
      });
    }
  }
};

// need to do changes in this...copy pasted for the time being

import {
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAIL,
  PROFILE_CREATE_REQUEST,
  PROFILE_CREATE_SUCCESS,
  PROFILE_CREATE_FAIL,
} from "./profile.types";

export const profileGetReducer = (state = { profile: {} }, action) => {
  switch (action.type) {
    case GET_PROFILE_REQUEST:
      return { loading: true, ...state };
    case GET_PROFILE_SUCCESS:
      return { loading: false, profile: action.payload };
    case GET_PROFILE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const profileCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PROFILE_CREATE_REQUEST:
      return { loading: true, ...state };
    case PROFILE_CREATE_SUCCESS:
      return {
        loading: false,
        message: action.payload,
      };
    case PROFILE_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

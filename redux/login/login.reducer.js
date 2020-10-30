import loginActionTypes from './login.types';

const INITIAL_STATE = {
    loggedIn : false,
    loading : false,
    userInfo : {}
};

export const userLoginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case loginActionTypes.USER_LOGIN_REQUEST:
      return { 
        ...state,
        loading: true 
      };
    case loginActionTypes.USER_LOGIN_SUCCESS:
      return { 
        ...state,
        loading: false, userInfo: action.payload 
      };
    case loginActionTypes.USER_LOGIN_FAIL:
      return { 
        ...state,
        loading: false, error: action.payload 
      };
    case loginActionTypes.USER_LOGOUT:
      return {...state,userInfo : {}};
    default:
      return state;
  }
};
  
  export default userLoginReducer;
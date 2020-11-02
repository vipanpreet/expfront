import loginActionTypes from './login.types';

const INITIAL_STATE = {
    loading : false,
    userInfo : {},
    error : ''
};

export const userLoginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case loginActionTypes.USER_LOGIN_REQUEST:
      return { 
        ...state,
        loading: true, error : '', userInfo:{}
      };
    case loginActionTypes.USER_LOGIN_SUCCESS:
      return { 
        ...state,
        loading: false, userInfo: action.payload, error : ''
      };
    case loginActionTypes.USER_LOGIN_FAIL:
      return { 
        ...state,
        loading: false, error: action.payload ,userInfo:{}
      };
    case loginActionTypes.USER_LOGOUT:
      return {...state,userInfo:{}};
    default:
      return state;
  }
};
  
  export default userLoginReducer;
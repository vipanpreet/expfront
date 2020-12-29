import {
    SAVE_STORE_STATE
} from "./storeSelect.types";

if (typeof window !== "undefined") {
  var storeSelectFromStorage = sessionStorage.getItem("storeState")
    ? JSON.parse(sessionStorage.getItem("storeState"))
    : { };
}
if(storeSelectFromStorage === undefined){
  storeSelectFromStorage = {};
}

const storeSelectReducer = (state = storeSelectFromStorage, action) => {
  switch (action.type) {
    case  SAVE_STORE_STATE:
      return {
        ...action.payload
      };
    default:
      return state;
  }
};

export default storeSelectReducer;
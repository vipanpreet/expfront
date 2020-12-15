import {
    SAVE_LIFESTYLE_STATE
} from "./lifestyles.types";

if (typeof window !== "undefined") {
  var lifestyleFromStorage = sessionStorage.getItem("lifestyle")
    ? JSON.parse(sessionStorage.getItem("lifestyle"))
    : { };
}
if(lifestyleFromStorage === undefined){
  lifestyleFromStorage = {};
}

const lifestyleReducer = (state = lifestyleFromStorage, action) => {
  switch (action.type) {
    case  SAVE_LIFESTYLE_STATE:
      return {
        ...action.payload
      };
    default:
      return state;
  }
};

export default lifestyleReducer;
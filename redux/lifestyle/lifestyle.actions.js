import {
    SAVE_LIFESTYLE_STATE
} from "./lifestyles.types";

export const saveLifestyleState = (stateObj) => {
    sessionStorage.removeItem("lifestyle");
    sessionStorage.setItem("lifestyle", JSON.stringify(stateObj));
return(
    { 
        type:SAVE_LIFESTYLE_STATE,
        payload:stateObj
    }
)
}
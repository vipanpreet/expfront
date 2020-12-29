import {
    SAVE_STORE_STATE
} from "./storeSelect.types";

export const saveStoreState = (stateObj) => {
    sessionStorage.removeItem("storeState");
    sessionStorage.setItem("storeState", JSON.stringify(stateObj));
return(
    { 
        type:SAVE_STORE_STATE,
        payload:stateObj
    }
)
}
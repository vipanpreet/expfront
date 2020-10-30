import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cartReducer from "./cart/cart.reducer";
import loginReducer from "./login/login.reducer";

const persistConfig = {
  key: "root",
  storage,
  // whitelist - slices of the store that are persisted
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  cart: cartReducer,
  login: loginReducer,
});

export default persistReducer(persistConfig, rootReducer);

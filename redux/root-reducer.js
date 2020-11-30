import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cartReducer from "./cart/cart.reducer";
import loginReducer from "./login/login.reducer";
import registerReducer from "./register/register.reducer";
import {
  profileGetReducer,
  profileCreateReducer,
} from "./profile/profile.reducers";
import { categoryListReducer,subCategoryListReducer} from "./category/category.reducers";
import  productsListReducer  from "./products/products.reducer";

const persistConfig = {
  key: "root",
  storage,
  // whitelist - slices of the store that are persisted
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  cart: cartReducer,
  login: loginReducer,
  register: registerReducer,
  profileCreate: profileCreateReducer,
  profileGet: profileGetReducer,
  categoryList: categoryListReducer,
  subCategoryList:subCategoryListReducer,
  productsList: productsListReducer
});

export default persistReducer(persistConfig, rootReducer);

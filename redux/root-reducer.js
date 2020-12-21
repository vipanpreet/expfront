import { combineReducers } from "redux";
// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

import { alertReducer } from "./Alert/alert.reducers";
import cartReducer from "./cart/cart.reducer";
import loginReducer from "./login/login.reducer";
import registerReducer from "./register/register.reducer";
import {
  profileGetReducer,
  profileCreateReducer,
} from "./profile/profile.reducers";
import {
  categoryListReducer,
  subCategoryListReducer,
} from "./category/category.reducers";
import {
  productsListReducer,
  searchListReducer,
} from "./products/products.reducer";
import lifestyleReducer from "./lifestyle/lifestyle.reducers";

// const persistConfig = {
//   key: "root",
//   storage,
//   // whitelist - slices of the store that are persisted
//   whitelist: ["cart"],
// };

const rootReducer = combineReducers({
  alertShow: alertReducer,
  cart: cartReducer,
  login: loginReducer,
  register: registerReducer,
  profileCreate: profileCreateReducer,
  profileGet: profileGetReducer,
  categoryList: categoryListReducer,
  subCategoryList: subCategoryListReducer,
  productsList: productsListReducer,
  searchList: searchListReducer,
  lifestyleState: lifestyleReducer,
});

// export default persistReducer(persistConfig, rootReducer);
export default rootReducer;

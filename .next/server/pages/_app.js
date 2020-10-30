module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./styles/style.css
var style = __webpack_require__("Y9py");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "redux-persist/integration/react"
var react_ = __webpack_require__("JPPj");

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "redux-logger"
var external_redux_logger_ = __webpack_require__("4DCN");

// EXTERNAL MODULE: external "redux-persist"
var external_redux_persist_ = __webpack_require__("VNb8");

// EXTERNAL MODULE: external "redux-thunk"
var external_redux_thunk_ = __webpack_require__("ZSx1");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_);

// EXTERNAL MODULE: external "redux-persist/lib/storage"
var storage_ = __webpack_require__("T8f9");
var storage_default = /*#__PURE__*/__webpack_require__.n(storage_);

// EXTERNAL MODULE: ./redux/cart/cart.types.js
var cart_types = __webpack_require__("MLT3");

// CONCATENATED MODULE: ./redux/cart/cart.utils.js
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const addItemToCart = (cartItems, cartItemToAdd) => {
  const storeId = Date.now();
  return _objectSpread(_objectSpread({}, cartItems), {}, {
    [storeId]: _objectSpread(_objectSpread({}, cartItemToAdd), {}, {
      storeId
    })
  });
};
const clearItemFromCart = (cartItems, cartItemToRemove) => {
  const _cartItems = _objectSpread({}, cartItems),
        _cartItemToRemove$sto = cartItemToRemove.storeId,
        {
    [_cartItemToRemove$sto]: removedCartItem
  } = _cartItems,
        newCartItems = _objectWithoutProperties(_cartItems, [_cartItemToRemove$sto].map(_toPropertyKey));

  return newCartItems;
};
// CONCATENATED MODULE: ./redux/cart/cart.reducer.js
function cart_reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function cart_reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { cart_reducer_ownKeys(Object(source), true).forEach(function (key) { cart_reducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { cart_reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function cart_reducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const INITIAL_STATE = {
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cart_types["a" /* default */].ADD_ITEM:
      return cart_reducer_objectSpread(cart_reducer_objectSpread({}, state), {}, {
        // cartItems : { ...state.cartItems, [Math.random()] : {...action.payload} }
        cartItems: addItemToCart(state.cartItems, action.payload)
      });

    case cart_types["a" /* default */].CLEAR_ITEM_FROM_CART:
      return cart_reducer_objectSpread(cart_reducer_objectSpread({}, state), {}, {
        cartItems: clearItemFromCart(state.cartItems, action.payload.product)
      });

    case cart_types["a" /* default */].CLEAR_CART:
      return cart_reducer_objectSpread(cart_reducer_objectSpread({}, state), {}, {
        cartItems: {}
      });

    default:
      return state;
  }
};

/* harmony default export */ var cart_reducer = (cartReducer);
// EXTERNAL MODULE: ./redux/login/login.types.js
var login_types = __webpack_require__("V6Tc");

// CONCATENATED MODULE: ./redux/login/login.reducer.js
function login_reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function login_reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { login_reducer_ownKeys(Object(source), true).forEach(function (key) { login_reducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { login_reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function login_reducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const login_reducer_INITIAL_STATE = {
  loggedIn: false,
  loading: false,
  userInfo: {}
};
const userLoginReducer = (state = login_reducer_INITIAL_STATE, action) => {
  switch (action.type) {
    case login_types["a" /* default */].USER_LOGIN_REQUEST:
      return login_reducer_objectSpread(login_reducer_objectSpread({}, state), {}, {
        loading: true
      });

    case login_types["a" /* default */].USER_LOGIN_SUCCESS:
      return login_reducer_objectSpread(login_reducer_objectSpread({}, state), {}, {
        loading: false,
        userInfo: action.payload
      });

    case login_types["a" /* default */].USER_LOGIN_FAIL:
      return login_reducer_objectSpread(login_reducer_objectSpread({}, state), {}, {
        loading: false,
        error: action.payload
      });

    case login_types["a" /* default */].USER_LOGOUT:
      return login_reducer_objectSpread(login_reducer_objectSpread({}, state), {}, {
        userInfo: {}
      });

    default:
      return state;
  }
};
/* harmony default export */ var login_reducer = (userLoginReducer);
// CONCATENATED MODULE: ./redux/root-reducer.js





const persistConfig = {
  key: "root",
  storage: storage_default.a,
  // whitelist - slices of the store that are persisted
  whitelist: ["cart"]
};
const rootReducer = Object(external_redux_["combineReducers"])({
  cart: cart_reducer,
  login: login_reducer
});
/* harmony default export */ var root_reducer = (Object(external_redux_persist_["persistReducer"])(persistConfig, rootReducer));
// CONCATENATED MODULE: ./redux/store.js





const middlwares = [external_redux_thunk_default.a];

if (false) {}

const store = Object(external_redux_["createStore"])(root_reducer, Object(external_redux_["applyMiddleware"])(...middlwares));
const persistor = Object(external_redux_persist_["persistStore"])(store);
/* harmony default export */ var redux_store = ({
  store,
  persistor
}); // export default { store };
// CONCATENATED MODULE: ./pages/_app.js

var __jsx = external_react_default.a.createElement;



 // import { store} from '../redux/store';

function MyApp({
  Component,
  pageProps
}) {
  return __jsx(external_react_redux_["Provider"], {
    store: store
  }, __jsx(react_["PersistGate"], {
    persistor: persistor
  }, __jsx(Component, pageProps)));
}

/* harmony default export */ var _app = __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "4DCN":
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),

/***/ "JPPj":
/***/ (function(module, exports) {

module.exports = require("redux-persist/integration/react");

/***/ }),

/***/ "MLT3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const cartActionTypes = {
  TOGGLE_CART_HIDDEN: 'TOGGLE_CART_HIDDEN',
  ADD_ITEM: 'ADD_ITEM',
  CLEAR_ITEM_FROM_CART: 'CLEAR_ITEM_FROM_CART',
  CLEAR_CART: 'CLEAR_CART'
};
/* harmony default export */ __webpack_exports__["a"] = (cartActionTypes);

/***/ }),

/***/ "T8f9":
/***/ (function(module, exports) {

module.exports = require("redux-persist/lib/storage");

/***/ }),

/***/ "V6Tc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const loginActionTypes = {
  LOGGEDIN: 'LOGGEDIN',
  USER_LOGIN_REQUEST: 'USER_LOGIN_REQUEST',
  USER_LOGIN_SUCCESS: 'USER_LOGIN_SUCCESS',
  USER_LOGIN_FAIL: 'USER_LOGIN_FAIL',
  USER_LOGOUT: 'USER_LOGOUT'
};
/* harmony default export */ __webpack_exports__["a"] = (loginActionTypes);

/***/ }),

/***/ "VNb8":
/***/ (function(module, exports) {

module.exports = require("redux-persist");

/***/ }),

/***/ "Y9py":
/***/ (function(module, exports) {



/***/ }),

/***/ "ZSx1":
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ })

/******/ });
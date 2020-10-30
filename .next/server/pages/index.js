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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cMU6");


/***/ }),

/***/ "F0In":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return clearItemFromCart; });
/* unused harmony export clearCart */
/* harmony import */ var _cart_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("MLT3");

const addItem = item => ({
  type: _cart_types__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].ADD_ITEM,
  payload: item
});
const clearItemFromCart = item => ({
  type: _cart_types__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].CLEAR_ITEM_FROM_CART,
  payload: item
});
const clearCart = () => ({
  type: _cart_types__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].CLEAR_CART
});

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

/***/ "MWqi":
/***/ (function(module, exports) {

module.exports = require("reselect");

/***/ }),

/***/ "W7QQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("biE2");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("MWqi");
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_cart_cart_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("bfZP");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("xeH2");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const mapStateToProps = Object(reselect__WEBPACK_IMPORTED_MODULE_3__["createStructuredSelector"])({
  cartItemsCount: _redux_cart_cart_selectors__WEBPACK_IMPORTED_MODULE_4__[/* selectCartItemsCount */ "b"]
});

const Navbar = ({
  cartItemsCount
}) => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    jquery__WEBPACK_IMPORTED_MODULE_5___default()(".hamburger").on("click", e => {
      jquery__WEBPACK_IMPORTED_MODULE_5___default()(e.currentTarget).toggleClass("is-active");
      jquery__WEBPACK_IMPORTED_MODULE_5___default()(".nav__bar").toggleClass("is-active");
    });
  });
  return __jsx("div", null, __jsx("div", {
    className: "nav"
  }, __jsx("div", {
    className: "nav__bar"
  }, __jsx("div", {
    className: "title"
  }, "MENU"), __jsx("div", {
    className: "nav__bar__container"
  }, __jsx("div", {
    className: "nav__bar__container--image"
  }, __jsx("img", {
    src: "/assets/sections/navigation-woman.jpg",
    alt: ""
  })), __jsx("div", {
    className: "nav__bar__container--menu"
  }, __jsx("div", {
    className: "nav__bar__container--title __800 text-primary mb-2"
  }, __jsx("span", null, "Catalogue")), __jsx("li", null, __jsx(next_Link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/"
  }, __jsx("a", {
    id: "nav-home"
  }, "Home"))), __jsx("li", null, __jsx("a", {
    id: "nav-accessories",
    href: "/products"
  }, "accessories")), __jsx("li", null, __jsx("a", {
    id: "nav-uppers",
    href: "/products"
  }, "Uppers")), __jsx("li", null, __jsx("a", {
    id: "nav-footwear",
    href: "/products"
  }, "footwear")), __jsx("li", null, __jsx("a", {
    id: "nav-health",
    href: "/products"
  }, "Health & Beauty")), __jsx("div", {
    className: "nav__bar__container--title __800 text-primary mt-3 mb-2"
  }, __jsx("span", null, "Navigate")), __jsx("li", null, __jsx("a", {
    className: "__800",
    href: "/products"
  }, "Shop in Luxury")), __jsx("li", null, __jsx(next_Link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/categories"
  }, "Our categories")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "About us"))))), __jsx("div", {
    className: "nav__hamburger"
  }, __jsx("div", {
    className: "hamburger",
    id: "hamburger"
  }, __jsx("span", {
    className: "line"
  }), __jsx("span", {
    className: "line"
  }), __jsx("span", {
    className: "line"
  })), __jsx("div", {
    className: "nav__hamburger--menu"
  }, __jsx("a", {
    href: "#"
  }, "men"), __jsx("a", {
    href: "#"
  }, "women"), __jsx("a", {
    href: "#"
  }, "Luxury"))), __jsx(next_Link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/"
  }, __jsx("div", {
    className: "nav__logo",
    style: {
      textDecoration: "none",
      cursor: "pointer"
    }
  }, __jsx("h1", null, "Arktastic"))), __jsx("div", {
    className: "nav__icons"
  }, __jsx("div", {
    className: "nav__icons--list"
  }, __jsx("a", {
    className: "nav__icons--x"
  }, "x"), __jsx(next_Link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/cart"
  }, __jsx("a", {
    className: "nav__icons--link cart--trigger"
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: "25",
    height: "25",
    viewBox: "0 0 256 256",
    shapeRendering: "crispEdges"
  }, __jsx("image", {
    x: "25",
    y: "3",
    width: "206",
    height: "250",
    xlinkHref: "data:img/png;base64,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"
  })), __jsx("span", null, cartItemsCount)))), __jsx(next_Link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/auth"
  }, __jsx("div", {
    className: "nav__icons--list"
  }, __jsx("a", {
    style: {
      textDecoration: "none",
      cursor: "pointer"
    }
  }, "Account")))), __jsx("div", {
    className: "nav__cart"
  }, __jsx("div", {
    className: "nav__cart--welcome"
  }, "Hi There!"), __jsx("div", {
    className: "para text-white"
  }, "Looks like you have not added anything to cart yet, please visit our various sections to shop something you like."), __jsx("div", {
    className: "mt-6"
  }, __jsx("a", {
    href: "#",
    className: "btn btn--primary"
  }, "Categories"), __jsx("a", {
    href: "#",
    className: "btn btn--secondary"
  }, "Shop Luxury")))));
}; // export default Navbar;


/* harmony default export */ __webpack_exports__["a"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, null)(Navbar));

/***/ }),

/***/ "bfZP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return selectCartItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return selectCartItemsCount; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("MWqi");
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_0__);


const selectCart = state => state.cart;

const selectCartItems = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])([selectCart], cart => Object.values(cart.cartItems));
const selectCartItemsCount = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])([selectCartItems], cartItems => cartItems.length);

/***/ }),

/***/ "biE2":
/***/ (function(module, exports) {

module.exports = require("next/Link");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cMU6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ Home; });
__webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return /* binding */ getServerSideProps; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./components/ReusableComponents/nav-bar/Navbar.components.jsx
var Navbar_components = __webpack_require__("W7QQ");

// CONCATENATED MODULE: ./components/HomePage/header/Header.components.jsx

var __jsx = external_react_default.a.createElement;

const Header = () => {
  return __jsx("div", null, __jsx("header", {
    className: "header"
  }, __jsx("div", {
    className: "header__container"
  }, __jsx("div", {
    className: "header--title animate__animated animate__fadeInDown"
  }, "Brands and fashion you adore"), __jsx("div", {
    className: "header--subtitle animate__animated animate__fadeIn"
  }, "upto 15% OFF"), __jsx("div", {
    className: "header--starting animate__animated animate__fadeInUp"
  }, "Starting AT $", __jsx("span", null, "149.99")))));
};

/* harmony default export */ var Header_components = (Header);
// CONCATENATED MODULE: ./components/HomePage/categories-section/Categoriessection.components.jsx

var Categoriessection_components_jsx = external_react_default.a.createElement;

const Categoriessection = () => {
  return Categoriessection_components_jsx("div", null, Categoriessection_components_jsx("section", {
    className: "section-categories"
  }, Categoriessection_components_jsx("div", {
    className: "categories"
  }, Categoriessection_components_jsx("div", {
    className: "categories__sub"
  }, Categoriessection_components_jsx("div", {
    className: "categories--uppers categories--item"
  }, Categoriessection_components_jsx("div", null, Categoriessection_components_jsx("a", {
    href: "#"
  }, "Upperwear"), Categoriessection_components_jsx("p", null, "lifestyle"))), Categoriessection_components_jsx("div", {
    className: "categories__sub__small"
  }, Categoriessection_components_jsx("div", {
    className: "categories--health categories--item"
  }, Categoriessection_components_jsx("div", null, Categoriessection_components_jsx("a", {
    href: "#"
  }, "Health & Beauty"), Categoriessection_components_jsx("p", null, "lifestyle"))), Categoriessection_components_jsx("div", {
    className: "categories--sustainable categories--item"
  }, Categoriessection_components_jsx("div", null, Categoriessection_components_jsx("a", {
    href: "#"
  }, "Sustainable"), Categoriessection_components_jsx("p", null, "Special"))))), Categoriessection_components_jsx("div", {
    className: "categories__sub"
  }, Categoriessection_components_jsx("div", {
    className: "categories__sub__small"
  }, Categoriessection_components_jsx("div", {
    className: "categories--accessories categories--item"
  }, Categoriessection_components_jsx("div", null, Categoriessection_components_jsx("a", {
    href: "#"
  }, "Accessories"), Categoriessection_components_jsx("p", null, "lifestyle"))), Categoriessection_components_jsx("div", {
    className: "categories--footwear categories--item"
  }, Categoriessection_components_jsx("div", null, Categoriessection_components_jsx("a", {
    href: "#"
  }, "Footwear"), Categoriessection_components_jsx("p", null, "lifestyle")))), Categoriessection_components_jsx("div", {
    className: "categories--lowers categories--item"
  }, Categoriessection_components_jsx("div", null, Categoriessection_components_jsx("a", {
    href: "#"
  }, "Lowers"), Categoriessection_components_jsx("p", null, "lifestyle")))))));
};

/* harmony default export */ var Categoriessection_components = (Categoriessection);
// EXTERNAL MODULE: external "next/Link"
var Link_ = __webpack_require__("biE2");
var Link_default = /*#__PURE__*/__webpack_require__.n(Link_);

// EXTERNAL MODULE: ./redux/cart/cart.actions.js
var cart_actions = __webpack_require__("F0In");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// CONCATENATED MODULE: ./components/ReusableComponents/single-card/card.components.jsx

var card_components_jsx = external_react_default.a.createElement;





const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(Object(cart_actions["a" /* addItem */])(item))
});

const Card = ({
  singleProduct,
  addItem
}) => {
  const handleButton = () => {
    addItem({
      singleProduct
    });
  };

  return card_components_jsx("div", {
    className: "card"
  }, card_components_jsx("div", {
    className: "card--img"
  }, card_components_jsx("img", {
    src: "assets/products/shirt3.jpg",
    alt: ""
  })), card_components_jsx("div", {
    className: "card__hover"
  }, card_components_jsx("a", {
    className: "card__hover--item card__hover--cart",
    onClick: handleButton
  }, card_components_jsx("ion-icon", {
    name: "cart-outline"
  })), card_components_jsx("a", {
    href: "#!",
    className: "card__hover--item card__hover--wish"
  }, card_components_jsx("ion-icon", {
    name: "heart"
  })), card_components_jsx("a", {
    href: "#!",
    className: "card__hover--item card__hover--delivery"
  }, card_components_jsx("ion-icon", {
    name: "flash"
  }))), card_components_jsx("div", {
    className: "card--view"
  }, card_components_jsx(Link_default.a, {
    href: "/details/[productId]",
    as: `/details/${singleProduct.slug}`
  }, card_components_jsx("a", {
    href: "details.html"
  }, "View Item"))), card_components_jsx("div", {
    className: "card__body"
  }, card_components_jsx("div", {
    className: "card__body--align"
  }, card_components_jsx("div", {
    className: "card__body--left"
  }, card_components_jsx("div", {
    className: "card__body--cat"
  }, singleProduct.brand), card_components_jsx("a", {
    href: "#",
    className: "card__body--name"
  }, singleProduct.name)), card_components_jsx("div", {
    className: "card__body--right"
  }, card_components_jsx("div", {
    className: "card__body--price"
  }, "$", singleProduct.price)))));
}; // export default Card;


/* harmony default export */ var card_components = (Object(external_react_redux_["connect"])(null, mapDispatchToProps)(Card));
// CONCATENATED MODULE: ./components/HomePage/recommendations/recommendation.components.jsx

var recommendation_components_jsx = external_react_default.a.createElement;



const Recommendationbox = ({
  products
}) => {
  // console.log(props.products);
  // const [recommended_products] = useState([
  //   {
  //     id: "0000001",
  //     img_src: "assets/products/shirt1.jpg",
  //     Brand: "Gucci",
  //     name: "Lined Top",
  //     price: "100.12",
  //   },
  //   {
  //     id: "0000002",
  //     img_src: "assets/products/shirt2.jpg",
  //     Brand: "U.S.Polo",
  //     name: "Blue Shirt",
  //     price: "45.26",
  //   },
  //   {
  //     id: "0000003",
  //     img_src: "assets/products/shirt3.jpg",
  //     Brand: "GAP",
  //     name: "Navy Blue Polo T-shirt",
  //     price: "75",
  //   },
  //   {
  //     id: "0000004",
  //     img_src: "assets/products/shirt4.jpg",
  //     Brand: "Armani",
  //     name: "Black Leather Jacket",
  //     price: "250",
  //   },
  //   {
  //     id: "0000005",
  //     img_src: "assets/products/customizable-mug.jpg",
  //     Brand: "Jack & Jones",
  //     name: "Printed T-shirt",
  //     price: "30",
  //   },
  //   {
  //     id: "0000006",
  //     img_src: "assets/products/mountain-fox-notebook.jpg",
  //     Brand: "Armani",
  //     name: "Black slippers",
  //     price: "150",
  //   },
  //   {
  //     id: "0000007",
  //     img_src: "assets/products/mug-the-best-is-yet-to-come.jpg",
  //     Brand: "Zara",
  //     name: "Kurta round neck",
  //     price: "90",
  //   },
  //   {
  //     id: "0000008",
  //     img_src: "assets/products/pack-mug-framed-poster.jpg",
  //     Brand: "Gucci",
  //     name: "Pixy cool Shirt",
  //     price: "120.42",
  //   },
  // ]);
  return recommendation_components_jsx("div", null, recommendation_components_jsx("section", {
    className: "section-recommendation"
  }, recommendation_components_jsx("div", {
    className: "container-xlarge mt-6 "
  }, recommendation_components_jsx("div", {
    className: "title ml-2 mb-2"
  }, "Recommendations"), recommendation_components_jsx("div", {
    className: "row row-cols-2"
  }, products.map(product => {
    return recommendation_components_jsx("div", {
      key: product._id,
      className: "col-md-2"
    }, recommendation_components_jsx(card_components, {
      singleProduct: product
    }));
  })))));
};

/* harmony default export */ var recommendation_components = (Recommendationbox);
// CONCATENATED MODULE: ./components/HomePage/Pageads/Pageads.components.jsx

var Pageads_components_jsx = external_react_default.a.createElement;

const Pageads = () => {
  return Pageads_components_jsx("div", {
    className: "section-pages"
  }, Pageads_components_jsx("div", {
    className: "container-large"
  }, Pageads_components_jsx("div", {
    className: "title text-center"
  }, "check it out the offers we curated for you"), Pageads_components_jsx("div", {
    className: "title __200 text-center"
  }, "Best offers"), Pageads_components_jsx("div", {
    className: "row mt-6"
  }, Pageads_components_jsx("div", {
    className: "col-md-6"
  }, Pageads_components_jsx("div", {
    className: "page-offer upperwear-offer"
  }, Pageads_components_jsx("div", {
    className: "page-offer__container"
  }, Pageads_components_jsx("h2", null, "beautiful Catalogue for women"), Pageads_components_jsx("a", {
    href: "#"
  }, "Check out")))), Pageads_components_jsx("div", {
    className: "col-md-6"
  }, Pageads_components_jsx("div", {
    className: "page-offer fashion-offer"
  }, Pageads_components_jsx("div", {
    className: "page-offer__container"
  }, Pageads_components_jsx("h2", null, "best offers in fashion"), Pageads_components_jsx("a", {
    href: "#"
  }, "Check out")))))));
};

/* harmony default export */ var Pageads_components = (Pageads);
// CONCATENATED MODULE: ./components/HomePage/upsell-section/Upsellsection.components.jsx

var Upsellsection_components_jsx = external_react_default.a.createElement;

const Upsellsection = () => {
  return Upsellsection_components_jsx("div", null, Upsellsection_components_jsx("section", {
    className: "section-oneproduct"
  }, Upsellsection_components_jsx("div", {
    className: "section-oneproduct--img"
  }), Upsellsection_components_jsx("div", {
    className: "section-oneproduct__body"
  }, Upsellsection_components_jsx("h1", null, "Cozy Inside & Outside"), Upsellsection_components_jsx("p", null, "A perfect comibination for your beautiful steps"), Upsellsection_components_jsx("div", {
    className: "section-oneproduct__body--img"
  }, Upsellsection_components_jsx("img", {
    src: "/assets/sections/bestselling.jpg",
    alt: ""
  })), Upsellsection_components_jsx("h3", null, "$150"), Upsellsection_components_jsx("div", {
    className: "mt-4"
  }, Upsellsection_components_jsx("a", {
    href: "#",
    className: "btn btn--primary"
  }, "Show product")))));
};

/* harmony default export */ var Upsellsection_components = (Upsellsection);
// CONCATENATED MODULE: ./components/HomePage/trending-section/Trendingsection.components.jsx

var Trendingsection_components_jsx = external_react_default.a.createElement;



const Trendingsection = ({
  products
}) => {
  // const [trending_products] = useState([
  //   {
  //     id: "0000001",
  //     img_src: "assets/products/shirt1.jpg",
  //     Brand: "Gucci",
  //     name: "Lined Top",
  //     price: "100.12",
  //   },
  //   {
  //     id: "0000002",
  //     img_src: "assets/products/shirt2.jpg",
  //     Brand: "U.S.Polo",
  //     name: "Blue Shirt",
  //     price: "45.26",
  //   },
  //   {
  //     id: "0000003",
  //     img_src: "assets/products/shirt3.jpg",
  //     Brand: "GAP",
  //     name: "Navy Blue Polo T-shirt",
  //     price: "75",
  //   },
  //   {
  //     id: "0000004",
  //     img_src: "assets/products/shirt4.jpg",
  //     Brand: "Armani",
  //     name: "Black Leather Jacket",
  //     price: "250",
  //   },
  // ]);
  return Trendingsection_components_jsx("div", null, Trendingsection_components_jsx("section", {
    className: "section-trending"
  }, Trendingsection_components_jsx("div", {
    className: "tending-body"
  }, Trendingsection_components_jsx("div", {
    className: "container-xlarge mt-5"
  }, Trendingsection_components_jsx("div", {
    className: "title"
  }, "Trending site wide"), Trendingsection_components_jsx("div", {
    className: "row no-gutters row-cols-2"
  }, Trendingsection_components_jsx("div", {
    class: "col-md-3"
  }, Trendingsection_components_jsx("div", {
    class: "trending-menu mt-5"
  }, Trendingsection_components_jsx("li", {
    class: "trending-menu--item active"
  }, "Shorts"), Trendingsection_components_jsx("li", {
    class: "trending-menu--item"
  }, "Shoes"), Trendingsection_components_jsx("li", {
    class: "trending-menu--item"
  }, "Jeans"), Trendingsection_components_jsx("li", {
    class: "trending-menu--item"
  }, "Sunglasses"), Trendingsection_components_jsx("li", {
    class: "trending-menu--item"
  }, "Shirts"))), Trendingsection_components_jsx("div", {
    class: "col-md-9"
  }, Trendingsection_components_jsx("div", {
    class: "row"
  }, Trendingsection_components_jsx("div", {
    class: "col-lg-2"
  }, Trendingsection_components_jsx("div", {
    class: "card no-hover"
  }, Trendingsection_components_jsx("div", {
    class: "card--img"
  }, Trendingsection_components_jsx("img", {
    src: "assets/products/shirt1.jpg",
    alt: ""
  })), Trendingsection_components_jsx("div", {
    class: "card__body"
  }, Trendingsection_components_jsx("div", {
    class: "card__body--align"
  }, Trendingsection_components_jsx("div", {
    class: "card__body--left"
  }, Trendingsection_components_jsx("div", {
    class: "card__body--cat"
  }, "T shirts"), Trendingsection_components_jsx("a", {
    href: "#",
    class: "card__body--name"
  }, "Pixy Cool Shirt", " "))))), Trendingsection_components_jsx("div", {
    style: {
      padding: "24px 0"
    },
    class: "bg-light text-center"
  }, Trendingsection_components_jsx("a", {
    class: "btn btn--text",
    href: "#"
  }, "See all"))), products.slice(0, 3).map(product => {
    return Trendingsection_components_jsx("div", {
      className: "col-md-3"
    }, Trendingsection_components_jsx(card_components, {
      singleProduct: product,
      key: product._id
    }));
  }))))))));
};

/* harmony default export */ var Trendingsection_components = (Trendingsection);
// CONCATENATED MODULE: ./components/HomePage/themes-banner/Themesbanner.components.jsx

var Themesbanner_components_jsx = external_react_default.a.createElement;

const Themesbanner = () => {
  return Themesbanner_components_jsx("div", null, Themesbanner_components_jsx("section", {
    className: "section-homethemes"
  }, Themesbanner_components_jsx("div", {
    className: "subtitle text-upper text-center"
  }, "Shop by Themes"), Themesbanner_components_jsx("div", {
    className: "container-xlarge mt-6"
  }, Themesbanner_components_jsx("div", {
    className: "row"
  }, Themesbanner_components_jsx("div", {
    className: "col-md-4"
  }, Themesbanner_components_jsx("div", {
    className: "themecard themecard__active"
  }, Themesbanner_components_jsx("div", {
    className: "themecard--container"
  }, Themesbanner_components_jsx("div", {
    className: "text-white subtitle"
  }, "Shop in activewear"), Themesbanner_components_jsx("div", {
    className: "mt-3"
  }, Themesbanner_components_jsx("a", {
    className: "btn btn--white",
    href: "#"
  }, "Shop"))))), Themesbanner_components_jsx("div", {
    className: "col-md-4"
  }, Themesbanner_components_jsx("div", {
    className: "themecard themecard__office"
  }, Themesbanner_components_jsx("div", {
    className: "themecard--container"
  }, Themesbanner_components_jsx("div", {
    className: "subtitle"
  }, "Shop in officewear"), Themesbanner_components_jsx("div", {
    className: "mt-3"
  }, Themesbanner_components_jsx("a", {
    className: "btn btn--font",
    href: "#"
  }, "Shop"))))), Themesbanner_components_jsx("div", {
    className: "col-md-4"
  }, Themesbanner_components_jsx("div", {
    className: "themecard themecard__party"
  }, Themesbanner_components_jsx("div", {
    className: "themecard--container"
  }, Themesbanner_components_jsx("div", {
    className: "subtitle"
  }, "Shop in partywear"), Themesbanner_components_jsx("div", {
    className: "mt-3"
  }, Themesbanner_components_jsx("a", {
    className: "btn btn--font",
    href: "#"
  }, "Shop")))))))));
};

/* harmony default export */ var Themesbanner_components = (Themesbanner);
// CONCATENATED MODULE: ./components/HomePage/features-section/Featuressection.components.jsx

var Featuressection_components_jsx = external_react_default.a.createElement;

const Featuressection = () => {
  return Featuressection_components_jsx("div", null, Featuressection_components_jsx("section", {
    className: "section-features"
  }, Featuressection_components_jsx("div", {
    className: "feature"
  }, Featuressection_components_jsx("div", {
    className: "feature-item"
  }, Featuressection_components_jsx("div", {
    className: "feature-item--icon"
  }, Featuressection_components_jsx("ion-icon", {
    name: "car-sport-outline"
  })), Featuressection_components_jsx("div", {
    className: "feature-item__body"
  }, Featuressection_components_jsx("h1", null, "Lightning delivery"), Featuressection_components_jsx("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit."))), Featuressection_components_jsx("div", {
    className: "feature-item"
  }, Featuressection_components_jsx("div", {
    className: "feature-item--icon"
  }, Featuressection_components_jsx("ion-icon", {
    name: "headset-outline"
  })), Featuressection_components_jsx("div", {
    className: "feature-item__body"
  }, Featuressection_components_jsx("h1", null, "Customer support"), Featuressection_components_jsx("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit."))), Featuressection_components_jsx("div", {
    className: "feature-item"
  }, Featuressection_components_jsx("div", {
    className: "feature-item--icon"
  }, Featuressection_components_jsx("ion-icon", {
    name: "card-outline"
  })), Featuressection_components_jsx("div", {
    className: "feature-item__body"
  }, Featuressection_components_jsx("h1", null, "Secure payments"), Featuressection_components_jsx("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit."))))));
};

/* harmony default export */ var Featuressection_components = (Featuressection);
// CONCATENATED MODULE: ./pages/index.jsx

var pages_jsx = external_react_default.a.createElement;









 // this is Home page

function Home({
  products
}) {
  return pages_jsx("div", null, pages_jsx(head_default.a, null, pages_jsx("title", null, "Arktastic")), pages_jsx(Navbar_components["a" /* default */], null), pages_jsx(Header_components, null), pages_jsx(Categoriessection_components, null), pages_jsx(recommendation_components, {
    products: products
  }), pages_jsx(Pageads_components, null), pages_jsx(Upsellsection_components, null), pages_jsx(Trendingsection_components, {
    products: products
  }), pages_jsx(Themesbanner_components, null), pages_jsx(Featuressection_components, null));
} // fetching the products form backend in server side

async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://arktasticbackend.herokuapp.com/api/products`);
  const products = await res.json(); // Pass data to the page via props

  return {
    props: {
      products
    }
  };
}

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "xeH2":
/***/ (function(module, exports) {

module.exports = require("jquery");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });
import _ from "lodash";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/auth/auth.actions";
import { SEARCH_LIST_CLEAR } from "../../../redux/products/products.types";
import { addItem, getCartItems } from "../../../redux/cart/cart.actions";

// Animation GSAP
import { Expo, TimelineMax, TweenMax } from "gsap";
import { getSearchList } from "../../../redux/products/products.actions";
import "animate.css";
import Spinner from "../Spinner/Spinner";
import { setAlert } from "../../../redux/Alert/alert.actions";

const Navbar = () => {
  const router = useRouter();

  const [isOpenNav, setIsOpenNav] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  let [accOpen, setAccOpen] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [NavHeight, setNavHeight] = useState(false);
  const [cursor, setCursor] = useState(0);
  const [NavDark, setNavDark] = useState(false);

  // Navigation
  let one = useRef(null);
  let two = useRef(null);
  let menu = useRef(null);
  let menuItems = useRef(null);

  let node = useRef(null);

  // social
  let menuSocials = useRef(null);
  let menuSocial1 = useRef(null);
  let menuSocial2 = useRef(null);
  let menuSocial3 = useRef(null);

  // items
  let menuItem1 = useRef(null);
  let menuItem2 = useRef(null);
  let menuItem3 = useRef(null);
  let menuItem4 = useRef(null);
  let menuItem5 = useRef(null);
  let menuItem6 = useRef(null);
  let menuItem7 = useRef(null);
  let menuItem8 = useRef(null);

  // Search
  let searchWrapper = useRef(null);
  let searchBar = useRef(null);

  // CART
  let cart = useRef(null);
  let cartDetails = useRef(null);
  let cartSummary = useRef(null);
  let cartX = useRef(null);

  // account
  const dispatch = useDispatch();
  let accountCard = useRef(null);

  const auth = useSelector((state) => state.auth);
  const { userInfo } = auth;

  const productsState = useSelector((state) => state.productsState);
  const { search } = productsState;

  const cartState = useSelector((state) => state.cart);
  const { cartItems, loading } = cartState;

  const lifestyleState = useSelector((state) => state.storeSelectState);
  const { storeType, department } = lifestyleState;

  useEffect(() => {
    if (searchKeyword.length >= 3) {
      dispatch(getSearchList(searchKeyword));
    } else {
      dispatch({ type: SEARCH_LIST_CLEAR });
    }
    // set the state on change of state in the store

    router.pathname === "/luxury/[gender]"
      ? setNavDark(true)
      : setNavDark(false);
    window.addEventListener("scroll", changeNav);
    document.addEventListener("mousedown", handleAccount);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleAccount);
    };
  }, [dispatch, searchKeyword, router.pathname, cartItems]);

  // method to increase quantity of the item in the cart
  const handleAddQuantity = (cartProduct) => {
    let cart = [];
    if (cartItems) {
      for (var i = 0; i < cartItems.products.length; i++) {
        if (cartItems.products[i].product._id == cartProduct._id) {
          cart.push({
            ...cartItems.products[i].product,
            count: cartItems.products[i].count + 1,
          });
        } else {
          cart.push({
            ...cartItems.products[i].product,
            count: cartItems.products[i].count,
          });
        }
      }
      dispatch(addItem(cart));
    }
  };

  // method to decrease the quantity of the item in the cart
  const handleSubQuantity = (cartProduct) => {
    if (cartProduct.count == 1) {
      return; // return if the qty is 1
    }
    let cart = [];
    if (cartItems) {
      for (var i = 0; i < cartItems.products.length; i++) {
        if (cartItems.products[i].product._id == cartProduct._id) {
          cart.push({
            ...cartItems.products[i].product,
            count: cartItems.products[i].count - 1,
          });
        } else {
          cart.push({
            ...cartItems.products[i].product,
            count: cartItems.products[i].count,
          });
        }
      }
      dispatch(addItem(cart));
    }
  };

  // method to delete an item in the cart
  const handleDeleteItem = (cartProduct) => {
    let cart = [];
    for (var i = 0; i < cartItems.products.length; i++) {
      if (cartItems.products[i].product._id != cartProduct._id) {
        cart.push({
          ...cartItems.products[i].product,
          count: cartItems.products[i].count,
        });
      }
    }
    dispatch(addItem(cart));
  };

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setNavHeight(true);
    } else {
      setNavHeight(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push({
      pathname: "/products",
      query: { q: encodeURI(searchKeyword) },
    });
    closeAll();
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 38 && cursor > 0) {
      setCursor(cursor - 1);
    } else if (e.keyCode === 40 && cursor < search.length - 1) {
      setCursor(cursor + 1);
    }
  };

  // const changeNavBackground = () => {
  //   if (window.scrollY >= 80) {
  //     setNavBg(true);
  //   } else {
  //     setNavBg(false);
  //   }
  // };
  // window.addEventListener("scroll", changeNavBackground);
  const closeAll = () => {
    closeNav();
    closeSearch();
    setSearchKeyword("");
  };

  // const openNav = () => {
  //   closeSearch();
  //   closeCart();
  //   var isMobile;
  //   window.innerWidth < 1024 ? (isMobile = "100vw") : (isMobile = "50vw");
  //   var t1 = new TimelineMax();

  //   t1.to(menu, {
  //     width: "100%",
  //     duration: 1.4,
  //     opacity: 1,
  //     ease: Expo.easeInOut,
  //     delay: -0.5,
  //   });
  //   t1.to(menu, {
  //     width: isMobile,
  //     duration: 1,
  //     ease: Expo.easeOut,
  //     delay: 0,
  //   });
  //   t1.to(menuItems, {
  //     visibility: "visible",
  //     opacity: 1,
  //     duration: 0.4,
  //     ease: Expo.easeInOut,
  //     delay: -1.4,
  //   });
  //   t1.to(menuSocials, {
  //     visibility: "visible",
  //     opacity: 1,
  //     duration: 0.4,
  //     ease: Expo.easeInOut,
  //     delay: -1.4,
  //   });
  //   t1.to(imagesWrapper, {
  //     width: "50%",
  //     duration: 1.2,
  //     ease: Expo.easeOut,
  //     delay: -1.3,
  //   });

  //   t1.staggerFrom(
  //     [menuItem1, menuItem2, menuItem3, menuItem4, menuItem5],
  //     0.4,
  //     { y: "15", opacity: 0, delay: -0.9 },
  //     0.2
  //   );

  //   t1.staggerFrom(
  //     [menuSocial1, menuSocial2, menuSocial3],
  //     0.6,
  //     { y: "15", opacity: 0, delay: -0.5 },
  //     0.2
  //   );
  //   t1.to(one, {
  //     top: "47%",
  //     rotation: 45,
  //     duration: 0.8,
  //     delay: -1.4,
  //     ease: Expo.easeInOut,
  //   });
  //   t1.to(two, {
  //     top: "47%",
  //     rotation: -45,
  //     duration: 0.8,
  //     delay: -1.4,
  //     ease: Expo.easeInOut,
  //   });
  //   setIsOpenNav(true);
  // };
  const openNav = () => {
    closeSearch();
    closeCart();
    var isMobile;
    window.innerWidth < 1024 ? (isMobile = "100vw") : (isMobile = "30vw");
    var t1 = new TimelineMax();

    t1.to(menu, {
      opacity: 1,
      width: isMobile,
      duration: 1.2,
      ease: Expo.easeOut,
      delay: 0,
    });
    t1.to(menuItems, {
      visibility: "visible",
      opacity: 1,
      duration: 0.4,
      ease: Expo.easeInOut,
      delay: -1.4,
    });
    t1.to(menuSocials, {
      visibility: "visible",
      opacity: 1,
      duration: 0.4,
      ease: Expo.easeInOut,
      delay: -1.4,
    });

    t1.staggerFrom(
      [
        menuItem1,
        menuItem2,
        menuItem3,
        menuItem4,
        menuItem5,
        menuItem6,
        menuItem7,
        menuItem8,
      ],
      0.2,
      { opacity: 0, delay: -1.3 },
      0.1
    );

    t1.staggerFrom(
      [menuSocial1, menuSocial2, menuSocial3],
      0.1,
      { y: "15", opacity: 0, delay: -1 },
      0.2
    );
    t1.to(one, {
      top: "47%",
      rotation: 45,
      duration: 0.8,
      delay: -1.8,
      ease: Expo.easeOut,
    });
    t1.to(two, {
      top: "47%",
      rotation: -45,
      duration: 0.8,
      delay: -1.8,
      ease: Expo.easeOut,
    });
    setIsOpenNav(true);
  };

  const closeNav = () => {
    var t1 = new TimelineMax();

    t1.to(one, {
      top: "38%",
      rotation: 0,
      duration: 0.8,
      ease: Expo.easeInOut,
    });
    t1.to(two, {
      top: "56%",

      rotation: 0,
      duration: 0.8,
      delay: -0.8,
      ease: Expo.easeInOut,
    });
    t1.to(menuItems, {
      opacity: 0,
      visibility: "hidden",
      duration: 0.2,
      ease: Expo.easeInOut,
      delay: -1.4,
    });

    t1.to(menuItems, {
      opacity: 0,
      visibility: "hidden",
      duration: 0.2,
      ease: Expo.easeInOut,
      delay: -1.4,
    });
    t1.to(menu, {
      width: "0",
      opacity: 0,
      duration: 1.2,
      ease: Expo.easeInOut,
      delay: -1,
    });

    t1.to(menuSocials, {
      opacity: 0,
      visibility: "hidden",
      duration: 0.2,
      ease: Expo.easeInOut,
      delay: -1.4,
    });

    setIsOpenNav(false);
  };

  // search
  const openSearch = () => {
    var s1 = new TimelineMax();
    closeNav();
    s1.to(searchWrapper, {
      width: "100%",
      duration: 0.4,
      ease: Expo.easeOut,
    });
    s1.to(searchBar, {
      top: NavHeight ? "60px" : "80px",
      opacity: 1,
      visibility: "visible",
      duration: 0.4,
      ease: Expo.easeOut,
    });

    searchBar.focus();
    console.log(input);
    setIsOpenSearch(true);
  };

  const closeSearch = () => {
    var s1 = new TimelineMax();
    s1.to(searchBar, {
      top: "0",
      duration: 0.4,
      ease: Expo.easeOut,
    });
    s1.to(searchBar, {
      opacity: 0,
      visibility: "hidden",
      duration: 0.4,
      delay: -0.3,
      ease: Expo.easeOut,
    });
    s1.to(searchWrapper, {
      width: "0",
      duration: 0.4,
      ease: Expo.easeOut,
    });
    setIsOpenSearch(false);
    dispatch({ type: SEARCH_LIST_CLEAR });
    setSearchKeyword("");
  };

  // cart
  const openCart = () => {
    // setCartList(cartItems);
    // call action to get the cart items from the DB
    dispatch(getCartItems());
    closeNav();
    var isMobileCart;
    window.innerWidth < 1024
      ? (isMobileCart = "100vw")
      : (isMobileCart = "80vw");
    var c1 = new TimelineMax();

    c1.to(cart, {
      width: isMobileCart,
      duration: 1,
      ease: Expo.easeInOut,
    });
    c1.to(cartDetails, {
      opacity: 1,
      visibility: "visible",
      duration: 1.2,
      ease: Expo.easeInOut,
      delay: -0.6,
    });
    c1.to(cartSummary, {
      opacity: 1,
      visibility: "visible",
      duration: 2,
      ease: Expo.easeOut,
      delay: -1.2,
    });
    c1.to(cartX, {
      right: "30px",
      opacity: 1,
      visibility: "visible",
      duration: 0.2,
      delay: -2,
    });
  };

  const closeCart = () => {
    var c1 = new TimelineMax();

    c1.to(cartDetails, {
      duration: 0.8,
      opacity: 0,
      ease: Expo.easeOut,
    });
    c1.to(cartSummary, {
      duration: 0.8,
      opacity: 0,
      delay: -0.6,
      ease: Expo.easeOut,
    });
    c1.to(cartDetails, {
      duration: 0.8,
      visibility: "hidden",
      delay: -0.6,
      ease: Expo.easeOut,
    });
    c1.to(cartSummary, {
      duration: 0.8,
      visibility: "hidden",

      ease: Expo.easeOut,
    });
    c1.to(cartX, {
      duration: 0.8,
      right: "-30px",
      opacity: 0,
      visibility: "hidden",
      ease: Expo.easeOut,
      delay: -2,
    });
    c1.to(cart, { width: 0, duration: 1, ease: Expo.easeInOut, delay: -2.4 });
  };

  const handleAccount = (e) => {
    if (node.current.contains(e.target)) {
      return;
    }
    setAccOpen(false);
  };

  // account

  const handleLogoutBtn = () => {
    dispatch(logout());
    dispatch(setAlert("Logout Successfully", "success", 2200));
  };

  const goHome = (e) => {
    if (department === "women" && storeType === "lifestyle") {
      router.push({
        pathname: `/lifestyle/${department}`,
      });
    } else if (department === "men" && storeType === "lifestyle") {
      router.push({
        pathname: `/lifestyle/${department}`,
      });
    } else if (department === "women" && storeType === "luxury") {
      router.push({
        pathname: `/luxury/${department}`,
      });
    } else if (department === "men" && storeType === "luxury") {
      router.push({
        pathname: `/luxury/${department}`,
      });
    } else {
      router.push({
        pathname: `/`,
      });
    }
  };

  return (
    <div
      className={`navigation ${NavHeight ? "active" : ""} ${
        NavDark ? "dark" : ""
      }`}
    >
      {/* Toggle */}
      <div
        className="toggle"
        id="toggle"
        onClick={isOpenNav ? closeNav : openNav}
      >
        <span ref={(el) => (one = el)}></span>
        <span ref={(el) => (two = el)}></span>
        <p>menu</p>
      </div>

      {/* Logo */}
      <div
        style={{ cursor: "pointer" }}
        onClick={(e) => goHome(e)}
        className="logo"
      >
        <div>
          {/* <div className="logo-img">
              <img src="/assets/icons/logo.svg" alt="" />
            </div>
            <h1 className="logo-text">arktastic</h1> */}
          <span>ARK</span>
          <span>TAS</span>
          <span>TIC</span>
        </div>
      </div>

      {/* Actions */}
      <div className="actions">
        {/* search */}
        <span onClick={isOpenSearch ? closeSearch : openSearch}>
          <img
            src={
              NavDark
                ? "/assets/icons/search-dark.svg"
                : "/assets/icons/search.svg"
            }
            alt=""
          />
          <p>Search</p>
        </span>

        {/* cart */}
        <span onClick={openCart}>
          <img
            src={
              NavDark
                ? "/assets/icons/shopping-bag-dark.svg"
                : "/assets/icons/shopping-bag.svg"
            }
            alt=""
          />
          <p>Cart</p>
        </span>

        {/* account */}
        <span
          className="account--trigger"
          ref={node}
          onClick={(e) => setAccOpen(!accOpen)}
        >
          <img
            src={
              NavDark ? "/assets/icons/user-dark.svg" : "/assets/icons/user.svg"
            }
            alt=""
          />
          <p>Account</p>

          {accOpen === true ? (
            <div className="account-card" ref={(el) => (accountCard = el)}>
              {userInfo.firstName ? (
                <>
                  <li>
                    <h4
                      style={{
                        fontFamily: "Roboto",
                        textTransform: "uppercase",
                        paddingBottom: 10,
                      }}
                    >
                      {userInfo.firstName}
                    </h4>
                  </li>
                  <li>
                    <Link
                      href={{
                        pathname: "/profile",
                        query: { settings: "orders" },
                      }}
                    >
                      <h5 href="/profile">
                        <ion-icon name="cube-outline"></ion-icon> Orders
                      </h5>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={{
                        pathname: "/profile",
                        query: { settings: "address" },
                      }}
                    >
                      <h5>
                        <ion-icon name="bookmark-outline"></ion-icon> Address
                      </h5>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={{
                        pathname: "/profile",
                        query: { settings: "wishlist" },
                      }}
                    >
                      <h5>
                        <ion-icon name="heart-outline"></ion-icon> Wishlist
                      </h5>
                    </Link>
                  </li>
                  <li>
                    <h5 onClick={handleLogoutBtn} href="#">
                      <ion-icon name="log-out-outline"></ion-icon> Logout
                    </h5>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link href="/register">
                      <h5>
                        <ion-icon name="people-outline"></ion-icon> Register
                      </h5>
                    </Link>
                  </li>
                  <li>
                    <Link href="/login">
                      <h5>
                        <ion-icon name="key-outline"></ion-icon> Login
                      </h5>
                    </Link>
                  </li>
                </>
              )}
            </div>
          ) : null}
        </span>
      </div>

      {/* Search */}
      <div className="wrapper-search" ref={(el) => (searchWrapper = el)}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            placeholder="type to search"
            id="input"
            ref={(el) => (searchBar = el)}
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            autoFocus
            onKeyDown={(e) => handleKeyDown(e)}
          />
        </form>

        <div className="autolist">
          {search && search.length > 0
            ? search.map((autocomplete, i) => {
                return (
                  <li className={cursor === i ? "active" : null}>
                    <Link
                      href={{
                        pathname: "/products",
                        query: {
                          q: autocomplete.name,
                        },
                      }}
                    >
                      <a onClick={closeAll}>{autocomplete.name}</a>
                    </Link>
                  </li>
                );
              })
            : null}
        </div>
      </div>

      {/* Cart */}
      <div ref={(el) => (cart = el)} className="wrapper-cart">
        <div
          onClick={closeCart}
          ref={(el) => (cartX = el)}
          className="wrapper-cart--x"
        >
          <ion-icon name="close-outline"></ion-icon>
        </div>
        <div ref={(el) => (cartDetails = el)} className="wrapper-cart__details">
          <span
            onClick={closeCart}
            className="text-upper text-font pdetails__body--back"
          >
            <ion-icon name="arrow-back-outline"></ion-icon> Back to Store
          </span>
          <div className="d-flex justify-content-between align-content-center">
            <div className="wrapper-cart__details--title">Shopping cart</div>
            <div className="title">
              {cartItems && cartItems.products.length > 0
                ? cartItems.products.length
                : 0}
              items
            </div>
          </div>
          {loading ? (
            <Spinner />
          ) : (
            <table className="wrapper-cart__table">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Size</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {_.isEmpty(userInfo) ? (
                  <>
                    <tr className="subtitle mt-4 __300 text-center">
                      Please Login to use Cart
                    </tr>
                  </>
                ) : (
                  <>
                    {cartItems && cartItems.products ? (
                      cartItems.products.map((cartItem) => {
                        return (
                          <tr
                            key={cartItem.product._id}
                            className="wrapper-cart__table--data animate__animated animate__fadeIn"
                          >
                            <td className="d-flex">
                              <div className="wrapper-cart__table--img">
                                <img
                                  src={cartItem.product.images[0].url}
                                  alt=""
                                />
                              </div>
                              <div className="wrapper-cart__table--name">
                                <h2>{cartItem.product.name}</h2>
                                <h5>{cartItem.product.brand}</h5>
                              </div>
                            </td>
                            <td>M</td>
                            <td>
                              <div className="wrapper-cart__table--quantity">
                                <span>
                                  <ion-icon
                                    name="remove-circle-outline"
                                    onClick={() => {
                                      handleSubQuantity(cartItem.product);
                                    }}
                                  ></ion-icon>
                                </span>
                                <span>{cartItem.count}</span>
                                <span>
                                  <ion-icon
                                    name="add-circle-outline"
                                    onClick={() => {
                                      handleAddQuantity(cartItem.product);
                                    }}
                                  ></ion-icon>
                                </span>
                              </div>
                            </td>
                            <td className="wrapper-cart__table--price">
                              ${cartItem.price}
                            </td>
                            <td
                              className="wrapper-cart__table--delete"
                              style={{ cursor: "pointer" }}
                            >
                              <ion-icon
                                name="close-outline"
                                onClick={() => {
                                  handleDeleteItem(cartItem.product);
                                }}
                              ></ion-icon>
                            </td>
                          </tr>
                        );
                      })
                    ) : (
                      <tr>
                        <td>CART IS EMPTY</td>
                      </tr>
                    )}
                  </>
                )}
              </tbody>
            </table>
          )}
        </div>

        <div ref={(el) => (cartSummary = el)} className="wrapper-cart__summary">
          <div className="wrapper-cart__summary--top">
            <div className="wrapper-cart__summary--summary heading inherit">
              Summary
            </div>

            <div className="d-flex justify-content-between inherit align-content-center">
              <div className="subheading inherit __500">Subtotal</div>
              <div className="subheading inherit __500 text-right">
                ${cartItems ? cartItems.cartTotal : 0}
              </div>
            </div>
            <div className="d-flex justify-content-between inherit align-content-center">
              <div className="subheading inherit __500">Shipping</div>
              <div className="subheading inherit __500 text-right">$0</div>
            </div>
            <div className="d-flex justify-content-between inherit align-content-center">
              <div className="subheading inherit __500">Tax</div>
              <div className="subheading inherit __500 text-right">$0</div>
            </div>
          </div>
          <div className="wrapper-cart__summary--bottom  inherit pb-8">
            <div className="d-flex justify-content-between inherit mt-2">
              <div className="title __600  inherit text-capitalize">Total</div>
              <div className="heading  inherit">
                ${cartItems ? cartItems.cartTotal : 0}
              </div>
            </div>
            <div className="mt-3">
              <Link href="/checkout">
                <a onClick={closeCart} className="btn btn-block  inherit">
                  Checkout
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* WRAPPERS */}
      {/* Wrapper menu */}
      <div className="wrapper-menu" ref={(el) => (menu = el)}>
        <div className="menu" ref={(el) => (menuItems = el)}>
          <h2 className="title mb-2">Catalogue</h2>
          <ul>
            <Link
              href={{
                pathname: "/products",
                query: {
                  category: "upperwear",
                  type: storeType,
                  department: department,
                },
              }}
            >
              <li onClick={closeAll} ref={(el) => (menuItem1 = el)}>
                <span id="menu">&nbsp;Upperwear</span>
              </li>
            </Link>
            <Link
              href={{
                pathname: "/products",
                query: {
                  category: "lowers",
                },
              }}
            >
              <li onClick={closeAll} ref={(el) => (menuItem2 = el)}>
                <span id="menu">&nbsp;Lowers</span>
              </li>
            </Link>
            <Link
              href={{
                pathname: "/products",
                query: {
                  category: "accessories",
                  type: storeType,
                  department: department,
                },
              }}
            >
              <li onClick={closeAll} ref={(el) => (menuItem3 = el)}>
                <span id="menu">&nbsp;Accessories</span>
              </li>
            </Link>
            <Link
              href={{
                pathname: "/products",
                query: {
                  category: "footwear",
                  type: storeType,
                  department: department,
                },
              }}
            >
              <li onClick={closeAll} ref={(el) => (menuItem4 = el)}>
                <span id="menu">&nbsp;Footwear</span>
              </li>
            </Link>
            <Link
              href={{
                pathname: "/products",
                query: {
                  category: "health-and-beauty",
                  type: storeType,
                  department: department,
                },
              }}
            >
              <li onClick={closeAll} ref={(el) => (menuItem5 = el)}>
                <span id="menu">&nbsp;Health & Beauty</span>
              </li>
            </Link>
            <h2 className="title mt-3 mb-2">Menu</h2>
            <Link
              href={{
                pathname: "/",
              }}
            >
              <li onClick={closeAll} ref={(el) => (menuItem6 = el)}>
                <span id="menu">&nbsp;Change Store</span>
              </li>
            </Link>
            <Link
              href={{
                pathname: "/categories",
              }}
            >
              <li onClick={closeAll} ref={(el) => (menuItem7 = el)}>
                <span id="menu">&nbsp;Categories</span>
              </li>
            </Link>
            <Link
              href={{
                pathname: "/categories",
              }}
            >
              <li onClick={closeAll} ref={(el) => (menuItem8 = el)}>
                <span id="menu">&nbsp;Home page</span>
              </li>
            </Link>
          </ul>
        </div>

        <div className="social" ref={(el) => (menuSocials = el)}>
          <li ref={(el) => (menuSocial1 = el)}>
            <a href="#">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </li>
          <li ref={(el) => (menuSocial2 = el)}>
            <a href="#">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>
          <li ref={(el) => (menuSocial3 = el)}>
            <a href="#">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
// export default connect(mapStateToProps, null)(Navbar);

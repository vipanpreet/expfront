import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

// import { selectCartItemsCount } from "../../../redux/cart/cart.selectors";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/login/login.actions";
import { SEARCH_LIST_CLEAR } from "../../../redux/products/products.types";

// Animation GSAP
import { Expo, TimelineMax, TweenMax } from "gsap";
import { getSearchList } from "../../../redux/products/products.actions";
import "animate.css";

// const mapStateToProps = createStructuredSelector({
//   cartItemsCount: selectCartItemsCount,
// });

const Navbar = () => {
  const router = useRouter();

  const [isOpenNav, setIsOpenNav] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  let [accOpen, setAccOpen] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [NavHeight, setNavHeight] = useState(false);
  const [cursor, setCursor] = useState(0);

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

  // Images
  let imagesWrapper = useRef(null);
  let im1 = useRef(null);
  let im2 = useRef(null);
  let im3 = useRef(null);
  let im4 = useRef(null);
  let im5 = useRef(null);

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

  const login = useSelector((state) => state.login);
  const { userInfo } = login;

  const searchList = useSelector((state) => state.searchList);
  const { search } = searchList;

  useEffect(() => {
    if (searchKeyword.length >= 3) {
      dispatch(getSearchList(searchKeyword));
    } else {
      dispatch({ type: SEARCH_LIST_CLEAR });
    }

    document.addEventListener("mousedown", handleAccount);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleAccount);
    };
  }, [dispatch, searchKeyword]);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setNavHeight(true);
    } else {
      setNavHeight(false);
    }
  };

  window.addEventListener("scroll", changeNav);

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

  const openNav = () => {
    var isMobile;
    window.innerWidth < 1024 ? (isMobile = "100vw") : (isMobile = "50vw");
    var t1 = new TimelineMax();

    t1.to(menu, {
      width: "90%",
      duration: 1.4,
      opacity: 1,
      ease: Expo.easeInOut,
      delay: -0.5,
    });
    t1.to(menu, {
      width: isMobile,
      duration: 1,
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
    t1.to(imagesWrapper, {
      width: "50%",
      duration: 0.8,
      ease: Expo.easeOut,
      delay: -1,
    });

    t1.staggerFrom(
      [menuItem1, menuItem2, menuItem3, menuItem4, menuItem5],
      0.4,
      { y: "15", opacity: 0, delay: -0.9 },
      0.2
    );

    t1.staggerFrom(
      [menuSocial1, menuSocial2, menuSocial3],
      0.6,
      { y: "15", opacity: 0, delay: -0.5 },
      0.2
    );
    t1.to(one, {
      top: "47%",
      rotation: 45,
      duration: 0.8,
      delay: -1.4,
      ease: Expo.easeInOut,
    });
    t1.to(two, {
      top: "47%",
      rotation: -45,
      duration: 0.8,
      delay: -1.4,
      ease: Expo.easeInOut,
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

    t1.to(menu, {
      width: "100%",
      duration: 1.2,
      ease: Expo.easeInOut,
      delay: -1,
    });
    t1.to(menu, {
      width: "0",
      opacity: 0,
      duration: 0.2,
      ease: Expo.easeInOut,
      delay: -0.1,
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
    t1.to(menuSocials, {
      opacity: 0,
      visibility: "hidden",
      duration: 0.2,
      ease: Expo.easeInOut,
      delay: -1.4,
    });

    t1.to(imagesWrapper, {
      width: "0",
      duration: 1.2,
      ease: Expo.easeInOut,
      delay: -2.6,
    });
    setIsOpenNav(false);
  };

  // Images Transactions
  const m1Enter = () => {
    var m1 = new TimelineMax();
    m1.to(im1, {
      opacity: 1,
      scale: 1.1,
      duration: 0.8,
      ease: Expo.easeInOut,
    });
    m1.to(im2, {
      opacity: 0,
      delay: -0.8,
      scale: 1,
      duration: 0.8,
      ease: Expo.easeInOut,
    });
    m1.to(im3, {
      opacity: 0,
      delay: -0.8,
      scale: 1,
      duration: 0.8,
      ease: Expo.easeInOut,
    });
    m1.to(im4, {
      opacity: 0,
      delay: -0.8,
      scale: 1,
      duration: 0.8,
      ease: Expo.easeInOut,
    });
    m1.to(im5, {
      opacity: 0,
      delay: -0.8,
      scale: 1,
      duration: 0.8,
      ease: Expo.easeInOut,
    });
  };
  const m2Enter = () => {
    var m1 = new TimelineMax();
    m1.to(im1, {
      opacity: 0,
      scale: 1,
      duration: 0.8,
      ease: Expo.easeInOut,
    });
    m1.to(im2, {
      opacity: 1,
      delay: -0.8,
      scale: 1.1,
      duration: 0.8,
      ease: Expo.easeInOut,
    });
    m1.to(im3, {
      opacity: 0,
      delay: -0.8,
      scale: 1,
      duration: 0.8,
      ease: Expo.easeInOut,
    });
    m1.to(im4, {
      opacity: 0,
      delay: -0.8,
      scale: 1,
      duration: 0.8,
      ease: Expo.easeInOut,
    });
    m1.to(im5, {
      opacity: 0,
      delay: -0.8,
      scale: 1,
      duration: 0.8,
      ease: Expo.easeInOut,
    });
  };
  const m3Enter = () => {
    var m1 = new TimelineMax();
    m1.to(im1, {
      opacity: 0,
      scale: 1,
      duration: 0.8,
      ease: Expo.easeInOut,
    });
    m1.to(im2, {
      opacity: 0,
      delay: -0.8,
      scale: 1,
      duration: 0.8,
      ease: Expo.easeInOut,
    });
    m1.to(im3, {
      opacity: 1,
      delay: -0.8,
      scale: 1.1,
      duration: 0.8,
      ease: Expo.easeInOut,
    });
    m1.to(im4, {
      opacity: 0,
      delay: -0.8,
      scale: 1,
      duration: 0.8,
      ease: Expo.easeInOut,
    });
    m1.to(im5, {
      opacity: 0,
      delay: -0.8,
      scale: 1,
      duration: 0.8,
      ease: Expo.easeInOut,
    });
  };
  const m4Enter = () => {
    var m1 = new TimelineMax();
    m1.to(im1, {
      opacity: 0,
      scale: 1,
      duration: 0.8,
      ease: Expo.easeInOut,
    });
    m1.to(im2, {
      opacity: 0,
      delay: -0.8,
      scale: 1,
      duration: 0.8,
      ease: Expo.easeInOut,
    });
    m1.to(im3, {
      opacity: 0,
      delay: -0.8,
      scale: 1,
      duration: 0.8,
      ease: Expo.easeInOut,
    });
    m1.to(im4, {
      opacity: 1,
      delay: -0.8,
      scale: 1.1,
      duration: 0.8,
      ease: Expo.easeInOut,
    });
    m1.to(im5, {
      opacity: 0,
      delay: -0.8,
      scale: 1,
      duration: 0.8,
      ease: Expo.easeInOut,
    });
  };
  const m5Enter = () => {
    var m1 = new TimelineMax();
    m1.to(im1, {
      opacity: 0,
      scale: 1,
      duration: 0.8,
      ease: Expo.easeInOut,
    });
    m1.to(im2, {
      opacity: 0,
      delay: -0.8,
      scale: 1,
      duration: 0.8,
      ease: Expo.easeInOut,
    });
    m1.to(im3, {
      opacity: 0,
      scale: 1,
      delay: -0.8,
      duration: 0.8,
      ease: Expo.easeInOut,
    });
    m1.to(im4, {
      opacity: 0,
      delay: -0.8,
      scale: 1,
      duration: 0.8,
      ease: Expo.easeInOut,
    });
    m1.to(im5, {
      opacity: 1,
      delay: -0.8,
      scale: 1.1,
      duration: 0.8,
      ease: Expo.easeInOut,
    });
  };

  // search
  const openSearch = () => {
    var s1 = new TimelineMax();

    s1.to(searchWrapper, {
      width: "100%",
      duration: 0.4,
      ease: Expo.easeOut,
    });
    s1.to(searchBar, {
      top: "60px",
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
      duration: 1,
      ease: Expo.easeInOut,
    });
    c1.to(cartSummary, {
      opacity: 1,
      visibility: "visible",
      duration: 2,
      ease: Expo.easeOut,
      delay: -1,
    });
    c1.to(cartX, {
      right: "30px",
      duration: 0.8,
      ease: Expo.easeOut,
      delay: -1.8,
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
      ease: Expo.easeOut,
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
  };

  return (
    <div className={`navigation ${NavHeight ? "active" : ""}`}>
      {/* Toggle */}
      <div
        className="toggle"
        id="toggle"
        onClick={isOpenNav ? closeNav : openNav}
      >
        <span ref={(el) => (one = el)}></span>
        <span ref={(el) => (two = el)}></span>
      </div>

      {/* Logo */}
      <div style={{ cursor: "pointer" }} className="logo">
        <Link href="/">
          <div>
            {/* <div className="logo-img">
              <img src="/assets/icons/logo.svg" alt="" />
            </div>
            <h1 className="logo-text">arktastic</h1> */}
            <span>ARK</span>
            <span>TAS</span>
            <span>TIC</span>
          </div>
        </Link>
      </div>

      {/* Actions */}
      <div className="actions">
        <span onClick={isOpenSearch ? closeSearch : openSearch}>
          <img src="/assets/icons/search.svg" alt="" />
        </span>
        <span onClick={openCart}>
          <img src="/assets/icons/shopping-bag.svg" alt="" />
        </span>
        <span
          className="account--trigger"
          ref={node}
          onClick={(e) => setAccOpen(!accOpen)}
        >
          <img src="/assets/icons/user.svg" alt="" />

          {accOpen === true ? (
            <div class="account-card" ref={(el) => (accountCard = el)}>
              {userInfo.firstName ? (
                <>
                  <li>
                    <Link href="/profile">
                      <a href="/profile">
                        <ion-icon name="cube-outline"></ion-icon> Profile
                      </a>
                    </Link>
                  </li>
                  <li>
                    <a href="#">
                      <ion-icon name="bookmark-outline"></ion-icon> Address
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <ion-icon name="heart-outline"></ion-icon> Wishlist
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <ion-icon name="log-out-outline"></ion-icon> Logout
                    </a>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link href="/register">
                      <a href="/register">
                        <ion-icon name="people-outline"></ion-icon> Register
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/login">
                      <a href="/login">
                        <ion-icon name="key-outline"></ion-icon> Login
                      </a>
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

        <div className={searchKeyword.length >= 3 ? "autolist" : null}>
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
            className="text-upper text-cream pdetails__body--back"
          >
            <ion-icon name="arrow-back-outline"></ion-icon> Back to Store
          </span>
          <div className="d-flex justify-content-between align-content-center">
            <div className="wrapper-cart__details--title">Shopping cart</div>
            <div className="title">2 items</div>
          </div>
          <table className="wrapper-cart__table">
            <tr>
              <th>Item</th>
              <th>Size</th>
              <th>Quantity</th>
              <th>Price</th>
              <th></th>
            </tr>
            <tr className="wrapper-cart__table--data">
              <td className="d-flex">
                <div className="wrapper-cart__table--img">
                  <img src="/assets/products/customizable-mug.jpg" alt="" />
                </div>
                <div className="wrapper-cart__table--name">
                  <h2>Picàs Scent women</h2>
                  <h5>SiQo</h5>
                </div>
              </td>
              <td>250ml</td>
              <td>
                <div className="wrapper-cart__table--quantity">
                  <span>
                    <ion-icon name="remove-circle-outline"></ion-icon>
                  </span>
                  <span>1</span>
                  <span>
                    <ion-icon name="add-circle-outline"></ion-icon>
                  </span>
                </div>
              </td>
              <td className="wrapper-cart__table--price">$80</td>
              <td className="wrapper-cart__table--delete">
                <ion-icon name="close-outline"></ion-icon>
              </td>
            </tr>
            <tr className="wrapper-cart__table--data">
              <td className="d-flex">
                <div className="wrapper-cart__table--img">
                  <img
                    src="/assets/products/mountain-fox-notebook.jpg"
                    alt=""
                  />
                </div>
                <div className="wrapper-cart__table--name">
                  <h2>Picàs Scent women</h2>
                  <h5>SiQo</h5>
                </div>
              </td>
              <td>250ml</td>
              <td>
                <div className="wrapper-cart__table--quantity">
                  <span>
                    <ion-icon name="remove-circle-outline"></ion-icon>
                  </span>
                  <span>1</span>
                  <span>
                    <ion-icon name="add-circle-outline"></ion-icon>
                  </span>
                </div>
              </td>
              <td className="wrapper-cart__table--price">$80</td>
              <td className="wrapper-cart__table--delete">
                <ion-icon name="close-outline"></ion-icon>
              </td>
            </tr>
          </table>
        </div>
        <div ref={(el) => (cartSummary = el)} className="wrapper-cart__summary">
          <div className="wrapper-cart__summary--top">
            <div className="heading mb-6">Summary</div>

            <div className="d-flex justify-content-between align-content-center">
              <div className="subheading __500">Subtotal</div>
              <div className="subheading __500 text-right">$330</div>
            </div>
            <div className="d-flex justify-content-between align-content-center">
              <div className="subheading __500">Shipping</div>
              <div className="subheading __500 text-right">$5</div>
            </div>
            <div className="d-flex justify-content-between align-content-center">
              <div className="subheading __500">Tax</div>
              <div className="subheading __500 text-right">$0</div>
            </div>
          </div>
          <div className="wrapper-cart__summary--bottom pb-8">
            <div className="d-flex justify-content-between mt-2">
              <div className="title __600 text-capitalize">Total</div>
              <div className="heading">$330</div>
            </div>
            <div className="mt-3">
              <Link href="/checkout">
                <a onClick={closeCart} className="btn btn-block">
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
          <ul>
            <Link
              href={{
                pathname: "/products",
                query: {
                  category: "upperwear",
                },
              }}
            >
              <li
                onClick={closeAll}
                onMouseEnter={m1Enter}
                ref={(el) => (menuItem1 = el)}
              >
                <span id="count">01</span>
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
              <li
                onClick={closeAll}
                onMouseEnter={m2Enter}
                ref={(el) => (menuItem2 = el)}
              >
                <span id="count">02</span>
                <span id="menu">&nbsp;Lowers</span>
              </li>
            </Link>
            <Link
              href={{
                pathname: "/products",
                query: {
                  category: "accessories",
                },
              }}
            >
              <li
                onClick={closeAll}
                onMouseEnter={m3Enter}
                ref={(el) => (menuItem3 = el)}
              >
                <span id="count">03</span>
                <span id="menu">&nbsp;Accessories</span>
              </li>
            </Link>
            <Link
              href={{
                pathname: "/products",
                query: {
                  category: "footwear",
                },
              }}
            >
              <li
                onClick={closeAll}
                onMouseEnter={m4Enter}
                ref={(el) => (menuItem4 = el)}
              >
                <span id="count">04</span>
                <span id="menu">&nbsp;Footwear</span>
              </li>
            </Link>
            <Link
              href={{
                pathname: "/products",
                query: {
                  category: "health-and-beauty",
                },
              }}
            >
              <li
                onClick={closeAll}
                onMouseEnter={m5Enter}
                ref={(el) => (menuItem5 = el)}
              >
                <span id="count">05</span>
                <span id="menu">&nbsp;Health & Beauty</span>
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

      {/* Wrapper Images */}
      <div
        className="wrapper-images"
        onClick={closeNav}
        ref={(el) => (imagesWrapper = el)}
      >
        <div className="images">
          <span className="image im1" ref={(el) => (im1 = el)}>
            <img src="/assets/sections/nav-upper.jpg" alt="" />
          </span>
          <span className="image im2" ref={(el) => (im2 = el)}>
            <img src="/assets/sections/nav-lowers.jpg" alt="" />
          </span>
          <span className="image im3" ref={(el) => (im3 = el)}>
            <img src="/assets/sections/nav-accessories.jpg" alt="" />
          </span>
          <span className="image im4" ref={(el) => (im4 = el)}>
            <img src="/assets/sections/nav-foot.jpg" alt="" />
          </span>
          <span className="image im5" ref={(el) => (im5 = el)}>
            <img src="/assets/sections/nav-health.jpg" alt="" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
// export default connect(mapStateToProps, null)(Navbar);

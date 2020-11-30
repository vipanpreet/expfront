import Link from "next/link";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItemsCount } from "../../../redux/cart/cart.selectors";
import $ from "jquery";
import { useDispatch, useSelector } from "react-redux";
import Router from "next/router";
import { logout } from "../../../redux/login/login.actions";

// Animation GSAP
import { TweenMax, TimelineMax, Power3 } from "gsap";

const mapStateToProps = createStructuredSelector({
  cartItemsCount: selectCartItemsCount,
});

const Navbar = ({ cartItemsCount }) => {
  // BAR
  let nav = useRef(null);
  let navBar = useRef(null);
  let navBarContainer = useRef(null);
  let navBarContainerImage = useRef(null);
  let navBarContainerImageContainer = useRef(null);

  let menuItem1 = useRef(null);
  let menuItem2 = useRef(null);
  let menuItem3 = useRef(null);
  let menuItem4 = useRef(null);
  let menuItem5 = useRef(null);
  let menuItem6 = useRef(null);
  let menuItem7 = useRef(null);
  let menuItem8 = useRef(null);
  let menuItem9 = useRef(null);

  // CART
  let cart = useRef(null);
  let cartDetails = useRef(null);
  let cartSummary = useRef(null);
  let cartX = useRef(null);

  let [open, setOpen] = useState(false);

  useEffect(() => {
    $(".search--trigger").on("click", (e) => {
      $(".searchbar").toggleClass("isactive");
      $(e.currentTarget).toggleClass("isactive");
      if ($("#searchicon").attr("name") === "close") {
        $("#searchicon").attr("name", "search");
      } else {
        $("#searchicon").attr("name", "close");
      }
    });
  }, []);

  // open nav
  const openNav = () => {
    var isMobile;
    window.innerWidth < 1024 ? (isMobile = "100vw") : (isMobile = "45vw");

    TweenMax.to(navBar, 1.4, {
      width: isMobile,
      ease: Power3.easeInOut,
    });
    TweenMax.to(navBarContainer, 0.8, {
      opacity: 1,
      visibility: "visible",
      ease: Power3.easeOut,
      delay: 1,
    });
    TweenMax.from(navBarContainerImageContainer, 1.8, {
      x: -200,
      scale: 1.2,
      opacity: 1,
      delay: 1,
      ease: Power3.easeOut,
    });
    TweenMax.to(navBarContainerImage, 1.2, {
      scale: 1.2,
      opacity: 1,
      delay: 1.1,
    });
    TweenMax.staggerFrom(
      [
        menuItem1,
        menuItem2,
        menuItem3,
        menuItem4,
        menuItem5,
        menuItem6,
        menuItem7,
        menuItem8,
        menuItem9,
      ],
      0.8,
      { opacity: 0, ease: Power3.easeOut, delay: 0.8 },
      0.1
    );
    $(".hamburger").on("click", (e) => {
      $(e.currentTarget).removeClass("is-active");
    });
    setOpen(true);
  };

  const closeNav = () => {
    TweenMax.to(navBar, 1.2, { width: 0, ease: Power3.easeInOut });
    TweenMax.to(navBarContainerImage, 0.8, {
      scale: 1.0,
      opacity: 0,
    });
    TweenMax.to(navBarContainer, 0.8, {
      opacity: 0,
      visibility: "hidden",
      ease: Power3.easeOut,
    });
    $(".hamburger").on("click", (e) => {
      $(e.currentTarget).addClass("is-active");
    });
    setOpen(false);
  };

  const openCart = () => {
    var isMobileCart;
    window.innerWidth < 1024
      ? (isMobileCart = "100vw")
      : (isMobileCart = "80vw");
    TweenMax.to(cart, 1, {
      width: isMobileCart,
      ease: Power3.easeInOut,
    });
    TweenMax.to(cartDetails, 1.5, {
      opacity: 1,
      visibility: "visible",
      ease: Power3.easeOut,
      delay: 0.8,
    });
    TweenMax.to(cartSummary, 2, {
      opacity: 1,
      visibility: "visible",
      ease: Power3.easeOut,
      delay: 0.8,
    });
    TweenMax.to(cartX, 0.8, {
      right: "30px",
      ease: Power3.easeOut,
      delay: 0.8,
    });
  };
  const closeCart = () => {
    TweenMax.to(cart, 1, { width: 0, ease: Power3.easeInOut, delay: 0.1 });
    TweenMax.to(cartDetails, 0.8, {
      opacity: 0,
      ease: Power3.easeOut,
    });
    TweenMax.to(cartSummary, 0.8, {
      opacity: 0,
      ease: Power3.easeOut,
    });
    TweenMax.to(cartDetails, 0.8, {
      visibility: "hidden",
      delay: 0.8,
      ease: Power3.easeOut,
    });
    TweenMax.to(cartSummary, 0.8, {
      visibility: "hidden",
      delay: 0.8,
      ease: Power3.easeOut,
    });
    TweenMax.to(cartX, 0.8, {
      right: "-30px",
      ease: Power3.easeOut,
    });
  };

  const dispatch = useDispatch();
  const login = useSelector((state) => state.login);
  const { userInfo } = login;

  const handleAccountBtn = () => {
    // checking if the object is not empty
    if (Object.keys(userInfo).length !== 0 && userInfo.constructor === Object) {
      // if logged in then show the profile page
      // Router.push("/auth");
    } else {
      // if the user if not logged in show the login path
      Router.push("/login");
    }
  };

  const handleLogoutBtn = () => {
    dispatch(logout());
  };

  return (
    <div ref={(el) => (nav = el)} className="nav">
      <div ref={(el) => (cart = el)} className="nav-cart">
        <div
          onClick={closeCart}
          ref={(el) => (cartX = el)}
          className="nav-cart--x"
        >
          <ion-icon name="close-outline"></ion-icon>
        </div>
        <div ref={(el) => (cartDetails = el)} className="nav-cart__details">
          <span
            onClick={closeCart}
            className="text-upper text-cream pdetails__body--back"
          >
            <ion-icon name="arrow-back-outline"></ion-icon> Back to Store
          </span>
          <div className="d-flex justify-content-between align-content-center">
            <div className="nav-cart__details--title">Shopping cart</div>
            <div className="title">2 items</div>
          </div>
          <table className="nav-cart__table">
            <tr>
              <th>Item</th>
              <th>Size</th>
              <th>Quantity</th>
              <th>Price</th>
              <th></th>
            </tr>
            <tr className="nav-cart__table--data">
              <td className="d-flex">
                <div className="nav-cart__table--img">
                  <img src="/assets/products/customizable-mug.jpg" alt="" />
                </div>
                <div className="nav-cart__table--name">
                  <h2>Picàs Scent women</h2>
                  <h5>SiQo</h5>
                </div>
              </td>
              <td>250ml</td>
              <td>
                <div className="nav-cart__table--quantity">
                  <span>
                    <ion-icon name="remove-circle-outline"></ion-icon>
                  </span>
                  <span>1</span>
                  <span>
                    <ion-icon name="add-circle-outline"></ion-icon>
                  </span>
                </div>
              </td>
              <td className="nav-cart__table--price">$80</td>
              <td className="nav-cart__table--delete">
                <ion-icon name="close-outline"></ion-icon>
              </td>
            </tr>
            <tr className="nav-cart__table--data">
              <td className="d-flex">
                <div className="nav-cart__table--img">
                  <img
                    src="/assets/products/mountain-fox-notebook.jpg"
                    alt=""
                  />
                </div>
                <div className="nav-cart__table--name">
                  <h2>Picàs Scent women</h2>
                  <h5>SiQo</h5>
                </div>
              </td>
              <td>250ml</td>
              <td>
                <div className="nav-cart__table--quantity">
                  <span>
                    <ion-icon name="remove-circle-outline"></ion-icon>
                  </span>
                  <span>1</span>
                  <span>
                    <ion-icon name="add-circle-outline"></ion-icon>
                  </span>
                </div>
              </td>
              <td className="nav-cart__table--price">$80</td>
              <td className="nav-cart__table--delete">
                <ion-icon name="close-outline"></ion-icon>
              </td>
            </tr>
          </table>
        </div>
        <div ref={(el) => (cartSummary = el)} className="nav-cart__summary">
          <div className="nav-cart__summary--top">
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
          <div className="nav-cart__summary--bottom pb-8">
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

      <div className="searchbar">
        <div className="searchbar--input">
          <input type="text" placeholder="Type to search" />
        </div>
        <div className="searchbar__result">
          <div className="searchbar__result--item">
            <a href="#">White shirt in colors</a>
            <h5>
              in <span>Shirts</span>
            </h5>
          </div>
        </div>
      </div>
      <div ref={(el) => (navBar = el)} className="nav__bar">
        {/* <div className="title">MENU</div> */}
        <div
          ref={(el) => (navBarContainer = el)}
          className="nav__bar__container"
        >
          <div
            ref={(el) => (navBarContainerImageContainer = el)}
            className="nav__bar__container--image"
          >
            <img
              ref={(el) => (navBarContainerImage = el)}
              src="/assets/sections/navigation-woman.jpg"
              alt=""
            />
          </div>
          <div className="nav__bar__container--menu">
            <div className="nav__bar__container--title __800 text-primary mb-2">
              <span>Catalogue</span>
            </div>
            <li ref={(el) => (menuItem1 = el)}>
              <Link href="/">
                <a id="nav-home">Home</a>
              </Link>
            </li>
            <li ref={(el) => (menuItem2 = el)}>
              <a id="nav-accessories" href="/products">
                accessories
              </a>
            </li>
            <li ref={(el) => (menuItem3 = el)}>
              <a id="nav-uppers" href="/products">
                Uppers
              </a>
            </li>
            <li ref={(el) => (menuItem4 = el)}>
              <a id="nav-footwear" href="/products">
                footwear
              </a>
            </li>
            <li ref={(el) => (menuItem5 = el)}>
              <a id="nav-health" href="/products">
                Health &amp; Beauty
              </a>
            </li>
            <div
              ref={(el) => (menuItem6 = el)}
              className="nav__bar__container--title __800 text-primary mt-3 mb-2"
            >
              <span>Navigate</span>
            </div>
            <li ref={(el) => (menuItem7 = el)}>
              <a className="__800" href="/products">
                Shop in Luxury
              </a>
            </li>
            <li ref={(el) => (menuItem8 = el)}>
              <Link href="/categories">Our categories</Link>
            </li>
            <li ref={(el) => (menuItem9 = el)}>
              <a href="#">About us</a>
            </li>
          </div>
        </div>
      </div>
      <div onClick={open ? closeNav : openNav} className="nav__hamburger">
        <div className="hamburger" id="hamburger">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
        <div className="nav__hamburger--menu">
          <a href="#">men</a>
          <a href="#">women</a>
          <a href="#">Luxury</a>
        </div>
      </div>
      <Link href="/">
        <div className="nav__logo">
          <a style={{ cursor: "pointer" }}>Arktastic</a>
        </div>
      </Link>
      <div className="nav__icons">
        <div className="nav__icons--list search--trigger">
          <a className="nav__icons--link">
            <ion-icon id="searchicon" name="search-outline"></ion-icon>
          </a>
        </div>
        <div className="nav__icons--list">
          <a onClick={openCart} className="nav__icons--link cart--trigger">
            <ion-icon name="bag-outline"></ion-icon>
            <span>{cartItemsCount}</span>
          </a>
        </div>

        {/* { showing the info of user who logged in the website} */}
        {userInfo.firstName ? (
          <div class="nav__icons--list">
            <Link href="/profile" class="nav__icons--user">
              Profile
            </Link>
          </div>
        ) : (
          <div className="nav__icons--list">
            <a
              onClick={handleAccountBtn}
              className="nav__icons--link cart--trigger"
            >
              <ion-icon name="person-outline"></ion-icon>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

// export default Navbar;
export default connect(mapStateToProps, null)(Navbar);

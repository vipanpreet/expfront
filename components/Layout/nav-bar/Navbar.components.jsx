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

  let [open, setOpen] = useState(false);

  useEffect(() => {
    TweenMax.from(nav, 1.4, {
      top: -60,
      ease: Power3.easeInOut,
      delay: 4,
    });

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

  const openNav = () => {
    let isMobile;
    window.innerWidth < 1024 ? (isMobile = "100vw") : (isMobile = "45vw");
    console.log(isMobile);
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

  const dispatch = useDispatch();
  const loginReducerState = useSelector((state) => state.login);
  const { userInfo } = loginReducerState;

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
            <ion-icon id="searchicon" name="search"></ion-icon>
          </a>
        </div>
        <div className="nav__icons--list">
          <Link href="/cart">
            <a className="nav__icons--link cart--trigger">
              <ion-icon name="bag"></ion-icon>
              <span>{cartItemsCount}</span>
            </a>
          </Link>
        </div>

        {userInfo.firstName ? (
          <div style={{ display: "flex", paddingLeft: "10px" }}>
            <h2>Hello, {userInfo.firstName}</h2>
            <div className="nav__icons--list">
              <a
                style={{ textDecoration: "none", cursor: "pointer" }}
                onClick={handleLogoutBtn}
              >
                Logout
              </a>
            </div>
          </div>
        ) : (
          <div className="nav__icons--list">
            <a
              onClick={handleAccountBtn}
              className="nav__icons--link cart--trigger"
            >
              <ion-icon name="person"></ion-icon>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

// export default Navbar;
export default connect(mapStateToProps, null)(Navbar);

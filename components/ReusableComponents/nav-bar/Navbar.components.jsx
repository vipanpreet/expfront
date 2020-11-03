import Link from "next/link";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItemsCount } from "../../../redux/cart/cart.selectors";
import { useEffect } from "react";
import $ from "jquery";
import { useDispatch, useSelector } from "react-redux";
import Router from "next/router";
import { logout } from "../../../redux/login/login.actions";

const mapStateToProps = createStructuredSelector({
  cartItemsCount: selectCartItemsCount,
});

const Navbar = ({ cartItemsCount }) => {
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

    $(".hamburger").on("click", (e) => {
      $(e.currentTarget).toggleClass("is-active");
      $(".nav__bar").toggleClass("is-active");
    });
  });

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
      Router.push("/auth");
    }
  };

  const handleLogoutBtn = () => {
    dispatch(logout());
  };

  return (
    <div className="nav">
      <div class="searchbar">
        <div class="searchbar--input">
          <input type="text" placeholder="Type to search" />
        </div>
        <div class="searchbar__result">
          <div class="searchbar__result--item">
            <a href="#">White shirt in colors</a>
            <h5>
              in <span>Shirts</span>
            </h5>
          </div>
        </div>
      </div>
      <div className="nav__bar">
        <div className="title">MENU</div>
        <div className="nav__bar__container">
          <div className="nav__bar__container--image">
            <img src="/assets/sections/navigation-woman.jpg" alt="" />
          </div>
          <div className="nav__bar__container--menu">
            <div className="nav__bar__container--title __800 text-primary mb-2">
              <span>Catalogue</span>
            </div>
            <li>
              <Link href="/">
                <a id="nav-home">Home</a>
              </Link>
            </li>
            <li>
              <a id="nav-accessories" href="/products">
                accessories
              </a>
            </li>
            <li>
              <a id="nav-uppers" href="/products">
                Uppers
              </a>
            </li>
            <li>
              <a id="nav-footwear" href="/products">
                footwear
              </a>
            </li>
            <li>
              <a id="nav-health" href="/products">
                Health &amp; Beauty
              </a>
            </li>
            <div className="nav__bar__container--title __800 text-primary mt-3 mb-2">
              <span>Navigate</span>
            </div>
            <li>
              <a className="__800" href="/products">
                Shop in Luxury
              </a>
            </li>
            <li>
              <Link href="/categories">Our categories</Link>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
          </div>
        </div>
      </div>
      <div className="nav__hamburger">
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
        <div
          className="nav__logo"
          style={{ textDecoration: "none", cursor: "pointer" }}
        >
          <h1>Arktastic</h1>
        </div>
      </Link>
      <div className="nav__icons">
        <div class="nav__icons--list search--trigger">
          <a class="nav__icons--link">
            <ion-icon id="searchicon" name="search"></ion-icon>
          </a>
        </div>
        <div class="nav__icons--list">
          <Link href="/cart">
            <a class="nav__icons--link cart--trigger">
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
          <div class="nav__icons--list">
            <a
              onClick={handleAccountBtn}
              class="nav__icons--link cart--trigger"
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

import Link from "next/link";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItemsCount } from "../../../redux/cart/cart.selectors";
import { useEffect } from "react";
import $ from "jquery";

const mapStateToProps = createStructuredSelector({
  cartItemsCount: selectCartItemsCount,
});

const Navbar = ({ cartItemsCount }) => {
  useEffect(() => {
    $(".hamburger").on("click", (e) => {
      $(e.currentTarget).toggleClass("is-active");
      $(".nav__bar").toggleClass("is-active");
    });
  });
  return (
    <div>
      <div className="nav">
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
          <div className="nav__icons--list">
            <a className="nav__icons--x">x</a>
            <Link href="/cart">
              <a className="nav__icons--link cart--trigger">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="25"
                  height="25"
                  viewBox="0 0 256 256"
                  shapeRendering="crispEdges"
                >
                  <image
                    x="25"
                    y="3"
                    width="206"
                    height="250"
                    xlinkHref="data:img/png;base64,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"
                  />
                </svg>
                <span>{cartItemsCount}</span>
              </a>
            </Link>
          </div>
          <Link href="/auth">
            <div className="nav__icons--list">
              <a style={{ textDecoration: "none", cursor: "pointer" }}>
                Account
              </a>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

// export default Navbar;
export default connect(mapStateToProps, null)(Navbar);

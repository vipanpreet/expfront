import Navbar from "../components/Layout/nav-bar/Navbar.components";
import CartWrapper from "../components/CartPage/cart-wrapper/Cartwrapper.components";
import CartFooter from "../components/CartPage/cart-footer/Cartfooter.components";

// import { connect } from "react-redux";
// import { createStructuredSelector } from "reselect";
// import {
//   selectCartItems,
//   selectCartItemsCount,
// } from "../redux/cart/cart.selectors";

// const mapStateToProps = createStructuredSelector({
//   cartItems: selectCartItems,
//   cartItemsCount: selectCartItemsCount,
// });

const Cart = () => {
  // console.log(cartItems);
  return (
    <div>
      <Navbar />
      <main>
        <CartWrapper />
        <CartFooter />
      </main>
    </div>
  );
};

export default Cart;
// export default connect(mapStateToProps, null)(Cart);

import Navbar from "../components/ReusableComponents/nav-bar/Navbar.components";
import Cartwrapper from "../components/CartPage/cart-wrapper/Cartwrapper.components";
import Cartfooter from "../components/CartPage/cart-footer/Cartfooter.components";

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
        <Cartwrapper />
        <Cartfooter />
      </main>
    </div>
  );
};

export default Cart;
// export default connect(mapStateToProps, null)(Cart);

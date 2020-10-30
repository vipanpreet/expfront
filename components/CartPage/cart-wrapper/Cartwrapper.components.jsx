import Carditem from "../cart-item/Cartitem.components";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartItemsCount,
} from "../../../redux/cart/cart.selectors";

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartItemsCount: selectCartItemsCount,
});

const Cartwrapper = ({ cartItems, cartItemsCount }) => {
  var cartTotal = 0;
  return (
    <div className="container-large">
      <div className="breadcrum">
        <div className="subtitle font-light">Shopping Cart</div>
        <span className="breadcrum--list">
          <a href="index.html">Home</a> {">"} <span>Shopping Cart</span>
        </span>
      </div>
      <div className="row">
        <div className="col-md-8">
          {cartItems.map((item) => {
            cartTotal = cartTotal + parseFloat(item.singleProduct.price);
            return <Carditem product={item} key={item.storeId} />;
          })}

          {/* <!-- Cart Total --> */}
          <div className="text-right mt-5">
            <div className="heading">Total</div>
            <div className="subtitle">${cartTotal}</div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="cart-sum">
            <div className="title __500">Order Summary</div>

            <div className="cart-sum--title mt-3">SubTotal (2) items</div>
            <div className="cart-sum--amount">
              <span>Amount:</span> ${cartTotal}
            </div>
            <div className="cart-sum--amount">
              <span>OFF:</span>
            </div>
            <div className="cart-sum--total mt-4">
              <span>Order Total: </span> ${cartTotal}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// export default Cartwrapper;
export default connect(mapStateToProps, null)(Cartwrapper);

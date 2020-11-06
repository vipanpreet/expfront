import { connect } from "react-redux";
import { clearItemFromCart } from "../../../redux/cart/cart.actions";

const CartItem = ({ product, clearItemFromCart }) => {
  const handleRemoveBtn = () => {
    clearItemFromCart({ product });
  };
  console.log(product);
  var item = product.singleProduct;
  return (
    <div className="cart-item">
      <div className="cart-item-left">
        <div className="cart-item-left__img">
          <img src="assets/tshirt2.jpg" alt="" />
        </div>
        <div className="cart-item-left__body">
          <div className="cart-item-left__body--title">{item.name}</div>
          <div className="cart-item-left__body--details">
            Size: <span>XL</span>
          </div>
          <div className="cart-item-left__body--details">
            Color: <span>Red</span>
          </div>
        </div>
      </div>
      <div className="cart-item-center">
        <div className="cart-item-center--quantity">
          <button>
            <ion-icon name="remove-outline"></ion-icon>
          </button>
          <span>1</span>
          <button>
            <ion-icon name="add-outline"></ion-icon>
          </button>
        </div>
      </div>
      <div className="cart-item-right">
        <div className="cart-item-right--left">
          <div className="cart-item-right--price">{item.price}</div>
        </div>
        <div className="cart-item-right--right">
          <a href="#" className="cart-item-right--x" onClick={handleRemoveBtn}>
            <ion-icon name="trash-bin-outline"></ion-icon>
          </a>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CartItem);

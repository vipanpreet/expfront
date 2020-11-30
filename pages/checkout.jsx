import CheckoutAddress from "../components/CheckoutPage/checkout-address/CheckoutAddress.component";
import CheckoutCart from "../components/CheckoutPage/checkout-cart/CheckoutCart.component";

export default function Login(props) {
  return (
    <>
      <main>
        <div className="checkout-wrapper">
          <div className="row">
            <div className="col-lg-2 mt-7">
              <div className="heading text-center">Checkout</div>
            </div>
            <div className="col-lg-7 mt-6 pl-3">
              <CheckoutAddress />
            </div>
            <div className="col-lg-3 bg-white">
              <CheckoutCart />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

import CheckoutAddress from "../components/CheckoutPage/checkout-address/CheckoutAddress.component";
import CheckoutCart from "../components/CheckoutPage/checkout-cart/CheckoutCart.component";

export default function Login(props) {
  return (
    <>
      <main>
        <div class="bg-cream h-100">
          <div class="row">
            <div class="col-lg-2 mt-7">
              <div class="heading text-center">Checkout</div>
            </div>
            <div class="col-lg-7 mt-6 pl-3">
              <CheckoutAddress />
            </div>
            <div class="col-lg-3 bg-white h-100">
              <CheckoutCart />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

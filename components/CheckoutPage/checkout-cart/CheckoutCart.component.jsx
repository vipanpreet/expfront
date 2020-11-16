const CheckoutCart = () => {
  return (
    <div class="cart">
      <div class="d-flex justify-content-between">
        <div class="title __600 text-capitalize">Items</div>
      </div>
      <div class="cart__container">
        <div class="cart__item">
          <div class="cart--details">
            <h3>Picàs Scent women</h3>
            <p>SiQo</p>
          </div>
          <div class="cart--quantity">
            <h5>
              1 <span>x</span>
            </h5>
            <h4>$80</h4>
          </div>
        </div>
        <div class="cart__item">
          <div class="cart--details">
            <h3>Transparent Shirt</h3>
            <p>Commando</p>
          </div>
          <div class="cart--quantity">
            <h5>
              1 <span>x</span>
            </h5>
            <h4>$250</h4>
          </div>
        </div>
      </div>
      <div class="cart__footer">
        <div class="d-flex justify-content-between">
          <div class="cart__footer--promo">Promocode</div>
          <div class="cart__footer--input">
            <input type="text" placeholder="enter code" />
          </div>
        </div>
        <div class="d-flex justify-content-between mt-2">
          <div class="title __600 text-capitalize">Total</div>
          <div class="heading">$330</div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCart;

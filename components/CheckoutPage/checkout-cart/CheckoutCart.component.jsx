const CheckoutCart = () => {
  return (
    <div className="cart">
      <div className="d-flex justify-content-between">
        <div className="title __600 text-capitalize">Items</div>
      </div>
      <div className="cart__container">
        <div className="cart__item">
          <div className="cart--details">
            <h3>Picàs Scent women</h3>
            <p>SiQo</p>
          </div>
          <div className="cart--quantity">
            <h5>
              1 <span>x</span>
            </h5>
            <h4>$80</h4>
          </div>
        </div>
        <div className="cart__item">
          <div className="cart--details">
            <h3>Transparent Shirt</h3>
            <p>Commando</p>
          </div>
          <div className="cart--quantity">
            <h5>
              1 <span>x</span>
            </h5>
            <h4>$250</h4>
          </div>
        </div>
      </div>
      <div className="cart__footer">
        <div className="d-flex justify-content-between">
          <div className="cart__footer--promo">Promocode</div>
          <div className="cart__footer--input">
            <input type="text" placeholder="enter code" />
          </div>
        </div>
        <div className="d-flex justify-content-between mt-2">
          <div className="title __600 text-capitalize">Total</div>
          <div className="heading">$330</div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCart;

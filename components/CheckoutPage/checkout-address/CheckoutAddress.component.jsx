const CheckoutAddress = () => {
  return (
    <>
      <div className="checkout-heading __500">
        Where would you like your <br />
        order sent ?
      </div>
      <div className="input-group">
        <input className="input" type="text" required />
        <span className="highlight"></span>
        <span className="bar"></span>
        <label className="label">Address 1</label>
      </div>
      <div className="input-group">
        <input className="input" type="text" required />
        <span className="highlight"></span>
        <span className="bar"></span>
        <label className="label">Address 2</label>
      </div>
      <div className="input-group">
        <input className="input" type="text" required />
        <span className="highlight"></span>
        <span className="bar"></span>
        <label className="label">Suburb</label>
      </div>
      <div className="input-group">
        <input className="input" type="text" required />
        <span className="highlight"></span>
        <span className="bar"></span>
        <label className="label">State</label>
      </div>

      <div className="input-group">
        <input className="input" type="text" required />
        <span className="highlight"></span>
        <span className="bar"></span>
        <label className="label">Postcode</label>
      </div>
      <div className="input-group">
        <input className="input" type="text" required />
        <span className="highlight"></span>
        <span className="bar"></span>
        <label className="label">Mobile Number</label>
      </div>
      <div className="mt-5 mb">
        <a href="#" className="btn btn--font">
          Continue
        </a>
      </div>
    </>
  );
};

export default CheckoutAddress;

const CheckoutAddress = () => {
  return (
    <>
      <div class="checkout-heading __500">
        Where would you like your <br />
        order sent ?
      </div>
      <div class="input-group">
        <input class="input" type="text" required />
        <span class="highlight"></span>
        <span class="bar"></span>
        <label class="label">Address 1</label>
      </div>
      <div class="input-group">
        <input class="input" type="text" required />
        <span class="highlight"></span>
        <span class="bar"></span>
        <label class="label">Address 2</label>
      </div>
      <div class="input-group">
        <input class="input" type="text" required />
        <span class="highlight"></span>
        <span class="bar"></span>
        <label class="label">Suburb</label>
      </div>
      <div class="input-group">
        <input class="input" type="text" required />
        <span class="highlight"></span>
        <span class="bar"></span>
        <label class="label">State</label>
      </div>

      <div class="input-group">
        <input class="input" type="text" required />
        <span class="highlight"></span>
        <span class="bar"></span>
        <label class="label">Postcode</label>
      </div>
      <div class="input-group">
        <input class="input" type="text" required />
        <span class="highlight"></span>
        <span class="bar"></span>
        <label class="label">Mobile Number</label>
      </div>
      <div class="mt-5 mb">
        <a href="#" class="btn btn--font">
          Continue
        </a>
      </div>
    </>
  );
};

export default CheckoutAddress;

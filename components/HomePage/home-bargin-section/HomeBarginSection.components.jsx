import Home from "../../../pages";

const HomeBarginSection = () => {
  return (
    <section className="section-bargains">
      <div className="container-xlarge mt-6">
        <div className="title mb-5">Arktastic Bragains</div>

        <div className="row row-cols-2">
          <div class="col-lg-3">
            <div class="subtitle">Good discounts</div>
            <div class="subheading mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              sint ipsam repudiandae.
            </div>
            <div class="mt-3">
              <a href="#" class="btn btn--cream">
                View All
              </a>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card-alt">
              <div className="card-alt--img">
                <img src="assets/products/shirt3.jpg" alt="" />
              </div>

              <div className="card-alt__body">
                <div className="card-alt__body--brand">Beethoven</div>
                <div>
                  <a href="#" className="card-alt__body--name">
                    a New Women`s Classic Shirt
                  </a>
                </div>
                <p className="card-alt__body--text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
                <div className="card-alt__body--price">AUD 200</div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card-alt">
              <div className="card-alt--img">
                <img src="assets/products/shirt3.jpg" alt="" />
              </div>

              <div className="card-alt__body">
                <div className="card-alt__body--brand">Beethoven</div>
                <div>
                  <a href="#" className="card-alt__body--name">
                    a New Women`s Classic Shirt
                  </a>
                </div>
                <p className="card-alt__body--text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
                <div className="card-alt__body--price">AUD 200</div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card-alt">
              <div className="card-alt--img">
                <img src="assets/products/shirt3.jpg" alt="" />
              </div>

              <div className="card-alt__body">
                <div className="card-alt__body--brand">Beethoven</div>
                <div>
                  <a href="#" className="card-alt__body--name">
                    a New Women`s Classic Shirt
                  </a>
                </div>
                <p className="card-alt__body--text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
                <div className="card-alt__body--price">AUD 200</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBarginSection;

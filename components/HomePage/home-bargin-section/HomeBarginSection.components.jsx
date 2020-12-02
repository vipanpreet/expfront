import Carousel from "react-multi-carousel";

const HomeBarginSection = (props) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <section className="section-bargains">
      <div className="a">
        <div className="subtitle">Good discounts</div>
        <div className="subheading mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sint
          ipsam repudiandae.
        </div>
        <div className="mt-3">
          <a href="#" className="btn btn--cream">
            View All
          </a>
        </div>
      </div>
      <div className="b">
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
    </section>
  );
};

export default HomeBarginSection;

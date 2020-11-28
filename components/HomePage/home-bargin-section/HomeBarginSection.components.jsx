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
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 1024, min: 450 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <section className="section-bargains">
      <div className="container-xlarge mt-6">
        <div className="title mb-5">Arktastic Bragains</div>

        <div className="row row-cols-2">
          <div className="col-lg-3">
            <div className="subtitle">Good discounts</div>
            <div className="subheading mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              sint ipsam repudiandae.
            </div>
            <div className="mt-3">
              <a href="#" className="btn btn--cream">
                View All
              </a>
            </div>
          </div>
          <Carousel
            additionalTransfrom={0}
            swipeable={true}
            draggable={true}
            showDots={false}
            focusOnSelect={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={false}
            autoPlay={false}
            autoPlaySpeed={3000}
            keyBoardControl={false}
            containerclassName="carousel-container"
            removeArrowOnDeviceType={[""]}
            deviceType={props.deviceType}
            dotListclassName="custom-dot-list-style"
            itemclassName="carousel-item-padding-40-px"
            arrows={false}
          >
            <div className="col">
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
            <div className="col">
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
            <div className="col">
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
            <div className="col">
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
            <div className="col">
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
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default HomeBarginSection;

import Link from "next/link";
import Carousel from "react-multi-carousel";

const HomeSection = (props) => {
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
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <section className="section-categories mt-3">
      <div className="category--wrapper">
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
          {/* <div className="row"> */}
          <div className="col">
            <div class="category">
              <div class="category__img">
                <img src="/assets/cat/uppers.jpg" alt="" />
                <Link
                  href={{
                    pathname: "/products/upperwear",
                  }}
                >
                  <a class="category__img--link" href="#">
                    Upperwear
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="category">
              <div class="category__img">
                <img src="/assets/cat/lowers.jpg" alt="" />
                <Link
                  href={{
                    pathname: "/products/lowers",
                  }}
                >
                  <a class="category__img--link" href="#">
                    Lowers
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="category">
              <div class="category__img">
                <img src="/assets/cat/accessorie.jpg" alt="" />
                <Link
                  href={{
                    pathname: "/products/accessories",
                  }}
                >
                  <a class="category__img--link" href="#">
                    Accessories
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="category">
              <div class="category__img">
                <img src="/assets/cat/shoes.jpg" alt="" />
                <Link
                  href={{
                    pathname: "/products/footwear",
                  }}
                >
                  <a class="category__img--link" href="#">
                    Footwear
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default HomeSection;

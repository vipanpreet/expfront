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
      breakpoint: { max: 1024, min: 450 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <section className="section-categories mt-2">
      <div className="container-fluid">
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
              <div className="category">
                <div className="category__img">
                  <img src="/assets/cat/uppers.jpg" alt="" />
                </div>
                <Link href="/products/upperwear">
                  <div className="category__body">
                    <a className="category__body--link" href="#">
                      Upperwear
                    </a>
                    <h1>Visit Collection</h1>
                    <div>
                      <span>T shirt</span>
                      <span>Polos</span>
                      <span>Shirts</span>
                      <span>Hoodies</span> and more..
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="category">
                <div className="category__img">
                  <img src="/assets/cat/accessorie.jpg" alt="" />
                </div>
                <Link href="/products/accessories">
                  <div className="category__body">
                    <a className="category__body--link" href="#">
                      Accessories
                    </a>
                    <h1>Curated Products</h1>
                    <div>
                      <span>Jewellery</span>
                      <span>Wallets</span>
                      <span>Watches</span>
                      <span>Belts</span> and more..
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="category">
                <div className="category__img">
                  <img src="/assets/cat/lowers.jpg" alt="" />
                </div>
                <Link href="/products/lowers">
                  <div className="category__body">
                    <a className="category__body--link" href="#">
                      Lowers
                    </a>
                    <h1>Cute Pants shop</h1>
                    <div>
                      <span>Jeans</span>
                      <span>Pants</span>
                      <span>Shorts</span>
                      <span>Skirts</span> and more..
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="category">
                <div className="category__img">
                  <img src="/assets/cat/accessorie.jpg" alt="" />
                </div>
                <Link href="/products/footwear">
                  <div className="category__body">
                    <a className="category__body--link" href="#">
                      Footwear
                    </a>
                    <h1>Everything you want</h1>
                    <div>
                      <span>Jewellery</span>
                      <span>Wallets</span>
                      <span>Watches</span>
                      <span>Belts</span> and more..
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            {/* </div> */}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;

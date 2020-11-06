import Card from "../../ReusableComponents/single-card/card.components";
import Carousel from "react-multi-carousel";

const HomeRecommendationBox = (props) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div>
      <section className="section-recommendation ">
        <div className="container-xlarge mt-6 ">
          <div className="d-flex justify-space">
            <div className="title mb-2 ml-2">Recommendations</div>
            <div>
              <span className="recommended-prev">
                <ion-icon name="arrow-back-outline"></ion-icon>
              </span>
              <span className="recommended-next">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </span>
            </div>
          </div>

          {/* <div className="row">   Commented buz CSS causing issue */}
          <Carousel
            additionalTransfrom={0}
            swipeable={false}
            draggable={false}
            showDots={false}
            focusOnSelect={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={false}
            autoPlay={false}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["mobile"]}
            deviceType={props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {props.products.slice(0, 10).map((product) => (
              // <div key={product._id} className="col-md-2">  // this is commented buz CSS causing issue
              <div key={product._id} className="col">
                <Card singleProduct={product} />
              </div>
            ))}
          </Carousel>
        </div>
      </section>
    </div>
  );
};

export default HomeRecommendationBox;

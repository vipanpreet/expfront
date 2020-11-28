import Card from "../../ReusableComponents/single-card/card.components";
// import Carousel from "react-multi-carousel";

const HomeTrendingSection = (props) => {
  // const responsive = {
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 3,
  //     slidesToSlide: 1, // optional, default to 1.
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 3,
  //     slidesToSlide: 1, // optional, default to 1.
  //   },
  //   mobile: {
  //     breakpoint: { max: 1024, min: 450 },
  //     items: 1,
  //     slidesToSlide: 1, // optional, default to 1.
  //   },
  // };
  return (
    <section className="section-trending mt">
      <div className="container-xlarge">
        <div className="trend">
          <div className="trend--btn">
            <a href="#" className="btn btn--primary">
              Check All
            </a>
          </div>
          <div className="trend__main">
            <div className="trend__main--img">
              <img src="/assets/sections/nav-upper.jpg" alt="" />
            </div>
            <a href="#" className="trend__main--link text-upper">
              women shirt modern 2020
            </a>
          </div>
          <div className="trend__category">
            <div className="trend__category--btns">
              <a href="#">
                <ion-icon name="chevron-back-outline"></ion-icon>
              </a>
              <a href="#">
                <ion-icon name="chevron-forward-outline"></ion-icon>
              </a>
            </div>
            <div className="trend__category--small">Trending</div>
            <div className="trend__category--name">Upperwear</div>
            <div className="trend__category__other">
              <a href="#" className="trend__category__other--name">
                lowers
              </a>
              <a href="#" className="trend__category__other--name">
                accessories
              </a>
              <a href="#" className="trend__category__other--name">
                footwear
              </a>
              <a href="#" className="trend__category__other--name">
                health
              </a>
            </div>
          </div>

          <div className="trend__extras">
            {/* <Carousel
              additionalTransfrom={0}
              swipeable={false}
              draggable={false}
              showDots={true}
              focusOnSelect={false}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              infinite={false}
              autoPlay={false}
              autoPlaySpeed={3000}
              keyBoardControl={true}
              containerclassName="carousel-container"
              removeArrowOnDeviceType={[""]}
              deviceType={props.deviceType}
              dotListclassName="custom-dot-list-style"
              itemclassName="carousel-item-padding-40-px"
              arrows={true}
            > */}
            <div className="trend__extras--img1">
              <img src="/assets/theme-active.jpg" alt="" />
              <a href="#" className="subheading text-upper">
                women active top
              </a>
            </div>
            <div className="trend__extras--img2">
              <img src="/assets/theme-office.jpg" alt="" />
              <a href="#" className="subheading text-upper">
                women top clean
              </a>
            </div>
            <div className="trend__extras--img3">
              <img src="/assets/theme-party.jpg" alt="" />
              <a href="#" className="subheading text-upper">
                shirt for women{" "}
              </a>
            </div>
            {/* </Carousel> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTrendingSection;

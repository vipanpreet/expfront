import Carousel from "react-multi-carousel";

const HomeHeader = (props) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <Carousel
      additionalTransfrom={0}
      swipeable={true}
      draggable={true}
      showDots={false}
      focusOnSelect={false}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      keyBoardControl={false}
      containerclassName="carousel-container"
      removeArrowOnDeviceType={[""]}
      deviceType={props.deviceType}
      dotListclassName="custom-dot-list-style"
      itemclassName="carousel-item-padding-40-px"
      arrows={true}
    >
      <header className="header">
        <div className="header__container">
          <div className="header--title">New collection</div>
          <div className="header--subtitle">
            Find the best <br />
            clothing for you.
          </div>
          <div className="header--text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
          <div className="mt-3">
            <a href="#" className="btn btn--white">
              Read more
            </a>
          </div>
        </div>
      </header>
      <header className="header">
        <div className="header__container">
          <div className="header--title">New collection</div>
          <div className="header--subtitle">
            jasdfijiojafi <br />
            jadsfiojifasdj.
          </div>
          <div className="header--text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
          <div className="mt-3">
            <a href="#" className="btn btn--white">
              Read more
            </a>
          </div>
        </div>
      </header>
      <header className="header">
        <div className="header__container">
          <div className="header--title">New collection</div>
          <div className="header--subtitle">
            Find the best <br />
            clothing for you.
          </div>
          <div className="header--text">jasidfojisfjio</div>
          <div className="mt-3">
            <a href="#" className="btn btn--white">
              Read more
            </a>
          </div>
        </div>
      </header>
    </Carousel>
  );
};

export default HomeHeader;

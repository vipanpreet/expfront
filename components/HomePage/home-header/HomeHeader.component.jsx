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
      arrows={false}
    >
      <header className="header">
        <div class="header__container">
          <div class="header--title">New collection</div>
          <div class="header--subtitle">Find the best clothing for you.</div>
          <div class="header--text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
            nesciunt omnis aperiam non doloremque qui sint distinctio corporis
            cupiditate odio esse sunt.
          </div>
          <div class="mt-3">
            <a href="#" class="btn btn--dark-simple">
              Read more
            </a>
          </div>
        </div>
      </header>
      <header className="header">
        <div class="header__container">
          <div class="header--title">New collection</div>
          <div class="header--subtitle">Find the best clothing for you.</div>
          <div class="header--text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
            nesciunt omnis aperiam non doloremque qui sint distinctio corporis
            cupiditate odio esse sunt.
          </div>
          <div class="mt-3">
            <a href="#" class="btn btn--dark-simple">
              Read more
            </a>
          </div>
        </div>
      </header>
      <header className="header">
        <div class="header__container">
          <div class="header--title">New collection</div>
          <div class="header--subtitle">Find the best clothing for you.</div>
          <div class="header--text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
            nesciunt omnis aperiam non doloremque qui sint distinctio corporis
            cupiditate odio esse sunt.
          </div>
          <div class="mt-3">
            <a href="#" class="btn btn--dark-simple">
              Read more
            </a>
          </div>
        </div>
      </header>
    </Carousel>
  );
};

export default HomeHeader;

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

SwiperCore.use([Autoplay]);

const LifestyleWomenHeader = (props) => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide>
        <header className="header header-female1">
          <div className="header__container">
            <div className="header--title">prefect vougue</div>
            <div className="header--subtitle text-white text-upper">
              Shoes you will show off
            </div>
            <div className="mt-3">
              <a href="#" className="btn btn--dark-simple">
                Read more
              </a>
            </div>
          </div>
        </header>
      </SwiperSlide>
      <SwiperSlide>
        <header className="header header-female2">
          <div className="header__container">
            <div className="header--title roboto">The style edit</div>
            <div className="header--subtitle text-female text-upper">
              Feel the authentic peace
            </div>
            <div className="header--text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
              nesciunt omnis aperiam non doloremque qui sint distinctio corporis
              cupiditate odio esse sunt.
            </div>
            <div className="mt-3">
              <a href="#" className="btn btn--dark-simple">
                Read more
              </a>
            </div>
          </div>
        </header>
      </SwiperSlide>
      <SwiperSlide>
        <header className="header header-female3">
          <div className="header__container">
            <div className="header--title">New collection</div>
            <div className="header--subtitle">
              Find the best clothing for you.
            </div>
            <div className="header--text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
              nesciunt omnis aperiam non doloremque qui sint distinctio corporis
              cupiditate odio esse sunt.
            </div>
            <div className="mt-3">
              <a href="#" className="btn btn--dark-simple">
                Read more
              </a>
            </div>
          </div>
        </header>
      </SwiperSlide>
    </Swiper>
  );
};

export default LifestyleWomenHeader;

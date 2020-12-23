import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

SwiperCore.use([Autoplay]);

const LifestyleMenHeader = (props) => {
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
        <header className="header header-male1">
          <div className="header__container">
            <div className="header--title">Brillirant collections</div>
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
      <SwiperSlide>
        <header className="header header-male1">
          <div className="header__container">
            <div className="header--title">Brillirant collections 2</div>
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
      <SwiperSlide>
        <header className="header header-male1">
          <div className="header__container">
            <div className="header--title">Brillirant collections</div>
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

export default LifestyleMenHeader;

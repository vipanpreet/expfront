import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
SwiperCore.use([Autoplay]);

const LifestyleWomenHeader = () => {
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
          <div class="header__container">
            <div class="header--title roboto">warm winter</div>
            <div class="header--subtitle">new season fashion</div>
            <div class="mt-3 header--btn">
              <a href="#">Read more</a>
            </div>
          </div>
        </header>
      </SwiperSlide>
      <SwiperSlide>
        <header className="header header-female2">
          <div class="header__container">
            <div class="header--title roboto">luxury fragrance</div>
            <div class="header--subtitle">the cartier fragrance for women</div>
            <div class="mt-3 header--btn">
              <a href="#">Read more</a>
            </div>
          </div>
        </header>
      </SwiperSlide>
      <SwiperSlide>
        <header className="header header-female3">
          <div class="header__container">
            <div class="header--title roboto">omega fasion</div>
            <div class="header--subtitle">now it`s your time</div>
            <div class="mt-3 header--btn">
              <a href="#">Read more</a>
            </div>
          </div>
        </header>
      </SwiperSlide>
    </Swiper>
  );
};

export default LifestyleWomenHeader;

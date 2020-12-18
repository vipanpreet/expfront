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
          <div class="header__container">
            <div class="header--title">prefect vougue</div>
            <div class="header--subtitle text-white text-upper">
              Shoes you will show off
            </div>
            <div class="mt-3">
              <a href="#" class="btn btn--dark-simple">
                Read more
              </a>
            </div>
          </div>
        </header>
      </SwiperSlide>
      <SwiperSlide>
        <header className="header header-female2">
          <div class="header__container">
            <div class="header--title roboto">The style edit</div>
            <div class="header--subtitle text-female text-upper">
              Feel the authentic peace
            </div>
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
      </SwiperSlide>
      <SwiperSlide>
        <header className="header header-female3">
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
      </SwiperSlide>
    </Swiper>
  );
};

export default LifestyleWomenHeader;

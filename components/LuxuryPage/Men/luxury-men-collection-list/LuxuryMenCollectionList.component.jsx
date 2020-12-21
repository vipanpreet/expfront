import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
const LuxuryMenCollectionList = () => {
  return (
    <section className="section-luxury-list">
      <div className="section-luxury-list--banner">
        <div className="img-res">
          <img src="/assets/luxury/section-men-fw2.jpg" alt="" />
        </div>
      </div>
      <div className="section-luxury-list--crousel">
        <Swiper
          spaceBetween={0}
          slidesPerView={3}
          // navigation
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <div className="collist">
              <div className="collist--img">
                <img
                  src="https://res.cloudinary.com/arktastic-pty-ltd/image/upload/v1607110031/customizable-mug_mwxzg9.jpg"
                  alt=""
                />
                <div className="collist--body">
                  <h1>Classic shirt for men</h1>
                  <h2>Gucci</h2>

                  <a href="#" className="btn btn--arrow btn--primary">
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="collist">
              <div className="collist--img">
                <img
                  src="https://res.cloudinary.com/arktastic-pty-ltd/image/upload/v1607110031/customizable-mug_mwxzg9.jpg"
                  alt=""
                />
              </div>
              <div className="collist--body">
                <h1>Classic shirt for men</h1>
                <h2>Gucci</h2>
                <a href="#" className="btn btn--arrow btn--primary">
                  Read more
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="collist">
              <div className="collist--img">
                <img
                  src="https://res.cloudinary.com/arktastic-pty-ltd/image/upload/v1607110031/customizable-mug_mwxzg9.jpg"
                  alt=""
                />
              </div>
              <div className="collist--body">
                <h1>Classic shirt for men</h1>
                <h2>Gucci</h2>
                <a href="#" className="btn btn--arrow btn--primary">
                  Read more
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default LuxuryMenCollectionList;

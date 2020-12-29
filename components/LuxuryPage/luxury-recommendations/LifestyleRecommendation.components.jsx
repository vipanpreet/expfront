import Card from "../../ReusableComponents/single-card/card.components";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

SwiperCore.use([Navigation]);

const LuxuryRecommendation = () => {
  let menu = useRef(null);

  const hideText = () => {
    menu.current.style.opacity = "0";
    menu.current.style.visibility = "hidden";
  };
  const revealText = () => {
    menu.current.style.opacity = "1";
    menu.current.style.visibility = "visible";
  };
  return (
    <section className="section-luxury-recommendation">
      <div className="container-xlarge mt-6">
        <div className="section-luxury-recommendation--menu" ref={menu}>
          <div className="subtitle __300 text-white">
            The <br /> Trending <br /> Products
          </div>
          <div className="title mt-4 text-white">
            must check popular luxury products over the website
          </div>
          <div className="mt-4 text-white">
            <a href="#" className="btn btn--white btn--arrow">
              Show all
            </a>
          </div>
        </div>
        <Swiper
          spaceBetween={0}
          slidesPerView={4}
          centeredSlides={true}
          onSlideChange={(e) => (e.activeIndex < 1 ? revealText() : hideText())}
          // navigation
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          <SwiperSlide>
            <div className="col">
              <div className="card male">
                <div className="card--inner">
                  <div className="card__img">
                    <img
                      src="https://res.cloudinary.com/arktastic-pty-ltd/image/upload/v1607110031/customizable-mug_mwxzg9.jpg"
                      alt=""
                    />
                    <div className="card__img--type">L</div>
                  </div>
                  <div className="card__body">
                    <div className="card__body--brand">Gucci</div>
                    <div className="card__body--name">
                      Classic shirt for men
                    </div>
                    <div className="card__hover">
                      <div className="card__hover--wrapper">
                        <div className="card__hover--desc">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Temporibus ullam libero eligendi tempora, nulla
                          excepturi consectetur.
                        </div>
                        <div className="card__hover__btns">
                          <a href="#" className="card__hover__btns--wishlist">
                            <ion-icon name="heart-outline"></ion-icon>
                          </a>
                          <a
                            href="#"
                            className="card__hover__btns--showproduct"
                          >
                            View
                          </a>
                          <a href="" className="card__hover__btns--options">
                            <ion-icon name="options-outline"></ion-icon>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="card__body--price">$399</div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="col">
              <div className="card male">
                <div className="card--inner">
                  <div className="card__img">
                    <img
                      src="https://res.cloudinary.com/arktastic-pty-ltd/image/upload/v1607110031/customizable-mug_mwxzg9.jpg"
                      alt=""
                    />
                    <div className="card__img--type">L</div>
                  </div>
                  <div className="card__body">
                    <div className="card__body--brand">Gucci</div>
                    <div className="card__body--name">
                      Classic shirt for men
                    </div>
                    <div className="card__hover">
                      <div className="card__hover--wrapper">
                        <div className="card__hover--desc">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Temporibus ullam libero eligendi tempora, nulla
                          excepturi consectetur.
                        </div>
                        <div className="card__hover__btns">
                          <a href="#" className="card__hover__btns--wishlist">
                            <ion-icon name="heart-outline"></ion-icon>
                          </a>
                          <a
                            href="#"
                            className="card__hover__btns--showproduct"
                          >
                            View
                          </a>
                          <a href="" className="card__hover__btns--options">
                            <ion-icon name="options-outline"></ion-icon>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="card__body--price">$399</div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="col">
              <div className="card male">
                <div className="card--inner">
                  <div className="card__img">
                    <img
                      src="https://res.cloudinary.com/arktastic-pty-ltd/image/upload/v1607110031/customizable-mug_mwxzg9.jpg"
                      alt=""
                    />
                    <div className="card__img--type">L</div>
                  </div>
                  <div className="card__body">
                    <div className="card__body--brand">Gucci</div>
                    <div className="card__body--name">
                      Classic shirt for men
                    </div>
                    <div className="card__hover">
                      <div className="card__hover--wrapper">
                        <div className="card__hover--desc">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Temporibus ullam libero eligendi tempora, nulla
                          excepturi consectetur.
                        </div>
                        <div className="card__hover__btns">
                          <a href="#" className="card__hover__btns--wishlist">
                            <ion-icon name="heart-outline"></ion-icon>
                          </a>
                          <a
                            href="#"
                            className="card__hover__btns--showproduct"
                          >
                            View
                          </a>
                          <a href="" className="card__hover__btns--options">
                            <ion-icon name="options-outline"></ion-icon>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="card__body--price">$399</div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="col">
              <div className="card male">
                <div className="card--inner">
                  <div className="card__img">
                    <img
                      src="https://res.cloudinary.com/arktastic-pty-ltd/image/upload/v1607110031/customizable-mug_mwxzg9.jpg"
                      alt=""
                    />
                    <div className="card__img--type">L</div>
                  </div>
                  <div className="card__body">
                    <div className="card__body--brand">Gucci</div>
                    <div className="card__body--name">
                      Classic shirt for men
                    </div>
                    <div className="card__hover">
                      <div className="card__hover--wrapper">
                        <div className="card__hover--desc">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Temporibus ullam libero eligendi tempora, nulla
                          excepturi consectetur.
                        </div>
                        <div className="card__hover__btns">
                          <a href="#" className="card__hover__btns--wishlist">
                            <ion-icon name="heart-outline"></ion-icon>
                          </a>
                          <a
                            href="#"
                            className="card__hover__btns--showproduct"
                          >
                            View
                          </a>
                          <a href="" className="card__hover__btns--options">
                            <ion-icon name="options-outline"></ion-icon>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="card__body--price">$399</div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default LuxuryRecommendation;

import Card from "../../ReusableComponents/single-card/card.components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

SwiperCore.use([Navigation]);

const LifestyleRecommendationBox = (props) => {
  return (
    <section className="section-recommendation">
      <div className="container-large mt-6">
        <div className="pl-2  title mb-4">Recommendations</div>

        <Swiper
          spaceBetween={0}
          slidesPerView={4}
          // navigation
          breakpoints={{
            0: {
              slidesPerView: 1,
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

export default LifestyleRecommendationBox;

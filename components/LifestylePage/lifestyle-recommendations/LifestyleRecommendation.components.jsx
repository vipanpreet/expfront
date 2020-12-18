import Card from "../../ReusableComponents/single-card/card.components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

SwiperCore.use([Navigation]);

const LifestyleRecommendationBox = (props) => {
  return (
    <section class="section-recommendation">
      <div class="container-large mt-6">
        <div class="pl-2  title mb-4">Recommendations</div>

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
            <div class="col">
              <div class="card male">
                <div class="card--inner">
                  <div class="card__img">
                    <img
                      src="https://res.cloudinary.com/arktastic-pty-ltd/image/upload/v1607110031/customizable-mug_mwxzg9.jpg"
                      alt=""
                    />
                    <div class="card__img--type">L</div>
                  </div>
                  <div class="card__body">
                    <div class="card__body--brand">Gucci</div>
                    <div class="card__body--name">Classic shirt for men</div>
                    <div class="card__hover">
                      <div class="card__hover--wrapper">
                        <div class="card__hover--desc">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Temporibus ullam libero eligendi tempora, nulla
                          excepturi consectetur.
                        </div>
                        <div class="card__hover__btns">
                          <a href="#" class="card__hover__btns--wishlist">
                            <ion-icon name="heart-outline"></ion-icon>
                          </a>
                          <a href="#" class="card__hover__btns--showproduct">
                            View
                          </a>
                          <a href="" class="card__hover__btns--options">
                            <ion-icon name="options-outline"></ion-icon>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="card__body--price">$399</div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div class="col">
              <div class="card male">
                <div class="card--inner">
                  <div class="card__img">
                    <img
                      src="https://res.cloudinary.com/arktastic-pty-ltd/image/upload/v1607110031/customizable-mug_mwxzg9.jpg"
                      alt=""
                    />
                    <div class="card__img--type">L</div>
                  </div>
                  <div class="card__body">
                    <div class="card__body--brand">Gucci</div>
                    <div class="card__body--name">Classic shirt for men</div>
                    <div class="card__hover">
                      <div class="card__hover--wrapper">
                        <div class="card__hover--desc">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Temporibus ullam libero eligendi tempora, nulla
                          excepturi consectetur.
                        </div>
                        <div class="card__hover__btns">
                          <a href="#" class="card__hover__btns--wishlist">
                            <ion-icon name="heart-outline"></ion-icon>
                          </a>
                          <a href="#" class="card__hover__btns--showproduct">
                            View
                          </a>
                          <a href="" class="card__hover__btns--options">
                            <ion-icon name="options-outline"></ion-icon>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="card__body--price">$399</div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="col">
              <div class="card male">
                <div class="card--inner">
                  <div class="card__img">
                    <img
                      src="https://res.cloudinary.com/arktastic-pty-ltd/image/upload/v1607110031/customizable-mug_mwxzg9.jpg"
                      alt=""
                    />
                    <div class="card__img--type">L</div>
                  </div>
                  <div class="card__body">
                    <div class="card__body--brand">Gucci</div>
                    <div class="card__body--name">Classic shirt for men</div>
                    <div class="card__hover">
                      <div class="card__hover--wrapper">
                        <div class="card__hover--desc">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Temporibus ullam libero eligendi tempora, nulla
                          excepturi consectetur.
                        </div>
                        <div class="card__hover__btns">
                          <a href="#" class="card__hover__btns--wishlist">
                            <ion-icon name="heart-outline"></ion-icon>
                          </a>
                          <a href="#" class="card__hover__btns--showproduct">
                            View
                          </a>
                          <a href="" class="card__hover__btns--options">
                            <ion-icon name="options-outline"></ion-icon>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="card__body--price">$399</div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="col">
              <div class="card male">
                <div class="card--inner">
                  <div class="card__img">
                    <img
                      src="https://res.cloudinary.com/arktastic-pty-ltd/image/upload/v1607110031/customizable-mug_mwxzg9.jpg"
                      alt=""
                    />
                    <div class="card__img--type">L</div>
                  </div>
                  <div class="card__body">
                    <div class="card__body--brand">Gucci</div>
                    <div class="card__body--name">Classic shirt for men</div>
                    <div class="card__hover">
                      <div class="card__hover--wrapper">
                        <div class="card__hover--desc">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Temporibus ullam libero eligendi tempora, nulla
                          excepturi consectetur.
                        </div>
                        <div class="card__hover__btns">
                          <a href="#" class="card__hover__btns--wishlist">
                            <ion-icon name="heart-outline"></ion-icon>
                          </a>
                          <a href="#" class="card__hover__btns--showproduct">
                            View
                          </a>
                          <a href="" class="card__hover__btns--options">
                            <ion-icon name="options-outline"></ion-icon>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="card__body--price">$399</div>
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

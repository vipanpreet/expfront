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
                    <img src="/assets/products/shirt1.jpg" alt="" />
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
                      src="/assets/products/Striped_Funnelneck_Pullover_1_edb4c6e5-a27d-44a7-a4e1-80e167eabb7a_600x.jpg"
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
                      src="/assets/products/Striped_Cap-Sleeve_Polo_3_8943040d-947f-4bd2-9c56-41b7a6bdb76a_600x.jpg"
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
                    <img src="/assets/products/shirt3.jpg" alt="" />
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

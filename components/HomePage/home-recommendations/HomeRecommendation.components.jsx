import Card from "../../ReusableComponents/single-card/card.components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

// install Swiper components
SwiperCore.use([Navigation]);

const HomeRecommendationBox = (props) => {
  // const responsive = {
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 5,
  //     slidesToSlide: 1, // optional, default to 1.
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 3,
  //     slidesToSlide: 1, // optional, default to 1.
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 2,
  //     slidesToSlide: 1, // optional, default to 1.
  //   },
  // };
  //   const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  //     const {
  //       carouselState: { currentSlide },
  //     } = rest;
  //     return (
  //       <div
  //         className="carousel-button-group"
  //         style={{ position: "absolute", top: 0, right: 95 }}
  //       >
  //         <span className="recommended-prev">
  //           <ion-icon
  //             name="arrow-back-outline"
  //             className={currentSlide === 0 ? "disable" : ""}
  //             onClick={() => previous()}
  //           ></ion-icon>
  //         </span>
  //         <span className="recommended-next" onClick={() => next()}>
  //           <ion-icon name="arrow-forward-outline"></ion-icon>
  //         </span>
  //       </div>
  //     );
  //   };
  //   return (
  //     <div>
  //       <section
  //         className="section-recommendation"
  //         style={{ position: "relative" }}
  //       >
  //         <div className="container-xlarge mt-6 ">
  //           <div className="title mb-2 ml-2">Recommendations</div>
  //           {/* <div className="row">   Commented buz CSS causing issue */}
  //           <Carousel
  //             additionalTransfrom={0}
  //             swipeable={true}
  //             draggable={true}
  //             showDots={false}
  //             focusOnSelect={false}
  //             responsive={responsive}
  //             ssr={true} // means to render carousel on server-side.
  //             infinite={false}
  //             autoPlay={false}
  //             autoPlaySpeed={3000}
  //             keyBoardControl={true}
  //             containerclassName="section-recommendation"
  //             removeArrowOnDeviceType={[""]}
  //             deviceType={props.deviceType}
  //             dotListclassName="custom-dot-list-style"
  //             itemclassName="carousel-item-padding-40-px"
  //             arrows={false}
  //             renderButtonGroupOutside={true}
  //             customButtonGroup={<ButtonGroup />}
  //           >
  //             {props.products.slice(0, 10).map((product) => (
  //               // <div key={product._id} className="col-md-2">  // this is commented buz CSS causing issue
  //               <div key={product._id} className="col">
  //                 <Card singleProduct={product} />
  //               </div>
  //             ))}
  //           </Carousel>
  //         </div>
  //       </section>
  //     </div>
  //   );
  return (
    <section class="section-recommendation">
      <div class="container-xlarge mt-6">
        <div class="title text-center">Recommendations</div>
        <div class="para text-center mb-5 mt-2 __400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
          dicta! Numquam architecto aspernatur.
        </div>

        {/* <div class="row row-cols-2"> */}
        <Swiper spaceBetween={50} slidesPerView={3} navigation>
          <SwiperSlide>
            <div class="col-lg-10">
              <div class="card">
                <div class="card--inner">
                  <div class="card__img">
                    <img src="assets/products/shirt1.jpg" alt="" />
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
            <div class="col-lg-10">
              <div class="card">
                <div class="card--inner">
                  <div class="card__img">
                    <img
                      src="assets/products/Striped_Funnelneck_Pullover_1_edb4c6e5-a27d-44a7-a4e1-80e167eabb7a_600x.jpg"
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
            <div class="col-lg-10">
              <div class="card">
                <div class="card--inner">
                  <div class="card__img">
                    <img
                      src="assets/products/Striped_Cap-Sleeve_Polo_3_8943040d-947f-4bd2-9c56-41b7a6bdb76a_600x.jpg"
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
            <div class="col-lg-10">
              <div class="card">
                <div class="card--inner">
                  <div class="card__img">
                    <img src="assets/products/shirt3.jpg" alt="" />
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
        {/* </div> */}
      </div>
    </section>
  );
};

export default HomeRecommendationBox;

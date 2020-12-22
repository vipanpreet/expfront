import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

SwiperCore.use([Navigation]);

const LifestyleSection = (props) => {
  const lifestyleState = useSelector((state) => state.lifestyleState);
  const { storeType, department } = lifestyleState;

  return (
    <section className="section-categories">
      <div className="contianer-fluid">
        <div class="d-flex justify-content-between">
          <div class="ml-2 title mb-4">categories</div>
          <div class="mb-4">
            <Link href="/categories">
              <a href="#" class="btn btn--primary btn--arrow">
                <span>See All</span>
              </a>
            </Link>
          </div>
        </div>
        <div className="category--wrapper mb-9">
          <Swiper
            spaceBetween={0}
            slidesPerView={4}
            navigation
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
              <div className="col" style={{ cursor: "pointer" }}>
                <Link
                  href={{
                    pathname: "/products",
                    query: {
                      category: "upperwear",
                      type: storeType,
                      department: department,
                    },
                  }}
                >
                  <div class="category">
                    <div class="category__img">
                      <img src="/assets/cat/uppers.jpg" alt="" />

                      <a class="category__img--link" href="#">
                        Upperwear
                      </a>
                    </div>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col" style={{ cursor: "pointer" }}>
                <Link
                  href={{
                    pathname: "/products",
                    query: {
                      category: "lowers",
                      type: storeType,
                      department: department,
                    },
                  }}
                >
                  <div class="category">
                    <div class="category__img">
                      <img src="/assets/cat/lowers.jpg" alt="" />

                      <a class="category__img--link" href="#">
                        Lowers
                      </a>
                    </div>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col" style={{ cursor: "pointer" }}>
                <Link
                  href={{
                    pathname: "/products",
                    query: {
                      category: "accessories",
                      type: storeType,
                      department: department,
                    },
                  }}
                >
                  <div class="category">
                    <div class="category__img">
                      <img src="/assets/cat/accessorie.jpg" alt="" />

                      <a class="category__img--link" href="#">
                        Accessories
                      </a>
                    </div>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col" style={{ cursor: "pointer" }}>
                <Link
                  href={{
                    pathname: "/products",
                    query: {
                      category: "footwear",
                      type: storeType,
                      department: department,
                    },
                  }}
                >
                  <div class="category">
                    <div class="category__img">
                      <img src="/assets/cat/shoes.jpg" alt="" />

                      <a class="category__img--link" href="#">
                        Footwear
                      </a>
                    </div>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default LifestyleSection;

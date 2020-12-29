import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

SwiperCore.use([Navigation]);

const LifestyleSection = (props) => {
  const lifestyleState = useSelector((state) => state.storeSelectState);
  const { storeType, department } = lifestyleState;
  console.log(lifestyleState);

  return (
    <section className="section-categories">
      <div className="container-large">
        <div className="d-flex justify-content-between">
          <div className="title mb-4">categories</div>
          <div className="mb-2">
            <Link href="/categories">
              <a href="#" className="btn btn--primary btn--arrow">
                <span>See All</span>
              </a>
            </Link>
          </div>
        </div>
        <div className="category--wrapper mb-4">
          <Swiper
            style={{ padding: "50px 0" }}
            spaceBetween={0}
            slidesPerView={6}
            breakpoints={{
              0: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
              1360: {
                slidesPerView: 6,
              },
            }}
          >
            <SwiperSlide>
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
                <div class="category-item">
                  <div class="category-icon">
                    <img src="/assets/cat/upperwear.svg" alt="" />
                  </div>
                  <div class="category-name">upperwear</div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
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
                <div class="category-item">
                  <div class="category-icon">
                    <img src="/assets/cat/lowers.svg" alt="" />
                  </div>
                  <div class="category-name">lowers</div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
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
                <div class="category-item">
                  <div class="category-icon">
                    <img src="/assets/cat/footwear.svg" alt="" />
                  </div>
                  <div class="category-name">footwear</div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
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
                <div class="category-item">
                  <div class="category-icon">
                    <img src="/assets/cat/accessories.svg" alt="" />
                  </div>
                  <div class="category-name">accessories</div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link
                href={{
                  pathname: "/products",
                  query: {
                    category: "beauty",
                    type: storeType,
                    department: department,
                  },
                }}
              >
                <div class="category-item">
                  <div class="category-icon">
                    <img src="/assets/cat/beauty.svg" alt="" />
                  </div>
                  <div class="category-name">beauty</div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link
                href={{
                  pathname: "/products",
                  query: {
                    category: "sustainable",
                    type: storeType,
                    department: department,
                  },
                }}
              >
                <div class="category-item">
                  <div class="category-icon">
                    <img src="/assets/cat/sustainable.svg" alt="" />
                  </div>
                  <div class="category-name">sustainable</div>
                </div>
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default LifestyleSection;
